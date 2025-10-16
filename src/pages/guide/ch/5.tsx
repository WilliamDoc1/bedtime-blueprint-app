"use client";

import React from "react";
import { chapterDetails } from "@/utils/guideContent";

const Chapter5: React.FC = () => {
  const chapter = chapterDetails[4];
  return (
    <div className="container mx-auto p-4 bg-lavender-50 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-gold-500">{chapter.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg leading-relaxed text-gray-800">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-3 text-gray-900">Interpreting Your Nightly Narratives</h2>
          {chapter.content}
          <p>Interpreting your dreams involves more than just looking up symbols. It's about understanding the narrative, the emotional tone, and the characters involved. Start by summarizing the dream in a few sentences, then identify the main conflict or theme.</p>
        </div>
        <div className="space-y-4">
          <p>Consider the feelings you experienced in the dream and how they relate to your waking life. Who were the characters, and what roles did they play? Even seemingly minor details can hold significant meaning. Look for recurring patterns across multiple dreams.</p>
          <p>The goal is not to find a single "correct" interpretation, but to gain insights that resonate with your current experiences and challenges.</p>
        </div>
      </div>
    </div>
  );
};

export default Chapter5;