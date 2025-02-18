"use client";

import { useState, useEffect } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);

export default function useBreakpoint() {
  const screens = fullConfig.theme.screens;
  const [breakpoint, setBreakpoint] = useState("");

  useEffect(() => {
    const getBreakpoint = () => {
      const width = window.innerWidth;
      if (width < parseInt(screens.sm)) setBreakpoint("xs");
      else if (width < parseInt(screens.md)) setBreakpoint("sm");
      else if (width < parseInt(screens.lg)) setBreakpoint("md");
      else if (width < parseInt(screens.xl)) setBreakpoint("lg");
      else setBreakpoint("xl");
    };

    getBreakpoint();
    window.addEventListener("resize", getBreakpoint);
    return () => window.removeEventListener("resize", getBreakpoint);
  }, [screens]);

  return breakpoint;
}
