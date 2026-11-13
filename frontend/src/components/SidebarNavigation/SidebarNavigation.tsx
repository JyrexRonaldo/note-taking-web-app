import TagItem from "../TagItem/TagItem";
import Header from "../Header/Header";
import { Fragment } from "react/jsx-runtime";
import { Link } from "react-router";
import data from "../../data";
import SvgIconHome from "../../icons/IconHome";
import SvgIconArchive from "../../icons/IconArchive";
import SvgIconChevronRight from "../../icons/IconChevronRight";
import { useLocation } from "react-router";

function Sidebar() {
  const location = useLocation();
  let allTags: string[] = [];
  data.notes.forEach((note) => allTags.push(...note.tags));
  //This is used to remove duplicates
  allTags = [...new Set(allTags)].sort();

  const tagElementsArray: React.JSX.Element[] = [];
  allTags.forEach((tag, index) =>
    tagElementsArray.push(
      <Fragment key={index}>
        <Link to="/tab-notes">
          <TagItem tagName={tag} />
          {/* {allTags.length - 1 !== index ? (
            <hr className="text-[#E0E4EA] dark:text-[#232530]" />
          ) : null} */}
        </Link>
      </Fragment>,
    ),
  );

  return (
    <div className="flex h-screen min-w-[272px] flex-col border-r border-r-[#E0E4EA] px-[16px] py-[12px] dark:border-r-[#232530]">
      <Header />
      <div className="flex grow flex-col gap-[8px]">
        <div>
          <Link to="/allNotes">
            <button className="flex w-full items-center gap-[8px] rounded-[8px] px-[12px] py-[10px]">
              <SvgIconHome className="size-[20px] fill-[#525866] dark:fill-[#FFFFFF]" />
              <p className="font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] dark:text-[#E0E4EA]">
                All Notes
              </p>
              {location.pathname.includes("allNotes") && (
                <SvgIconChevronRight className="ml-auto size-[24px] fill-[#000] dark:fill-[#FFF]" />
              )}
            </button>
          </Link>
          <Link to="/archived-notes">
            <button className="flex w-full items-center gap-[8px] rounded-[8px] px-[12px] py-[10px]">
              <SvgIconArchive className="size-[20px] fill-none stroke-[#525866] dark:stroke-white" />
              <p className="font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] dark:text-[#E0E4EA]">
                Archived Notes
              </p>
              {location.pathname.includes("archived-notes") && (
                <SvgIconChevronRight className="ml-auto size-[24px] fill-[#000] dark:fill-[#FFF]" />
              )}
            </button>
          </Link>
        </div>
        <hr className="text-[#E0E4EA] dark:text-[#232530]" />
        <p className="px-[8px] font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-[#717784]">
          Tags
        </p>
        <div className="h-[200px] grow scrollbar-none overflow-scroll">
          {tagElementsArray}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
