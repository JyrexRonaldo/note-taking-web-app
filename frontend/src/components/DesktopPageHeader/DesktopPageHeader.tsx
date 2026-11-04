import SearchBar from "../SearchBar/SearchBar";
import { useTheme } from "../../store";

function DesktopPageHeader() {
  const theme = useTheme();

  let isDark;
  if (theme === "light") {
    isDark = false;
  } else if (theme === "dark") {
    isDark = true;
  } else {
    isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  const settingsIconUrl = isDark
    ? "/images/icon-settings-dark.svg"
    : "/images/icon-settings.svg";
  return (
    <div className="flex h-[81px] w-full items-center justify-between border-b border-b-[#E0E4EA] px-[32px]">
      <p className="font-inter text-[24px]/[120%] font-bold tracking-[-0.5px] text-[#0E121B]">
        All Notes
      </p>
      <div className="flex items-center gap-[16px]">
        <SearchBar placeholderText="Search by title, content, or tags..." />
        <button>
          <img className="size-[24px]" src={settingsIconUrl} alt="" />
        </button>
      </div>
    </div>
  );
}

export default DesktopPageHeader;
