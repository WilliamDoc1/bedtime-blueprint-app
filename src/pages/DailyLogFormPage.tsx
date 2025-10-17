"use client";

import React from "react";
import DailySleepLogForm from "@/components/DailySleepLogForm";

const DailyLogFormPage: React.FC = () => {
  return (
    <div className="content-wrapper p-6 md:p-8 max-w-xl mx-auto bg-lavender-50 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6 text-sidebar-primary-foreground">Daily Sleep Log Input</h1>
      <p className="text-center text-gray-600 mb-8">Record your child's sleep details and your calm rating for the night.</p>
      <DailySleepLogForm />
    </div>
  );
};

export default DailyLogFormPage;