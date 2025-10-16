import React from 'react';

const Chapter5 = () => {
  return (
    <div className="chapter-content-wrapper p-6 md:p-8">
      <h1 className="text-3xl font-bold text-center mb-6">NAP AND SCHEDULE OPTIMIZER FOR 12-36 MONTHS</h1>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">WHY NAPS SHAPE THE ENTIRE NIGHT</h2>
          <p className="mb-4">Most bedtime struggles actually begin hours earlier, with naps. A tired child doesn't fall asleep faster; they fall apart. Naps regulate hormones, stabilize mood, and prevent cortisol spikes that sabotage nighttime sleep. When naps are balanced, bedtime becomes peaceful, predictable, and cooperative.</p>
          
          {/* PARENT TIP - Lavender Box Style (Simulated) */}
          <div className="bg-lavender-mist p-4 rounded-lg my-4 border border-lavender-accent">
            <h4 className="font-semibold text-sm mb-1">Parent Tip:</h4>
            <p className="text-sm">A missed nap is never "free sleep" later—it's borrowed calm you'll have to repay at bedtime.</p>
          </div>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">1. UNDERSTANDING SLEEP PRESSURE</h2>
          <p className="mb-2">Sleep pressure is the natural buildup of tiredness that makes the body crave rest.</p>
          <ul className="list-disc list-inside space-y-1 ml-4 text-sm mb-4">
            <li>Too little pressure = bedtime resistance.</li>
            <li>Too much = overtired meltdown.</li>
          </ul>
          <p className="text-sm mb-4">Think of it as a wave: You want to catch it at its crest—not before it forms, not after it crashes.</p>

          <h3 className="text-lg font-semibold mb-2">Typical Wake Windows (12-36 months):</h3>
          <table className="min-w-full divide-y divide-gray-300 border border-gray-200 text-sm mb-4">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 text-left font-medium text-gray-700">Age</th>
                <th className="px-3 py-2 text-left font-medium text-gray-700">Wake Window</th>
                <th className="px-3 py-2 text-left font-medium text-gray-700">Naps per Day</th>
                <th className="px-3 py-2 text-left font-medium text-gray-700">Total Sleep (24h)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="px-3 py-2 whitespace-nowrap">12-18 mo</td>
                <td className="px-3 py-2 whitespace-nowrap">3-4 hours</td>
                <td className="px-3 py-2 whitespace-nowrap">2→1 transition</td>
                <td className="px-3 py-2 whitespace-nowrap">13-14 hrs</td>
              </tr>
              <tr>
                <td className="px-3 py-2 whitespace-nowrap">18-24 mo</td>
                <td className="px-3 py-2 whitespace-nowrap">4-5 hours</td>
                <td className="px-3 py-2 whitespace-nowrap">1 nap</td>
                <td className="px-3 py-2 whitespace-nowrap">12-13 hrs</td>
              </tr>
              <tr>
                <td className="px-3 py-2 whitespace-nowrap">24-36 mo</td>
                <td className="px-3 py-2 whitespace-nowrap">5-6 hours</td>
                <td className="px-3 py-2 whitespace-nowrap">1 nap</td>
                <td className="px-3 py-2 whitespace-nowrap">12 hrs</td>
              </tr>
            </tbody>
          </table>

          {/* SLEEP SCIENCE SIMPLIFIED - Lavender Box Style (Simulated) */}
          <div className="bg-lavender-mist p-4 rounded-lg my-4 text-sm border border-lavender-accent">
            <h4 className="font-semibold text-xs uppercase mb-1">Sleep Science Simplified:</h4>
            <p>The body's circadian rhythm resets every ~24 hours, but nap timing fine-tunes the internal "clock" that links day and night sleep cycles.</p>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">2. TIMING NAPS LIKE A PRO</h2>
          <h3 className="text-lg font-semibold mb-2">Morning Naps (Under 18 months)</h3>
          <ul className="list-disc list-inside space-y-1 ml-4 text-sm mb-4">
            <li>Start no earlier than 2.5 hours after waking.</li>
            <li>Too early = short naps.</li>
            <li>Too late = crankiness that bleeds into lunch.</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Midday Naps (18-36 months)</h3>
          <ul className="list-disc list-inside space-y-1 ml-4 text-sm mb-4">
            <li>Begin between 12:00-1:00 PM.</li>
            <li>Cap at 1.5-2 hours to protect bedtime.</li>
            <li>Keep consistent within ±15 minutes daily.</li>
          </ul>
          
          {/* TRY THIS TONIGHT - Gold Box Style (Simulated) */}
          <div className="bg-soft-blush p-4 rounded-lg my-4 border border-gold-accent">
            <h4 className="font-semibold text-sm mb-1">Try This Tomorrow:</h4>
            <p className="text-sm">Shift nap start time by 15 minutes earlier or later based on previous night's bedtime success. Watch how bedtime adjusts within 48 hours.</p>
          </div>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">3. ENVIRONMENT MATTERS (AGAIN)</h2>
          <p className="text-sm mb-2">Nap conditions should mimic bedtime: Dim light, consistent sound, and cool temperature. Avoid the stroller-to-crib transfer when possible; motion sleep is lighter and fragmented. If naps must happen on the go (daycare or errands), balance them with earlier bedtime that night.</p>
          
          {/* COMMON MISTAKE - Gold Box Style (Simulated) */}
          <div className="bg-soft-blush p-4 rounded-lg my-4 border border-gold-accent">
            <h4 className="font-semibold text-sm mb-1">Common Mistake:</h4>
            <p className="text-sm">Using car naps as the main nap. It may reset behavior but not brain rest. The deep sleep stage rarely activates in motion.</p>
          </div>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">4. THE NAP RESET ROUTINE</h2>
          <p className="text-sm mb-2">Keep it under five minutes. The ritual consistency creates the same neurological "safety switch" as bedtime.</p>
          <ol className="list-decimal list-inside space-y-1 ml-4 text-sm mb-4">
            <li>Close curtains</li>
            <li>Whisper "It's nap time."</li>
            <li>Soft hum or song</li>
            <li>Lay down with transitional object (blanket or plush toy)</li>
          </ol>
          
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">5. SIGNS THE SCHEDULE NEEDS ADJUSTMENT</h2>
          <table className="min-w-full divide-y divide-gray-300 border border-gray-200 text-sm mb-4">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 text-left font-medium text-gray-700">Behavior</th>
                <th className="px-3 py-2 text-left font-medium text-gray-700">Possible Cause</th>
                <th className="px-3 py-2 text-left font-medium text-gray-700">Fix</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="px-3 py-2 whitespace-nowrap">Bedtime suddenly late</td>
                <td className="px-3 py-2 whitespace-nowrap">Nap too long or too late</td>
                <td className="px-3 py-2 whitespace-nowrap">Trim nap by 15-20 mins</td>
              </tr>
              <tr>
                <td className="px-3 py-2 whitespace-nowrap">Frequent night wakings</td>
                <td className="px-3 py-2 whitespace-nowrap">Nap ended too early</td>
                <td className="px-3 py-2 whitespace-nowrap">Push bedtime earlier</td>
              </tr>
              <tr>
                <td className="px-3 py-2 whitespace-nowrap">Morning crankiness</td>
                <td className="px-3 py-2 whitespace-nowrap">Overtired at bedtime</td>
                <td className="px-3 py-2 whitespace-nowrap">Increase nap length or shift earlier</td>
              </tr>
            </tbody>
          </table>

          <p className="font-semibold text-sm mt-4 uppercase">Reflection Prompt:</p>
          <p className="text-sm">Which nap pattern gives you the calmest evenings? What small change would simplify your afternoons this week?</p>
          
          <p className="font-semibold text-sm mt-4 uppercase text-center text-sidebar-primary-foreground">PROGRESS CUE</p>
          <p className="text-sm text-center">By syncing nap timing and duration, you reduce overtiredness, the number 1 hidden enemy of sleep. You've now aligned the day with the night.</p>
        </div>
      </div>
    </div>
  );
};

export default Chapter5;

