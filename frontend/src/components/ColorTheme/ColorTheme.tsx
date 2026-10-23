import type { ThemeVariableType } from "../../type";
import ThemeOption from "../ThemeOption/ThemeOption";
import { useTheme } from "../../store";

function ColorTheme() {
  const theme = useTheme();
  let isDark;
  if (theme === "light") {
    isDark = false;
  } else if (theme === "dark") {
    isDark = true;
  } else {
    isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  const themeOptionsData = [
    {
      mode: "Light Mode",
      description: "Pick a clean and classic light theme",
      iconUrl: isDark
        ? "/images/icon-sun-dark-color-theme.svg"
        : "/images/icon-sun.svg",
      value: "light",
    },
    {
      mode: "Dark Mode",
      description: "Select a sleek and modern dark theme",
      iconUrl: isDark ? "/images/icon-moon-dark.svg" : "/images/icon-moon.svg",
      value: "dark",
    },
    {
      mode: "System",
      description: "Adapts to your device’s theme",
      iconUrl: isDark
        ? "/images/icon-system-theme-dark.svg"
        : "/images/icon-system-theme.svg",
      value: "system",
    },
  ];

  const themeOptionElements = themeOptionsData.map((data) => (
    <ThemeOption
      mode={data.mode}
      description={data.description}
      iconUrl={data.iconUrl}
      value={data.value as ThemeVariableType}
    />
  ));

  const leftArrowIconUrl = isDark
    ? "/images/icon-arrow-left-dark.svg"
    : "/images/icon-arrow-left.svg";

  return (
    <div className="px-[16px] pt-[24px]">
      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-col gap-[12px]">
          <div className="flex items-center gap-[8px]">
            <img src={leftArrowIconUrl} alt="" />
            <p className="items-center font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-[#525866] dark:text-[#CACFD8]">
              Settings
            </p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <p className="font-inter text-[24px]/[120%] font-bold tracking-[-0.5px] text-[#0E121B] dark:text-[#FFFFFF]">
              Color Theme
            </p>
            <p className="font-inter text-[14px]/[130%] tracking-[-0.2px] text-[#2B303B] dark:text-[#CACFD8]">
              Choose your color theme:
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[16px]">{themeOptionElements}</div>
        <div className="flex justify-end">
          <button className="rounded-[8px] bg-[#335CFF] px-[16px] py-[12px] text-[#FFFFFF]">
            Apply Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default ColorTheme;
