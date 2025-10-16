"use client";

import React from "react";
import { chapterDetails } from "@/utils/guideContent";

const Chapter3: React.FC = () => {
  const chapter = chapterDetails[2];
  return (
    <div className="container mx-auto p-4 bg-lavender-50 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-gold-500">{chapter.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg leading-relaxed text-gray-800">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary">Techniques for Dream Recall</h2>
          {chapter.content}
          <p>Improving dream recall is a skill that develops with practice. One effective technique is to tell yourself before sleep that you intend to remember your dreams. This simple affirmation can prime your mind to retain dream content.</p>
        </div>
        <div className="space-y-4">
          <p>Upon waking, resist the urge to move or open your eyes immediately. Linger in that hypnopompic state, allowing dream images and feelings to resurface. Write down everything you remember, no matter how trivial it seems, as soon as possible.</p>
          <p>Even if you only recall a feeling or a single image, record it. These small fragments can often trigger more detailed memories later.</p>
        </div>
      </div>
    </div>
  );
};

export default Chapter3;