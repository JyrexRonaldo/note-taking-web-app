import TagItem from "../TagItem/TagItem";
import Header from "../Header/Header";
import { Fragment } from "react/jsx-runtime";
import { Link } from "react-router";
import data from "../../data";
import SvgIconHome from "../../icons/IconHome";
import SvgIconArchive from "../../icons/IconArchive";
import SvgIconChevronRight from "../../icons/IconChevronRight";
import { useLocation } from "react-router";
import clsx from "clsx";

function Sidebar() {
  const location = useLocation();
  const allNotesSelected = location.pathname.includes("all-notes");
  const archivedNotesSelected = location.pathname.includes("archived-notes");

  let allTags: string[] = [];
  data.notes.forEach((note) => allTags.push(...note.tags));
  //This is used to remove duplicates
  allTags = [...new Set(allTags)].sort();

  const tagElementsArray: React.JSX.Element[] = [];
  allTags.forEach((tag, index) =>
    tagElementsArray.push(
      <Fragment key={index}>
        <Link to={`/tags/${tag}/tag-notes`}>
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
          <Link to="/all-notes">
            <button
              className={clsx(
                !allNotesSelected &&
                  "flex w-full items-center gap-[8px] rounded-[8px] px-[12px] py-[10px]",
                allNotesSelected &&
                  "flex w-full items-center gap-[8px] rounded-[8px] bg-[#F3F5F8] px-[12px] py-[10px] dark:bg-[#232530]",
              )}
            >
              <SvgIconHome
                className={clsx(
                  !allNotesSelected &&
                    "size-[20px] fill-[#525866] dark:fill-[#FFFFFF]",
                  allNotesSelected && "size-[20px] fill-[#335CFF]",
                )}
              />
              <p
                className={clsx(
                  !allNotesSelected &&
                    "font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-[#2B303B] dark:text-[#E0E4EA]",
                  allNotesSelected &&
                    "font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-[#0E121B] dark:text-white",
                )}
              >
                All Notes
              </p>
              {allNotesSelected && (
                <SvgIconChevronRight className="ml-auto size-[24px] fill-[#000] dark:fill-[#FFF]" />
              )}
            </button>
          </Link>
          <Link to="/archived-notes">
            <button
              className={clsx(
                !archivedNotesSelected &&
                  "flex w-full items-center gap-[8px] rounded-[8px] px-[12px] py-[10px]",
                archivedNotesSelected &&
                  "flex w-full items-center gap-[8px] rounded-[8px] bg-[#F3F5F8] px-[12px] py-[10px] dark:bg-[#232530]",
              )}
            >
              <SvgIconArchive
                className={clsx(
                  !archivedNotesSelected &&
                    "size-[20px] fill-none stroke-[#525866] dark:stroke-white",
                  archivedNotesSelected &&
                    "size-[20px] fill-none stroke-[#335CFF]",
                )}
              />
              <p
                className={clsx(
                  !archivedNotesSelected &&
                    "font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-[#2B303B] dark:text-[#E0E4EA]",
                  archivedNotesSelected &&
                    "font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-[#0E121B] dark:text-white",
                )}
              >
                Archived Notes
              </p>
              {archivedNotesSelected && (
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
