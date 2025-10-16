"use client";

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, BookText, LayoutDashboard, Palette, Sparkles, ScrollText, ListChecks } from "lucide-react"; // Added ListChecks icon
import { cn } from "@/lib/utils";

export const MobileSidebar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    {
      title: "Guide",
      href: "/guide/toc",
      icon: <BookText className="mr-2 h-4 w-4" />,
    },
    {
      title: "Tracker",
      href: "/tracker",
      icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
    },
    {
      title: "Templates",
      href: "/templates",
      icon: <Palette className="mr-2 h-4 w-4" />,
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
      title: "Checklist", // New navigation item
      href: "/checklist",
      icon: <ListChecks className="mr-2 h-4 w-4" />, // Icon for checklist
    },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-64">
        <nav className="flex flex-col space-y-1 p-4 h-full bg-sidebar">
          <h2 className="mb-4 px-4 text-lg font-semibold tracking-tight text-sidebar-foreground">
            DreamDocs
          </h2>
          {navItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant={location.pathname.startsWith(item.href) ? "secondary" : "ghost"}
              className={cn(
                "justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                location.pathname.startsWith(item.href) && "bg-sidebar-accent text-sidebar-accent-foreground"
              )}
              onClick={() => setIsOpen(false)} // Close sidebar on link click
            >
              <Link to={item.href}>
                {item.icon}
                {item.title}
              </Link>
            </Button>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};