import React from 'react';

const BedtimeScripts = () => {
  return (
    <div className="content-wrapper p-6 md:p-8">
      <h1 className="text-3xl font-bold mb-6 text-sidebar-primary-foreground">Bedtime & Night-Waking Scripts</h1>
      [cite_start]<p className="text-gray-600 mb-6">Goal: Give parents ready-to-use phrases that soothe and guide without reinforcing protests. [cite: 689, 690]</p>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Column 1: Pre-Sleep & Lights Out */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground border-b pb-2">Pre-Bed Connection Script</h2>
          <ul className="list-disc list-inside space-y-2 ml-4 text-sm mb-6">
            [cite_start]<li>"It's almost bedtime. Let's help your body feel sleepy." [cite: 692]</li>
            [cite_start]<li>"The moon is up—time for us to slow down." [cite: 693]</li>
            [cite_start]<li>"You're safe, and I'll stay close until you feel calm." [cite: 694]</li>
          </ul>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground border-b pb-2">Lights-Out Script</h2>
          <ul className="list-disc list-inside space-y-2 ml-4 text-sm mb-6">
            [cite_start]<li>"It's sleep time now. The moon is watching, and I'll check on you soon." [cite: 696]</li>
            [cite_start]<li>"Your bed is cozy, your toys are resting too. It's time for your body to rest." [cite: 697]</li>
          </ul>
        </div>

        {/* Column 2: Night Waking & Boundaries */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground border-b pb-2">Night-Waking Script</h2>
          <ul className="list-disc list-inside space-y-2 ml-4 text-sm mb-6">
            [cite_start]<li>"It's still nighttime, my love. Your bed is safe. Close your eyes; I'm here." [cite: 700]</li>
            [cite_start]<li>"You're okay—your blanket, your bed, and I are all right here." [cite: 701]</li>
            [cite_start]<li>"It's sleep time, not play time. Let's take a deep breath together." [cite: 702]</li>
          </ul>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground border-b pb-2">Boundary Reset Script (for repeated protests)</h2>
          <blockquote className="border-l-4 border-gold-accent pl-4 italic text-sm mb-6">
            [cite_start]"It's still bedtime. I'll check in after two minutes. You can lie down and rest while you wait." [cite: 704, 705]
          </blockquote>

          {/* PARENT NOTE - Final Guidance */}
          <div className="bg-lavender-mist p-4 rounded-lg my-4 border border-lavender-accent text-sm">
            <h4 className="font-semibold text-sm mb-1">Parent Note:</h4>
            <p>Speak gently, pause between phrases, and repeat consistently. [cite_start]Your tone is the anchor that restores emotional safety. [cite: 707]</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BedtimeScripts;
