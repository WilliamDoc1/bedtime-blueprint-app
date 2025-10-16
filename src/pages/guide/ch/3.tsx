import React from 'react';

const Chapter3 = () => {
  return (
    <div className="chapter-content-wrapper p-6 md:p-8">
      <h1 className="text-3xl font-bold text-center mb-6">SLEEP AUDIT AND READINESS ASSESSMENT</h1>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">WHY YOU NEED A SLEEP AUDIT</h2>
          [cite_start]<p className="mb-4">Before changing anything, we measure[cite: 151]. [cite_start]A **sleep audit** is like a compass: it shows where you are so you can travel without getting lost[cite: 152]. [cite_start]When you understand your child's rhythms, triggers, and environment, you can stop guessing[cite: 153]. [cite_start]You'll know why the resistance happens, not just when[cite: 154].</p>
          
          {/* PARENT TIP - Lavender Box Style (Simulated) */}
          <div className="bg-lavender-mist p-4 rounded-lg my-4 border border-lavender-accent">
            <h4 className="font-semibold text-sm mb-1">Parent Tip:</h4>
            [cite_start]<p className="text-sm">Observation replaces frustration[cite: 156]. [cite_start]When you track instead of react, you'll see progress before it feels visible[cite: 156].</p>
          </div>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">STEP 1: OBSERVE THE 3 PILLARS OF SLEEP READINESS</h2>
          [cite_start]<p className="mb-2">Sleep readiness depends on **timing, environment, and emotion**[cite: 159]. [cite_start]If one is off, bedtime wobbles[cite: 160].</p>

          <h3 className="text-lg font-semibold mt-4 mb-2">1. Timing: The Sleep Window</h3>
          [cite_start]<p className="text-sm mb-2">Every child has a "sleep window"—the 20-30 minute span when their brain produces peak melatonin[cite: 162]. Miss it, and you'll hit a wall of cortisol ("second wind"). [cite_start]Catch it, and sleep feels effortless[cite: 163].</p>
          
          {/* TRY THIS TONIGHT - Gold Box Style (Simulated) */}
          <div className="bg-soft-blush p-4 rounded-lg my-4 border border-gold-accent">
            <h4 className="font-semibold text-sm mb-1">Try This Tonight:</h4>
            <p className="text-sm">Notice when your child naturally rubs eyes, yawns, or zones out. [cite_start]That's the window[cite: 165]. [cite_start]Aim to start the bedtime routine 10-15 minutes before those cues appear[cite: 166].</p>
          </div>

          <h3 className="text-lg font-semibold mb-2">2. Environment: The Sleep Surroundings</h3>
          [cite_start]<p className="text-sm mb-2">Audit the five senses[cite: 168]:</p>
          <ul className="list-disc list-inside space-y-1 ml-4 text-sm mb-2">
            [cite_start]<li>**Sight:** Is the light too bright? [cite: 169]</li>
            [cite_start]<li>**Sound:** Is there unpredictable noise? [cite: 170]</li>
            [cite_start]<li>**Smell:** Clean sheets and mild scents calm the nervous system[cite: 171, 172].</li>
            [cite_start]<li>**Touch:** Pajamas soft, no itchy tags[cite: 173].</li>
            [cite_start]<li>**Temperature:** Slightly cool; warm air delays melatonin[cite: 174, 175].</li>
          </ul>
        </div>
        
        {/* Column 2 */}
        <div>
          <h4 className="font-semibold text-md mt-4 mb-2">Score it:</h4>
          [cite_start]<p className="text-sm mb-2">0 = disruptive, 1 = okay, 2 = ideal[cite: 178]. [cite_start]Add your five scores[cite: 179]. [cite_start]If below 8, tweak the room first before trying a new method[cite: 180].</p>

          {/* SLEEP SCIENCE SIMPLIFIED - Lavender Box Style (Simulated) */}
          <div className="bg-lavender-mist p-4 rounded-lg my-4 text-sm border border-lavender-accent">
            <h4 className="font-semibold text-xs uppercase mb-1">Sleep Science Simplified:</h4>
            [cite_start]<p>Your child's brain learns "sleep happens here" when the sensory profile is consistent night to night[cite: 182].</p>
          </div>

          <h3 className="text-lg font-semibold mb-2">3. Emotion: The Pre-Sleep Connection</h3>
          [cite_start]<p className="text-sm mb-2">A regulated body can't happen without a regulated heart[cite: 185]. [cite_start]Audit connection by asking: Did we share a calm moment today? [cite: 187] [cite_start]Was our goodbye at nap or bedtime gentle or rushed? [cite: 188] [cite_start]Is my tone calm when I say "It's time for sleep"? [cite: 189]</p>
          
          {/* COMMON MISTAKE - Gold Box Style (Simulated) */}
          <div className="bg-soft-blush p-4 rounded-lg my-4 border border-gold-accent">
            <h4 className="font-semibold text-sm mb-1">Common Mistake:</h4>
            [cite_start]<p className="text-sm">Rushing through bedtime rituals[cite: 191]. [cite_start]The final five minutes are the most powerful cue of the entire day[cite: 191].</p>
          </div>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">STEP 2: THE 7-DAY SLEEP LOG</h2>
          [cite_start]<p className="mb-2">You'll see your pattern emerge[cite: 195]. [cite_start]Often, what feels like "random wakeups" are timing issues or emotional carryovers from the day[cite: 195].</p>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">STEP 3: READINESS ASSESSMENT</h2>
          [cite_start]<p className="mb-2">Every bedtime challenge has one of three roots[cite: 200]:</p>
          <ul className="list-disc list-inside space-y-1 ml-4 text-sm mb-4">
            [cite_start]<li>**Biological:** overtiredness, hunger, overstimulation[cite: 201, 202].</li>
            [cite_start]<li>**Environmental:** light, sound, temperature inconsistency[cite: 203, 204].</li>
            [cite_start]<li>**Emotional:** fear, separation anxiety, or lack of closure from the day[cite: 205].</li>
          </ul>
          <p className="text-sm">You don't fix all three at once. [cite_start]Start where the evidence points[cite: 206].</p>

          <h4 className="font-semibold text-md mt-4 mb-2 text-center">YOUR SLEEP SNAPSHOT SUMMARY</h4>
          <p className="text-sm mb-2 text-center">By now, you've collected your first week of data. [cite_start]The groundwork for lasting change[cite: 208]. [cite_start]You're no longer operating from "I think," but from "I know"[cite: 209].</p>
          
          {/* KEY TAKEAWAY - Bottom Callout */}
          <div className="bg-gray-50 p-4 rounded-lg my-4 border border-gray-300 text-sm">
            <h4 className="font-semibold text-sm mb-1">Key Takeaway:</h4>
            [cite_start]<p>Awareness always precedes improvement[cite: 211]. Calm isn't found. [cite_start]It is measured, practiced, and earned night by night[cite: 211].</p>
          </div>
          <p className="font-semibold text-sm mt-4 uppercase text-center text-sidebar-primary-foreground">PROGRESS CUE</p>
          [cite_start]<p className="text-sm text-center">You're ready to move into Chapter 4: Environment & Bedtime Routine Design[cite: 214].</p>
        </div>
      </div>
    </div>
  );
};

export default Chapter3;
