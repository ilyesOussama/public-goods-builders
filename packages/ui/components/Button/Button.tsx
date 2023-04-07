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
    "text-white focus:outline-none focus:ring-2 focus:ring-offset-2",
    variant === "primary" &&
      "bg-green-600 hover:bg-green-700 focus:ring-green-500",
    variant === "secondary" &&
      "bg-green-200 hover:bg-green-300  focus:ring-green-500 text-green-900",
    variant === "success" &&
      "bg-green-400 hover:bg-green-500 focus:ring-green-500",
    variant === "warning" &&
      "bg-orange-300 hover:bg-orange-400 focus:ring-orange-500",
    variant === "error" && "bg-red-500 hover:bg-red-600 focus:ring-red-500",
    variant === "outline" &&
      "bg-transparent border-2 border-green-500 hover:bg-green-500 hover:text-white text-green-500 focus:ring-green-500",
    variant === "ghost" &&
      "bg-transparent hover:bg-green-500 hover:text-white text-green-500 focus:ring-green-500"
  );

  const sizeClass = clsx(
    size === "xs" && "text-xs px-2.5 py-1.5",
    size === "sm" && "text-sm px-3 py-2",
    size === "md" && "text-base px-4 py-2",
    size === "lg" && "text-lg px-4 py-2",
    size === "xl" && "text-xl px-6 py-3"
  );

  return (
    <button
      className={clsx(
        "inline-flex items-center border border-transparent rounded-md shadow-sm text-black",
        colorClass,
        sizeClass
      )}
      {...props}
    >
      {children}
    </button>
  );
};
