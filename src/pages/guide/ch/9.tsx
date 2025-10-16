"use client";

import React from "react";
import { chapterDetails } from "@/utils/guideContent";

const Chapter9: React.FC = () => {
  const chapter = chapterDetails[8];
  return (
    <div className="container mx-auto p-4 bg-lavender-50 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-gold-500">{chapter.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg leading-relaxed text-gray-800">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary">Dreams and Personal Growth</h2>
          {chapter.content}
          <p>Dreams are not just random firings of the brain; they are rich tapestries woven from our experiences, emotions, and aspirations. Engaging with your dreams can significantly contribute to your personal growth by offering unique perspectives on your challenges and strengths.</p>
        </div>
        <div className="space-y-4">
          <p>Through dream work, you can gain clarity on difficult decisions, process unresolved grief or trauma, and unlock creative potential. Dreams can act as a mirror, reflecting aspects of yourself that you might overlook in your waking life.</p>
          <p>By integrating dream insights, you can make more conscious choices and live a more authentic and fulfilling life.</p>
        </div>
      </div>
    </div>
  );
};

export default Chapter9;