"use client";

import React from "react";
import SelfCareLogForm from "@/components/SelfCareLogForm";

const SelfCareTracker: React.FC = () => {
  return (
    <div className="content-wrapper p-6 md:p-8 max-w-4xl mx-auto bg-lavender-50 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6 text-sidebar-primary-foreground">Parent Self-Care Tracker</h1>
      <p className="text-center text-gray-600 mb-8">You can't pour from an empty cup. Track small daily moments of restoration for the week.</p>
      <SelfCareLogForm />
    </div>
  );
};

export default SelfCareTracker;