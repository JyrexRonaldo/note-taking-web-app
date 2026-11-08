import TagItem from "../TagItem/TagItem";
import Header from "../Header/Header";
import { Fragment } from "react/jsx-runtime";
import { Link } from "react-router";
import data from "../../data";
// import { useTheme } from "../../store";

function Sidebar() {
  // const theme = useTheme();

  // let isDark;
  // if (theme === "light") {
  //   isDark = false;
  // } else if (theme === "dark") {
  //   isDark = true;
  // } else {
  //   isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  // }

  // const homeIconUrl = isDark
  //   ? "/images/icon-home-modal-dark.svg"
  //   : "/images/icon-home.svg";

  // const archiveIconUrl = isDark
  //   ? "/images/icon-archive-modal-dark.svg"
  //   : "/images/icon-archive.svg";

  // const chevronRightIconUrl = isDark
  //   ? "/images/icon-chevron-right-dark.svg"
  //   : "/images/icon-chevron-right.svg";

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
    <div className="flex h-screen w-[272px] flex-col border-r border-r-[#E0E4EA] px-[16px] py-[12px] dark:border-r-[#232530]">
      <Header />
      <div className="flex grow flex-col gap-[8px]">
        <div>
          <Link to="/">
            <button className="flex w-full items-center gap-[8px] rounded-[8px] px-[12px] py-[10px]">
              {/* <img className="size-[20px]" src={homeIconUrl} alt="" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                className="size-[20px] fill-[#525866] dark:fill-[#FFFFFF]"
              >
                <path
                  // fill="#525866"
                  fill-rule="evenodd"
                  d="M4.496 8.025a.75.75 0 0 1 .75.75v8.675a2.314 2.314 0 0 0 2.314 2.314h8.88a2.314 2.314 0 0 0 2.313-2.314V8.775a.75.75 0 0 1 1.5 0v8.675a3.814 3.814 0 0 1-3.814 3.814H7.56a3.814 3.814 0 0 1-3.814-3.814V8.775a.75.75 0 0 1 .75-.75Z"
                  clip-rule="evenodd"
                />
                <path
                  // fill="#525866"
                  fill-rule="evenodd"
                  d="M10.06 3.41a3.127 3.127 0 0 1 3.88 0l7.525 5.958a.75.75 0 1 1-.93 1.176l-7.526-5.957a1.628 1.628 0 0 0-2.018 0l-7.525 5.957a.75.75 0 1 1-.931-1.176L10.06 3.41Z"
                  clip-rule="evenodd"
                />
                <path
                  // fill="#525866"
                  fill-rule="evenodd"
                  d="M17.668 4.193a.75.75 0 0 1 .75.75v2.354a.75.75 0 0 1-1.5 0V4.943a.75.75 0 0 1 .75-.75ZM11.974 13.688h.055c.377 0 .702 0 .97.02.283.022.565.071.838.203a2.25 2.25 0 0 1 1.05 1.05c.131.272.18.554.202.837.02.268.02.593.02.97v3.746a.75.75 0 0 1-1.5 0v-3.718c0-.412 0-.678-.015-.881-.016-.195-.041-.268-.059-.303a.75.75 0 0 0-.35-.35c-.035-.017-.108-.043-.302-.058a12.747 12.747 0 0 0-.881-.017c-.412 0-.679.001-.881.017-.195.015-.268.04-.303.058a.75.75 0 0 0-.35.35c-.017.035-.043.108-.058.303-.016.203-.016.469-.016.88v3.72a.75.75 0 0 1-1.5 0v-3.747c0-.377 0-.702.02-.97.022-.283.071-.565.203-.838a2.25 2.25 0 0 1 1.05-1.05c.273-.131.554-.18.837-.202.268-.02.593-.02.97-.02Z"
                  clip-rule="evenodd"
                />
              </svg>
              <p className="font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] dark:text-[#E0E4EA]">
                All Notes
              </p>
            </button>
          </Link>
          <Link to="/archived-notes">
            <button className="flex w-full items-center gap-[8px] rounded-[8px] px-[12px] py-[10px]">
              {/* <img className="size-[20px]" src={archiveIconUrl} alt="" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                className="size-[20px] stroke-[#525866] dark:stroke-[#FFFFFF]"
              >
                <path
                  // stroke="#525866"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M21 7.782v8.435C21 19.165 18.919 21 15.974 21H8.026C5.081 21 3 19.165 3 16.216V7.782C3 4.834 5.081 3 8.026 3h7.948C18.919 3 21 4.843 21 7.782Z"
                />
                <path
                  // stroke="#525866"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="m15 14-3.002 3L9 14M11.998 17v-7M20.934 7H3.059"
                />
              </svg>
              <p className="font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] dark:text-[#E0E4EA]">
                Archived Notes
              </p>
              {/* <img className="ml-auto" src={chevronRightIconUrl} alt="" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                className="fill-[#000] dark:fill-[#FFF] ml-auto"
              >
                <path
                  // fill="#000"
                  fill-rule="evenodd"
                  d="M9.47 7.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06L12.94 12 9.47 8.53a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
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
