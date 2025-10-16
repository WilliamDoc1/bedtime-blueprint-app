"use client";

import React from "react";
import { chapterDetails } from "@/utils/guideContent";

const Chapter1: React.FC = () => {
  const chapter = chapterDetails[0];
  return (
    <div className="container mx-auto p-4 bg-lavender-50 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-gold-500">{chapter.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg leading-relaxed text-gray-800">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary">Introduction to Dream Journaling</h2>
          {chapter.content}
          <p>Dream journaling is a powerful tool for self-discovery. By regularly recording your dreams, you can uncover hidden insights, process emotions, and tap into your subconscious creativity. It's a journey that begins with a simple commitment to remember and record.</p>
        </div>
        <div className="space-y-4">
          <p>Starting your dream journal doesn't require special skills, just a pen, paper, and an open mind. Place your journal by your bed and make it the first thing you interact with upon waking. Even fragments of dreams can provide valuable clues.</p>
          <p>This practice can lead to profound personal growth, helping you understand your fears, desires, and aspirations on a deeper level. Embrace the mystery and enjoy the process of exploring your inner world.</p>
        </div>
      </div>
    </div>
  );
};

export default Chapter1;