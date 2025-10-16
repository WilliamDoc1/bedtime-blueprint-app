import React from 'react';

const Chapter11 = () => {
  return (
    <div className="chapter-content-wrapper p-6 md:p-8">
      <h1 className="text-3xl font-bold text-center mb-6">LONG TERM MAINTENANCE, REGRESSIONS, TRAVEL, ILLNESS, AND TRANSITIONS</h1>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">1. MAINTENANCE MINDSET</h2>
          <p className="mb-4">Healthy sleep is a living system. Instead of aiming for "perfect," aim for flexible stability. A routine that bends but doesn't break.</p>
          
          {/* PARENT TIP - Lavender Box Style (Simulated) */}
          <div className="bg-lavender-mist p-4 rounded-lg my-4 border border-lavender-accent">
            <h4 className="font-semibold text-sm mb-1">Parent Tip:</h4>
            <p className="text-sm">Long-term success isn't about control; it's about consistency over chaos.</p>
          </div>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">2. SEASONAL AND DEVELOPMENTAL REGRESSIONS</h2>
          <p className="mb-2">Expect them around:</p>
          <ul className="list-disc list-inside space-y-1 ml-4 text-sm mb-4">
            <li>12, 18, 24, and 30 months (developmental leaps)</li>
            <li>Major transitions (new home, daycare, sibling)</li>
          </ul>
          
          <h4 className="font-semibold text-md mt-4 mb-2">How to Respond:</h4>
          <ul className="list-disc list-inside space-y-1 ml-4 text-sm mb-4">
            <li>Reinforce core routine elements (story, phrase, lights).</li>
            <li>Return to Gentle Fading if needed.</li>
            <li>Short-term adjustments → long-term stability.</li>
          </ul>

          {/* TRY THIS TONIGHT - Gold Box Style (Simulated) */}
          <div className="bg-soft-blush p-4 rounded-lg my-4 border border-gold-accent">
            <h4 className="font-semibold text-sm mb-1">Try This Tonight:</h4>
            <p className="text-sm">Keep your sleep phrase identical even on vacation. Familiar words restore predictability.</p>
          </div>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">3. TRAVEL ADAPTATION</h2>
          <table className="min-w-full divide-y divide-gray-300 border border-gray-200 text-sm mb-4">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 text-left font-medium text-gray-700">Stage</th>
                <th className="px-3 py-2 text-left font-medium text-gray-700">Strategy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="px-3 py-2 whitespace-nowrap">Before trip</td>
                <td className="px-3 py-2 whitespace-nowrap">Shift schedule by 30 min per day to destination time</td>
              </tr>
              <tr>
                <td className="px-3 py-2 whitespace-nowrap">During</td>
                <td className="px-3 py-2 whitespace-nowrap">Recreate bedtime environment</td>
              </tr>
              <tr>
                <td className="px-3 py-2 whitespace-nowrap">After return</td>
                <td className="px-3 py-2 whitespace-nowrap">Reinstate routine immediately</td>
              </tr>
            </tbody>
          </table>
          
          {/* PRO TIP - Lavender Box Style (Simulated) */}
          <div className="bg-lavender-mist p-4 rounded-lg my-4 border border-lavender-accent">
            <h4 className="font-semibold text-sm mb-1">Pro Tip:</h4>
            <p className="text-sm">Carry a "sleep kit"—mini white noise device, favorite pajamas, story book. It anchors familiarity in new settings.</p>
          </div>
        </div>
        
        {/* Column 2 */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">4. ILLNESS & DISRUPTED NIGHTS</h2>
          <p className="mb-2">When sick, comfort first, structure second. You can't train through fever. You hold through it. Once better, slide back into your method within 48 hours.</p>

          {/* COMMON MISTAKE - Gold Box Style (Simulated) */}
          <div className="bg-soft-blush p-4 rounded-lg my-4 border border-gold-accent">
            <h4 className="font-semibold text-sm mb-1">Common Mistake:</h4>
            <p className="text-sm">Keeping new comfort habits too long after recovery. Reassure, then reset.</p>
          </div>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">5. TRANSITION TO TODDLER BED</h2>
          <h4 className="font-semibold text-md mt-4 mb-2">Signs it's time:</h4>
          <ul className="list-disc list-inside space-y-1 ml-4 text-sm mb-4">
            <li>Climbing out consistently.</li>
            <li>Over 2.5 years old and shows autonomy.</li>
          </ul>
          
          <h4 className="font-semibold text-md mt-4 mb-2">Steps:</h4>
          <ol className="list-decimal list-inside space-y-1 ml-4 text-sm mb-4">
            <li>Involve your child in setup (choose sheets).</li>
            <li>Keep routine identical.</li>
            <li>Add gentle boundary (e.g., door open if they stay in bed).</li>
          </ol>

          <p className="font-semibold text-sm mt-4 uppercase">Reflection Prompt:</p>
          <p className="text-sm">What part of your routine anchors your child most? Protect that above all else.</p>
          
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">6. LOOKING AHEAD</h2>
          <p className="mb-4">Every season of sleep requires small tweaks, but the principles stay the same: Safety, Connection, Consistency. That's the DreamDocs triangle for peaceful nights.</p>

          <p className="font-semibold text-sm mt-4 uppercase text-center text-sidebar-primary-foreground">PROGRESS CUE</p>
          <p className="text-sm text-center">YOU NO LONGER CHASE SLEEP. YOU GUIDE IT.</p>
        </div>
      </div>
    </div>
  );
};

export default Chapter11;