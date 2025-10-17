"use client";

import React from "react";
import StoryCarousel from "@/components/StoryCarousel";
import { MILO_STORY_PAGES } from "@/utils/miloStoryContent";

const Milo: React.FC = () => {
  return (
    <StoryCarousel 
      pages={MILO_STORY_PAGES} 
      title="Milo and the Moon Garden" 
    />
  );
};

export default Milo;