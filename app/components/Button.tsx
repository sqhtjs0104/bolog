interface IButtonProps {
  children?: React.ReactNode;
  icon?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
}

export default function Button({
  children,
  icon,
}: IButtonProps) {
  return (
    <button
      type="button"
      className="inline-flex gap-2 items-center rounded-md bg-gray-400 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
    >
      {icon}
      {children}
    </button>
  )
}