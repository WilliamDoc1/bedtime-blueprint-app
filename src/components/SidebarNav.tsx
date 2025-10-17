"use client";

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BookText, LayoutDashboard, Sparkles, ScrollText, ListChecks, NotebookText, Settings } from "lucide-react"; // Added NotebookText and Settings icons

interface SidebarNavProps {
  isCollapsed: boolean;
  toggleCollapse: () => void;
}

export const SidebarNav: React.FC<SidebarNavProps> = ({ isCollapsed, toggleCollapse }) => {
  const location = useLocation();

  const navItems = [
    {
      title: "Guide",
      href: "/guide/toc",
      icon: <BookText className="mr-2 h-4 w-4" />,
    },
    {
      title: "Tracker",
      href: "/tracker-hub",
      icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
    },
    {
      title: "Reflection Journal",
      href: "/journal-prompts",
      icon: <NotebookText className="mr-2 h-4 w-4" />,
    },
    {
      title: "Routine Builder",
      href: "/routine-builder",
      icon: <Settings className="mr-2 h-4 w-4" />,
    },
    {
      title: "Moonlight Stories",
      href: "/tales/toc",
      icon: <Sparkles className="mr-2 h-4 w-4" />,
    },
    {
      title: "Bedtime Scripts",
      href: "/scripts",
      icon: <ScrollText className="mr-2 h-4 w-4" />,
    },
    {
      title: "Checklist",
      href: "/checklist",
      icon: <ListChecks className="mr-2 h-4 w-4" />,
    },
  ];

  return (
    <nav className="flex flex-col space-y-1 p-4 w-full">
      <div 
        className={cn(
          "mb-4 px-4 cursor-pointer flex items-center h-10",
          isCollapsed ? "justify-center" : "justify-start"
        )}
        onClick={toggleCollapse}
      >
        <h2 className={cn(
          "text-lg font-semibold tracking-tight text-sidebar-foreground transition-opacity duration-300",
          isCollapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
        )}>
          DreamDocs
        </h2>
        {isCollapsed && (
          <BookText className="h-6 w-6 text-sidebar-foreground" />
        )}
      </div>
      
      {navItems.map((item) => (
        <Button
          key={item.href}
          asChild
          variant={location.pathname.startsWith(item.href) ? "secondary" : "ghost"}
          className={cn(
            "justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            location.pathname.startsWith(item.href) && "bg-sidebar-accent text-sidebar-accent-foreground",
            isCollapsed ? "w-full p-2 h-10" : "w-auto"
          )}
        >
          <Link to={item.href} className="flex items-center w-full">
            {item.icon}
            {!isCollapsed && (
              <span className="truncate">{item.title}</span>
            )}
          </Link>
        </Button>
      ))}
    </nav>
  );
};