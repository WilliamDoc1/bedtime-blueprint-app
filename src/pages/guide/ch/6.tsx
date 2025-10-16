import React from 'react';

const Chapter6 = () => {
  return (
    <div className="chapter-content-wrapper p-6 md:p-8">
      <h1 className="text-3xl font-bold text-center mb-6">BEDTIME ROUTINES AND EMOTIONAL COACHING</h1>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">WHY WORDS MATTER AT BEDTIME</h2>
          <p className="mb-4">The last ten minutes of the day shape how your child feels about sleep. Children don't fall asleep because they're told to. They fall asleep because they feel safe enough to let go. Your tone, phrasing, and boundaries form the emotional bridge between wakefulness and rest.</p>
          
          {/* PARENT TIP - Lavender Box Style (Simulated) */}
          <div className="bg-lavender-mist p-4 rounded-lg my-4 border border-lavender-accent">
            <h4 className="font-semibold text-sm mb-1">Parent Tip:</h4>
            <p className="text-sm">You are your child's emotional thermostat. When you lower your volume, their nervous system mirrors yours.</p>
          </div>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">1. THE ROLE OF EMOTIONAL COACHING</h2>
          <p className="mb-4">Emotional coaching means naming and validating feelings while guiding behavior. At bedtime, this turns power struggles into cooperation. Connection before correction keeps your child regulated—and regulation is the real path to sleep.</p>
          <p className="font-semibold text-sm mb-2">Example:</p>
          <p className="text-sm mb-4">"You don't want to stop playing - that's hard. Let's say goodnight to your toys together so they can rest too." This simple shift says: "I see you, and I'll lead you."</p>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">2. SETTING GENTLE, FIRM BOUNDARIES</h2>
          <p className="mb-2">Boundaries are kindness in structure form. They say, "I will keep you safe, even when you're upset."</p>

          <table className="min-w-full divide-y divide-gray-300 border border-gray-200 text-sm mb-4">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 text-left font-medium text-gray-700">Principle</th>
                <th className="px-3 py-2 text-left font-medium text-gray-700">Example</th>
                <th className="px-3 py-2 text-left font-medium text-gray-700">Why It Works</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="px-3 py-2 whitespace-nowrap">Predictable</td>
                <td className="px-3 py-2 whitespace-nowrap">"Two stories, then lights out."</td>
                <td className="px-3 py-2 whitespace-nowrap">Reduces anxiety by removing uncertainty.</td>
              </tr>
              <tr>
                <td className="px-3 py-2 whitespace-nowrap">Calmly Enforced</td>
                <td className="px-3 py-2 whitespace-nowrap">Repeat rule without debate.</td>
                <td className="px-3 py-2 whitespace-nowrap">Consistency signals safety.</td>
              </tr>
              <tr>
                <td className="px-3 py-2 whitespace-nowrap">Empathetic</td>
                <td className="px-3 py-2 whitespace-nowrap">"I know you want more. We can read again tomorrow."</td>
                <td className="px-3 py-2 whitespace-nowrap">Validation keeps trust intact.</td>
              </tr>
            </tbody>
          </table>
          
          {/* COMMON MISTAKE - Gold Box Style (Simulated) */}
          <div className="bg-soft-blush p-4 rounded-lg my-4 border border-gold-accent">
            <h4 className="font-semibold text-sm mb-1">Common Mistake:</h4>
            <p className="text-sm">Explaining too much after bedtime. Toddlers process tone more than logic once tired.</p>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">3. SCRIPTS FOR COMMON SCENARIOS</h2>
          <p className="mb-2">These are ready-to-use bedtime scripts designed to keep nights calm and predictable.</p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-sm mb-4">
            <li>**"One More Story" Requests:** "We already read our two stories, sweetheart. You can choose the first story for tomorrow."</li>
            <li>**Fear of the Dark:** "The moonlight is our friend. The stars are tiny nightlights. You're safe, and I'm nearby."</li>
            <li>**Separation Anxiety:** "You're safe in your bed, and I'll check on you in a few minutes. You can rest while I tidy up."</li>
            <li>**Boundary Testing:** "It's okay to feel upset. My job is to help you rest. The rule stays the same, even when it's hard.”</li>
          </ul>

          {/* TRY THIS TONIGHT - Gold Box Style (Simulated) */}
          <div className="bg-soft-blush p-4 rounded-lg my-4 border border-gold-accent">
            <h4 className="font-semibold text-sm mb-1">Try This Tonight:</h4>
            <p className="text-sm">Choose one script and practice it aloud before bedtime. Familiarity in your tone helps you stay calm during pushback.</p>
          </div>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">4. PARENTAL SELF-REGULATION</h2>
          <p className="mb-4">Children borrow your calm, or your chaos. Take a slow breath before entering their room. Remind yourself: "I set the pace. My calm is the cue." Bedtime is not about control. It's about leadership.</p>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">5. EMOTIONAL CONNECTION RITUALS</h2>
          <ul className="list-disc list-inside space-y-2 ml-4 text-sm mb-4">
            <li>**"Thank you" moments**—list one thing you each loved about the day.</li>
            <li>**Gentle touch**—a hand on the back or cheek for 10 seconds lowers heart rate and builds trust.</li>
            <li>**Lullaby or quiet hum**—the rhythmic sound regulates breathing for both parent and child.</li>
          </ul>
          
          {/* SLEEP SCIENCE SIMPLIFIED - Lavender Box Style (Simulated) */}
          <div className="bg-lavender-mist p-4 rounded-lg my-4 text-sm border border-lavender-accent">
            <h4 className="font-semibold text-xs uppercase mb-1">Sleep Science Simplified:</h4>
            <p>A parent's heartbeat rhythm and voice frequency can trigger parasympathetic responses, literally slowing your child's pulse.</p>
          </div>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">6. BEDTIME CUE SCRIPT</h2>
          <p className="mb-2">Here's a short bedtime sequence you can use word-for-word:</p>
          <blockquote className="border-l-4 border-gold-accent pl-4 italic text-sm mb-4">
            "The lights are dim. Your body feels heavy.<br/>
            The moon is shining, and it's time to rest.<br/>
            You did your best today—now it's time to dream."
          </blockquote>
          <p className="text-sm">Repeat this every night. The brain links familiar rhythm and phrasing to the sleep cycle, becoming an unconscious cue for rest.</p>
          
          <p className="font-semibold text-sm mt-4 uppercase">Reflection Prompt:</p>
          <p className="text-sm">Which bedtime phrase feels most natural to you? Authenticity matters more than perfection.</p>
          
          <p className="font-semibold text-sm mt-4 uppercase text-center text-sidebar-primary-foreground">PROGRESS CUE</p>
          <p className="text-sm text-center">By now, you've mastered timing, safety, and emotional rhythm. Your next step is choosing how to guide independent sleep: gently and confidently.</p>
        </div>
      </div>
    </div>
  );
};

export default Chapter6;
