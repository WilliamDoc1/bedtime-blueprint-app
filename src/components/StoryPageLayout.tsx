"use client";

import React from "react";
// Removed Button, Play, Pause imports as they are no longer used here.

interface StoryPage {
  image: string;
  audio: string;
  text: string;
}

interface StoryPageLayoutProps {
  page: StoryPage;
  pageIndex: number;
  totalPages: number;
  // Removed audio-related props
}

const StoryPageLayout: React.FC<StoryPageLayoutProps> = ({
  page,
  pageIndex,
  totalPages,
}) => {
  // Check for known title pages to prevent drop cap styling on titles
  const isTitlePage = page.text === "The Lantern Tree" || page.text === "Luna and the Star Garden" || page.text === "TITLE PAGE";
  const isEndPage = page.text === "THE END";

  const renderTextContent = () => {
    return page.text.split('\n').map((paragraph, i) => {
      // Apply drop cap only to the first paragraph of non-title/end pages
      if (i === 0 && paragraph.length > 0 && !isTitlePage && !isEndPage) {
        const firstLetter = paragraph.charAt(0);
        const restOfText = paragraph.substring(1);
        return (
          <p key={i} className="mb-4">
            <span className="float-left text-6xl font-bold mr-2 text-lavender-500 leading-none">
              {firstLetter}
            </span>
            {restOfText}
          </p>
        );
      }
      return <p key={i} className="mb-4">{paragraph}</p>;
    });
  };

  return (
    <div className="flex h-[600px] w-full">
      {/* Left Column: Image (60%) */}
      <div className="w-[60%] relative overflow-hidden border-r-4 border-gold-400">
        <img
          src={page.image}
          alt={`Story page ${pageIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Column: Text and Controls (40%) */}
      <div className="w-[40%] bg-white p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
        
        {/* Story Text - Added flex flex-col justify-center for vertical centering */}
        <div className="text-lg leading-relaxed text-gray-800 font-serif flex-grow flex flex-col justify-center">
          {renderTextContent()}
        </div>

        {/* Controls and Page Number */}
        <div className="mt-6 pt-4 border-t border-gray-200 flex justify-end items-center flex-shrink-0">
          {/* Removed audio controls */}
          <p className="text-sm text-gray-600">Page {pageIndex + 1} of {totalPages}</p>
        </div>
      </div>
    </div>
  );
};

export default StoryPageLayout;