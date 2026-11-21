import { format } from "date-fns";
import { useLocation, useNavigate } from "react-router";
import clsx from "clsx";

function NoteTab({
  id,
  title,
  tags,
  lastEdited,
}: {
  id: number;
  title: string;
  tags: string[];
  lastEdited: string;
}) {
  const navigate = useNavigate();
  const tagElementsArray = tags.map((tag, index) => (
    <p
      key={index}
      className="flex h-[18px] min-w-[min-content] items-center justify-center rounded-[4px] border-[1px] border-[#D4E2FF] bg-[#E0E4EA] px-[6px] py-[2px] font-inter text-[12px]/[120%] tracking-[0.2px] dark:border-[#2B303B] dark:bg-[#2B303B] dark:text-white"
    >
      {tag}
    </p>
  ));
  lastEdited = format(new Date(lastEdited), "d LLL yyyy");

  const location = useLocation();
  const selectedTag = location.pathname.split("/")[2];
  let pageLink = "";
  if (location.pathname.includes("all-notes")) {
    pageLink = "all-notes";
  } else if (location.pathname.includes("archived-notes")) {
    pageLink = "archived-notes";
  } else if (location.pathname.includes("tag-note")) {
    pageLink = `tags/${selectedTag}/tag-notes`;
  } else if (location.pathname.includes("tags")) {
    pageLink = `tags/${selectedTag}/tag-notes`;
  } else if (location.pathname.includes("search")) {
    pageLink = "search";
  } else if (location.pathname.includes("new-note")) {
    pageLink = "all-notes";
  }

  const selected = location.pathname.includes(`${id}`);

  const noteTabButtonhandler = () => {
    navigate(`/${pageLink}/note-page/${id}`);
  };

  const locationSegments = location.pathname.split("/");

  const lastSegment = locationSegments[locationSegments.length - 1];

  const possibleLocations = [
    "all-notes",
    "archived-notes",
    "tag-notes",
    "search",
  ];

  const defaultTab = possibleLocations.includes(lastSegment);

  return (
    <button
      onClick={noteTabButtonhandler}
      className={clsx(
        !selected &&
          "flex flex-col gap-[12px] rounded-[6px] p-[8px] text-left hover:bg-[#F5F7FA] dark:hover:bg-[#232530]",
        selected &&
          "flex flex-col gap-[12px] rounded-[6px] bg-[#F3F5F8] p-[8px] text-left dark:bg-[#232530]",
        defaultTab && "lg:first:bg-[#F3F5F8] lg:first:dark:bg-[#232530]",
      )}
    >
      <p className="font-inter text-[16px]/[120%] font-semibold tracking-[-0.3px] text-[#0E121B] dark:text-white">
        {title}
      </p>
      <div className="flex gap-[4px]">{tagElementsArray}</div>
      <p className="font-inter text-[12px]/[120%] tracking-[0.2px] text-[#2B303B] dark:text-[#E0E4EA]">
        {lastEdited}
      </p>
    </button>
  );
}

export default NoteTab;
