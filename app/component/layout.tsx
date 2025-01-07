'use client';
import { useState, useEffect, KeyboardEvent } from 'react';

import Sidebar from '@/components/SideBar';
import NavbarComponent from '@/components/Navbar';
import ProgressProvider from '@/components/ProgressBar';

interface ComponentLayoutProps {
  children: React.ReactNode;
}

export default function ComponentLayout({
  children,
}: ComponentLayoutProps): JSX.Element {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close sidebar when screen size changes to larger than small breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Keyboard event handler for overlay
  const handleOverlayKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === 'Escape') {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NavbarComponent mode="component" onMenuToggle={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} />
        <ProgressProvider>{children}</ProgressProvider>
      </div>
      {isSidebarOpen && (
        <div
          aria-label="Close sidebar overlay"
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
          role="button"
          tabIndex={0}
          onClick={toggleSidebar}
          onKeyDown={handleOverlayKeyDown}
        />
      )}
    </div>
  );
}
