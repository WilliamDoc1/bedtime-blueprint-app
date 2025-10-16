"use client";

import React from "react";
import { chapterDetails } from "@/utils/guideContent";

const Chapter4: React.FC = () => {
  const chapter = chapterDetails[3];
  return (
    <div className="container mx-auto p-4 bg-lavender-50 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-gold-500">{chapter.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg leading-relaxed text-gray-800">
        <div className="space-y-4">
          {chapter.content}
          <p>Dream symbols are the language of the subconscious. While some symbols have universal associations, their true meaning is deeply personal. A house in a dream, for instance, might represent your self, but its specific appearance (old, new, messy, clean) will hold unique significance for you.</p>
        </div>
        <div className="space-y-4">
          <p>To understand your symbols, reflect on your current life situation, emotions, and recent events. Ask yourself: "What does this symbol mean to *me*?" Pay attention to how the symbol makes you feel within the dream and upon waking.</p>
          <p>Building your own dream dictionary based on your personal experiences will be far more insightful than relying solely on generic interpretations.</p>
        </div>
      </div>
    </div>
  );
};

export default Chapter4;