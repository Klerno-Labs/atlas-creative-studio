"use client";
import { cn } from "@/lib/cn";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
}

const Button: React.FC<ButtonProps> = ({ text, onClick, variant = "primary" }) => {
  const baseStyles = "px-4 py-2 rounded-lg transition duration-300";
  const variantStyles = {
    primary: "bg-primary text-white hover:bg-white hover:text-primary",
    secondary: "border border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "bg-transparent text-primary border border-transparent hover:border-primary",
  };

  return (
    <button className={cn(baseStyles, variantStyles[variant])} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;