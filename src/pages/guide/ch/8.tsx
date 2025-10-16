"use client";

import React from "react";
import { chapterDetails } from "@/utils/guideContent";

const Chapter8: React.FC = () => {
  const chapter = chapterDetails[7];
  return (
    <div className="container mx-auto p-4 bg-lavender-50 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-gold-500">{chapter.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg leading-relaxed text-gray-800">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary">Working with Nightmares</h2>
          {chapter.content}
          <p>Nightmares can be distressing, but they often carry important messages from our subconscious. Instead of avoiding them, learning to work with nightmares can be a powerful path to healing and understanding. Start by recording the nightmare in detail, focusing on emotions and specific imagery.</p>
        </div>
        <div className="space-y-4">
          <p>Consider if the nightmare is recurring or if similar themes appear in your waking life. Techniques like "dream re-entry" (re-entering the dream while awake and changing the outcome) or "rescripting" (writing a new ending to the dream) can be very effective.</p>
          <p>Remember that nightmares are not meant to harm you, but to draw your attention to unresolved issues or fears that need to be addressed.</p>
        </div>
      </div>
    </div>
  );
};

export default Chapter8;