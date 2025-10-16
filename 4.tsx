import React from 'react';

const Chapter4 = () => {
  return (
    <div className="chapter-content-wrapper p-6 md:p-8">
      <h1 className="text-3xl font-bold text-center mb-6">ENVIRONMENT AND BEDTIME ROUTINE DESIGN</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">WHY THE ENVIRONMENT MATTERS</h2>
          <p className="mb-4">Your child's bedroom is not just a room; it's a signal system. Every sight, sound, and scent either tells the brain "stay alert" or "it's safe to sleep". Designing a sleep-friendly space is one of the fastest, most visible wins you can create.</p>
          
          {/* PARENT TIP - Lavender Box Style */}
          <div className="bg-lavender-mist p-4 rounded-lg my-4 border border-lavender-accent">
            <h4 className="font-semibold text-sm mb-1">Parent Tip:</h4>
            <p className="text-sm">Most families over-correct with décor. The goal isn't Pinterest-perfect; it's sensory calm.</p>
          </div>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">1. LIGHTING: TEACHING THE BRAIN TO WIND DOWN</h2>
          <p className="mb-2">Light is the master cue for melatonin.</p>
          <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
            <li><strong>Day:</strong> open curtains, bright natural light.</li>
            <li><strong>Evening:</strong> switch to amber or dim lamps 45 minutes before bed.</li>
            <li><strong>Night:</strong> use total darkness or a single soft nightlight away from the bed.</li>
          </ul>

          {/* TRY THIS TONIGHT - Gold Box Style */}
          <div className="bg-soft-blush p-4 rounded-lg my-4 border border-gold-accent">
            <h4 className="font-semibold text-sm mb-1">Try This Tonight:</h4>
            <p className="text-sm">Replace overhead lighting with a warm lamp and notice how quickly voices drop in volume.</p>
          </div>
          
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">2. SOUND & SCENT</h2>
          <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
            <li><strong>Sound:</strong> Choose one continuous background tone: white-noise or soft rainfall. Avoid lullabies on loop; lyrics keep the mind alert.</li>
            <li><strong>Scent:</strong> A mild lavender or vanilla diffuser can create a "sleep anchor". Keep it subtle and constant.</li>
            <li><strong>Silence:</strong> For some children, silence feels unsafe; gentle sound builds security.</li>
          </ul>

          {/* SLEEP SCIENCE SIMPLIFIED - Lavender Box Style */}
          <div className="bg-lavender-mist p-4 rounded-lg my-4 text-sm border border-lavender-accent">
            <h4 className="font-semibold text-xs uppercase mb-1">Sleep Science Simplified:</h4>
            <p>Consistent auditory patterns lower heart rate variability, signaling the parasympathetic system to take over, exactly what you want before sleep.</p>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">3. TEMPERATURE & TOUCH</h2>
          <ul className="list-disc list-inside space-y-1 ml-4 text-sm mb-4">
            <li>Ideal room temperature: 20-22°C (68-72°F).</li>
            <li>Avoid fleece pajamas if the child runs warm.</li>
            <li>Choose breathable cotton bedding.</li>
            <li>A small weighted blanket (within safety limits) can enhance the sense of grounding.</li>
          </ul>
          
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">4. DESIGNING THE ROUTINE FLOW</h2>
          <p className="mb-2">Think of the routine as choreography: Same order, gentle rhythm.</p>
          <ul className="list-disc list-inside space-y-1 ml-4 text-sm mb-4">
            <li>Bath or warm wipe-down</li>
            <li>Pajamas + teeth + water sip</li>
            <li>Lights dim → storytime</li>
            <li>Bedtime cue (phrase or song)</li>
            <li>Final reassurance → sleep</li>
          </ul>

          {/* COMMON MISTAKE - Gold Box Style */}
          <div className="bg-soft-blush p-4 rounded-lg my-4 border border-gold-accent">
            <h4 className="font-semibold text-sm mb-1">Common Mistake:</h4>
            <p className="text-sm">Adding activities to "tire them out." Stimulation ≠ fatigue; overstimulation delays sleep hormones.</p>
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
                <td className="px-3 py-2 whitespace-nowrap">Calm voice, slow movements</td>
              </tr>
              <tr>
                <td className="px-3 py-2 whitespace-nowrap">6:50 PM</td>
                <td className="px-3 py-2 whitespace-nowrap">Pajamas + lights dim</td>
                <td className="px-3 py-2 whitespace-nowrap">Soft touch, predictable phrasing</td>
              </tr>
              <tr>
                <td className="px-3 py-2 whitespace-nowrap">7:00 PM</td>
                <td className="px-3 py-2 whitespace-nowrap">Story or song</td>
                <td className="px-3 py-2 whitespace-nowrap">Emotional connection</td>
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
            <p className="text-sm">How does your home feel at 7 PM? Hurried or peaceful? What one cue can you change tonight?</p>
          </div>

          <p className="font-semibold text-sm mt-4 uppercase text-center text-sidebar-primary-foreground">PROGRESS CUE</p>
          <p className="text-sm text-center">Once your environment and sequence are steady for three nights, your child's body clock begins to anticipate rest automatically. That's momentum.</p>
        </div>
      </div>
    </div>
  );
};

export default Chapter4;

