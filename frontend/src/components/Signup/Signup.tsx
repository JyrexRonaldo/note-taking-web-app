import { useTheme } from "../../store";

function Signup() {
  const theme = useTheme();

  let isDark;
  if (theme === "light") {
    isDark = false;
  } else if (theme === "dark") {
    isDark = true;
  } else {
    isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  const logoUrl = isDark ? "/images/logo-dark.svg" : "/images/logo.svg";
  const googleIconUrl = isDark
    ? "/images/icon-google-dark.svg"
    : "/images/icon-google.svg";
  return (
    <div className="flex h-screen items-center justify-center bg-[#F3F5F8] px-[16px] py-[10px] dark:bg-[#0E121B]">
      <div className="flex min-w-[343px] flex-col gap-[16px] rounded-[12px] bg-white px-[16px] py-[48px]">
        <div className="flex w-full items-center justify-center">
          <img src={logoUrl} alt="notes" />
        </div>
        <div className="flex flex-col gap-[8px] text-center">
          <p className="font-inter text-[24px]/[120%] font-bold tracking-[-0.5px]">
            Create Your Account
          </p>
          <p className="font-inter text-[14px]/[130%] tracking-[-0.2px]">
            Sign up to start organizing your notes and boost your productivity.
          </p>
        </div>
        <div className="flex flex-col gap-[16px] pt-[24px]">
          <div className="flex flex-col gap-[6px]">
            <label
              htmlFor="email"
              className="h-[17px] font-inter text-[14px]/[120%] font-medium tracking-[-0.2px]"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="email@example.com"
              className="h-[42px] rounded-[8px] border border-[#CACFD8] px-[16px] py-[12px]"
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <label
              htmlFor="password"
              className="h-[17px] font-inter text-[14px]/[120%] font-medium tracking-[-0.2px]"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="h-[44px] rounded-[8px] border border-[#CACFD8] px-[16px] py-[12px]"
            />
            <div className="flex items-center gap-[8px]">
              <img src="/images/icon-info.svg" alt="" className="size-[16px]" />
              <p className="font-inter text-[12px]/[140%] font-normal tracking-[0px]">
                At least 8 characters
              </p>
            </div>
          </div>
          <button className="h-[44px] rounded-[8px] bg-[#335CFF] font-inter text-[16px]/[120%] font-semibold tracking-[-0.3px] text-white">
            Sign up
          </button>
        </div>
        <div className="flex flex-col gap-[16px] border-t border-t-1 border-[#E0E4EA] pt-[24px] text-center">
          <p>Or log in with</p>
          <button className="flex items-center justify-center rounded-[12px] border-1 border-[#CACFD8] px-[12px] py-[16px]">
            <img src={googleIconUrl} alt="" />
            <p className="px-[16px] font-inter text-[16px]/[100%] font-medium tracking-[0.5px]">
              Google
            </p>
          </button>
        </div>
        <hr className="text-[#E0E4EA]" />
        <div className="text-center">
          <p className="font-inter text-[14px]/[130%] tracking-[-0.2px] text-[#525866]">
            Already have an account?{" "}
            <span className="text-[#0E121B]">Login</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
