"use client";

import React from "react";
import { chapterDetails } from "@/utils/guideContent";

const Chapter6: React.FC = () => {
  const chapter = chapterDetails[5];
  return (
    <div className="container mx-auto p-4 bg-lavender-50 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-gold-500">{chapter.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg leading-relaxed text-gray-800">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-3 text-gray-900">Lucid Dreaming Basics</h2>
          {chapter.content}
          <p>Lucid dreaming, the experience of knowing you are dreaming while in a dream, opens up incredible possibilities for exploration and self-discovery. The first step is to develop a habit of performing "reality checks" throughout your day.</p>
        </div>
        <div className="space-y-4">
          <p>Common reality checks include trying to push your finger through your palm, checking a clock twice (it often changes in dreams), or questioning if you are dreaming. When these checks become habitual, you might perform them in a dream, triggering lucidity.</p>
          <p>Keep a dream journal, as increased dream recall is strongly linked to the ability to have lucid dreams. Patience and persistence are key to mastering this fascinating skill.</p>
        </div>
      </div>
    </div>
  );
};

export default Chapter6;