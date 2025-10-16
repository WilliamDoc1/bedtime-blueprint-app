"use client";

import React from "react";
import { chapterDetails } from "@/utils/guideContent";

const Chapter2: React.FC = () => {
  const chapter = chapterDetails[1];
  return (
    <div className="container mx-auto p-4 bg-lavender-50 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-gold-500">{chapter.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg leading-relaxed text-gray-800">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary">Setting Up Your Dream Space</h2>
          {chapter.content}
          <p>Creating a dedicated "dream space" is more than just tidying your bedroom; it's about cultivating an atmosphere that signals to your mind it's time for rest and introspection. This can involve minimizing distractions, ensuring optimal temperature, and using calming scents.</p>
        </div>
        <div className="space-y-4">
          <p>Consider incorporating elements like soft lighting, comfortable bedding, and a clutter-free environment. A consistent bedtime routine, such as reading or meditation, can further prepare your mind for a night of rich dreaming and better recall.</p>
          <p>The goal is to make your sleep environment a sanctuary where your subconscious feels safe to explore and express itself freely.</p>
        </div>
      </div>
    </div>
  );
};

export default Chapter2;