"use client";

// Komponen tombol animasi — support href (link) dan button biasa
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  external?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variantStyles: Record<string, string> = {
  primary:
    "bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:from-purple-500 hover:to-blue-500 shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] active:scale-95",
  secondary:
    "border border-purple-500/50 bg-transparent text-purple-300 font-semibold hover:bg-purple-500/10 hover:border-purple-400 hover:text-white active:scale-95",
  ghost:
    "bg-transparent text-white/60 hover:text-white hover:bg-white/5 active:scale-95",
};

const sizeStyles: Record<string, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-xl",
  lg: "px-8 py-4 text-lg rounded-xl",
};

export default function AnimatedButton({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  external = false,
  onClick,
  type = "button",
  disabled = false,
}: AnimatedButtonProps) {
  const classes = cn(
    "inline-flex items-center gap-2 transition-all duration-200 cursor-pointer",
    "focus:outline-none focus:ring-2 focus:ring-purple-500/50",
    "relative overflow-hidden hover:scale-[1.03]",
    disabled && "opacity-50 cursor-not-allowed hover:scale-100",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  // Render sebagai <a> jika ada href
  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        className={classes}
      >
        {children}
      </a>
    );
  }

  // Render sebagai <button> native — tidak ada konflik tipe
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      className={classes}
    >
      {children}
    </button>
  );
}
