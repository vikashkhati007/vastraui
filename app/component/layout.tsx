'use client'
import { useState, useEffect } from 'react'
import Sidebar from '@/components/SideBar'
import NavbarComponent from '@/components/Navbar';
import ProgressProvider from '@/components/ProgressBar';

export default function ComponentLayout({
    children,
  }: {
    children: React.ReactNode;
    props: any;
  }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // Close sidebar when screen size changes to larger than small breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsSidebarOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NavbarComponent onMenuToggle={toggleSidebar} mode='component' />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} />
        <ProgressProvider>
       {children}
       </ProgressProvider>
      </div>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  )
}