import { Link } from "react-router";
import SvgIconSun from "../../icons/IconSun";
import SvgIconFont from "../../icons/IconFont";
import SvgIconLock from "../../icons/IconLock";
import SvgIconLogout from "../../icons/IconLogout";
import SvgIconChevronRight from "../../icons/IconChevronRight";
import { useLocation } from "react-router";
import clsx from "clsx";

function SettingsSidebar() {
  const location = useLocation();
  const selectedSetting = location.pathname.split("/")[2];

  const unSelectedStyle =
    "flex items-center rounded-[6px] p-[8px] hover:bg-[#F5F7FA] dark:hover:bg-[#232530]";
  const selectedStyle =
    "flex items-center rounded-[6px] bg-[#F3F5F8] p-[8px] hover:bg-[#F5F7FA] dark:bg-[#232530] dark:hover:bg-[#232530]";

  return (
    <div className="flex flex-col gap-[8px] *:flex *:gap-[8px] lg:w-[210px]">
      <Link
        to="/settings/color-theme"
        className={clsx(
          !(selectedSetting === "color-theme") && unSelectedStyle,
          selectedSetting === "color-theme" && selectedStyle,
        )}
      >
        <SvgIconSun className="size-[24px] stroke-[#0E121B] dark:stroke-[#E0E4EA]" />
        <p className="font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-[#2B303B] dark:text-white">
          Color Theme
        </p>
        {selectedSetting === "color-theme" && (
          <SvgIconChevronRight className="ml-auto size-[24px] fill-[#000] dark:fill-[#FFF]" />
        )}
      </Link>
      <Link
        to="/settings/font-options"
        className={clsx(
          !(selectedSetting === "font-options") && unSelectedStyle,
          selectedSetting === "font-options" && selectedStyle,
        )}
      >
        <SvgIconFont className="size-[24px] fill-[#0E121B] dark:fill-[#E0E4EA]" />
        <p className="font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-[#2B303B] dark:text-white">
          Font Theme
        </p>
        {selectedSetting === "font-options" && (
          <SvgIconChevronRight className="ml-auto size-[24px] fill-[#000] dark:fill-[#FFF]" />
        )}
      </Link>
      <Link
        to="/settings/change-password"
        className={clsx(
          !(selectedSetting === "change-password") && unSelectedStyle,
          selectedSetting === "change-password" && selectedStyle,
        )}
      >
        <SvgIconLock className="size-[24px] stroke-[#0E121B] dark:stroke-[#E0E4EA]" />
        <p className="font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-[#2B303B] dark:text-white">
          Change Password
        </p>
        {selectedSetting === "change-password" && (
          <SvgIconChevronRight className="ml-auto size-[24px] fill-[#000] dark:fill-[#FFF]" />
        )}
      </Link>
      <hr className="text-[#E0E4EA] dark:text-[#232530]" />
      <button
        type="button"
        className="flex items-center rounded-[6px] p-[8px] hover:bg-[#F5F7FA] dark:hover:bg-[#232530]"
      >
        <SvgIconLogout className="size-[24px] stroke-[#0E121B] dark:stroke-[#E0E4EA]" />
        <p className="font-inter text-[14px] font-medium tracking-[-0.2px] text-[#2B303B] dark:text-white">
          Logout
        </p>
      </button>
    </div>
  );
}

export default SettingsSidebar;
