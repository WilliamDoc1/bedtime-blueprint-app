import React from 'react';

const Chapter9 = () => {
  return (
    <div className="chapter-content-wrapper p-6 md:p-8">
      <h1 className="text-3xl font-bold text-center mb-6">THE 21-DAY PLAN: WEEK 2 — GENTLE FADING AND CONSISTENCY</h1>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">WELCOME TO THE CONFIDENCE PHASE</h2>
          <p className="mb-4">Week 2 is where structure meets independence. You'll begin gradually reducing your physical involvement while maintaining emotional presence.</p>
          
          {/* PARENT TIP - Lavender Box Style (Simulated) */}
          <div className="bg-lavender-mist p-4 rounded-lg my-4 border border-lavender-accent">
            <h4 className="font-semibold text-sm mb-1">Parent Tip:</h4>
            <p className="text-sm">This week isn't about "doing less." It's about trusting the groundwork you've already laid.</p>
          </div>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">1. WEEK 2 GOALS</h2>
          <ul className="list-disc list-inside space-y-1 ml-4 text-sm mb-4">
            <li>Reduce physical proximity (begin fading/chair method).</li>
            <li>Maintain identical routine timing.</li>
            <li>Respond predictably to wakeups.</li>
            <li>Keep tone calm, brief, consistent.</li>
          </ul>
          
          <h4 className="font-semibold text-md mt-4 mb-2">Focus Phrase:</h4>
          <blockquote className="border-l-4 border-gold-accent pl-4 italic text-base mb-4">
            "I'm still here, and you can do this."
          </blockquote>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">2. IMPLEMENTING THE FADE</h2>
          <p className="mb-2">Each night, move your chair or standing point slightly farther. If you used spaced reassurance, lengthen intervals by 1-2 minutes. Track each adjustment. Visual progress reinforces confidence.</p>
          
          <table className="min-w-full divide-y divide-gray-300 border border-gray-200 text-sm mb-4">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 text-left font-medium text-gray-700">Night</th>
                <th className="px-3 py-2 text-left font-medium text-gray-700">Starting Point</th>
                <th className="px-3 py-2 text-left font-medium text-gray-700">Adjustment</th>
                <th className="px-3 py-2 text-left font-medium text-gray-700">Reaction</th>
                <th className="px-3 py-2 text-left font-medium text-gray-700">Outcome</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="px-3 py-2 whitespace-nowrap">1</td>
                <td className="px-3 py-2 whitespace-nowrap">Beside bed</td>
                <td className="px-3 py-2 whitespace-nowrap">6 in. farther</td>
                <td className="px-3 py-2 whitespace-nowrap">Mild protest</td>
                <td className="px-3 py-2 whitespace-nowrap">Fell asleep faster</td>
              </tr>
              <tr>
                <td className="px-3 py-2 whitespace-nowrap">2</td>
                <td className="px-3 py-2 whitespace-nowrap">1 ft away</td>
                <td className="px-3 py-2 whitespace-nowrap">Same</td>
                <td className="px-3 py-2 whitespace-nowrap">Minimal protest</td>
                <td className="px-3 py-2 whitespace-nowrap">Success</td>
              </tr>
              <tr>
                <td className="px-3 py-2 whitespace-nowrap">3</td>
                <td className="px-3 py-2 whitespace-nowrap">Halfway to door</td>
                <td className="px-3 py-2 whitespace-nowrap">Slight resistance</td>
                <td className="px-3 py-2 whitespace-nowrap">Stayed calm</td>
                <td className="px-3 py-2 whitespace-nowrap"></td>
              </tr>
              <tr>
                <td className="px-3 py-2 whitespace-nowrap">4-7</td>
                <td className="px-3 py-2 whitespace-nowrap">Near door</td>
                <td className="px-3 py-2 whitespace-nowrap">Consistent</td>
                <td className="px-3 py-2 whitespace-nowrap"></td>
                <td className="px-3 py-2 whitespace-nowrap">Independent sleep</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Column 2 */}
        <div>
          {/* TRY THIS TONIGHT - Gold Box Style (Simulated) */}
          <div className="bg-soft-blush p-4 rounded-lg my-4 border border-gold-accent">
            <h4 className="font-semibold text-sm mb-1">Try This Tonight:</h4>
            <p className="text-sm">When your child calls out, pause 10 seconds before responding. Your pause teaches them to check their own calm first.</p>
          </div>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">3. HANDLING NIGHT WAKINGS</h2>
          <p className="mb-2">Night wakings in Week 2 are normal. The brain is learning a new pattern. When it happens:</p>
          <ul className="list-decimal list-inside space-y-1 ml-4 text-sm mb-4">
            <li>Wait a moment before responding.</li>
            <li>Enter calmly, no lights.</li>
            <li>Use the same brief phrase: "It's still sleep time. I love you. Back to bed."</li>
            <li>Exit gently.</li>
          </ul>

          {/* COMMON MISTAKE - Gold Box Style (Simulated) */}
          <div className="bg-soft-blush p-4 rounded-lg my-4 border border-gold-accent">
            <h4 className="font-semibold text-sm mb-1">Common Mistake:</h4>
            <p className="text-sm">Adding new strategies midweek. Stick with one. Change confuses progress.</p>
          </div>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">4. 7-DAY CONSISTENCY LOG (WEEK 2)</h2>
          <p className="mb-2">Use the printable log to track Method Used, Time Asleep, Night Wakings, and Parent Calm (1-5).</p>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">5. END OF WEEK CHECK-IN</h2>
          <p className="mb-2">At the end of Week 2, you'll start to see independent sleep windows forming. That's the signal you're ready for Week 3 — Consolidation & Troubleshooting.</p>
          
          <p className="font-semibold text-sm mt-4 uppercase">Reflection Prompt:</p>
          <p className="text-sm">How did your calm affect your child's pace of settling tonight?</p>
          
          <p className="font-semibold text-sm mt-4 uppercase text-center text-sidebar-primary-foreground">PROGRESS CUE</p>
          <p className="text-sm text-center">The shift from "they need me to fall asleep" to "they want me near but can fall asleep alone" means the plan is working.</p>
        </div>
      </div>
    </div>
  );
};

export default Chapter9;