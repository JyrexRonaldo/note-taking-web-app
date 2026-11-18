import SvgLogo from "../../icons/Logo";
import { Link } from "react-router";

function Header() {
  return (
    <>
      <Link to="/all-notes">
        <div className="flex h-[54px] w-full items-center bg-[#F3F5F8] px-[16px] py-[13px] sm:max-lg:h-[74px] lg:bg-[#FFFFFF] dark:bg-[#232530] lg:dark:bg-[#0E121B]">
          {/* <img src={logoUrl} alt="notes" /> */}
          <SvgLogo className="h-[28px] w-[95px] fill-[#0E121B] dark:fill-[#FFFFFF]" />
        </div>
      </Link>
    </>
  );
}

export default Header;
