import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "success" | "warning" | "error";
  size?: "small" | "medium" | "large";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  size = "medium",
  ...rest
}) => {
  const classes = clsx(
    "inline-flex justify-center items-center font-medium rounded-md focus:outline-none transition ease-in-out duration-150",
    {
      "text-white bg-blue-600 hover:bg-blue-500 focus:ring-blue-500":
        variant === "primary",
      "text-blue-700 bg-blue-100 hover:bg-blue-200 focus:ring-blue-500":
        variant === "secondary",
      "text-white bg-green-600 hover:bg-green-500 focus:ring-green-500":
        variant === "success",
      "text-white bg-yellow-600 hover:bg-yellow-500 focus:ring-yellow-500":
        variant === "warning",
      "text-white bg-red-600 hover:bg-red-500 focus:ring-red-500":
        variant === "error",
      "px-2.5 py-1.5 text-xs leading-4": size === "small",
      "px-4 py-2 text-sm leading-5": size === "medium",
      "px-6 py-3 text-base leading-6": size === "large",
    },
    className
  );

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};
