import type { ThemeVariableType } from "../../type";
import Option from "../Option/Option";
import { useThemeControls } from "../../store";
import { Link } from "react-router";
import SvgIconFontSansSerif from "../../icons/IconFontSansSerif";
import SvgIconFontSerif from "../../icons/IconFontSerif";
import SvgIconFontMonospace from "../../icons/IconFontMonospace";
import SvgIconArrowLeft from "../../icons/IconArrowLeft";

function FontOptions() {
  const { setTheme } = useThemeControls();

  const themeOptionsData = [
    {
      title: "Sans-serif",
      description: "Clean and modern, easy to read.",
      icon: (
        <SvgIconFontSansSerif className="size-[24px] fill-[#0E121B] dark:fill-[#FFFFFF]" />
      ),
      value: "light",
    },
    {
      title: "Serif",
      description: "Classic and elegant for a timeless feel.",
      icon: (
        <SvgIconFontSerif className="size-[24px] fill-[#0E121B] dark:fill-[#FFFFFF]" />
      ),
      value: "dark",
    },
    {
      title: "Monospace",
      description: "Code-like, great for a technical vibe.",
      icon: (
        <SvgIconFontMonospace className="size-[24px] fill-[#0E121B] dark:fill-[#FFFFFF]" />
      ),
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
      icon={data.icon}
      value={data.value as ThemeVariableType}
      optionSelectHandler={handleSetTheme}
    />
  ));

  return (
    <div className="px-[16px] pt-[24px] sm:max-lg:px-[32px] lg:max-w-[528px] lg:p-[0px]">
      <div className="flex flex-col gap-[20px] lg:gap-[24px] dark:gap-[24px]">
        <div className="flex flex-col gap-[12px]">
          <Link
            to="/settings"
            className="flex items-center gap-[8px] lg:hidden"
          >
            <SvgIconArrowLeft className="size-[24px] fill-black dark:fill-[#CACFD8]" />
            <p className="items-center font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-[#525866] dark:text-[#CACFD8]">
              Settings
            </p>
          </Link>
          <div className="flex flex-col gap-[8px]">
            <p className="font-inter text-[24px]/[120%] font-bold tracking-[-0.5px] text-[#0E121B] lg:text-[16px]/[120%] lg:font-semibold lg:tracking-[-0.3px] dark:text-[#FFFFFF]">
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
