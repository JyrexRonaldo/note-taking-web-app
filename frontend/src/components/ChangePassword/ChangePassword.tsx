import { useTheme } from "../../store";

function ChangePassword() {
  const theme = useTheme();
  let isDark;
  if (theme === "light") {
    isDark = false;
  } else if (theme === "dark") {
    isDark = true;
  } else {
    isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  const leftArrowIconUrl = isDark
    ? "/images/icon-arrow-left-dark.svg"
    : "/images/icon-arrow-left.svg";

  const infoIconUrl = isDark
    ? "/images/icon-info-dark.svg"
    : "/images/icon-info.svg";

  return (
    <div className="px-[16px] pt-[24px]">
      <div className="flex flex-col gap-[20px] dark:gap-[24px]">
        <div className="flex flex-col gap-[12px]">
          <div className="flex items-center gap-[8px]">
            <img src={leftArrowIconUrl} alt="" />
            <p className="items-center font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-[#525866] dark:text-[#CACFD8]">
              Settings
            </p>
          </div>
          <div className="">
            <p className="font-inter text-[24px]/[120%] font-bold tracking-[-0.5px] text-[#0E121B] dark:text-[#FFFFFF]">
              Change Password
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[6px]">
              <label
                htmlFor="confirm-new-password"
                className="h-[17px] font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] dark:text-white"
              >
                Old Password
              </label>
              <input
                type="password"
                id="confirm-new-password"
                className="h-[44px] rounded-[8px] border border-[#CACFD8] px-[16px] py-[12px] dark:border-[#525866] dark:text-white"
              />
            </div>
            <div className="flex flex-col gap-[6px]">
              <label
                htmlFor="new-password"
                className="h-[17px] font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] dark:text-white"
              >
                New Password
              </label>
              <input
                type="password"
                id="new-password"
                className="h-[42px] rounded-[8px] border border-[#CACFD8] px-[16px] py-[12px] placeholder:font-inter placeholder:text-[14px]/[130%] placeholder:tracking-[-0.2px] dark:border-[#525866] dark:text-white dark:placeholder:text-[#525866]"
              />
              <div className="flex items-center gap-[8px]">
                <img src={infoIconUrl} alt="" className="size-[16px]" />
                <p className="font-inter text-[12px]/[140%] font-normal tracking-[0px] dark:text-[#99A0AE]">
                  At least 8 characters
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[6px]">
              <label
                htmlFor="confirm-new-password"
                className="h-[17px] font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] dark:text-white"
              >
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirm-new-password"
                className="h-[44px] rounded-[8px] border border-[#CACFD8] px-[16px] py-[12px] dark:border-[#525866] dark:text-white"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="rounded-[8px] bg-[#335CFF] px-[16px] py-[12px] font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-[#FFFFFF]">
            Save Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
