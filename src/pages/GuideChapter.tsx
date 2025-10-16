"use client";

import React from "react";

interface GuideChapterProps {
  chapterNumber: number;
  title: string;
  content: React.ReactNode;
}

const GuideChapter: React.FC<GuideChapterProps> = ({ chapterNumber, title, content }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Chapter {chapterNumber}: {title}</h1>
      <div className="text-lg leading-relaxed">
        {content}
      </div>
    </div>
  );
};

export default GuideChapter;