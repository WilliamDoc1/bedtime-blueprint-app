"use client";

import React from "react";
import StoryCarousel from "@/components/StoryCarousel";
import { CLOUD_PAINTER_STORY_PAGES } from "@/utils/cloudPainterContent";

const CloudPainter: React.FC = () => {
  return (
    <StoryCarousel 
      pages={CLOUD_PAINTER_STORY_PAGES} 
      title="The Cloud Painter" 
    />
  );
};

export default CloudPainter;