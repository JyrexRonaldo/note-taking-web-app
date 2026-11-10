import SvgLogo from "../../icons/Logo";
import SvgIconInfo from "../../icons/IconInfo";

function ResetPassword() {
  return (
    <div className="flex h-screen items-center justify-center bg-[#F3F5F8] px-[16px] py-[10px] dark:bg-[#2B303B]">
      <div className="flex w-full flex-col gap-[16px] rounded-[12px] bg-white px-[16px] py-[40px] sm:max-lg:max-w-[522px] sm:max-lg:px-[32px] lg:max-w-[540px] lg:px-[48px] dark:bg-[#0E121B]">
        <div className="flex w-full items-center justify-center">
          <SvgLogo className="h-[28px] w-[95px] fill-[#0E121B] dark:fill-[#FFFFFF]" />
        </div>
        <div className="flex flex-col gap-[8px] text-center">
          <p className="font-inter text-[24px]/[120%] font-bold tracking-[-0.5px] dark:text-white">
            Reset Your Password
          </p>
          <p className="font-inter text-[14px]/[130%] tracking-[-0.2px] text-[#525866] dark:text-[#CACFD8]">
            Choose a new password to secure your account.
          </p>
        </div>
        <div className="flex flex-col gap-[16px] pt-[24px]">
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
              <SvgIconInfo className="size-[16px] stroke-[#525866] dark:stroke-[#99A0AE]" />
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
          <button className="h-[44px] rounded-[8px] bg-[#335CFF] font-inter text-[16px]/[120%] font-semibold tracking-[-0.3px] text-white">
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
