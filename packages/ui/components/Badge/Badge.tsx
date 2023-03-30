import React from "react";
import clsx from "clsx";

export type BadgeProps = {
  size: "sm" | "md" | "lg";
  variant: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
};

export const Badge: React.FC<BadgeProps> = ({ size, variant, children }) => {
  const sizeClasses = {
    sm: "text-xs px-1.5 py-0.5",
    md: "text-sm px-2 py-1",
    lg: "text-lg px-3 py-1.5",
  };

  const variantClasses = {
    primary: "bg-green-500 text-white",
    secondary: "bg-gray-300 text-gray-800",
    ghost: "border border-gray-300 text-gray-800",
  };

  const badgeClass = clsx(
    "inline-flex items-center font-medium rounded-full",
    sizeClasses[size],
    variantClasses[variant]
  );

  return <span className={badgeClass}>{children}</span>;
};
