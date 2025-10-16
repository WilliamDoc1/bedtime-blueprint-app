import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { SidebarNav } from "@/components/SidebarNav";
import { MobileSidebar } from "@/components/MobileSidebar";
import { useIsMobile } from "./hooks/use-mobile";
import { MadeWithDyad } from "@/components/made-with-dyad";
import TableOfContents from "./pages/TableOfContents";
import Tracker from "./pages/Tracker";
import Templates from "./pages/Templates";
import MoonlightStories from "./pages/MoonlightStories";
import GuideChapter from "./pages/GuideChapter";
import Login from "./pages/Login";
import { SessionContextProvider, useSession } from "./components/SessionContextProvider";
import React from "react";

const queryClient = new QueryClient();

// ProtectedRoute component - TEMPORARILY DISABLED FOR DEVELOPMENT
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // const { session } = useSession(); // Commented out for temporary bypass
  // if (!session) {
  //   return <Navigate to="/login" replace />;
  // }
  return <>{children}</>; // Always render children for development
};

const AppContent = () => {
  const isMobile = useIsMobile();

  const chapterDetails = [
    { number: 1, title: "Introduction to Dream Journaling", content: <p>Discover the benefits of keeping a dream journal and how it can enhance your self-awareness.</p> },
    { number: 2, title: "Setting Up Your Dream Space", content: <p>Learn how to create an environment conducive to dream recall and peaceful sleep.</p> },
    { number: 3, title: "Techniques for Dream Recall", content: <p>Explore various methods to improve your ability to remember your dreams vividly.</p> },
    { number: 4, title: "Understanding Dream Symbols", content: <p>Delve into common dream symbols and how to interpret their personal meaning for you.</p> },
    { number: 5, title: "Interpreting Your Nightly Narratives", content: <p>A step-by-step guide to analyzing your dreams and extracting valuable insights.</p> },
    { number: 6, title: "Lucid Dreaming Basics", content: <p>An introduction to lucid dreaming and simple techniques to get started.</p> },
    { number: 7, title: "Dream Incubation Practices", content: <p>Learn how to set intentions for your dreams and seek answers or guidance.</p> },
    { number: 8, title: "Working with Nightmares", content: <p>Strategies for understanding and transforming recurring or frightening dreams.</p> },
    { number: 9, title: "Dreams and Personal Growth", content: <p>How your dreams can be a powerful tool for self-discovery and emotional healing.</p> },
    { number: 10, title: "Advanced Dream Exploration", content: <p>Techniques for deeper dream work, including group sharing and creative expression.</p> },
    { number: 11, title: "Maintaining Your Dream Practice", content: <p>Tips for consistency and long-term engagement with your dream journaling journey.</p> },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Desktop Sidebar */}
      {!isMobile && (
        <aside className="hidden md:flex w-64 flex-shrink-0 border-r border-sidebar-border">
          <SidebarNav />
        </aside>
      )}

      <div className="flex flex-col flex-1">
        {/* Mobile Header with Menu Button */}
        {isMobile && (
          <header className="flex items-center justify-between p-4 border-b border-gray-200 bg-background md:hidden">
            <MobileSidebar />
            <h1 className="text-xl font-bold text-sidebar-primary-foreground">
              DreamDocs
            </h1>
            <div></div> {/* Placeholder for potential right-side elements */}
          </header>
        )}

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<ProtectedRoute><AppRoutes chapterDetails={chapterDetails} /></ProtectedRoute>} />
          </Routes>
        </main>
        <MadeWithDyad />
      </div>
    </div>
  );
};

// Separate component for application routes to be used inside ProtectedRoute
const AppRoutes: React.FC<{ chapterDetails: typeof chapterDetails }> = ({ chapterDetails }) => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/guide/toc" element={<TableOfContents />} />
    {chapterDetails.map((chapter) => (
      <Route
        key={chapter.number}
        path={`/guide/ch/${chapter.number}`}
        element={
          <GuideChapter
            chapterNumber={chapter.number}
            title={chapter.title}
            content={chapter.content}
          />
        }
      />
    ))}
    <Route path="/tracker" element={<Tracker />} />
    <Route path="/templates" element={<Templates />} />
    <Route path="/tales/toc" element={<MoonlightStories />} />
    <Route path="/my-dreams" element={<div>My Dreams Page</div>} />
    <Route path="/settings" element={<div>Settings Page</div>} />
    <Route path="/logout" element={<div>Logging out...</div>} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SessionContextProvider>
          <AppContent />
        </SessionContextProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;