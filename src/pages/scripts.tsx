import React from 'react';

const BedtimeScripts = () => {
  return (
    <div className="content-wrapper p-6 md:p-8">
      <h1 className="text-3xl font-bold mb-6 text-sidebar-primary-foreground">Bedtime & Night-Waking Scripts Template</h1>
      <p className="text-gray-600 mb-6">Goal: Give parents ready-to-use phrases that soothe and guide without reinforcing protests.</p>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Column 1: Pre-Sleep & Lights Out */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground border-b pb-2">Pre-Bed Connection Script</h2>
          <ul className="list-disc list-inside space-y-2 ml-4 text-sm mb-6">
            <li>"It's almost bedtime. Let's help your body feel sleepy."</li>
            <li>"The moon is up—time for us to slow down."</li>
            <li>"You're safe, and I'll stay close until you feel calm."</li>
          </ul>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground border-b pb-2">Lights-Out Script</h2>
          <ul className="list-disc list-inside space-y-2 ml-4 text-sm mb-6">
            <li>"It's sleep time now. The moon is watching, and I'll check on you soon."</li>
            <li>"Your bed is cozy, your toys are resting too. It's time for your body to rest."</li>
          </ul>
        </div>

        {/* Column 2: Night Waking & Boundaries */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground border-b pb-2">Night-Waking Script</h2>
          <ul className="list-disc list-inside space-y-2 ml-4 text-sm mb-6">
            <li>"It's still nighttime, my love. Your bed is safe. Close your eyes; I'm here."</li>
            <li>"You're okay—your blanket, your bed, and I are all right here."</li>
            <li>"It's sleep time, not play time. Let's take a deep breath together."</li>
          </ul>

          <h2 className="text-xl font-semibold mb-3 text-sidebar-primary-foreground border-b pb-2">Boundary Reset Script (for repeated protests)</h2>
          <blockquote className="border-l-4 border-gold-accent pl-4 italic text-sm mb-6">
            "It's still bedtime. I'll check in after two minutes. You can lie down and rest while you wait."
          </blockquote>

          {/* PARENT NOTE - Final Guidance */}
          <div className="bg-lavender-mist p-4 rounded-lg my-4 border border-lavender-accent text-sm">
            <h4 className="font-semibold text-sm mb-1">Parent Note:</h4>
            <p>Speak gently, pause between phrases, and repeat consistently. Your tone is the anchor that restores emotional safety.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BedtimeScripts;
