import Link from "next/link"
import { Sparkles } from 'lucide-react'

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center justify-center px-4 py-20">
      {/* Dev Tool Button */}
      <Link
        href="#"
        className="mb-16 inline-flex items-center gap-2 bg-zinc-100 dark:bg-zinc-900 text-black dark:text-white text-sm px-4 py-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
      >
        <Sparkles className="w-4 h-4" />
        Introducing to Vastra UI
        <span className="ml-1">→</span>
      </Link>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center max-w-4xl mx-auto leading-tight mb-8">
        UI library for 
        <br />
        React developers.
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-4 text-zinc-700 dark:text-zinc-300">
        30+ free and open-source components and templates
        <br className="hidden md:block" />
        with React, Typescript, Tailwind CSS, and Framer Motion.
      </p>
      
      <p className="text-lg md:text-xl text-center mb-12 text-zinc-700 dark:text-zinc-300">
        Perfect companion for your next project.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <Link
          href="/component"
          className="relative inline-flex items-center justify-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors group"
        >
          <span>Browse Components</span>
          <span className="ml-2 group-hover:translate-x-0.5 transition-transform">→</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-lg" />
        </Link>
        <Link
          href="/"
          title="Coming Soon"
          className="relative inline-flex items-center justify-center px-6 py-3 bg-transparent text-black dark:text-white border border-zinc-200 dark:border-zinc-800 rounded-full text-sm font-medium hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors group"
        >
          <span>Browse Templates</span>
          <span className="ml-2 group-hover:translate-x-0.5 transition-transform">→</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-10 blur-lg" />
        </Link>
      </div>

      {/* Technology Icons */}
      <div className="flex items-center justify-center gap-6 opacity-70 dark:opacity-50">
        {/* React */}
      
        {/* TypeScript */}
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
        </svg>
        {/* Tailwind */}
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
        </svg>
        {/* Framer Motion */}
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
        </svg>
      </div>
    </div>
  )
}
