import React from "react";
import clsx from "clsx";

export type BadgeProps = {
  size?: "sm" | "lg";
  variant?: "primary" | "success" | "warning" | "error";
  children: React.ReactNode;
};

export const Badge: React.FC<BadgeProps> = ({
  size = "sm",
  variant = "primary",
  children,
}) => {
  const sizeClasses = {
    sm: "px-2.5 py-0.5",
    lg: "text-md px-2.5 py-1",
  };

  const variantClasses = {
    primary: "bg-green-100 text-green-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-orange-100 text-orange-800",
    error: "bg-red-100 text-red-800",
  };

  const badgeClass = clsx(
    "inline-flex items-center rounded-full text-xs font-medium",
    sizeClasses[size],
    variantClasses[variant]
  );

  return <span className={badgeClass}>{children}</span>;
};
