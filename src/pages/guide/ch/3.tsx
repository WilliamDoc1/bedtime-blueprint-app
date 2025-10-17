import React from 'react';

const Chapter3 = () => {
  return (
    <div className="chapter-content-wrapper p-6 md:p-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">SLEEP AUDIT AND READINESS ASSESSMENT</h1>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-900">WHY YOU NEED A SLEEP AUDIT</h2>
          <p className="mb-4">Before changing anything, we measure. A sleep audit is like a compass: it shows where you are so you can travel without getting lost. When you understand your child's rhythms, triggers, and environment, you can stop guessing. You'll know why the resistance happens, not just when.</p>
          
          {/* PARENT TIP - Lavender Box Style (Simulated) */}
          <div className="bg-lavender-mist p-4 rounded-lg my-4 border border-lavender-accent">
            <h4 className="font-semibold text-sm mb-1">Parent Tip:</h4>
            <p className="text-sm">Observation replaces frustration. When you track instead of react, you'll see progress before it feels visible.</p>
          </div>

          <h2 className="text-xl font-semibold mb-3 text-gray-900">STEP 1: OBSERVE THE 3 PILLARS OF SLEEP READINESS</h2>
          <p className="mb-2">Sleep readiness depends on timing, environment, and emotion. If one is off, bedtime wobbles.</p>

          <h3 className="text-lg font-semibold mt-4 mb-2">1. Timing: The Sleep Window</h3>
          <p className="text-sm mb-2">Every child has a "sleep window"—the 20-30 minute span when their brain produces peak melatonin. Miss it, and you'll hit a wall of cortisol ("second wind"). Catch it, and sleep feels effortless.</p>
          
          {/* TRY THIS TONIGHT - Gold Box Style (Simulated) */}
          <div className="bg-soft-blush p-4 rounded-lg my-4 border border-gold-accent">
            <h4 className="font-semibold text-sm mb-1">Try This Tonight:</h4>
            <p className="text-sm">Notice when your child naturally rubs eyes, yawns, or zones out. That's the window. Aim to start the bedtime routine 10-15 minutes before those cues appear.</p>
          </div>

          <h3 className="text-lg font-semibold mb-2">2. Environment: The Sleep Surroundings</h3>
          <p className="text-sm mb-2">Audit the five senses:</p>
          <ul className="list-disc list-inside space-y-1 ml-4 text-sm mb-2">
            <li>Sight: Is the light too bright?</li>
            <li>Sound: Is there unpredictable noise?</li>
            <li>Smell: Clean sheets and mild scents calm the nervous system.</li>
            <li>Touch: Pajamas soft, no itchy tags.</li>
            <li>Temperature: Slightly cool; warm air delays melatonin.</li>
          </ul>
        </div>
        
        {/* Column 2 */}
        <div>
          <h4 className="font-semibold text-md mt-4 mb-2">Score it:</h4>
          <p className="text-sm mb-2">0 = disruptive, 1 = okay, 2 = ideal. Add your five scores. If below 8, tweak the room first before trying a new method.</p>

          {/* SLEEP SCIENCE SIMPLIFIED - Lavender Box Style (Simulated) */}
          <div className="bg-lavender-mist p-4 rounded-lg my-4 text-sm border border-lavender-accent">
            <h4 className="font-semibold text-xs uppercase mb-1">Sleep Science Simplified:</h4>
            <p>Your child's brain learns "sleep happens here" when the sensory profile is consistent night to night.</p>
          </div>

          <h3 className="text-lg font-semibold mb-2">3. Emotion: The Pre-Sleep Connection</h3>
          <p className="text-sm mb-2">A regulated body can't happen without a regulated heart. Audit connection by asking: Did we share a calm moment today? Was our goodbye at nap or bedtime gentle or rushed? Is my tone calm when I say "It's time for sleep"?</p>
          
          {/* COMMON MISTAKE - Gold Box Style (Simulated) */}
          <div className="bg-soft-blush p-4 rounded-lg my-4 border border-gold-accent">
            <h4 className="font-semibold text-sm mb-1">Common Mistake:</h4>
            <p className="text-sm">Rushing through bedtime rituals. The final five minutes are the most powerful cue of the entire day.</p>
          </div>

          <h2 className="text-xl font-semibold mb-3 text-gray-900">STEP 2: THE 7-DAY SLEEP LOG</h2>
          <p className="mb-2">You'll see your pattern emerge. Often, what feels like "random wakeups" are timing issues or emotional carryovers from the day.</p>

          <h2 className="text-xl font-semibold mb-3 text-gray-900">STEP 3: READINESS ASSESSMENT</h2>
          <p className="mb-2">Every bedtime challenge has one of three roots:</p>
          <ul className="list-disc list-inside space-y-1 ml-4 text-sm mb-4">
            <li>Biological: overtiredness, hunger, overstimulation.</li>
            <li>Environmental: light, sound, temperature inconsistency.</li>
            <li>Emotional: fear, separation anxiety, or lack of closure from the day.</li>
          </ul>
          <p className="text-sm">You don't fix all three at once. Start where the evidence points.</p>

          <h4 className="font-semibold text-md mt-4 mb-2 text-center">YOUR SLEEP SNAPSHOT SUMMARY</h4>
          <p className="text-sm mb-2 text-center">By now, you've collected your first week of data. The groundwork for lasting change. You're no longer operating from "I think," but from "I know".</p>
          
          {/* KEY TAKEAWAY - Bottom Callout */}
          <div className="bg-gray-50 p-4 rounded-lg my-4 border border-gray-300 text-sm">
            <h4 className="font-semibold text-sm mb-1">Key Takeaway:</h4>
            <p>Awareness always precedes improvement. Calm isn't found. It is measured, practiced, and earned night by night.</p>
          </div>
          <p className="font-semibold text-sm mt-4 uppercase text-center text-gray-900">PROGRESS CUE</p>
          <p className="text-sm text-center">You're ready to move into Chapter 4: Environment & Bedtime Routine Design.</p>
        </div>
      </div>
    </div>
  );
};

export default Chapter3;