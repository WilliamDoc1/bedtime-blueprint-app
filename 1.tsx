import React from 'react';

const Chapter1 = () => {
  return (
    <div className="chapter-content-wrapper p-6 md:p-8">
      <h1 className="text-3xl font-bold text-center mb-6">THE NIGHT YOU HAVE BEEN DREAMING OF</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">WELCOME TO CALM EVENINGS</h2>
          [cite_start]<p className="mb-4">Every parent dreams of the moment when bedtime feels peaceful[cite: 165]. [cite_start]When tiny eyelids grow heavy, the home softens into quiet, and everyone finally exhales[cite: 166]. If that still feels far away, you're not alone. [cite_start]Most families find bedtime to be the hardest hour of the day[cite: 167].</p>
          <p className="mb-4">The good news? [cite_start]Peaceful nights are not a mystery[cite: 168]. [cite_start]They're the result of rhythm, safety, and connection[cite: 168]. [cite_start]These are three ingredients that this guide will help you master[cite: 169].</p>
          
          {/* TRY THIS TONIGHT - Gold Box Style (Simulated) */}
          <div className="bg-soft-blush p-4 rounded-lg my-4 border border-gold-accent">
            <h4 className="font-semibold text-sm mb-1">Try This Tonight:</h4>
            <p className="text-sm">Lower the lights 45 minutes before bedtime. [cite_start]Light cues tell your child's body, "Sleep is coming"[cite: 170, 171].</p>
          </div>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">A COMPASSIONATE PATH TO REST</h2>
          <p className="mb-4">Sleep is not a luxury. [cite_start]It is a pillar of your child's health and your family's wellbeing[cite: 173].</p>
          
          <h4 className="font-semibold text-md mt-4 mb-2">When nights improve:</h4>
          <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
            [cite_start]<li>Behavior settles, moods lift, patience grows[cite: 175].</li>
            [cite_start]<li>Your toddler's brain consolidates memories and learns[cite: 176].</li>
            [cite_start]<li>Your body recovers—immune function, hormones, mental clarity return[cite: 177].</li>
            [cite_start]<li>Family tension decreases[cite: 178].</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-semibold text-md mb-2">What This Blueprint Delivers:</h4>
          [cite_start]<p className="mb-4">You're about to walk through a **21-day reset** that blends gentle structure with emotional safety[cite: 180].</p>
          
          <h4 className="font-semibold text-md mb-2">You'll learn:</h4>
          <ul className="list-disc list-inside space-y-1 ml-4 text-sm mb-4">
            [cite_start]<li>How to build risk-aware sleep foundations that protect and comfort your child[cite: 182].</li>
            [cite_start]<li>How to read your child's natural sleep cues[cite: 183].</li>
            [cite_start]<li>How to design a calm environment and routine that lowers cortisol levels[cite: 184].</li>
            [cite_start]<li>How to guide bedtime transitions without tears or power struggles[cite: 185].</li>
          </ul>
          
          <p className="mb-4">This isn't about rigid schedules. [cite_start]It's about predictable patterns that allow everyone to rest[cite: 186]. [cite_start]**Predictability is the opposite of control.** It gives your child freedom to relax because they already know what's next[cite: 187].</p>
          
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">WHY GENTLE WORKS</h2>
          [cite_start]<p className="mb-4">Children fall asleep when their nervous systems feel safe[cite: 190]. [cite_start]Science confirms that the bedtime struggle isn't about "stubbornness"; it's about overstimulation[cite: 190, 191]. [cite_start]Gentle, connection-based approaches regulate the nervous system first, so cooperation follows naturally[cite: 191].</p>

          {/* HOW TO USE THIS BOOK - Lavender Box Style (Simulated) */}
          <div className="bg-lavender-mist p-4 rounded-lg my-4 text-sm border border-lavender-accent">
            <h4 className="font-semibold text-sm mb-1">How to Use This Book:</h4>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Read one chapter at a time. [cite_start]Each ends with key takeaways and an action box[cite: 196].</li>
              <li>Implement slowly. [cite_start]One or two changes per week are enough[cite: 197].</li>
              <li>Track your progress. [cite_start]Use the printable logs and checklists at the back[cite: 198, 199].</li>
              <li>Celebrate wins. [cite_start]Even one easier bedtime is momentum[cite: 200].</li>
            </ol>
            <p className="mt-3">You'll see steady progress. [cite_start]Not overnight miracles, but cumulative peace[cite: 201].</p>
          </div>
          
          <p className="font-semibold text-sm mt-4 uppercase">Reflection Prompt:</p>
          [cite_start]<p className="text-sm">What would bedtime feel like if calm became the default instead of chaos? [cite: 203]</p>
          [cite_start]<p className="text-sm mt-2">**Before You Begin:** Set an intention for these 21 days[cite: 205]. Write it down. Keep it somewhere visible. [cite_start]This small act rewires your mindset from reacting to leading[cite: 206, 207].</p>
        </div>
      </div>
    </div>
  );
};

export default Chapter1;

