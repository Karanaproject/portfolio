"use client";

import { useState } from "react";
import { useTheme } from "next-themes";

import { Switch } from "@/components/ui/switch";

const ModeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = useState<boolean>(theme === "dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setChecked(!checked);
  };

  return (
    <div
      className="flex items-center gap-x-2 p-1"
      onClick={toggleTheme}
      role="button"
      aria-label="Toggle theme mode"
    >
      <Switch checked={checked} aria-label="Toggle theme mode" />
      <span className="text-sm font-medium">
        {checked ? "Dark Mode" : "Light Mode"}
      </span>
    </div>
  );
};

export default ModeSwitch;
