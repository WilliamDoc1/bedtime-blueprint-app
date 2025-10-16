import React from 'react';

const Chapter1 = () => {
  return (
    <div className="chapter-content-wrapper p-6 md:p-8">
      <h1 className="text-3xl font-bold text-center mb-6">THE NIGHT YOU HAVE BEEN DREAMING OF</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">WELCOME TO CALM EVENINGS</h2>
          [cite_start]<p className="mb-4">Every parent dreams of the moment when bedtime feels peaceful[cite: 40]. [cite_start]When tiny eyelids grow heavy, the home softens into quiet, and everyone finally exhales[cite: 41]. If that still feels far away, you're not alone. [cite_start]Most families find bedtime to be the hardest hour of the day[cite: 42].</p>
          <p className="mb-4">The good news? Peaceful nights are not a mystery. [cite_start]They're the result of rhythm, safety, and connection[cite: 43]. [cite_start]These are three ingredients that this guide will help you master[cite: 44].</p>
          
          {/* TRY THIS TONIGHT - Gold Box Style (Simulated) */}
          <div className="bg-soft-blush p-4 rounded-lg my-4 border border-gold-accent">
            <h4 className="font-semibold text-sm mb-1">Try This Tonight:</h4>
            [cite_start]<p className="text-sm">Lower the lights 45 minutes before bedtime[cite: 46]. [cite_start]Light cues tell your child's body, "Sleep is coming"[cite: 46].</p>
          </div>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">A COMPASSIONATE PATH TO REST</h2>
          <p className="mb-4">Sleep is not a luxury. [cite_start]It is a pillar of your child's health and your family's wellbeing[cite: 48].</p>
          
          <h4 className="font-semibold text-md mt-4 mb-2">When nights improve:</h4>
          <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
            [cite_start]<li>Behavior settles, moods lift, patience grows[cite: 50].</li>
            [cite_start]<li>Your toddler's brain consolidates memories and learns[cite: 51].</li>
            [cite_start]<li>Your body recovers—immune function, hormones, mental clarity return[cite: 52].</li>
            [cite_start]<li>Family tension decreases[cite: 53].</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-semibold text-md mb-2">What This Blueprint Delivers:</h4>
          [cite_start]<p className="mb-4">You're about to walk through a **21-day reset** that blends gentle structure with emotional safety[cite: 55].</p>
          
          <h4 className="font-semibold text-md mb-2">You'll learn:</h4>
          <ul className="list-disc list-inside space-y-1 ml-4 text-sm mb-4">
            [cite_start]<li>How to build risk-aware sleep foundations that protect and comfort your child[cite: 57].</li>
            [cite_start]<li>How to read your child's natural sleep cues[cite: 58].</li>
            [cite_start]<li>How to design a calm environment and routine that lowers cortisol levels[cite: 59].</li>
            [cite_start]<li>How to guide bedtime transitions without tears or power struggles[cite: 60].</li>
          </ul>
          
          <p className="mb-4">This isn't about rigid schedules. [cite_start]It's about predictable patterns that allow everyone to rest[cite: 61]. [cite_start]**Predictability is the opposite of control.** It gives your child freedom to relax because they already know what's next[cite: 62].</p>
          
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground">WHY GENTLE WORKS</h2>
          [cite_start]<p className="mb-4">Children fall asleep when their nervous systems feel safe[cite: 65]. [cite_start]Science confirms that the bedtime struggle isn't about "stubbornness"; it's about overstimulation[cite: 65, 66]. [cite_start]Gentle, connection-based approaches regulate the nervous system first, so cooperation follows naturally[cite: 66].</p>

          {/* HOW TO USE THIS BOOK - Lavender Box Style (Simulated) */}
          <div className="bg-lavender-mist p-4 rounded-lg my-4 text-sm border border-lavender-accent">
            <h4 className="font-semibold text-sm mb-1">How to Use This Book:</h4>
            <ol className="list-decimal list-inside space-y-1 ml-4 text-sm">
              <li>Read one chapter at a time. [cite_start]Each ends with key takeaways and an action box[cite: 71].</li>
              <li>Implement slowly. [cite_start]One or two changes per week are enough[cite: 72].</li>
              <li>Track your progress. [cite_start]Use the printable logs and checklists at the back[cite: 73, 74].</li>
              <li>Celebrate wins. [cite_start]Even one easier bedtime is momentum[cite: 75].</li>
            </ol>
            <p className="mt-3">You'll see steady progress. [cite_start]Not overnight miracles, but cumulative peace[cite: 76].</p>
          </div>
          
          <p className="font-semibold text-sm mt-4 uppercase">Reflection Prompt:</p>
          [cite_start]<p className="text-sm">What would bedtime feel like if calm became the default instead of chaos? [cite: 78]</p>
          [cite_start]<p className="text-sm mt-2">**Before You Begin:** Set an intention for these 21 days[cite: 80]. Write it down. [cite_start]Keep it somewhere visible[cite: 81]. [cite_start]This small act rewires your mindset from reacting to leading[cite: 82].</p>
        </div>
      </div>
    </div>
  );
};

export default Chapter1;
