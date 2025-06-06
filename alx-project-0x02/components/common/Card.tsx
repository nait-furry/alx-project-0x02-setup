// components/common/Card.tsx
import React from "react";
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="border rounded-lg p-6 shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Card;
