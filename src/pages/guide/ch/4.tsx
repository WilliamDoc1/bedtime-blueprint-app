import React from 'react';

const Chapter4 = () => {
  return (
    <div className="chapter-content-wrapper p-6 md:p-8">
      <h1 className="text-3xl font-bold text-center mb-6">ENVIRONMENT AND BEDTIME ROUTINE DESIGN</h1>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">WHY THE ENVIRONMENT MATTERS</h2>
          [cite_start]<p className="mb-4">Your child's bedroom is not just a room; it's a signal system[cite: 220]. [cite_start]Every sight, sound, and scent either tells the brain "stay alert" or "it's safe to sleep"[cite: 221]. [cite_start]Designing a sleep-friendly space is one of the fastest, most visible wins you can create[cite: 222].</p>
          
          {/* PARENT TIP - Lavender Box Style (Simulated) */}
          <div className="bg-lavender-mist p-4 rounded-lg my-4 border border-lavender-accent">
            <h4 className="font-semibold text-sm mb-1">Parent Tip:</h4>
            [cite_start]<p className="text-sm">Most families over-correct with décor[cite: 224]. [cite_start]The goal isn't Pinterest-perfect; it's sensory calm[cite: 224].</p>
          </div>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">1. LIGHTING: TEACHING THE BRAIN TO WIND DOWN</h2>
          [cite_start]<p className="mb-2">Light is the master cue for melatonin[cite: 228].</p>
          <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
            [cite_start]<li>**Day:** open curtains, bright natural light[cite: 229].</li>
            [cite_start]<li>**Evening:** switch to amber or dim lamps 45 minutes before bed[cite: 231].</li>
            [cite_start]<li>**Night:** use total darkness or a single soft nightlight away from the bed[cite: 232].</li>
          </ul>

          {/* TRY THIS TONIGHT - Gold Box Style (Simulated) */}
          <div className="bg-soft-blush p-4 rounded-lg my-4 border border-gold-accent">
            <h4 className="font-semibold text-sm mb-1">Try This Tonight:</h4>
            [cite_start]<p className="text-sm">Replace overhead lighting with a warm lamp and notice how quickly voices drop in volume[cite: 234].</p>
          </div>
          
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">2. SOUND & SCENT</h2>
          <ul className="list-disc list-inside space-y-1 ml-4 text-sm mb-4">
            <li>**Sound:** Choose one continuous background tone: white-noise or soft rainfall. [cite_start]Avoid lullabies on loop; lyrics keep the mind alert[cite: 236].</li>
            [cite_start]<li>**Scent:** A mild lavender or vanilla diffuser can create a "sleep anchor"[cite: 237]. [cite_start]Keep it subtle and constant[cite: 237].</li>
            [cite_start]<li>**Silence:** For some children, silence feels unsafe; gentle sound builds security[cite: 238].</li>
          </ul>

          {/* SLEEP SCIENCE SIMPLIFIED - Lavender Box Style (Simulated) */}
          <div className="bg-lavender-mist p-4 rounded-lg my-4 text-sm border border-lavender-accent">
            <h4 className="font-semibold text-xs uppercase mb-1">Sleep Science Simplified:</h4>
            [cite_start]<p>Consistent auditory patterns lower heart rate variability, signaling the parasympathetic system to take over, exactly what you want before sleep[cite: 240].</p>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">3. TEMPERATURE & TOUCH</h2>
          <ul className="list-disc list-inside space-y-1 ml-4 text-sm mb-4">
            [cite_start]<li>Ideal room temperature: 20-22°C (68-72°F)[cite: 243].</li>
            [cite_start]<li>Avoid fleece pajamas if the child runs warm[cite: 244].</li>
            [cite_start]<li>Choose breathable cotton bedding[cite: 245].</li>
            [cite_start]<li>A small weighted blanket (within safety limits) can enhance the sense of grounding[cite: 246].</li>
          </ul>
          
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">4. DESIGNING THE ROUTINE FLOW</h2>
          [cite_start]<p className="mb-2">Think of the routine as choreography: Same order, gentle rhythm[cite: 248].</p>
          <ul className="list-disc list-inside space-y-1 ml-4 text-sm mb-4">
            [cite_start]<li>Bath or warm wipe-down [cite: 249]</li>
            [cite_start]<li>Pajamas + teeth + water sip [cite: 250]</li>
            [cite_start]<li>Lights dim → storytime [cite: 251]</li>
            [cite_start]<li>Bedtime cue (phrase or song) [cite: 252]</li>
            [cite_start]<li>Final reassurance → sleep [cite: 253]</li>
          </ul>

          {/* COMMON MISTAKE - Gold Box Style (Simulated) */}
          <div className="bg-soft-blush p-4 rounded-lg my-4 border border-gold-accent">
            <h4 className="font-semibold text-sm mb-1">Common Mistake:</h4>
            <p className="text-sm">Adding activities to "tire them out." [cite_start]Stimulation $\neq$ fatigue; overstimulation delays sleep hormones[cite: 255].</p>
          </div>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">5. YOUR ROUTINE TEMPLATE</h2>
          <table className="min-w-full divide-y divide-gray-300 border border-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-3 text-left font-medium text-gray-700">Time</th>
                <th className="px-3 py-3 text-left font-medium text-gray-700">Activity</th>
                <th className="px-3 py-3 text-left font-medium text-gray-700">Parent Focus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="px-3 py-2 whitespace-nowrap">6:30 PM</td>
                <td className="px-3 py-2 whitespace-nowrap">Bath & wind-down music</td>
                [cite_start]<td className="px-3 py-2 whitespace-nowrap">Calm voice, slow movements [cite: 258]</td>
              </tr>
              <tr>
                <td className="px-3 py-2 whitespace-nowrap">6:50 PM</td>
                <td className="px-3 py-2 whitespace-nowrap">Pajamas + lights dim</td>
                [cite_start]<td className="px-3 py-2 whitespace-nowrap">Soft touch, predictable phrasing [cite: 258]</td>
              </tr>
              <tr>
                <td className="px-3 py-2 whitespace-nowrap">7:00 PM</td>
                <td className="px-3 py-2 whitespace-nowrap">Story or song</td>
                [cite_start]<td className="px-3 py-2 whitespace-nowrap">Emotional connection [cite: 258]</td>
              </tr>
              <tr>
                <td className="px-3 py-2 whitespace-nowrap">7:15 PM</td>
                <td className="px-3 py-2 whitespace-nowrap">Final phrase + bed</td>
              <td className="px-3 py-2 whitespace-nowrap">Consistency &gt; length</td>
              </tr>
            </tbody>
          </table>

          {/* REFLECTION PROMPT - Bottom Callout */}
          <div className="bg-gray-50 p-4 rounded-lg my-6 border border-gray-300">
            <h4 className="font-semibold text-sm mb-1">Reflection Prompt:</h4>
            <p className="text-sm">How does your home feel at 7 PM? Hurried or peaceful? [cite_start]What one cue can you change tonight? [cite: 260]</p>
          </div>

          <p className="font-semibold text-sm mt-4 uppercase text-center text-sidebar-primary-foreground">PROGRESS CUE</p>
          [cite_start]<p className="text-sm text-center">Once your environment and sequence are steady for three nights, your child's body clock begins to anticipate rest automatically[cite: 262]. [cite_start]That's momentum[cite: 263].</p>
        </div>
      </div>
    </div>
  );
};

export default Chapter4;
