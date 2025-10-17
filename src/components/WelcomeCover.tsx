"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const WelcomeCover: React.FC = () => {
  // Using the existing Luna cover image path for the background illustration
  const coverImagePath = "/Luna and the Star Garden/Luna cover.jpg"; 

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-lavender-50">
      {/* Background Image/Illustration */}
      <div className="absolute inset-0">
        <img
          src={coverImagePath}
          alt="Luna the Fox sleeping peacefully under a crescent moon"
          className="w-full h-full object-cover opacity-70"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center p-6 md:p-12 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-8 leading-tight">
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