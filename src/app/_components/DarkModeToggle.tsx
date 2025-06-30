"use client";

import { useDarkMode } from "@/contexts/DarkModeProvider";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

const DarkModeToggle = () => {
  const { toggleDarkMode, isDarkMode } = useDarkMode();

  return (
    <div>
      <button
        onClick={toggleDarkMode}
        className="flex items-center justify-center cursor-pointer"
      >
        {isDarkMode ? (
          <DarkModeOutlinedIcon className="w-5 h-5 text-foreground" />
        ) : (
          <LightModeOutlinedIcon className="w-5 h-5 text-foreground" />
        )}
      </button>
    </div>
  );
};

export default DarkModeToggle;
