"use client";

import React from "react";
import StoryCarousel from "@/components/StoryCarousel";
import { lanternTreePages } from "@/utils/lanternTreeContent";

const LanternTree: React.FC = () => {
  return (
    <StoryCarousel 
      pages={lanternTreePages} 
      title="The Lantern Tree" 
    />
  );
};

export default LanternTree;