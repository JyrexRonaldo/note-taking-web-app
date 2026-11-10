import SvgLogo from "../../icons/Logo";

function Header() {
  return (
    <>
      <div className="flex h-[54px] w-full items-center bg-[#F3F5F8] px-[16px] py-[13px] sm:max-lg:h-[74px] lg:bg-[#FFFFFF] lg:dark:bg-[#0E121B] dark:bg-[#232530]">
        {/* <img src={logoUrl} alt="notes" /> */}
        <SvgLogo className="h-[28px] w-[95px] fill-[#0E121B] dark:fill-[#FFFFFF]" />
      </div>
    </>
  );
}

export default Header;
