"use client";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 flex bg-[#F5F5F5]">
      {/* Sidebar - Fixed */}
      <div className="fixed left-0 h-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-[236px]">
        {/* Navbar - Fixed */}
        <div className="fixed top-0 right-0 left-[236px] bg-white z-10">
          <Navbar />
        </div>

        {/* Page Content */}
        <div className="pt-[72px] h-full">
          {children}
        </div>
      </div>
    </div>
  );
} 