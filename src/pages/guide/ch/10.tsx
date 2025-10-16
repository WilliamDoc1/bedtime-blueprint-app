"use client";

import React from "react";
import { chapterDetails } from "@/utils/guideContent";

const Chapter10: React.FC = () => {
  const chapter = chapterDetails[9];
  return (
    <div className="container mx-auto p-4 bg-lavender-50 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-gold-500">{chapter.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg leading-relaxed text-gray-800">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary">Advanced Dream Exploration</h2>
          {chapter.content}
          <p>Once you've mastered the basics, advanced dream exploration techniques can deepen your connection to your inner world. This includes practices like active imagination, where you consciously interact with dream figures or settings while awake, to further understand their meaning.</p>
        </div>
        <div className="space-y-4">
          <p>Exploring dreams in a group setting can also provide diverse perspectives and insights you might not discover alone. Creative expression, such as drawing, painting, or writing poetry inspired by your dreams, can unlock new layers of understanding.</p>
          <p>These advanced methods encourage a more dynamic and interactive relationship with your dreams, transforming them into a continuous source of wisdom.</p>
        </div>
      </div>
    </div>
  );
};

export default Chapter10;