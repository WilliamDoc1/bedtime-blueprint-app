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
    }
  }, [selectedIndex, pages]);


  const currentStoryPage = pages[selectedIndex];

  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">{title}</h1>

      <div className="relative bg-white shadow-2xl rounded-xl overflow-hidden border-4 border-gold-400">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {pages.map((page, index) => (
              <div className="embla__slide flex-[0_0_100%] min-w-0" key={index}>
                <div className="grid grid-cols-1 md:grid-cols-2 h-full min-h-[500px]">
                  {/* Left Side: Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={page.image}
                      alt={`Story page ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Right Side: Text and Controls */}
                  <div className="p-6 md:p-10 flex flex-col justify-between bg-gray-50/50">
                    <div className="text-lg leading-relaxed text-gray-800 font-serif">
                      {/* Simple text rendering. For complex formatting, this would need markdown or rich text parsing. */}
                      {page.text.split('\n').map((paragraph, i) => (
                        <p key={i} className={cn("mb-4", i === 0 && page.text.length > 50 && "first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:text-lavender-500")}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    
                    {/* Controls and Page Number */}
                    <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <audio ref={audioRef} onEnded={handleAudioEnded} src={page.audio} className="hidden" />
                        <Button
                          onClick={isPlaying ? handleAudioPause : handleAudioPlay}
                          variant="secondary"
                          size="sm"
                          className="bg-lavender-400 hover:bg-lavender-500 text-white"
                        >
                          {isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                          {isPlaying ? "Pause" : "Listen"}
                        </Button>
                      </div>
                      <p className="text-sm text-gray-600">Page {index + 1} of {pages.length}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons (Outside the slide content) */}
        <Button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          variant="outline"
          size="icon"
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white border-gold-400 border-2 z-20 shadow-lg"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <Button
          onClick={scrollNext}
          disabled={!canScrollNext}
          variant="outline"
          size="icon"
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white border-gold-400 border-2 z-20 shadow-lg"
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default StoryCarousel;