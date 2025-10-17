"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const WelcomeCover: React.FC = () => {
  // Using the new cover image path
  const coverImagePath = "/cover_background.png"; 

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-lavender-50">
      {/* Background Image/Illustration */}
      <div className="absolute inset-0">
        <img
          src={coverImagePath}
          alt="Bedtime Blueprint Cover"
          className="w-full h-full object-cover object-center"
        />
        {/* Removed dark overlay as the new image is light */}
      </div>

      {/* Content - We will overlay the title and button on the image */}
      <div className="relative z-10 text-center p-6 md:p-12 max-w-4xl mx-auto mt-40 md:mt-60">
        {/* The image already contains the main title, but we keep the button for navigation */}
        
        {/* We are keeping the title here for accessibility and if the user wants to change the text later, 
            but we will make it transparent/less visible if the image already contains it, 
            or we can adjust the text color to contrast with the image's moon area. 
            Since the image is mostly light gray/yellow, let's use a dark color for contrast. 
            However, since the user requested the title 'Bedtime Blueprint: Gentle Nights Without Cry-It-Out', 
            which is slightly different from the image text, I will keep the requested title and position it clearly.
        */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 drop-shadow-md mb-8 leading-tight">
          Bedtime Blueprint: Gentle Nights Without Cry-It-Out
        </h1>
        
        <Button asChild size="lg" className="bg-gold-400 hover:bg-gold-500 text-white text-lg font-bold py-3 px-8 shadow-xl transition-transform duration-300 hover:scale-[1.05]">
          <Link to="/guide/toc">
            Start Your 21-Day Guide
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default WelcomeCover;