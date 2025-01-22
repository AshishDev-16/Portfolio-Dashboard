"use client";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 flex bg-[#F5F5F5]">
      {/* Sidebar - Hidden on mobile */}
      <div className="hidden md:block fixed left-0 h-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-[236px]">
        {/* Navbar - Hidden on mobile */}
        <div className="hidden md:block fixed top-0 right-0 left-0 md:left-[236px] bg-white z-10">
          <Navbar />
        </div>

        {/* Page Content */}
        <div className="md:pt-[72px] pb-16 md:pb-0 h-full">
          {children}
        </div>

        {/* Mobile Navigation */}
        <MobileNav />
      </div>
    </div>
  );
} 