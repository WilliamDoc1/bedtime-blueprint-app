import React from 'react';

const Chapter1 = () => {
  return (
    <div className="chapter-content-wrapper p-6 md:p-8">
      <h1 className="text-3xl font-bold text-center mb-6">THE NIGHT YOU HAVE BEEN DREAMING OF</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">WELCOME TO CALM EVENINGS</h2>
          <p className="mb-4">Every parent dreams of the moment when bedtime feels peaceful. When tiny eyelids grow heavy, the home softens into quiet, and everyone finally exhales. If that still feels far away, you're not alone. Most families find bedtime to be the hardest hour of the day.</p>
          <p className="mb-4">The good news? Peaceful nights are not a mystery. They're the result of rhythm, safety, and connection. These are three ingredients that this guide will help you master.</p>
          
          {/* TRY THIS TONIGHT - Gold Box Style (Simulated) */}
          <div className="bg-soft-blush p-4 rounded-lg my-4 border border-gold-accent">
            <h4 className="font-semibold text-sm mb-1">Try This Tonight:</h4>
            <p className="text-sm">Lower the lights 45 minutes before bedtime. Light cues tell your child's body, "Sleep is coming".</p>
          </div>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">A COMPASSIONATE PATH TO REST</h2>
          <p className="mb-4">Sleep is not a luxury. It is a pillar of your child's health and your family's wellbeing.</p>
          
          <h4 className="font-semibold text-md mt-4 mb-2">When nights improve:</h4>
          <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
            <li>Behavior settles, moods lift, patience grows.</li>
            <li>Your toddler's brain consolidates memories and learns.</li>
            <li>Your body recovers—immune function, hormones, mental clarity return.</li>
            <li>Family tension decreases.</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-semibold text-md mb-2">What This Blueprint Delivers:</h4>
          <p className="mb-4">You're about to walk through a 21-day reset that blends gentle structure with emotional safety.</p>
          
          <h4 className="font-semibold text-md mb-2">You'll learn:</h4>
          <ul className="list-disc list-inside space-y-1 ml-4 text-sm mb-4">
            <li>How to build risk-aware sleep foundations that protect and comfort your child.</li>
            <li>How to read your child's natural sleep cues.</li>
            <li>How to design a calm environment and routine that lowers cortisol levels.</li>
            <li>How to guide bedtime transitions without tears or power struggles.</li>
          </ul>
          
          <p className="mb-4">This isn't about rigid schedules. It's about predictable patterns that allow everyone to rest. Predictability is the opposite of control. It gives your child freedom to relax because they already know what's next.</p>
          
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">WHY GENTLE WORKS</h2>
          <p className="mb-4">Children fall asleep when their nervous systems feel safe. Science confirms that the bedtime struggle isn't about "stubbornness"; it's about overstimulation. Gentle, connection-based approaches regulate the nervous system first, so cooperation follows naturally.</p>

          {/* HOW TO USE THIS BOOK - Lavender Box Style (Simulated) */}
          <div className="bg-lavender-mist p-4 rounded-lg my-4 text-sm border border-lavender-accent">
            <h4 className="font-semibold text-sm mb-1">How to Use This Book:</h4>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Read one chapter at a time. Each ends with key takeaways and an action box.</li>
              <li>Implement slowly. One or two changes per week are enough.</li>
              <li>Track your progress. Use the printable logs and checklists at the back.</li>
              <li>Celebrate wins. Even one easier bedtime is momentum.</li>
            </ol>
            <p className="mt-3">You'll see steady progress. Not overnight miracles, but cumulative peace.</p>
          </div>
          
          <p className="font-semibold text-sm mt-4 uppercase">Reflection Prompt:</p>
          <p className="text-sm">What would bedtime feel like if calm became the default instead of chaos?</p>
          <p className="text-sm mt-2">Before You Begin: Set an intention for these 21 days. Write it down. Keep it somewhere visible. This small act rewires your mindset from reacting to leading.</p>
        </div>
      </div>
    </div>
  );
};

export default Chapter1;