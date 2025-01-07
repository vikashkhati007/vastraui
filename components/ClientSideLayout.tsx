'use client';

import { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import NavbarComponent from '@/components/Navbar';
import ProgressProvider from '@/components/ProgressBar';

const Sidebar = dynamic(() => import('@/components/SideBar'), { ssr: false });

interface ClientSideLayoutProps {
  children: React.ReactNode;
}

export function ClientSideLayout({ children }: ClientSideLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  const handleOverlayKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === 'Escape') {
      setIsSidebarOpen(false);
    }
  }, []);

  if (!isClient) {
    return null; // or a loading spinner
  }

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

