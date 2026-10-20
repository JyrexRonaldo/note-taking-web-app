import { useTheme, useThemeControls } from "../store";
import type { ThemeVariableType } from "../type";

function Header() {
  const { setTheme } = useThemeControls();
  const theme = useTheme();

  const handleSetTheme = (value: ThemeVariableType) => {
    setTheme(value);
  };

  let isDark;
  if (theme === "light") {
    isDark = false;
  } else if (theme === "dark") {
    isDark = true;
  } else {
    isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  const logoUrl = isDark ? "/images/logo-dark.svg" : "/images/logo.svg";
  return (
    <>
      <div className="h-[54px] min-w-[375px] bg-[#F3F5F8] px-[16px] py-[13px] dark:bg-[#232530]">
        <img src={logoUrl} alt="notes" />
      </div>

      <button
        onClick={() => {
          handleSetTheme("light");
        }}
        className="border-4 p-5 dark:text-white"
      >
        light
      </button>
      <button
        onClick={() => {
          handleSetTheme("dark");
        }}
        className="border-4 p-5 dark:text-white"
      >
        dark
      </button>
      <button
        onClick={() => {
          handleSetTheme("system");
        }}
        className="border-4 p-5 dark:text-white"
      >
        system
      </button>
    </>
  );
}

export default Header;
