import { useTheme } from "../../store";
import { Link } from "react-router";

function MenuBar() {
  const theme = useTheme();

  let isDark;
  if (theme === "light") {
    isDark = false;
  } else if (theme === "dark") {
    isDark = true;
  } else {
    isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  const homeIconUrl = isDark
    ? "/images/icon-home-dark.svg"
    : "/images/icon-home.svg";
  const searchIconUrl = isDark
    ? "/images/icon-search-dark.svg"
    : "/images/icon-search.svg";
  const archiveIconUrl = isDark
    ? "/images/icon-archive-dark.svg"
    : "/images/icon-archive.svg";
  const tagIconUrl = isDark
    ? "/images/icon-tag-dark.svg"
    : "/images/icon-tag.svg";
  const settingsIconUrl = isDark
    ? "/images/icon-settings-dark.svg"
    : "/images/icon-settings.svg";

  return (
    <>
      <div className="flex h-[56px] justify-center border-t border-t-[#E0E4EA] bg-white px-[32px] py-[12px] text-center *:flex *:h-[32px] *:w-[62.2px] *:items-center *:justify-center *:py-[4px] dark:border-t-[#232530] dark:bg-[#0E121B]">
        <Link to="/">
          <button type="button">
            <img className="size-[24px]" src={homeIconUrl} alt="" />
          </button>
        </Link>
        <Link to="/search">
          <button type="button">
            <img className="size-[24px]" src={searchIconUrl} alt="" />
          </button>
        </Link>
        <Link to="/archived-notes">
          <button type="button">
            <img className="size-[24px]" src={archiveIconUrl} alt="" />
          </button>
        </Link>
        <Link to="/tags">
          <button type="button">
            <img className="size-[24px]" src={tagIconUrl} alt="" />
          </button>
        </Link>
        <Link to="/settings">
          <button type="button">
            <img className="size-[24px]" src={settingsIconUrl} alt="" />
          </button>
        </Link>
      </div>
    </>
  );
}

export default MenuBar;
