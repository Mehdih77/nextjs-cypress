"use client";
import { useState } from "react";
import { cn } from "@/utils/cn";

type PropsType = {
  disabled?: boolean;
};

export default function Button({ disabled }: PropsType) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    if (!disabled) {
      setShow((prev) => !prev);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "text-white py-2 px-6 min-w-[250px] rounded-md bg-green-600 hover:bg-green-700",
        disabled && "bg-gray-500 hover:bg-gray-500 opacity-70"
      )}
      disabled={disabled}>
      Button {show && "clicked"}
    </button>
  );
}
