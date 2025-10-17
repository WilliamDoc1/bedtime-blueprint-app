"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LayoutDashboard, Heart, CalendarCheck } from "lucide-react";

const TrackerHub: React.FC = () => {
  const trackerItems = [
    {
      title: "Daily Sleep Log",
      description: "Input today's sleep data, including naps and night wakings.",
      route: "/daily-input",
      icon: <CalendarCheck className="h-8 w-8 text-lavender-500" />,
    },
    {
      title: "Self-Care Tracker",
      description: "Monitor your own calm, gratitude, and sleep quality.",
      route: "/self-care-tracker",
      icon: <Heart className="h-8 w-8 text-gold-500" />,
    },
    {
      title: "7-Day Sleep Summary",
      description: "Review your child's sleep patterns and progress over the last week.",
      route: "/7-day-summary",
      icon: <LayoutDashboard className="h-8 w-8 text-sidebar-primary-foreground" />,
    },
  ];

  return (
    <div className="container mx-auto p-4 bg-lavender-50 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-4 text-sidebar-primary text-center">Your Sleep Tracking Hub</h1>
      <p className="text-lg mb-8 text-center text-gray-800">Select a tool to track your progress and well-being.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {trackerItems.map((item) => (
          <Link to={item.route} key={item.route} className="block">
            <Card className="h-full flex flex-col justify-between p-6 transition-shadow duration-300 hover:shadow-xl hover:border-lavender-500 border-2 border-gray-200">
              <CardHeader className="p-0 mb-4">
                <div className="mb-2">{item.icon}</div>
                <CardTitle className="text-xl font-semibold text-gray-900">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-sm text-gray-700">{item.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TrackerHub;