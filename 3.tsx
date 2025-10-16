import React from 'react';

const Chapter3 = () => {
  return (
    <div className="chapter-content-wrapper p-6 md:p-8">
      <h1 className="text-3xl font-bold text-center mb-6">SLEEP AUDIT AND READINESS ASSESSMENT</h1>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">WHY YOU NEED A SLEEP AUDIT</h2>
          [cite_start]<p className="mb-4">Before changing anything, we measure[cite: 276]. [cite_start]A **sleep audit** is like a compass: it shows where you are so you can travel without getting lost[cite: 277]. [cite_start]When you understand your child's rhythms, triggers, and environment, you can stop guessing[cite: 278]. [cite_start]You'll know why the resistance happens, not just when[cite: 279].</p>
          
          {/* PARENT TIP - Lavender Box Style (Simulated) */}
          <div className="bg-lavender-mist p-4 rounded-lg my-4 border border-lavender-accent">
            <h4 className="font-semibold text-sm mb-1">Parent Tip:</h4>
            <p className="text-sm">Observation replaces frustration. [cite_start]When you track instead of react, you'll see progress before it feels visible[cite: 281].</p>
          </div>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">STEP 1: OBSERVE THE 3 PILLARS OF SLEEP READINESS</h2>
          [cite_start]<p className="mb-2">Sleep readiness depends on **timing, environment, and emotion**[cite: 284]. [cite_start]If one is off, bedtime wobbles[cite: 285].</p>

          <h3 className="text-lg font-semibold mt-4 mb-2">1. Timing: The Sleep Window</h3>
          [cite_start]<p className="text-sm mb-2">Every child has a "sleep window"—the 20-30 minute span when their brain produces peak melatonin[cite: 287]. Miss it, and you'll hit a wall of cortisol ("second wind"). [cite_start]Catch it, and sleep feels effortless[cite: 288].</p>
          
          {/* TRY THIS TONIGHT - Gold Box Style (Simulated) */}
          <div className="bg-soft-blush p-4 rounded-lg my-4 border border-gold-accent">
            <h4 className="font-semibold text-sm mb-1">Try This Tonight:</h4>
            <p className="text-sm">Notice when your child naturally rubs eyes, yawns, or zones out. [cite_start]That's the window[cite: 290]. [cite_start]Aim to start the bedtime routine 10-15 minutes before those cues appear[cite: 291].</p>
          </div>

          <h3 className="text-lg font-semibold mb-2">2. Environment: The Sleep Surroundings</h3>
          [cite_start]<p className="text-sm mb-2">Audit the five senses[cite: 293]:</p>
          <ul className="list-disc list-inside space-y-1 ml-4 text-sm mb-2">
            [cite_start]<li>**Sight:** Is the light too bright? [cite: 294]</li>
            [cite_start]<li>**Sound:** Is there unpredictable noise? [cite: 295]</li>
            [cite_start]<li>**Smell:** Clean sheets and mild scents calm the nervous system[cite: 296, 297].</li>
            [cite_start]<li>**Touch:** Pajamas soft, no itchy tags[cite: 298].</li>
            [cite_start]<li>**Temperature:** Slightly cool; warm air delays melatonin[cite: 299, 300].</li>
          </ul>
        </div>
        
        {/* Column 2 */}
        <div>
          <h4 className="font-semibold text-md mt-4 mb-2">Score it:</h4>
          [cite_start]<p className="text-sm mb-2">0 = disruptive, 1 = okay, 2 = ideal[cite: 303]. [cite_start]Add your five scores[cite: 304]. [cite_start]If below 8, tweak the room first before trying a new method[cite: 305].</p>

          {/* SLEEP SCIENCE SIMPLIFIED - Lavender Box Style (Simulated) */}
          <div className="bg-lavender-mist p-4 rounded-lg my-4 text-sm border border-lavender-accent">
            <h4 className="font-semibold text-xs uppercase mb-1">Sleep Science Simplified:</h4>
            [cite_start]<p>Your child's brain learns "sleep happens here" when the sensory profile is consistent night to night[cite: 307].</p>
          </div>

          <h3 className="text-lg font-semibold mb-2">3. Emotion: The Pre-Sleep Connection</h3>
          [cite_start]<p className="text-sm mb-2">A regulated body can't happen without a regulated heart[cite: 310]. [cite_start]Audit connection by asking if you shared a calm moment, if your goodbye was gentle, and if your tone is calm when guiding sleep[cite: 312, 313, 314].</p>
          
          {/* COMMON MISTAKE - Gold Box Style (Simulated) */}
          <div className="bg-soft-blush p-4 rounded-lg my-4 border border-gold-accent">
            <h4 className="font-semibold text-sm mb-1">Common Mistake:</h4>
            <p className="text-sm">Rushing through bedtime rituals. [cite_start]The final five minutes are the most powerful cue of the entire day[cite: 316].</p>

          </div>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">STEP 2: THE 7-DAY SLEEP LOG</h2>
          <p className="mb-2">You'll see your pattern emerge. [cite_start]Often, what feels like "random wakeups" are timing issues or emotional carryovers from the day[cite: 320].</p>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">STEP 3: READINESS ASSESSMENT</h2>
          [cite_start]<p className="mb-2">Every bedtime challenge has one of three roots[cite: 325]:</p>
          <ul className="list-disc list-inside space-y-1 ml-4 text-sm mb-4">
            [cite_start]<li>**Biological:** overtiredness, hunger, overstimulation[cite: 326, 327].</li>
            [cite_start]<li>**Environmental:** light, sound, temperature inconsistency[cite: 328, 329].</li>
            [cite_start]<li>**Emotional:** fear, separation anxiety, or lack of closure from the day[cite: 330].</li>
          </ul>
          <p className="text-sm">You don't fix all three at once. [cite_start]Start where the evidence points[cite: 331].</p>

          <h4 className="font-semibold text-md mt-4 mb-2 text-center">YOUR SLEEP SNAPSHOT SUMMARY</h4>
          <p className="text-sm mb-2 text-center">By now, you've collected your first week of data. [cite_start]The groundwork for lasting change[cite: 333].</p>
          
          {/* KEY TAKEAWAY - Bottom Callout */}
          <div className="bg-gray-50 p-4 rounded-lg my-4 border border-gray-300 text-sm">
            <h4 className="font-semibold text-sm mb-1">Key Takeaway:</h4>
            [cite_start]<p>Awareness always precedes improvement[cite: 335]. Calm isn't found. [cite_start]It is measured, practiced, and earned night by night[cite: 336].</p>
          </div>
          <p className="font-semibold text-sm mt-4 uppercase text-center text-sidebar-primary-foreground">PROGRESS CUE</p>
          <p className="text-sm text-center">You're ready to move into Chapter 4: Environment & Bedtime Routine Design.</p>
        </div>
      </div>
    </div>
  );
};

export default Chapter3;

