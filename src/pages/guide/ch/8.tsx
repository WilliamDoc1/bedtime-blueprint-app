import React from 'react';

const Chapter8 = () => {
  return (
    <div className="chapter-content-wrapper p-6 md:p-8">
      <h1 className="text-3xl font-bold text-center mb-6">THE 21-DAY PLAN: WEEK 1 — RESET AND CONNECTION</h1>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">WELCOME TO THE RESET PHASE</h2>
          <p className="mb-4">This week is about **alignment**, not speed. You're reintroducing predictability and trust. Think of Week 1 as foundation repair—the calmer the base, the easier the structure holds.</p>
          
          {/* PARENT TIP - Lavender Box Style (Simulated) */}
          <div className="bg-lavender-mist p-4 rounded-lg my-4 border border-lavender-accent">
            <h4 className="font-semibold text-sm mb-1">Parent Tip:</h4>
            <p className="text-sm">Sleep training isn't about control. It's about communication. Every calm repetition says, "You're safe."</p>
          </div>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">1. WEEK 1 GOALS</h2>
          <ul className="list-disc list-inside space-y-1 ml-4 text-sm mb-4">
            <li>Rebuild connection before bedtime.</li>
            <li>Establish consistent bedtime and wake time.</li>
            <li>Strengthen routine cues (bath, light, story).</li>
            <li>Track wake windows and nap timing daily.</li>
          </ul>
          
          <h4 className="font-semibold text-md mt-4 mb-2">Mantra:</h4>
          <blockquote className="border-l-4 border-gold-accent pl-4 italic text-base mb-4">
            "Connection first, correction later."
          </blockquote>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">2. THE DAILY RESET ROUTINE</h2>
          <p className="mb-2">Use the same structure every single night. Predictability builds confidence faster than any "method."</p>

          <table className="min-w-full divide-y divide-gray-300 border border-gray-200 text-sm mb-4">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 text-left font-medium text-gray-700">Time</th>
                <th className="px-3 py-2 text-left font-medium text-gray-700">Action</th>
                <th className="px-3 py-2 text-left font-medium text-gray-700">Intention</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="px-3 py-2 whitespace-nowrap">6:00 PM</td>
                <td className="px-3 py-2 whitespace-nowrap">Bath or warm wipe-down</td>
                <td className="px-3 py-2 whitespace-nowrap">Physical calm</td>
              </tr>
              <tr>
                <td className="px-3 py-2 whitespace-nowrap">6:20 PM</td>
                <td className="px-3 py-2 whitespace-nowrap">Pajamas + dim light</td>
                <td className="px-3 py-2 whitespace-nowrap">Transition cue</td>
              </tr>
              <tr>
                <td className="px-3 py-2 whitespace-nowrap">6:40 PM</td>
                <td className="px-3 py-2 whitespace-nowrap">Storytime + calm voice</td>
                <td className="px-3 py-2 whitespace-nowrap">Emotional connection</td>
              </tr>
              <tr>
                <td className="px-3 py-2 whitespace-nowrap">7:00 PM</td>
                <td className="px-3 py-2 whitespace-nowrap">Goodnight cue</td>
                <td className="px-3 py-2 whitespace-nowrap">Consistent closure</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Column 2 */}
        <div>
          {/* TRY THIS TONIGHT - Gold Box Style (Simulated) */}
          <div className="bg-soft-blush p-4 rounded-lg my-4 border border-gold-accent">
            <h4 className="font-semibold text-sm mb-1">Try This Tonight:</h4>
            <p className="text-sm">Say your sleep phrase in the same tone and posture each night—even if the child protests. Your stillness becomes their cue.</p>
          </div>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">3. PARENT REFLECTION EXERCISE</h2>
          <p className="mb-2">At the end of each night, jot a one-sentence observation:</p>
          <ul className="list-disc list-inside space-y-1 ml-4 text-sm mb-4">
            <li>What went smoother?</li>
            <li>What felt harder?</li>
            <li>How did you feel during the process?</li>
          </ul>
          <p className="text-sm mb-4">This small ritual shifts your mindset from *fixing* your child's sleep to *understanding* your shared rhythm. Over time, these reflections become a quiet record of growth.</p>
          
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">4. 7-DAY PROGRESS TRACKER (WEEK 1)</h2>
          <p className="mb-2">Use the printable log to track Bedtime Start, Asleep By, Wake-ups, and Notes. Tracking patterns reveals progress.</p>
          
          {/* PARENT TIP - Lavender Box Style (Simulated) */}
          <div className="bg-lavender-mist p-4 rounded-lg my-4 border border-lavender-accent">
            <h4 className="font-semibold text-sm mb-1">Parent Tip:</h4>
            <p className="text-sm">Don't grade yourself on outcomes—track patterns. Patterns reveal progress.</p>
          </div>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">5. END OF WEEK CHECK-IN</h2>
          <p className="mb-2">Ask yourself:</p>
          <ul className="list-disc list-inside space-y-1 ml-4 text-sm mb-4">
            <li>Did bedtime feel calmer overall?</li>
            <li>Did your tone stay consistent?</li>
            <li>Did your child anticipate sleep cues earlier?</li>
          </ul>
          <p className="text-sm">If "yes" to even one, you're ready to move into **Week 2 — Gentle Fading & Consistency**.</p>
          
          <p className="font-semibold text-sm mt-4 uppercase text-center text-sidebar-primary-foreground">PROGRESS CUE</p>
          <p className="text-sm text-center">Your calm is now the strongest part of the bedtime equation.</p>
        </div>
      </div>
    </div>
  );
};

export default Chapter8;
