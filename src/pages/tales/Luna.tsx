"use client";

import React from 'react';
import StoryCarousel from "@/components/StoryCarousel";
import { lunaStoryPages } from "@/utils/lunaStoryContent";

const Luna: React.FC = () => {
  return (
    <StoryCarousel 
      pages={lunaStoryPages} 
      title="Luna and the Lost Star" 
    />
  );
};

export default Luna;