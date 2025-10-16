"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Card, CardTitle } from "@/components/ui/card";
import { moonlightTales } from "@/utils/moonlightTalesContent";

const MoonlightStories: React.FC = () => {
  return (
    <div className="container mx-auto p-4 bg-lavender-50 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-8 text-sidebar-primary text-center">Moonlight Tales Library</h1>
      <p className="text-lg mb-8 text-center text-gray-800">Discover enchanting stories to inspire sweet dreams. Click on a tale to begin reading!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {moonlightTales.map((tale) => (
          <Link to={tale.route} key={tale.id} className="block">
            <Card 
              className="relative h-64 flex flex-col justify-end p-4 overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:scale-[1.02]"
              style={{ 
                backgroundImage: `url(${tale.coverImage})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
              }}
            >
              {/* Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              
              <div className="relative z-10 text-white">
                <CardTitle className="text-2xl font-bold mb-2">{tale.title}</CardTitle>
                <p className="text-sm line-clamp-2">{tale.description}</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoonlightStories;