import { useTheme } from "../../store";

function Header() {
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
  return (
    <>
      <div className="h-[54px] min-w-[375px] bg-[#F3F5F8] px-[16px] py-[13px] dark:bg-[#232530]">
        <img src={logoUrl} alt="notes" />
      </div>
    </>
  );
}

export default Header;
