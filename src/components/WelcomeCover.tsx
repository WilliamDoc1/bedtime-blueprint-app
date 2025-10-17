"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const WelcomeCover: React.FC = () => {
  const logoPath = "/dreamdocs_logo.png"; 
  const motto = "GUIDED BY SCIENCE. ROOTED IN CONNECTION";

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header/Top Bar */}
      <header className="w-full p-4 md:p-6 border-b border-gray-100 bg-white shadow-sm">
        <div className="container mx-auto max-w-6xl">
          <img
            src={logoPath}
            alt="DreamDocs Logo"
            className="h-8 md:h-10 object-contain"
          />
        </div>
      </header>

      {/* Main Content Area (Centered) */}
      <main className="flex-1 flex items-center justify-center p-6 md:p-12">
        <div className="text-center max-w-3xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tighter">
            Bedtime Blueprint: Gentle Nights Without Cry-It-Out
          </h1>
          
          {/* Subtitle/Description */}
          <p className="text-xl md:text-2xl text-gray-600 mb-10 font-light">
            A 21-day guide blending gentle structure with emotional safety to help your child find peaceful, predictable rest.
          </p>
          
          {/* Call to Action Button */}
          <Button 
            asChild 
            size="lg" 
            className="bg-lavender-500 hover:bg-lavender-600 text-white text-lg font-bold py-3 px-8 shadow-lg transition-transform duration-300 hover:scale-[1.05] rounded-full"
          >
            <Link to="/guide/toc">
              Start Your 21-Day Guide
            </Link>
          </Button>
        </div>
      </main>

      {/* Footer/Motto */}
      <footer className="w-full p-4 md:p-6 border-t border-gray-100 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm font-medium text-gray-500 tracking-widest uppercase">
            {motto}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WelcomeCover;