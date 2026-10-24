import { Link, useNavigate } from "react-router";
import { useTheme } from "../../store";
import NoteTab from "../NoteTab/NoteTab";
import data from "../../data";
import { Fragment } from "react/jsx-runtime";

function TagNotes() {
  const theme = useTheme();
  const navigate = useNavigate();

  const backButtonHandler = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault(); // Prevents navigating to '#'
    navigate(-1); // Goes back to the previous page
  };

  const allNotes: { title: string; tags: string[]; lastEdited: string }[] = [];
  data.notes.forEach((note) => {
    if (note.tags.includes("Dev")) {
      allNotes.push({
        title: note.title,
        tags: note.tags,
        lastEdited: note.lastEdited,
      });
    }
  });

  const noteitemsArray: React.JSX.Element[] = [];
  allNotes.forEach((note, index) => {
    noteitemsArray.push(
      <Fragment key={index}>
        <NoteTab
          title={note.title}
          tags={note.tags}
          lastEdited={note.lastEdited}
        />
        {allNotes.length - 1 !== index ? (
          <hr className="text-[#E0E4EA] dark:text-[#232530]" />
        ) : null}
      </Fragment>,
    );
  });

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

  return (
    <div className="flex flex-col gap-[16px] px-[16px] pt-[20px] dark:pt-[24px]">
      <div>
        <Link
          to="#"
          onClick={backButtonHandler}
          className="flex items-center gap-[4px]"
        >
          <img className="size-[18px]" src={leftArrowIconUrl} alt="" />
          <p className="items-center font-inter text-[14px]/[130%] tracking-[-0.2px] text-[#525866] dark:text-[14px]/[120%] dark:font-medium dark:text-[#FFFFFF]">
            All Tags
          </p>
        </Link>
      </div>
      <div>
        <p className="font-inter text-[24px]/[120%] font-bold tracking-[-0.5px] text-[#0E121B] dark:text-[#99A0AE]">
          Notes Tagged: <span className="dark:text-[#FFFFFF]">Dev</span>
        </p>
      </div>
      <div className="flex flex-col gap-[16px]">
        <p className="text-#2B303B] font-inter text-[14px]/[130%] tracking-[-0.2px] dark:text-[#CACFD8]">
          All notes with the{" "}
          <span className="text-[#0E121B] dark:text-[#FFFFFF]">”Dev”</span> tag
          are shown here.
        </p>
        <div className="flex flex-col gap-[4px]">{noteitemsArray}</div>
      </div>
    </div>
  );
}

export default TagNotes;
