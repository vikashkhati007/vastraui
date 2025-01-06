"use client"
import { motion } from "framer-motion";
import ShimmerButton from "./CustomComponent/Button/ShimmerButton";
import GlidingRadioButton from "./CustomComponent/Other/GliderRadio";
import PathAnimation from "./CustomComponent/Other/PathTrace";
import AdvancedCircularProgress from "./CustomComponent/Other/ProgressBar";
import StarRating from "./CustomComponent/Other/StarRating";
import GradientSearchInputDemo from "./ComponentShowcase/Input/GradientInput";
import BorderAnimationCardDemo from "./ComponentShowcase/Card/BorderAnimationCard";
import Link from "next/link";

export default function ShowCaseSection() {
  const floatAnimation = {
    y: [0, -10, 0], // Y-axis animation
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "easeInOut",
    },
  };

  const options = [
    { id: 'radio-free', label: 'Free' },
    { id: 'radio-basic', label: 'Basic' },
    { id: 'radio-premium', label: 'Premium' },
  ]

  const components = [
    { name: "Gliding Radio Button", component: <GlidingRadioButton options={options} onSelect={(e)=>{console.log(e)}} initialSelectedId='radio-free' /> },
    { name: "Star Rating", component: <StarRating /> },
    { name: "Progress Bar", component: <AdvancedCircularProgress /> },
    { name: "Gradient Input", component: <GradientSearchInputDemo/> },
    { name: "Shimmer Animation", component: <ShimmerButton> Hello </ShimmerButton> },
    { name: "Card Border Animation", component: <BorderAnimationCardDemo/> },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-white text-black dark:bg-black dark:text-white">
      {/* Main Heading */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center max-w-4xl mx-auto leading-tight mb-12">
        Component Showcase
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {components.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center border p-6 rounded-lg shadow-lg border-black border-opacity-10 dark:border-white dark:border-opacity-10 text-white bg-black"
            animate={floatAnimation}
          >
            <h2 className="text-2xl font-semibold mb-10">{item.name}</h2>
            <div className="w-full flex justify-center">{item.component}</div>
          </motion.div>
        ))}
      </div>
      <Link
          href="/component"
          className="relative inline-flex items-center justify-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors group mt-5"
        >
          <span>Check out More</span>
          <span className="ml-2 group-hover:translate-x-0.5 transition-transform">→</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-lg" />
        </Link>
    </div>
  );
}
