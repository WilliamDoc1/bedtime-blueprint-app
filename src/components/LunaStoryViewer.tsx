"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { LUNA_STORY_PAGES_11 } from "@/utils/luna11PageContent";

const LunaStoryViewer: React.FC = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const totalPages = LUNA_STORY_PAGES_11.length;
  const currentPage = LUNA_STORY_PAGES_11[currentPageIndex];

  const handleNext = () => {
    if (currentPageIndex < totalPages - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">
        {currentPageIndex === 0 ? currentPage.text : "Luna and the Star Garden"}
      </h1>

      <div className="bg-white shadow-xl rounded-xl overflow-hidden border-[6px] border-lavender-400">
        {/* Image Area (Top) */}
        <div className="relative h-[450px] w-full overflow-hidden">
          <img
            src={currentPage.image}
            alt={`Story page ${currentPage.page}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Area (Bottom) */}
        <div className="p-6 md:p-8 bg-lavender-50">
          <p className="text-lg leading-relaxed text-gray-800 font-serif text-center">
            {currentPageIndex !== 0 && currentPage.text}
          </p>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-between items-center mt-6">
        <Button
          onClick={handlePrevious}
          disabled={currentPageIndex === 0}
          variant="outline"
          className="bg-white hover:bg-gray-100 border-lavender-500 text-lavender-500"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Previous
        </Button>

        <p className="text-sm text-gray-600">
          Page {currentPageIndex + 1} of {totalPages}
        </p>

        <Button
          onClick={handleNext}
          disabled={currentPageIndex === totalPages - 1}
          variant="default"
          className="bg-lavender-500 hover:bg-lavender-600 text-white"
        >
          Next <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default LunaStoryViewer;