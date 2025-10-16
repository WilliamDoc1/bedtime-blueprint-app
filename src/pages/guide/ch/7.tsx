import React from 'react';

const Chapter7 = () => {
  return (
    <div className="chapter-content-wrapper p-6 md:p-8">
      <h1 className="text-3xl font-bold text-center mb-6">CHOOSE YOUR METHOD (3 APPROACHES)</h1>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">WHY METHOD MATTERS</h2>
          <p className="mb-4">Once your child's environment, timing, and emotional base are steady, you can begin gently guiding them toward independent sleep. This chapter is about choosing your approach—one that fits your child's temperament and your parenting values. You'll never need to use "cry it out." These methods are connection-based, research-supported, and proven to build trust as well as rest.</p>
          
          {/* PARENT TIP - Lavender Box Style (Simulated) */}
          <div className="bg-lavender-mist p-4 rounded-lg my-4 border border-lavender-accent">
            <h4 className="font-semibold text-sm mb-1">Parent Tip:</h4>
            <p className="text-sm">The best method is one you can stay consistent with when you're tired—because consistency is where progress lives.</p>
          </div>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">1. THE GENTLE FADING METHOD</h2>
          <p className="mb-2">This method gradually reduces your presence while keeping reassurance strong. It's ideal for sensitive or clingy children who need gentle transitions.</p>
          
          <h4 className="font-semibold text-md mt-4 mb-2">How It Works:</h4>
          <ol className="list-decimal list-inside space-y-1 ml-4 text-sm mb-4">
            <li>Stay beside the bed or crib as your child drifts off.</li>
            <li>Each night, move a few inches farther away.</li>
            <li>Replace touch with your voice ("I'm right here, sweetheart.").</li>
            <li>Eventually, you'll reach the doorway, then outside.</li>
          </ol>
          
          <h4 className="font-semibold text-md mt-4 mb-2">Benefits:</h4>
          <ul className="list-disc list-inside space-y-1 ml-4 text-sm mb-4">
            <li>Minimal tears.</li>
            <li>Builds confidence step by step.</li>
            <li>Strengthens the "I can do this" feeling in both parent and child.</li>
          </ul>

          {/* TRY THIS TONIGHT - Gold Box Style (Simulated) */}
          <div className="bg-soft-blush p-4 rounded-lg my-4 border border-gold-accent">
            <h4 className="font-semibold text-sm mb-1">Try This Tonight:</h4>
            <p className="text-sm">Move your chair just six inches farther away than last night. Small progress is still progress.</p>
          </div>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">2. THE SPACED REASSURANCE METHOD</h2>
          <p className="mb-2">This works best for children who protest briefly but can self-soothe with consistent boundaries.</p>
          
          <h4 className="font-semibold text-md mt-4 mb-2">How It Works:</h4>
          <ol className="list-decimal list-inside space-y-1 ml-4 text-sm mb-4">
            <li>Say goodnight calmly and leave the room.</li>
            <li>Return after short, timed intervals - 2, 5, 10 minutes.</li>
            <li>Keep check-ins brief (no picking up or relighting the room).</li>
            <li>Lengthen intervals slightly each night.</li>
          </ol>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-semibold text-md mt-4 mb-2">What You Say:</h4>
          <p className="text-sm mb-4">"It's sleep time. I love you. I'll check again soon." The key is tone—steady, predictable, never frustrated.</p>
          
          {/* COMMON MISTAKE - Gold Box Style (Simulated) */}
          <div className="bg-soft-blush p-4 rounded-lg my-4 border border-gold-accent">
            <h4 className="font-semibold text-sm mb-1">Common Mistake:</h4>
            <p className="text-sm">Extending visits too long. Comfort comes from predictability, not prolonged presence.</p>
          </div>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">3. THE CHAIR METHOD</h2>
          <p className="mb-2">Perfect for parents who prefer staying in the room but want to reduce dependence gradually.</p>
          
          <h4 className="font-semibold text-md mt-4 mb-2">How It Works:</h4>
          <ol className="list-decimal list-inside space-y-1 ml-4 text-sm mb-4">
            <li>Sit near the bed as your child falls asleep.</li>
            <li>Avoid eye contact or conversation after the goodnight cue.</li>
            <li>Move the chair a little farther away every few nights.</li>
            <li>Eventually, you'll sit near the door. Then outside.</li>
          </ol>

          {/* SLEEP SCIENCE SIMPLIFIED - Lavender Box Style (Simulated) */}
          <div className="bg-lavender-mist p-4 rounded-lg my-4 text-sm border border-lavender-accent">
            <h4 className="font-semibold text-xs uppercase mb-1">Sleep Science Simplified:</h4>
            <p>The chair acts as a "proximity buffer"—maintaining safety while slowly training independence. Children learn through gradual desensitization.</p>
          </div>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">4. CHOOSING WHAT FITS</h2>
          <table className="min-w-full divide-y divide-gray-300 border border-gray-200 text-sm mb-4">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 text-left font-medium text-gray-700">Temperament</th>
                <th className="px-3 py-2 text-left font-medium text-gray-700">Recommended Method</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="px-3 py-2 whitespace-nowrap">Sensitive / anxious</td>
                <td className="px-3 py-2 whitespace-nowrap">Gentle Fading</td>
              </tr>
              <tr>
                <td className="px-3 py-2 whitespace-nowrap">Independent / high-energy</td>
                <td className="px-3 py-2 whitespace-nowrap">Spaced Reassurance</td>
              </tr>
              <tr>
                <td className="px-3 py-2 whitespace-nowrap">Fear-prone or highly attached</td>
                <td className="px-3 py-2 whitespace-nowrap">Chair Method</td>
              </tr>
            </tbody>
          </table>

          <p className="text-sm mb-4">You can blend elements. For example, start with the Chair Method, then fade to Spaced Reassurance once comfort increases.</p>

          <p className="font-semibold text-sm mt-4 uppercase">Reflection Prompt:</p>
          <p className="text-sm">Which method aligns with your patience level and your child's comfort threshold?</p>
          
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">5. THE TRANSITION PLAN</h2>
          <p className="text-sm mb-2">Stay consistent for 5-7 nights before judging success. Minor regressions are normal—think of them as your child checking, "Is the rule still safe?"</p>

          <p className="font-semibold text-sm mt-4 uppercase text-center text-sidebar-primary-foreground">PROGRESS CUE</p>
          <p className="text-sm text-center">By the end of week one, you'll notice less protest. By week two, your child begins falling asleep faster. That's your signal to start the structured 21-Day Plan.</p>
        </div>
      </div>
    </div>
  );
};

export default Chapter7;