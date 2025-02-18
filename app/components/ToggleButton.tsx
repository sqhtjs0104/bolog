"use client";

import { ToggleValue } from "./Toggle";

interface IToggleButtonProps {
  value: ToggleValue;
  onClick?: (v: ToggleValue) => void;
  isActive?: boolean;
  children: React.ReactNode;
}

export default function ToggleButton({
  value,
  onClick,
  isActive = false,
  children,
}: IToggleButtonProps) {
  return (
    <li
      className={`toggleButton cursor-pointer px-3 py-1 hover:bg-gray-200 border-r border-gray-300 last:border-none ${isActive ? "bg-gray-200" : ""}`}
      onClick={() => onClick?.(value)}
    >
      {children}
    </li>
  );
}