"use client";

import React from "react";
import RoutineBuilderForm from "@/components/RoutineBuilderForm";

const RoutineBuilder: React.FC = () => {
  return (
    <div className="content-wrapper p-6 md:p-8 max-w-3xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6 text-sidebar-primary-foreground">Custom Bedtime Routine Builder</h1>
      <p className="text-lg text-gray-600 mb-8">Design and save your personalized 5-step routine sequence.</p>
      <RoutineBuilderForm />
    </div>
  );
};

export default RoutineBuilder;