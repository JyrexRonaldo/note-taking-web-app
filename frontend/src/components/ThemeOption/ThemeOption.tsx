import {
  //  useTheme,
  useThemeControls,
} from "../../store";
import type { ThemeVariableType } from "../../type";

function ThemeOption({
  mode,
  description,
  iconUrl,
  value,
}: {
  mode: string;
  description: string;
  iconUrl: string;
  value: ThemeVariableType;
}) {
  const { setTheme } = useThemeControls();
  //   const theme = useTheme();

  const handleSetTheme = (value: ThemeVariableType) => {
    setTheme(value);
  };

  //   let isDark;
  //   if (theme === "light") {
  //     isDark = false;
  //   } else if (theme === "dark") {
  //     isDark = true;
  //   } else {
  //     isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  //   }

  return (
    <>
      <label htmlFor={value}>
        <div className="flex items-center gap-[16px] rounded-[12px] border border-[#E0E4EA] p-[16px] dark:border-[#2B303B]">
          <div className="rounded-[12px] border border-[#E0E4EA] p-[8px] dark:border-[#2B303B]">
            <img src={iconUrl} alt="" className="size-[24px]" />
          </div>
          <div className="flex flex-col gap-[6px]">
            <p className="font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-[#0E121B] dark:text-[#FFFFFF]">
              {mode}
            </p>
            <p className="font-inter text-[12px]/[120%] tracking-[-0.2px] text-[#2B303B] dark:text-[#CACFD8]">
              {description}
            </p>
          </div>
          <div className="ml-auto">
            <input
              onInput={() => {
                handleSetTheme(value);
              }}
              type="radio"
              name="theme"
              value={value}
              id={value}
              className="relative h-[16px] w-[16px] appearance-none rounded-[50%] border border-[#E0E4EA] align-[-2px] checked:border-[4px] checked:border-[#335CFF]"
            />
          </div>
        </div>
      </label>
    </>
  );
}

export default ThemeOption;
