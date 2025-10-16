"use client";

import React from "react";
import PrintableToolkit from "@/components/PrintableToolkit";

const Templates: React.FC = () => {
  return (
    <div className="container mx-auto p-4 bg-lavender-50 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-8 text-sidebar-primary text-center">Dream Templates</h1>
      <p className="text-lg mb-8 text-center text-gray-800">Explore and download printable tools to support your child's sleep journey.</p>
      <PrintableToolkit />
    </div>
  );
};

export default Templates;