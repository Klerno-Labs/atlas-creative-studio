"use client";
import { cn } from "@/lib/cn";

interface TextareaProps {
  id: string;
  label: string;
  required?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({ id, label, required = false }) => {
  return (
    <div className="relative mb-4">
      <textarea
        id={id}
        required={required}
        className={cn("border-b border-gray-300 focus:border-primary focus:outline-none w-full py-2")}
      />
      <label htmlFor={id} className="absolute left-0 top-0 transform -translate-y-4 text-gray-500 transition-all duration-200">
        {label}
      </label>
    </div>
  );
};

export default Textarea;