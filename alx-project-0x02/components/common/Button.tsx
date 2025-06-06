// components/common/Button.tsx
import React from "react";
import { ButtonProps } from "@/interfaces";

const sizeClasses = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-5 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({ label, size, shape, onClick }) => {
  return (
    <button
      className={`bg-blue-600 text-white ${sizeClasses[size]} ${shape} hover:bg-blue-700 transition`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
