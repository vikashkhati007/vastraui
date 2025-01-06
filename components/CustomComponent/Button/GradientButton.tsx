"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { motion } from "framer-motion";

export type ButtonSizeProps = "default" | "sm" | "lg" | "xl";
export type ButtonGradientProps = "blue" | "purple" | "green" | "red" | "orange" | "yellow" | "custom" | "neonBlue" | "neonPurple" | "neonGreen" | "neonRed" | "neonOrange" | "neonYellow";

export interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSizeProps;
  gradient?: ButtonGradientProps;
  customGradient?: string;
  animate?: boolean;
}

const buttonSizes: Record<ButtonSizeProps, string> = {
  default: "h-10 px-5 py-2 text-sm min-w-[100px]",
  sm: "h-8 px-4 py-1.5 text-xs min-w-[80px]",
  lg: "h-12 px-6 py-2.5 text-base min-w-[120px]",
  xl: "h-14 px-8 py-3 text-lg min-w-[140px]",
};


const buttonGradients: Record<ButtonGradientProps, string> = {
  blue: "bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 border border-blue-400/30 border-x-0 shadow-md",
  purple: "bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:from-purple-600 hover:via-purple-700 hover:to-purple-800 border border-purple-400/30 border-x-0 shadow-md",
  green: "bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 border border-green-400/30 border-x-0 shadow-md",
  red: "bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 border border-red-400/30 border-x-0 shadow-md",
  orange: "bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 border border-orange-400/30 border-x-0 shadow-md",
  yellow: "bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:from-yellow-600 hover:via-yellow-700 hover:to-yellow-800 border border-yellow-400/30 border-x-0 shadow-md",
  neonBlue: "bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 hover:from-cyan-500 hover:via-blue-600 hover:to-blue-700 border border-md border-cyan-300/30 border-x-0 shadow-[0_0_20px_rgba(34,211,238,0.6)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)] backdrop-blur-sm",
  neonPurple: "bg-gradient-to-r from-fuchsia-400 via-purple-500 to-purple-600 hover:from-fuchsia-500 hover:via-purple-600 hover:to-purple-700 border border-fuchsia-300/30 border-x-0 shadow-[0_0_20px_rgba(192,38,211,0.6)] hover:shadow-[0_0_30px_rgba(192,38,211,0.8)] backdrop-blur-sm",
  neonGreen: "bg-gradient-to-r from-lime-300 via-green-400 to-green-500 hover:from-lime-400 hover:via-green-500 hover:to-green-600 border border-lime-200/30 border-x-0 shadow-[0_0_20px_rgba(132,204,22,0.6)] hover:shadow-[0_0_30px_rgba(132,204,22,0.8)] backdrop-blur-sm",
  neonRed: "bg-gradient-to-r from-red-400 via-rose-500 to-rose-600 hover:from-red-500 hover:via-rose-600 hover:to-rose-700 border border-red-300/30 border-x-0 shadow-[0_0_20px_rgba(244,63,94,0.6)] hover:shadow-[0_0_30px_rgba(244,63,94,0.8)] backdrop-blur-sm",
  neonOrange: "bg-gradient-to-r from-orange-400 via-amber-500 to-amber-600 hover:from-orange-500 hover:via-amber-600 hover:to-amber-700 border border-orange-300/30 border-x-0 shadow-[0_0_20px_rgba(251,146,60,0.6)] hover:shadow-[0_0_30px_rgba(251,146,60,0.8)] backdrop-blur-sm",
  neonYellow: "bg-gradient-to-r from-yellow-300 via-amber-400 to-amber-500 hover:from-yellow-400 hover:via-amber-500 hover:to-amber-600 border border-yellow-200/30 border-x-0 shadow-[0_0_20px_rgba(250,204,21,0.6)] hover:shadow-[0_0_30px_rgba(250,204,21,0.8)] backdrop-blur-sm",
  custom: "",
};

const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ 
    className = "", 
    size = "default", 
    gradient = "neonBlue", 
    customGradient, 
    animate = true, 
    children, 
    ...props 
  }, ref) => {
    const Comp: React.ElementType = animate ? motion.button : "button";
    
    const sizeClass = buttonSizes[size];
    const gradientClass = gradient === "custom" && customGradient ? customGradient : buttonGradients[gradient];

    return (
      <Comp
        className={`
          z-10
          inline-flex cursor-pointer items-center justify-center 
          rounded-lg font-medium 
          transition-all duration-200
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 
          disabled:pointer-events-none disabled:opacity-50 
          text-white ${sizeClass} ${gradientClass} ${className}
        `}
        ref={ref}
        {...(animate && {
          whileHover: { scale: 1.03 },
          whileTap: { scale: 0.97 },
        })}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

GradientButton.displayName = "GradientButton";

export default GradientButton;
