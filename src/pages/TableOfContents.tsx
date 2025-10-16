"use client";

import React from "react";
import { Link } from "react-router-dom";
import { chapterDetails } from "@/utils/guideContent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TableOfContents: React.FC = () => {
  return (
    <div className="container mx-auto p-4 bg-lavender-50 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-8 text-sidebar-primary text-center">Guide: Table of Contents</h1>
      <p className="text-lg mb-8 text-center text-gray-800">Welcome to the comprehensive guide on dream journaling and exploration. Click on any chapter to begin your journey!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {chapterDetails.map((chapter) => (
          <Card key={chapter.number} className="hover:shadow-lg transition-shadow duration-300 bg-white border-gold-400 border-2">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900">Chapter {chapter.number}: {chapter.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4 line-clamp-3">{chapter.content}</p>
              <Link to={`/guide/ch/${chapter.number}`} className="text-lavender-500 hover:text-lavender-400 font-medium underline">
                Read Chapter
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TableOfContents;