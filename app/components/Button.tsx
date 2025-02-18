import { ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  children?: React.ReactNode;
}

export default function Button({
  icon,
  children,
  ...args
}: IButtonProps) {
  return (
    <button
      type="button"
      className="inline-flex gap-2 items-center rounded-md bg-gray-200 px-3 py-2 text-xs font-semibold text-gray-700 shadow-sm hover:bg-gray-400 hover:text-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 justify-center"
      {...args}
    >
      {icon}
      {children}
    </button>
  )
}