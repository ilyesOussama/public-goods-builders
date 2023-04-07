/* eslint-disable @next/next/no-img-element */
import React from "react";
import clsx from "clsx";

export interface AvatarProps {
  imageUrl: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export const Avatar: React.FC<AvatarProps> = ({
  imageUrl,
  size = "md",
  ...props
}) => {
  const sizeClass = clsx(
    size === "xs" && "h-6 w-6",
    size === "sm" && "h-8 w-8",
    size === "md" && "h-10 w-10",
    size === "lg" && "h-12 w-12",
    size === "xl" && "h-14 w-14"
  );
  return (
    <img
      className={clsx("inline-block rounded-full", sizeClass)}
      src={imageUrl}
      {...props}
      alt=""
    />
  );
};
