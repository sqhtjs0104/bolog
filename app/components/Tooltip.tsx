import { HTMLProps } from "react";

interface ITooltipProps extends HTMLProps<HTMLElement> {
  title: string;
  children: React.ReactNode;
}

export default function Tooltip({
  title,
  children
}: ITooltipProps) {
  return (
    <div className="relative group h-fit">
      {children}
      {title && title.trim().length > 0 && <label className="absolute left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap shadow-lg z-50">{title}</label>}
    </div>
  );
}