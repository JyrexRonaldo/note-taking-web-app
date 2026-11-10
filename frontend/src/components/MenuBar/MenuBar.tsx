import MenuBarButton from "../MenuBarButton/MenuBarButton";
import SvgIconHome from "../../icons/IconHome";
import SvgIconSearch from "../../icons/IconSearch";
import SvgIconArchive from "../../icons/IconArchive";
import SvgIconTag from "../../icons/IconTag";
import SvgIconSettings from "../../icons/IconSettings";

function MenuBar() {
  const homeIcon = (
    <SvgIconHome className="size-[24px] fill-[#525866] dark:fill-[#99A0AE]" />
  );

  const searchIcon = (
    <SvgIconSearch className="size-[24px] fill-[#525866] dark:fill-[#99A0AE]" />
  );

  const archiveIcon = (
    <SvgIconArchive className="size-[24px] stroke-[#525866] dark:stroke-[#99A0AE]" />
  );

  const tagIcon = (
    <SvgIconTag className="size-[24px] stroke-[#525866] dark:stroke-[#99A0AE]" />
  );

  const settingsIcon = (
    <SvgIconSettings className="size-[24px] fill-[#525866] dark:fill-[#99A0AE]" />
  );

  const buttonValues = [
    { address: "/", icon: homeIcon, text: "Home" },
    { address: "/search", icon: searchIcon, text: "Search" },
    { address: "/archived-notes", icon: archiveIcon, text: "Archived" },
    { address: "/tags", icon: tagIcon, text: "Tags" },
    { address: "/settings", icon: settingsIcon, text: "Settings" },
  ];

  const menuButtons = buttonValues.map((value) => (
    <MenuBarButton path={value.address} icon={value.icon} text={value.text} />
  ));

  return (
    <>
      <div className="flex w-full justify-center border-t border-t-[#E0E4EA] bg-white px-[32px] py-[12px] text-center *:flex *:h-[32px] *:w-[62.2px] *:items-center *:justify-center *:py-[4px] sm:max-lg:h-[56px] sm:max-lg:h-[74px] sm:max-lg:items-center sm:max-lg:divide-x sm:max-lg:divide-[#F3F5F8] sm:max-lg:px-[0px] sm:max-lg:*:grow dark:divide-[#232530] dark:border-t-[#232530] dark:bg-[#0E121B]">
        {menuButtons}
      </div>
    </>
  );
}

export default MenuBar;
