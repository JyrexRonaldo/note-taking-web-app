import TagItem from "../TagTab/TagTab";
import Header from "../Header/Header";
import { Fragment } from "react/jsx-runtime";
import { Link } from "react-router";
import data from "../../data";
import { useTheme } from "../../store";

function Sidebar() {
  const theme = useTheme();

  let isDark;
  if (theme === "light") {
    isDark = false;
  } else if (theme === "dark") {
    isDark = true;
  } else {
    isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  const homeIconUrl = isDark
    ? "/images/icon-home-dark.svg"
    : "/images/icon-home.svg";
  const archiveIconUrl = isDark
    ? "/images/icon-archive-dark.svg"
    : "/images/icon-archive.svg";

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
    <div className="h-screen border-r border-r-[#E0E4EA] w-[272px] px-[16px] py-[12px]">
      <Header />
      <div className="flex flex-col gap-[8px]">
        <div>
          <button className="flex w-full items-center gap-[8px] rounded-[8px] px-[12px] py-[10px]">
            <img className="size-[20px]" src={homeIconUrl} alt="" />{" "}
            <p className="font-inter text-[14px]/[120%] font-medium tracking-[-0.2px]">
              All Notes
            </p>
            <img
              className="ml-auto"
              src="/images/icon-chevron-right.svg"
              alt=""
            />
          </button>
          <button className="flex w-full items-center gap-[8px] rounded-[8px] px-[12px] py-[10px]">
            <img className="size-[20px]" src={archiveIconUrl} alt="" />
            <p className="font-inter text-[14px]/[120%] font-medium tracking-[-0.2px]">
              Archived Notes
            </p>
            <img
              className="ml-auto"
              src="/images/icon-chevron-right.svg"
              alt=""
            />
          </button>
        </div>
        <hr className="text-[#E0E4EA]" />
        <p className="px-[8px] font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-[#717784]">
          Tags
        </p>
        <div>{tagElementsArray}</div>
      </div>
    </div>
  );
}

export default Sidebar;
