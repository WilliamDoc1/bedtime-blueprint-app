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
import Templates from "./pages/Templates";
import MoonlightStories from "./pages/MoonlightStories";
import Login from "./pages/Login";
import { SessionContextProvider, useSession } from "./components/SessionContextProvider";
import React from "react";


// Import individual chapter components
import Chapter1 from "./pages/guide/ch/1";
import Chapter2 from "./pages/guide/ch/2";
import Chapter3 from "./pages/guide/ch/3";
import Chapter4 from "./pages/guide/ch/4";
import Chapter5 from "./pages/guide/ch/5";
import Chapter6 from "./pages/guide/ch/6";
import Chapter7 from "./pages/guide/ch/7";
import Chapter8 from "./pages/guide/ch/8";
import Chapter9 from "./pages/guide/ch/9";
import Chapter10 from "./pages/guide/ch/10";
import Chapter11 from "./pages/guide/ch/11";

// Import individual tale components
import Luna from "./pages/tales/Luna";
import Milo from "./pages/tales/Milo";
import LanternTree from "./pages/tales/LanternTree";
import CloudPainter from "./pages/tales/CloudPainter";
import Willow from "./pages/tales/Willow";

// Import new/renamed template pages
import SleepLog from "./pages/SleepLog";
import SelfCareTracker from "./pages/SelfCareTracker";
import ReflectionJournal from "./pages/ReflectionJournal";
import RoutineBuilder from "./pages/RoutineBuilder";
import Tracker from "./pages/Tracker"; // Import the new Tracker component


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
            <Route path="*" element={<ProtectedRoute><AppRoutes /></ProtectedRoute>} />
          </Routes>
        </main>
        <MadeWithDyad />
      </div>
    </div>
  );
};

// Separate component for application routes to be used inside ProtectedRoute
const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/guide/toc" element={<TableOfContents />} />
    <Route path="/guide/ch/1" element={<Chapter1 />} />
    <Route path="/guide/ch/2" element={<Chapter2 />} />
    <Route path="/guide/ch/3" element={<Chapter3 />} />
    <Route path="/guide/ch/4" element={<Chapter4 />} />
    <Route path="/guide/ch/5" element={<Chapter5 />} />
    <Route path="/guide/ch/6" element={<Chapter6 />} />
    <Route path="/guide/ch/7" element={<Chapter7 />} />
    <Route path="/guide/ch/8" element={<Chapter8 />} />
    <Route path="/guide/ch/9" element={<Chapter9 />} />
    <Route path="/guide/ch/10" element={<Chapter10 />} />
    <Route path="/guide/ch/11" element={<Chapter11 />} />
    <Route path="/log" element={<SleepLog />} />
    <Route path="/tracker" element={<Tracker />} /> {/* New route for the form */}
    <Route path="/self-care-tracker" element={<SelfCareTracker />} />
    <Route path="/journal-prompts" element={<ReflectionJournal />} />
    <Route path="/routine-builder" element={<RoutineBuilder />} />
    <Route path="/templates" element={<Templates />} />
    <Route path="/tales/toc" element={<MoonlightStories />} />
    <Route path="/tales/luna" element={<Luna />} />
    <Route path="/tales/milo" element={<Milo />} />
    <Route path="/tales/lantern-tree" element={<LanternTree />} />
    <Route path="/tales/cloud-painter" element={<CloudPainter />} />
    <Route path="/tales/willow" element={<Willow />} />
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