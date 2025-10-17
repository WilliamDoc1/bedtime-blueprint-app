"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";

interface StoryPage {
  image: string;
  audio: string;
  text: string;
}

interface StoryCarouselProps {
  pages: StoryPage[];
  title: string;
}

const StoryCarousel: React.FC<StoryCarouselProps> = ({ pages, title }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioEnded, setAudioEnded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const updateCarouselState = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, []);

  const stopAndResetAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setAudioEnded(false);
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      stopAndResetAudio();
    }
  }, [emblaApi, stopAndResetAudio]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      stopAndResetAudio();
    }
  }, [emblaApi, stopAndResetAudio]);

  const handleAudioPlay = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.warn("Audio playback failed:", error);
      });
      setIsPlaying(true);
      setAudioEnded(false);
    }
  };

  const handleAudioPause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
    setAudioEnded(true);
  };

  // Effect to handle carousel state updates and manual navigation audio reset
  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", updateCarouselState);
    emblaApi.on("reInit", updateCarouselState);
    updateCarouselState(emblaApi);

    const handleSelect = () => {
      stopAndResetAudio();
    };
    
    emblaApi.on("select", handleSelect);
    
    return () => {
      emblaApi.off("select", handleSelect);
    }

  }, [emblaApi, updateCarouselState, stopAndResetAudio]);

  // Effect to handle audio source loading when selectedIndex changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = pages[selectedIndex].audio;
      audioRef.current.load();
      audioRef.current.onended = handleAudioEnded;
      // Do not autoplay, wait for user interaction
      setIsPlaying(false);
      setAudioEnded(false);
    }
  }, [selectedIndex, pages]);


  const currentStoryPage = pages[selectedIndex];

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-sidebar-primary-foreground">{title}</h1>

      <div className="relative">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {pages.map((page, index) => (
              <div className="embla__slide flex-[0_0_100%] min-w-0" key={index}>
                <img
                  src={page.image}
                  alt={`Story page ${index + 1}`}
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>

        <Button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          variant="outline"
          size="icon"
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white border-gold-400 border-2"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <Button
          onClick={scrollNext}
          disabled={!canScrollNext}
          variant="outline"
          size="icon"
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white border-gold-400 border-2"
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="mt-6 p-4 bg-lavender-50 rounded-lg shadow-inner border border-lavender-200">
        <div className="flex items-center justify-center mb-4">
          <audio ref={audioRef} controls className="w-full max-w-md hidden">
            Your browser does not support the audio element.
          </audio>
          <Button
            onClick={isPlaying ? handleAudioPause : handleAudioPlay}
            variant="secondary"
            className="bg-lavender-400 hover:bg-lavender-500 text-white"
          >
            {isPlaying ? <Pause className="h-5 w-5 mr-2" /> : <Play className="h-5 w-5 mr-2" />}
            {isPlaying ? "Pause Audio" : "Play Audio"}
          </Button>
        </div>
        <p className="text-lg leading-relaxed text-gray-800 text-center">
          {currentStoryPage.text}
        </p>
        <p className="text-sm text-gray-600 text-center mt-4">Page {selectedIndex + 1} of {pages.length}</p>
      </div>
    </div>
  );
};

export default StoryCarousel;