import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "outline"
    | "ghost";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  ...props
}) => {
  const colorClass = clsx(
    "text-white",
    variant === "primary" && "bg-green-500 hover:bg-green-600",
    variant === "secondary" && "bg-gray-500 hover:bg-gray-600",
    variant === "success" && "bg-green-400 hover:bg-green-500",
    variant === "warning" && "bg-yellow-400 hover:bg-yellow-500",
    variant === "error" && "bg-red-400 hover:bg-red-500",
    variant === "outline" &&
      "bg-transparent border-2 border-green-500 hover:bg-green-500 hover:text-white text-green-500",
    variant === "ghost" &&
      "bg-transparent hover:bg-green-500 hover:text-white text-green-500"
  );

  const sizeClass = clsx(
    size === "xs" && "text-xs py-1.5 px-2",
    size === "sm" && "text-sm py-2 px-3",
    size === "md" && "text-base py-2 px-4",
    size === "lg" && "text-lg py-3 px-4",
    size === "xl" && "text-xl py-3 px-5"
  );

  return (
    <button
      className={clsx(
        "rounded-md focus:outline-none focus:ring",
        colorClass,
        sizeClass
      )}
      {...props}
    >
      {children}
    </button>
  );
};
