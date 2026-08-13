"use client";

// ============================================================
// ANIMATED BUTTON
// Tombol dengan animasi hover dan tap.
// Variant: primary (gradient), secondary (outline), ghost.
// Jika ada prop href, render sebagai <a> tag.
// ============================================================

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

// Props dipisah: button props + custom props
interface BaseProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
}

// Dua tipe: link (ada href) atau button
type AnimatedButtonProps =
  | (BaseProps & { href: string; onClick?: React.MouseEventHandler<HTMLAnchorElement> } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">)
  | (BaseProps & { href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>);

const variantStyles = {
  primary: cn(
    "bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold",
    "hover:from-purple-500 hover:to-blue-500",
    "shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)]"
  ),
  secondary: cn(
    "border border-purple-500/50 bg-transparent text-purple-300 font-semibold",
    "hover:bg-purple-500/10 hover:border-purple-400 hover:text-white"
  ),
  ghost: cn(
    "bg-transparent text-white/60",
    "hover:text-white hover:bg-white/5"
  ),
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-xl",
  lg: "px-8 py-4 text-lg rounded-xl",
};

const springTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 17,
};

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  (props, ref) => {
    const { children, variant = "primary", size = "md", className, external } = props;

    const classes = cn(
      "inline-flex items-center gap-2 transition-all duration-300",
      "focus:outline-none focus:ring-2 focus:ring-purple-500/50",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      "relative overflow-hidden",
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    // Render <a> jika ada href
    if ("href" in props && props.href !== undefined) {
      const { href, onClick } = props as BaseProps & { href: string; onClick?: React.MouseEventHandler<HTMLAnchorElement> };
      return (
        <motion.a
          href={href}
          onClick={onClick}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={classes}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={springTransition}
        >
          {children}
        </motion.a>
      );
    }

    // Render <button>
    const {
  href: _href,
  external: _ext,
  variant: _v,
  size: _s,
  onDrag: _onDrag,
  ...buttonProps
} = props as BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

    return (
      <motion.button
        ref={ref}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={springTransition}
        {...(buttonProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </motion.button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";
export default AnimatedButton;
