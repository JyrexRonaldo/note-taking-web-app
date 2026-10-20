import { useTheme } from "../store";

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
  return (
    <>
      <div className="flex h-[56px] justify-center border-t border-t-[#E0E4EA] bg-white px-[32px] py-[12px] text-center *:flex *:h-[32px] *:w-[62.2px] *:items-center *:justify-center *:py-[4px] dark:border-t-[#232530] dark:bg-[#0E121B]">
        <button>
          {isDark ? (
            <img
              className="size-[24px]"
              src="/images/icon-home-dark.svg"
              alt=""
            />
          ) : (
            <img className="size-[24px]" src="/images/icon-home.svg" alt="" />
          )}
        </button>
        <button>
          {isDark ? (
            <img
              className="size-[24px]"
              src="/images/icon-search-dark.svg"
              alt=""
            />
          ) : (
            <img className="size-[24px]" src="/images/icon-search.svg" alt="" />
          )}
        </button>
        <button>
          {isDark ? (
            <img
              className="size-[24px]"
              src="/images/icon-archive-dark.svg"
              alt=""
            />
          ) : (
            <img
              className="size-[24px]"
              src="/images/icon-archive.svg"
              alt=""
            />
          )}
        </button>
        <button>
          {isDark ? (
            <img
              className="size-[24px]"
              src="/images/icon-tag-dark.svg"
              alt=""
            />
          ) : (
            <img className="size-[24px]" src="/images/icon-tag.svg" alt="" />
          )}
        </button>
        <button>
          {isDark ? (
            <img
              className="size-[24px]"
              src="/images/icon-settings-dark.svg"
              alt=""
            />
          ) : (
            <img
              className="size-[24px]"
              src="/images/icon-settings.svg"
              alt=""
            />
          )}
        </button>
      </div>
    </>
  );
}

export default MenuBar;
