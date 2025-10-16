"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { moonlightTales } from "@/utils/moonlightTalesContent";

const MoonlightStories: React.FC = () => {
  return (
    <div className="container mx-auto p-4 bg-lavender-50 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-8 text-sidebar-primary text-center">Moonlight Tales Library</h1>
      <p className="text-lg mb-8 text-center text-gray-800">Discover enchanting stories to inspire sweet dreams. Click on a tale to begin reading!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {moonlightTales.map((tale) => (
          <Card key={tale.id} className="hover:shadow-lg transition-shadow duration-300 bg-white border-gold-400 border-2">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900">{tale.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4 line-clamp-3">{tale.description}</p>
              <Link to={tale.route} className="text-lavender-500 hover:text-lavender-400 font-medium underline">
                Read Story
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MoonlightStories;