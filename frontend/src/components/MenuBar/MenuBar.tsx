import { useTheme } from "../../store";
import MenuBarButton from "../MenuBarButton/MenuBarButton";

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

  const buttonValues = [
    { address: "/", iconUrl: homeIconUrl, text: "Home" },
    { address: "/search", iconUrl: searchIconUrl, text: "Search" },
    { address: "/archived-notes", iconUrl: archiveIconUrl, text: "Archived" },
    { address: "/tags", iconUrl: tagIconUrl, text: "Tags" },
    { address: "/settings", iconUrl: settingsIconUrl, text: "Settings" },
  ];

  const menuButtons = buttonValues.map((value) => (
    <MenuBarButton
      path={value.address}
      iconUrl={value.iconUrl}
      text={value.text}
    />
  ));

  return (
    <>
      <div className="flex w-full justify-center border-t border-t-[#E0E4EA] bg-white px-[32px] py-[12px] text-center *:flex *:h-[32px] *:w-[62.2px] *:items-center *:justify-center *:py-[4px] sm:max-lg:h-[56px] sm:max-lg:h-[74px] sm:max-lg:items-center sm:max-lg:divide-x sm:max-lg:divide-[#F3F5F8] sm:max-lg:px-[0px] sm:max-lg:*:grow dark:border-t-[#232530] dark:bg-[#0E121B]">
        {menuButtons}
      </div>
    </>
  );
}

export default MenuBar;
