import React from 'react';

const ReflectionJournal = () => {
  return (
    <div className="content-wrapper p-6 md:p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-sidebar-primary-foreground">Bedtime Reflection Journal</h1>
      <p className="text-center text-gray-600 mb-8">Reminder: This isn't about perfection. It's about awareness and progress.</p>

      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-sidebar-primary-foreground">Nightly Reflection</h2>
        <ul className="list-disc list-inside space-y-2 ml-4 text-base">
          <li>What went smoother tonight?</li>
          <li>What felt harder?</li>
          <li>How did I feel during bedtime? (1-5 calm rating)</li>
          <li>What helped my child calm faster?</li>
          <li>What can I try differently tomorrow?</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-sidebar-primary-foreground">End-of-Week Reflection</h2>
        <ul className="list-disc list-inside space-y-2 ml-4 text-base">
          <li>What part of bedtime feels most peaceful—and what might be getting in the way of that calm?</li>
          <li>What change made the biggest difference this week?</li>
        </ul>
      </div>
    </div>
  );
};

export default ReflectionJournal;