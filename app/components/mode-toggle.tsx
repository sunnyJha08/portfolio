import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./theme-provider";

export function ModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      aria-label="theme-toggler button"
      onClick={toggleTheme}
      className="absolute right-0 bottom-0 size-8 cursor-pointer rounded-full"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
}
