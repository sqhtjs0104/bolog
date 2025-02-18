"use client";

import { useState, cloneElement, ReactElement, Dispatch, SetStateAction, PropsWithChildren } from "react";

export type ToggleValue = string | number | boolean;

interface IToggleProps {
  value: ToggleValue;
  onChange: Dispatch<SetStateAction<ToggleValue>> | ((v: ToggleValue) => void);
  children: ReactElement<PropsWithChildren<{ onClick?: () => void; isActive?: boolean, value: ToggleValue }>>[];
}

export default function Toggle({
  value,
  onChange,
  children,
}: IToggleProps) {
  const [toggleValue, setToggleValue] = useState<ToggleValue>(value);

  const handleToggle = (v: ToggleValue) => {
    setToggleValue(v);
    onChange(v);
  };

  return (
    <ul className="border rounded-md border-gray-300 flex h-fit">
      {
        children.map((child, i) => (
          cloneElement(child, {
            key: i,
            onClick: () => handleToggle(child.props.value),
            isActive: toggleValue === child.props.value
          })
        ))
      }
    </ul>
  )
}