import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router";
import SvgIconSettings from "../../icons/IconSettings";

function DesktopPageHeader() {
  return (
    <div className="flex h-[81px] w-full items-center justify-between border-b border-b-[#E0E4EA] px-[32px] dark:border-b-[#232530]">
      <p className="font-inter text-[24px]/[120%] font-bold tracking-[-0.5px] text-[#0E121B] dark:text-white">
        All Notes
      </p>
      <div className="flex items-center gap-[16px]">
        <SearchBar placeholderText="Search by title, content, or tags..." />
        <Link to="/settings">
          <button type="button">
            {/* <img className="size-[24px]" src={settingsIconUrl} alt="" /> */}
            <SvgIconSettings className="size-[24px] fill-[#525866] dark:fill-[#99A0AE]" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default DesktopPageHeader;
