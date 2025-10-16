import React from 'react';

const RoutineBuilder = () => {
  return (
    <div className="content-wrapper p-6 md:p-8 max-w-3xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6 text-sidebar-primary-foreground">Custom Bedtime Routine Builder</h1>
      <p className="text-lg text-gray-600 mb-8">This module allows you to build and save your personalized 5-step sequence.</p>

      <div className="bg-white p-6 rounded-lg shadow-xl border-t-4 border-gold-accent">
        <h2 className="text-xl font-semibold mb-4 text-sidebar-primary-foreground">Routine Steps (Placeholder)</h2>
        <ol className="list-decimal list-inside space-y-4 text-left mx-auto max-w-sm">
          <li className="p-2 border-b">Wind-Down Activity (e.g., Bath)</li>
          <li className="p-2 border-b">Connection Ritual (e.g., Cuddle Time)</li>
          <li className="p-2 border-b">Story/Song Cue (e.g., Moonlight Tales)</li>
          <li className="p-2 border-b">Goodnight Phrase</li>
          <li className="p-2">Final Proximity Fade</li>
        </ol>
        <p className="mt-6 text-sm text-gray-500">Note: This page is ready for advanced form integration with Supabase.</p>
      </div>
    </div>
  );
};

export default RoutineBuilder;
