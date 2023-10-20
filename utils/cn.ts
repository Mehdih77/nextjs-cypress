import { cx } from "class-variance-authority";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...arg: ClassValue[]) => {
  return twMerge(cx(...arg));
};