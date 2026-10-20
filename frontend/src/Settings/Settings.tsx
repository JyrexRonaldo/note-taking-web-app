import { useTheme } from "../store";

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

  return (
    <div className="px-[16px] pt-[24px]">
      <div className="flex flex-col gap-[16px]">
        <p className="h-[29px] w-[343px] font-inter text-[24px]/[120%] font-bold tracking-[-0.5px] dark:text-white">
          Settings
        </p>
        <div className="flex flex-col gap-[8px] *:flex *:gap-[8px]">
          <div className="py-[8px]">
            {isDark ? (
              <img src="/images/icon-sun-dark.svg" alt="" />
            ) : (
              <img src="/images/icon-sun.svg" alt="" />
            )}
            <p className="dark:text-white">Color Theme</p>
          </div>
          <div className="py-[8px]">
            {isDark ? (
              <img src="/images/icon-font-dark.svg" alt="" />
            ) : (
              <img src="/images/icon-font.svg" alt="" />
            )}

            <p className="dark:text-white">Font Theme</p>
          </div>
          <div className="py-[8px]">
            {isDark ? (
              <img src="/images/icon-lock-dark.svg" alt="" />
            ) : (
              <img src="/images/icon-lock.svg" alt="" />
            )}

            <p className="dark:text-white">Change Password</p>
          </div>
          <hr className="text-[#E0E4EA] dark:text-[#232530]" />
          <div className="py-[8px]">
            {isDark ? (
              <img src="/images/icon-logout-dark.svg" alt="" />
            ) : (
              <img src="/images/icon-logout.svg" alt="" />
            )}
            <p className="dark:text-white">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
