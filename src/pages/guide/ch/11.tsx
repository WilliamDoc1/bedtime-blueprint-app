"use client";

import React from "react";
import { chapterDetails } from "@/utils/guideContent";

const Chapter11: React.FC = () => {
  const chapter = chapterDetails[10];
  return (
    <div className="container mx-auto p-4 bg-lavender-50 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-gold-500">{chapter.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg leading-relaxed text-gray-800">
        <div className="space-y-4">
          {chapter.content}
          <p>Maintaining a consistent dream practice is key to unlocking its full potential. Life can get busy, but even a few minutes each morning dedicated to dream recall and journaling can make a significant difference. Don't get discouraged by periods of low recall; it's a natural part of the process.</p>
        </div>
        <div className="space-y-4">
          <p>Revisit old dream entries to look for patterns or recurring themes that might have new meaning. Share your dream experiences with trusted friends or a dream group to gain fresh perspectives. Integrate the insights you gain from your dreams into your daily life and decision-making.</p>
          <p>Your dream journal is a living document of your inner journey, a continuous dialogue with your subconscious mind that evolves over time.</p>
        </div>
      </div>
    </div>
  );
};

export default Chapter11;