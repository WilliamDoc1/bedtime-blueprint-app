import React from 'react';

const EnvironmentChecklist = () => {
  return (
    <div className="content-wrapper p-6 md:p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-sidebar-primary-foreground">Sleep Environment & Routine Setup Checklist</h1>
      [cite_start]<p className="text-center text-gray-600 mb-8">Goal: Create a space that supports calm, predictable sleep. [cite: 840]</p>

      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-sidebar-primary-foreground">Room Environment</h2>
        <ul className="list-none space-y-3 text-base">
          [cite_start]<li><input type="checkbox" className="mr-3 accent-lavender-accent" /> Room temperature between 20-22°C (68-72°F) [cite: 843]</li>
          [cite_start]<li><input type="checkbox" className="mr-3 accent-lavender-accent" /> Total darkness (use blackout curtains or window covers) [cite: 844]</li>
          [cite_start]<li><input type="checkbox" className="mr-3 accent-lavender-accent" /> Steady white or pink noise at low volume [cite: 845]</li>
          [cite_start]<li><input type="checkbox" className="mr-3 accent-lavender-accent" /> No glowing lights or screens visible at night [cite: 846]</li>
          [cite_start]<li><input type="checkbox" className="mr-3 accent-lavender-accent" /> Bed free of clutter and toys [cite: 846]</li>
          [cite_start]<li><input type="checkbox" className="mr-3 accent-lavender-accent" /> Safe sleep zone—no cords, loose blankets, or hazards [cite: 847]</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-sidebar-primary-foreground">Evening Routine Setup</h2>
        <ul className="list-none space-y-3 text-base">
          [cite_start]<li><input type="checkbox" className="mr-3 accent-lavender-accent" /> Begin wind-down 45-60 minutes before bedtime [cite: 849]</li>
          [cite_start]<li><input type="checkbox" className="mr-3 accent-lavender-accent" /> Dim lights gradually after dinner [cite: 851]</li>
          [cite_start]<li><input type="checkbox" className="mr-3 accent-lavender-accent" /> Avoid screens 90 minutes before sleep [cite: 850, 851]</li>
          [cite_start]<li><input type="checkbox" className="mr-3 accent-lavender-accent" /> Offer calm sensory input - bath, lotion, cuddle [cite: 852]</li>
          [cite_start]<li><input type="checkbox" className="mr-3 accent-lavender-accent" /> Prepare sleep cues (sound on, lights off, phrase ready) [cite: 852]</li>
        </ul>
      </div>
      
      <div className="bg-lavender-mist p-4 rounded-lg my-6 border border-lavender-accent text-sm text-center">
        <h4 className="font-semibold text-sm mb-1">Parent Cue:</h4>
        <p>Consistency beats perfection. [cite_start]A familiar pattern tells your toddler's brain, "It's safe to rest." [cite: 854]</p>
      </div>
    </div>
  );
};

export default EnvironmentChecklist;
