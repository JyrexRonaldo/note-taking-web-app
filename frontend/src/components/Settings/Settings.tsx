import { Link } from "react-router";
// import ColorTheme from "../ColorTheme/ColorTheme";
// import FontOptions from "../FontOptions/FontOptions";
import ChangePassword from "../ChangePassword/ChangePassword";
import SvgIconSun from "../../icons/IconSun";
import SvgIconFont from "../../icons/IconFont";
import SvgIconLock from "../../icons/IconLock";
import SvgIconLogout from "../../icons/IconLogout";

function Settings() {

  return (
    <>
      <div className="px-[16px] py-[24px] sm:max-lg:px-[32px] lg:hidden">
        <div className="flex flex-col gap-[16px]">
          <p className="h-[29px] w-full font-inter text-[24px]/[120%] font-bold tracking-[-0.5px] dark:text-white">
            Settings
          </p>
          <div className="flex flex-col gap-[8px] *:flex *:gap-[8px]">
            <Link
              to="/settings/color-theme"
              className="flex items-center p-[8px]"
            >
              <SvgIconSun className="size-[24px] stroke-[#0E121B] dark:stroke-[#E0E4EA]" />
              <p className="font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-[#2B303B] dark:text-white">
                Color Theme
              </p>
            </Link>
            <Link
              to="/settings/font-options"
              className="flex items-center p-[8px]"
            >
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
        </div>
      </div>

      <div className="h-full max-lg:hidden">
        <div className="flex h-full pr-[32px]">
          <div className="flex flex-col gap-[16px] border-r border-r-[#E0E4EA] py-[20px] pr-[16px] pl-[32px] max-lg:hidden dark:border-r-[#232530]">
            <div className="flex h-[200px] grow scrollbar-none flex-col gap-[4px] overflow-scroll dark:text-white">
              <div className="flex flex-col gap-[8px] *:flex *:gap-[8px] lg:w-[210px]">
                <Link to="/settings/color-theme" className="py-[8px]">
                  <SvgIconSun className="size-[24px] stroke-[#0E121B] dark:stroke-[#E0E4EA]" />
                  <p className="font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] dark:text-white">
                    Color Theme
                  </p>
                </Link>
                <Link to="/settings/font-options" className="py-[8px]">
                  <SvgIconFont className="size-[24px] fill-[#0E121B] dark:fill-[#E0E4EA]" />
                  <p className="font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] dark:text-white">
                    Font Theme
                  </p>
                </Link>
                <Link to="/settings/change-password" className="py-[8px]">
                  <SvgIconLock className="size-[24px] stroke-[#0E121B] dark:stroke-[#E0E4EA]" />
                  <p className="font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] dark:text-white">
                    Change Password
                  </p>
                </Link>
                <hr className="text-[#E0E4EA] dark:text-[#232530]" />
                <div className="py-[8px]">
                  <SvgIconLogout className="size-[24px] stroke-[#0E121B] dark:stroke-[#E0E4EA]" />
                  <p className="font-inter text-[14px] font-medium tracking-[-0.2px] dark:text-white">
                    Logout
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grow p-[32px]">
            {/* <ColorTheme /> */}
            {/* <FontOptions /> */}
            <ChangePassword />
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
