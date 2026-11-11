// import ColorTheme from "../ColorTheme/ColorTheme";
// import FontOptions from "../FontOptions/FontOptions";
// import ChangePassword from "../ChangePassword/ChangePassword";
import SettingsSidebar from "../SettingsSidebar/SettingsSidebar";
import { Outlet, useLocation } from "react-router";

function Settings() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/settings" && (
        <div className="lg:hidden">
          <Outlet />
        </div>
      )}
      {location.pathname === "/settings" && (
        <div className="px-[16px] py-[24px] sm:max-lg:px-[32px] lg:hidden">
          <div className="flex flex-col gap-[16px]">
            <p className="h-[29px] w-full font-inter text-[24px]/[120%] font-bold tracking-[-0.5px] dark:text-white">
              Settings
            </p>
            <SettingsSidebar />
          </div>
        </div>
      )}

      <div className="h-full max-lg:hidden">
        <div className="flex h-full pr-[32px]">
          <div className="flex flex-col gap-[16px] border-r border-r-[#E0E4EA] py-[20px] pr-[16px] pl-[32px] max-lg:hidden dark:border-r-[#232530]">
            <div className="flex h-[200px] grow scrollbar-none flex-col gap-[4px] overflow-scroll dark:text-white">
              <SettingsSidebar />
            </div>
          </div>
          <div className="grow p-[32px]">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
