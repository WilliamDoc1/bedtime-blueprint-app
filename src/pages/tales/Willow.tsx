"use client";

import React from "react";
import StoryCarousel from "@/components/StoryCarousel";
import { WILLOW_STORY_PAGES } from "@/utils/willowStoryContent";

const Willow: React.FC = () => {
  return (
    <StoryCarousel 
      pages={WILLOW_STORY_PAGES} 
      title="Willow and the Sleepy Sea" 
    />
  );
};

export default Willow;