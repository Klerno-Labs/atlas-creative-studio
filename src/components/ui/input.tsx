"use client";
import { cn } from "@/lib/cn";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ id, label, type = "text", required = false }) => {
  return (
    <div className="relative mb-4">
      <input
        id={id}
        type={type}
        required={required}
        className={cn("border-b border-gray-300 focus:border-primary focus:outline-none w-full py-2")}
      />
      <label htmlFor={id} className="absolute left-0 top-0 transform -translate-y-4 text-gray-500 transition-all duration-200">
        {label}
      </label>
    </div>
  );
};

export default Input;