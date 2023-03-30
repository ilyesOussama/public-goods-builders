import React from "react";

export interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
}

export const Card: React.FC<CardProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="max-w-xs mx-auto overflow-hidden rounded-md shadow-lg">
      <img
        className="object-cover object-center w-full h-48"
        src={imageUrl}
        alt={title}
      />
      <div className="px-4 py-2">
        <h2 className="text-lg font-medium text-gray-800">{title}</h2>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};
