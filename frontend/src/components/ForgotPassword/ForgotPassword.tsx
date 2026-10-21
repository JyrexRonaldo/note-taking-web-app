import { useTheme } from "../../store";

function ForgotPassword() {
  const theme = useTheme();

  let isDark: boolean;
  if (theme === "light") {
    isDark = false;
  } else if (theme === "dark") {
    isDark = true;
  } else {
    isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  const logoUrl = isDark ? "/images/logo-dark.svg" : "/images/logo.svg";

  return (
    <div className="flex h-screen items-center justify-center bg-[#F3F5F8] px-[16px] py-[10px] dark:bg-[#2B303B]">
      <div className="flex min-w-[343px] flex-col gap-[16px] rounded-[12px] bg-white px-[16px] py-[40px] dark:bg-[#0E121B]">
        <div className="flex w-full items-center justify-center">
          <img src={logoUrl} alt="notes" />
        </div>
        <div className="flex flex-col gap-[8px] text-center">
          <p className="font-inter text-[24px]/[120%] font-bold tracking-[-0.5px] dark:text-white">
            Forgotten your password?
          </p>
          <p className="font-inter text-[14px]/[130%] tracking-[-0.2px] text-[#525866] dark:text-[#CACFD8]">
            Enter your email below, and we’ll send you a link to reset it.
          </p>
        </div>
        <div className="flex flex-col gap-[16px] pt-[24px]">
          <div className="flex flex-col gap-[6px]">
            <label
              htmlFor="email"
              className="h-[17px] font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] dark:text-white"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="email@example.com"
              className="h-[42px] rounded-[8px] border border-[#CACFD8] px-[16px] py-[12px] placeholder:font-inter placeholder:text-[14px]/[130%] placeholder:tracking-[-0.2px] dark:border-[#525866] dark:text-white dark:placeholder:text-[#525866]"
            />
          </div>
          <button className="h-[44px] rounded-[8px] bg-[#335CFF] font-inter text-[16px]/[120%] font-semibold tracking-[-0.3px] text-white">
            Send Reset Link
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
