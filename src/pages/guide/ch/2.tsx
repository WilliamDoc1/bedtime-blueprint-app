import React from 'react';

const Chapter2 = () => {
  return (
    <div className="chapter-content-wrapper p-6 md:p-8">
      <h1 className="text-3xl font-bold text-center mb-6">SAFETY STANDARDS AND RISK-AWARE SLEEP FOUNDATIONS</h1>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">WHY SAFETY IS THE FIRST STEP TOWARD SLEEP</h2>
          <p className="mb-4">Before any method, before any plan, comes safety. Children can only surrender to sleep when their nervous system registers one thing: "I am safe here". Physical safety and emotional safety intertwine; the one reinforces the other. The more consistent and predictable your child's environment feels, the faster their body releases melatonin and allows rest.</p>
          
          {/* PARENT TIP - Lavender Box Style (Simulated) */}
          <div className="bg-lavender-mist p-4 rounded-lg my-4 border border-lavender-accent">
            <h4 className="font-semibold text-sm mb-1">Parent Tip:</h4>
            <p className="text-sm">Toddlers who feel secure during transitions fall asleep faster and wake less often. Safety is the quiet hero of sleep training.</p>
          </div>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">1. PHYSICAL SAFETY FOUNDATIONS</h2>
          <ul className="list-disc list-inside space-y-2 ml-4 text-sm mb-4">
            <li>Crib or Bed Check: Confirm stable frame, firm mattress, and fitted sheet (no excess padding or toys). If your child has transitioned to a toddler bed, ensure low height and a clear floor zone.</li>
            <li>Temperature and Light: Ideal room temperature is between 20-22°C (68-72°F). Light should mimic dusk—dim amber light over bright white or blue.</li>
            <li>Noise: Use consistent background sound. A low white noise machine helps mask household fluctuations and builds a steady cue: "This sound means sleep".</li>
          </ul>

          {/* COMMON MISTAKE - Gold Box Style (Simulated) */}
          <div className="bg-soft-blush p-4 rounded-lg my-4 border border-gold-accent">
            <h4 className="font-semibold text-sm mb-1">Common Mistake:</h4>
            <p className="text-sm">Overdecorating the sleep space. Extra visuals overstimulate; minimalism calms the sensory system.</p>
          </div>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">2. EMOTIONAL SAFETY FOUNDATIONS</h2>
          <p className="mb-2">Children rely on predictability. Every consistent bedtime action becomes a trust signal that says: You're okay. I'll guide you to rest.</p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-sm mb-4">
            <li>Same Sequence Every Night: Bath → Pajamas → Lights Dimmed → Story → Sleep Cue (song or phrase).</li>
            <li>Predictable Voices: Calm, steady tone; consistent phrases like "It's sleep time, my love".</li>
            <li>Nighttime Reassurance: A brief check-in if they call for you—same timing, same phrase. Consistency reduces anxiety far faster than lectures or new strategies.</li>
          </ul>
        </div>
        
        {/* Column 2 */}
        <div>
          {/* TRY THIS TONIGHT - Gold Box Style (Simulated) */}
          <div className="bg-soft-blush p-4 rounded-lg my-4 border border-gold-accent">
            <h4 className="font-semibold text-sm mb-1">Try This Tonight:</h4>
            <p className="text-sm">Use one gentle "sleep phrase" each night (e.g., "The moon is watching over you."). Familiar repetition builds trust faster than explanation.</p>
          </div>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">3. RISK-AWARE SLEEP PRACTICES</h2>
          <p className="mb-2">Safety isn't just about comfort. It's about prevention. As children grow, their needs shift. Here's how to stay proactive:</p>

          <table className="min-w-full divide-y divide-gray-300 border border-gray-200 text-sm mb-4">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-3 text-left font-medium text-gray-700">Age</th>
                <th className="px-3 py-3 text-left font-medium text-gray-700">Focus</th>
                <th className="px-3 py-3 text-left font-medium text-gray-700">Parent Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="px-3 py-2 whitespace-nowrap">0-12 months</td>
                <td className="px-3 py-2 whitespace-nowrap">SIDS prevention</td>
                <td className="px-3 py-2 whitespace-nowrap">Always back-to-sleep, firm mattress</td>
              </tr>
              <tr>
                <td className="px-3 py-2 whitespace-nowrap">12-24 months</td>
                <td className="px-3 py-2 whitespace-nowrap">Climbing phase</td>
                <td className="px-3 py-2 whitespace-nowrap">Lower mattress, check gaps, install clear floor zone</td>
              </tr>
              <tr>
                <td className="px-3 py-2 whitespace-nowrap">2-3 years</td>
                <td className="px-3 py-2 whitespace-nowrap">Toddler autonomy</td>
                <td className="px-3 py-2 whitespace-nowrap">Safe boundaries, nightlight, gentle check-ins</td>
              </tr>
            </tbody>
          </table>

          {/* SLEEP SCIENCE SIMPLIFIED - Lavender Box Style (Simulated) */}
          <div className="bg-lavender-mist p-4 rounded-lg my-4 text-sm border border-lavender-accent">
            <h4 className="font-semibold text-xs uppercase mb-1">Sleep Science Simplified:</h4>
            <p>Predictability lowers cortisol and norepinephrine levels, allowing melatonin to rise. Safety is biochemical, not just emotional.</p>
          </div>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">4. YOUR "SAFETY SNAPSHOT" CHECKLIST</h2>
          <ul className="list-disc list-inside space-y-1 ml-4 text-sm mb-4">
            <li>Crib/bed meets safety standards.</li>
            <li>Room lighting transitions from bright → warm glow → dim.</li>
            <li>Sound environment steady.</li>
            <li>Predictable bedtime sequence followed.</li>
            <li>Calm, repeated phrases used.</li>
          </ul>
          <p className="text-sm mb-4">These five actions alone can reduce bedtime resistance by 40-60% within the first week.</p>

          <p className="font-semibold text-sm mt-4 uppercase">Reflection Prompt:</p>
          <p className="text-sm">When your child feels truly safe, what changes in their body language or tone do you notice?</p>

          <p className="font-semibold text-sm mt-4 uppercase text-center text-sidebar-primary-foreground">PROGRESS CUE</p>
          <p className="text-sm text-center">Each step of safety becomes a layer in your sleep foundation. You've now built the base. Next, we measure where you are and where you need to go.</p>
        </div>
      </div>
    </div>
  );
};

export default Chapter2;