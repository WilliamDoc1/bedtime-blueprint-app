"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";
import StoryPageLayout from "./StoryPageLayout"; // Import the new layout component

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
    // Automatically scroll to the next page if audio ends and it's not the last page
    if (emblaApi && selectedIndex < pages.length - 1) {
      scrollNext();
    }
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


  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">{title}</h1>

      <div className="relative bg-white shadow-2xl rounded-xl overflow-hidden border-[6px] border-gold-400">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {pages.map((page, index) => (
              <div className="embla__slide flex-[0_0_100%] min-w-0" key={index}>
                <StoryPageLayout
                  page={page}
                  pageIndex={index}
                  totalPages={pages.length}
                  isPlaying={isPlaying}
                  handleAudioPlay={handleAudioPlay}
                  handleAudioPause={handleAudioPause}
                  audioRef={audioRef}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons (Positioned relative to the book container) */}
        {/* Previous Button */}
        <Button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          variant="outline"
          size="icon"
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white border-gold-400 border-2 z-20 shadow-lg h-10 w-10"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        
        {/* Next Button (Styled to be prominent, matching the request for a fixed arrow) */}
        <Button
          onClick={scrollNext}
          disabled={!canScrollNext}
          variant="default"
          size="icon"
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-gold-400 hover:bg-gold-500 text-white z-20 shadow-lg h-12 w-12 rounded-full"
        >
          <ArrowRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default StoryCarousel;