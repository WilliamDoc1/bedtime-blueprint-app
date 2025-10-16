"use client";

import React from "react";
import { chapterDetails } from "@/utils/guideContent";

const Chapter7: React.FC = () => {
  const chapter = chapterDetails[6];
  return (
    <div className="container mx-auto p-4 bg-lavender-50 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-gold-500">{chapter.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg leading-relaxed text-gray-800">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-3 text-gray-900">Dream Incubation Practices</h2>
          {chapter.content}
          <p>Dream incubation is the practice of consciously setting an intention or asking a question before sleep, with the aim of receiving guidance or insight in your dreams. This technique can be used for problem-solving, creative inspiration, or emotional processing.</p>
        </div>
        <div className="space-y-4">
          <p>Before bed, clearly formulate your question or intention. Write it down in your dream journal. Visualize yourself receiving the answer or experiencing the desired outcome in your dream. Repeat your intention as you drift off to sleep.</p>
          <p>Be open to the answers appearing in symbolic form, and remember to record any dreams you have immediately upon waking, even if they don't seem directly related at first.</p>
        </div>
      </div>
    </div>
  );
};

export default Chapter7;