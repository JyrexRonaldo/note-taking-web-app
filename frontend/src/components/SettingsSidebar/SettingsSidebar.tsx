import { Link } from "react-router";
import SvgIconSun from "../../icons/IconSun";
import SvgIconFont from "../../icons/IconFont";
import SvgIconLock from "../../icons/IconLock";
import SvgIconLogout from "../../icons/IconLogout";

function SettingsSidebar() {
  return (
    <div className="flex flex-col gap-[8px] *:flex *:gap-[8px] lg:w-[210px]">
      <Link to="/settings/color-theme" className="flex items-center p-[8px]">
        <SvgIconSun className="size-[24px] stroke-[#0E121B] dark:stroke-[#E0E4EA]" />
        <p className="font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-[#2B303B] dark:text-white">
          Color Theme
        </p>
      </Link>
      <Link to="/settings/font-options" className="flex items-center p-[8px]">
        <SvgIconFont className="size-[24px] fill-[#0E121B] dark:fill-[#E0E4EA]" />
        <p className="font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-[#2B303B] dark:text-white">
          Font Theme
        </p>
      </Link>
      <Link
        to="/settings/change-password"
        className="flex items-center p-[8px]"
      >
        <SvgIconLock className="size-[24px] stroke-[#0E121B] dark:stroke-[#E0E4EA]" />
        <p className="font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-[#2B303B] dark:text-white">
          Change Password
        </p>
      </Link>
      <hr className="text-[#E0E4EA] dark:text-[#232530]" />
      <button type="button" className="flex items-center p-[8px]">
        <SvgIconLogout className="size-[24px] stroke-[#0E121B] dark:stroke-[#E0E4EA]" />
        <p className="font-inter text-[14px] font-medium tracking-[-0.2px] text-[#2B303B] dark:text-white">
          Logout
        </p>
      </button>
    </div>
  );
}

export default SettingsSidebar;
