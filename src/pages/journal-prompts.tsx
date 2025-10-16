import React from 'react';

const BedtimeJournalPrompts = () => {
  return (
    <div className="content-wrapper p-6 md:p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-sidebar-primary-foreground">Bedtime Reflection Journal Prompts</h1>
      [cite_start]<p className="text-center text-gray-600 mb-8">Reminder: This isn't about perfection. It's about awareness and progress. [cite: 836]</p>

      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-sidebar-primary-foreground">Nightly Reflection</h2>
        <p className="text-sm mb-4">Focus on small wins and emotional regulation.</p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-base">
          [cite_start]<li>What went smoother tonight? [cite: 827]</li>
          [cite_start]<li>What felt harder? [cite: 828]</li>
          [cite_start]<li>How did I feel during bedtime? [cite: 829]</li>
          [cite_start]<li>What helped my child calm faster? [cite: 830]</li>
          [cite_start]<li>What can I try differently tomorrow? [cite: 831]</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-sidebar-primary-foreground">End-of-Week Reflection</h2>
        [cite_start]<p className="text-sm mb-4">Process your parenting journey and celebrate progress[cite: 835].</p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-base">
          [cite_start]<li>What part of bedtime feels most peaceful—and what might be getting in the way of that calm? [cite: 833, 834]</li>
          [cite_start]<li>What change made the biggest difference this week? [cite: 835]</li>
        </ul>
      </div>
    </div>
  );
};

export default BedtimeJournalPrompts;
