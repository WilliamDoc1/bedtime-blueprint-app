"use client";

import React from 'react';
import StoryCarousel from "@/components/StoryCarousel";
import { LUNA_STORY_PAGES_11 } from "@/utils/luna11PageContent";

const Luna: React.FC = () => {
  return (
    <StoryCarousel 
      pages={LUNA_STORY_PAGES_11} 
      title="Luna and the Star Garden" 
    />
  );
};

export default Luna;