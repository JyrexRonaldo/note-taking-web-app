import { useTheme } from "../../store";
import { useNavigate } from "react-router";
import { Link } from "react-router";

function NotePage() {
  const theme = useTheme();
  const navigate = useNavigate();

  const backButtonHandler = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault(); // Prevents navigating to '#'
    navigate(-1); // Goes back to the previous page
  };

  let isDark;
  if (theme === "light") {
    isDark = false;
  } else if (theme === "dark") {
    isDark = true;
  } else {
    isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  const leftArrowIconUrl = isDark
    ? "/images/icon-arrow-left-dark.svg"
    : "/images/icon-arrow-left.svg";
  const tagIconUrl = isDark
    ? "/images/icon-tag-dark.svg"
    : "/images/icon-tag-note.svg";

  const clockIconUrl = isDark
    ? "/images/icon-clock-dark.svg"
    : "/images/icon-clock.svg";

  const archiveIconUrl = isDark
    ? "/images/icon-archive-dark-note.svg"
    : "/images/icon-archive.svg";

  const deleteIconUrl = isDark
    ? "/images/icon-delete-dark.svg"
    : "/images/icon-delete.svg";

  return (
    <div className="flex min-h-full flex-col gap-[12px] px-[16px] py-[20px] dark:py-[16px]">
      <div className="flex justify-between border-b border-[#E0E4EA] pb-[12px]">
        <div>
          <Link
            to="#"
            onClick={backButtonHandler}
            className="flex items-center gap-[4px]"
          >
            <img className="size-[18px]" src={leftArrowIconUrl} alt="" />
            <p className="items-center font-inter text-[14px]/[130%] tracking-[-0.2px] text-[#525866] dark:text-[#CACFD8]">
              Go Back
            </p>
          </Link>
        </div>
        <div className="flex gap-[16px]">
          <button type="button" className="size-[18px]">
            <img src={deleteIconUrl} alt="" />
          </button>
          <button type="button" className="size-[18px]">
            <img src={archiveIconUrl} alt="" />
          </button>
          <button
            type="button"
            className="font-inter text-[14px]/[130%] tracking-[-0.2px] text-[#525866] dark:text-[#CACFD8]"
          >
            Cancel
          </button>
          <button
            type="button"
            className="font-inter text-[14px]/[130%] tracking-[-0.2px] text-[#335CFF]"
          >
            Save Note
          </button>
        </div>
      </div>
      <div>
        <p className="font-inter text-[24px]/[120%] font-bold tracking-[-0.5px] text-[#0E121B]">
          React Performance Optimization
        </p>
      </div>
      <div className="flex flex-col gap-[4px]">
        <div className="flex gap-[8px]">
          <div className="flex min-w-[115px] items-center gap-[6px] py-[4px]">
            <img src={tagIconUrl} alt="" className="size-[16px]" />
            <p className="items-center font-inter text-[12px]/[120%] tracking-[-0.2px] text-[#2B303B] dark:text-[#CACFD8]">
              Tags
            </p>
          </div>
          <div className="flex items-center">
            <p className="font-inter text-[12px]/[120%] tracking-[-0.2px] text-[#0E121B]">
              Dev, React
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[8px]">
          <div className="flex min-w-[115px] items-center gap-[6px] py-[4px]">
            <img src={clockIconUrl} alt="" className="size-[16px]" />
            <p className="font-inter text-[12px]/[120%] tracking-[-0.2px] text-[#2B303B] dark:text-[#CACFD8]">
              Last edited
            </p>
          </div>
          <div>
            <p className="font-inter text-[12px]/[120%] tracking-[-0.2px] text-[#2B303B]">
              29 Oct 2024
            </p>
          </div>
        </div>
      </div>
      <hr className="text-[#E0E4EA]" />
      <p className="grow font-inter text-[14px]/[130%] tracking-[-0.2px] text-[#232530]">
        Key performance optimization techniques: 1. Code Splitting - Use
        React.lazy() for route-based splitting - Implement dynamic imports for
        heavy components 2. Memoization - useMemo for expensive calculations -
        useCallback for function props - React.memo for component optimization
        3. Virtual List Implementation - Use react-window for long lists -
        Implement infinite scrolling TODO: Benchmark current application and
        identify bottlenecks
      </p>
    </div>
  );
}

export default NotePage;
