import { Link } from "react-router";
import { useTheme } from "../../store";

function Settings() {
  const theme = useTheme();

  let isDark;
  if (theme === "light") {
    isDark = false;
  } else if (theme === "dark") {
    isDark = true;
  } else {
    isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  const themeIconUrl = isDark
    ? "/images/icon-sun-dark.svg"
    : "/images/icon-sun.svg";
  const fontIconUrl = isDark
    ? "/images/icon-font-dark.svg"
    : "/images/icon-font.svg";
  const passwordIconUrl = isDark
    ? "/images/icon-lock-dark.svg"
    : "/images/icon-lock.svg";
  const logoutIconUrl = isDark
    ? "/images/icon-logout-dark.svg"
    : "/images/icon-logout.svg";

  return (
    <div className="px-[16px] pt-[24px]">
      <div className="flex flex-col gap-[16px]">
        <p className="h-[29px] w-[343px] font-inter text-[24px]/[120%] font-bold tracking-[-0.5px] dark:text-white">
          Settings
        </p>
        <div className="flex flex-col gap-[8px] *:flex *:gap-[8px]">
          <Link to="/settings/color-theme" className="py-[8px]">
            <img src={themeIconUrl} alt="" />
            <p className="dark:text-white">Color Theme</p>
          </Link>
          <Link to="/settings/font-options" className="py-[8px]">
            <img src={fontIconUrl} alt="" />
            <p className="dark:text-white">Font Theme</p>
          </Link>
          <Link to="/settings/change-password" className="py-[8px]">
            <img src={passwordIconUrl} alt="" />
            <p className="dark:text-white">Change Password</p>
          </Link>
          <hr className="text-[#E0E4EA] dark:text-[#232530]" />
          <div className="py-[8px]">
            <img src={logoutIconUrl} alt="" />
            <p className="dark:text-white">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
