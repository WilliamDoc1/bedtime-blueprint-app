"use client";

import React from "react";
import DailySleepLogForm from "@/components/DailySleepLogForm";

const Tracker: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Dream Tracker</h1>
      <p className="text-lg mb-8">Log your child's daily sleep to identify patterns and improve routines.</p>
      <div className="max-w-2xl mx-auto">
        <DailySleepLogForm />
      </div>
    </div>
  );
};

export default Tracker;