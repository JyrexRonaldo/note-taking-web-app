import type { ThemeVariableType } from "../../type";
import Option from "../Option/Option";
import { useTheme, useThemeControls } from "../../store";
import { Link } from "react-router";

function FontOptions() {
  const theme = useTheme();
  const { setTheme } = useThemeControls();
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
      title: "Sans-serif",
      description: "Clean and modern, easy to read.",
      iconUrl: isDark
        ? "/images/icon-font-sans-serif-dark.svg"
        : "/images/icon-font-sans-serif.svg",
      value: "light",
    },
    {
      title: "Serif",
      description: "Classic and elegant for a timeless feel.",
      iconUrl: isDark
        ? "/images/icon-font-serif-dark.svg"
        : "/images/icon-font-serif.svg",
      value: "dark",
    },
    {
      title: "Monospace",
      description: "Code-like, great for a technical vibe.",
      iconUrl: isDark
        ? "/images/icon-font-monospace-dark.svg"
        : "/images/icon-font-monospace.svg",
      value: "system",
    },
  ];

  const handleSetTheme = (value: ThemeVariableType) => {
    setTheme(value);
  };

  const themeOptionElements = themeOptionsData.map((data) => (
    <Option
      key={data.value}
      title={data.title}
      description={data.description}
      iconUrl={data.iconUrl}
      value={data.value as ThemeVariableType}
      optionSelectHandler={handleSetTheme}
    />
  ));

  const leftArrowIconUrl = isDark
    ? "/images/icon-arrow-left-dark.svg"
    : "/images/icon-arrow-left.svg";

  return (
    <div className="px-[16px] pt-[24px]">
      <div className="flex flex-col gap-[20px] dark:gap-[24px]">
        <div className="flex flex-col gap-[12px]">
          <Link to="/settings" className="flex items-center gap-[8px]">
            <img src={leftArrowIconUrl} alt="" />
            <p className="items-center font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-[#525866] dark:text-[#CACFD8]">
              Settings
            </p>
          </Link>
          <div className="flex flex-col gap-[8px]">
            <p className="font-inter text-[24px]/[120%] font-bold tracking-[-0.5px] text-[#0E121B] dark:text-[#FFFFFF]">
              Font Theme
            </p>
            <p className="font-inter text-[14px]/[130%] tracking-[-0.2px] text-[#2B303B] dark:text-[#CACFD8]">
              Choose your font theme:
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[16px]">{themeOptionElements}</div>
        <div className="flex justify-end">
          <button className="rounded-[8px] bg-[#335CFF] px-[16px] py-[12px] font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-[#FFFFFF]">
            Apply Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default FontOptions;
