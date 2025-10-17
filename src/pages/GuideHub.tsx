"use client";

import React from "react";
import TableOfContents from "./TableOfContents";
import Templates from "./Templates";
import { Separator } from "@/components/ui/separator";

const GuideHub: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-sidebar-primary text-center">
        Your 21-Day Guide & Toolkit
      </h1>
      <p className="text-lg mb-10 text-center text-gray-800 max-w-3xl mx-auto">
        Start your journey with the foundational chapters, and utilize the printable toolkit for tracking and routine building.
      </p>

      {/* Table of Contents Section */}
      <div className="mb-12">
        <TableOfContents />
      </div>

      <Separator className="my-12 bg-lavender-200" />

      {/* Templates Section */}
      <div className="mt-12">
        <Templates />
      </div>
    </div>
  );
};

export default GuideHub;