import { Link } from "react-router";
import NoteTab from "../NoteTab/NoteTab";
import data from "../../data";
import { Fragment } from "react/jsx-runtime";
import SvgIconArrowLeft from "../../icons/IconArrowLeft";
import SidebarRightMenu from "../SidebarRightMenu/SidebarRightMenu";
import SidebarAllNotes from "../SidebarAllNotes/SidebarAllNotes";
import { useLocation } from "react-router";
import NotePage from "../NotePage/NotePage";
import { useDefaultNoteIdControls } from "../../store";

function TagNotes() {
  const location = useLocation();
  const selectedTag = location.pathname.split("/")[2];
  const { setDefaultNoteId } = useDefaultNoteIdControls();
  const pathLength = location.pathname.split("/").length;

  const allNotes: {
    id: number;
    title: string;
    tags: string[];
    lastEdited: string;
  }[] = [];
  data.notes.forEach((note) => {
    if (note.tags.includes(selectedTag)) {
      allNotes.push({
        id: note.id,
        title: note.title,
        tags: note.tags,
        lastEdited: note.lastEdited,
      });
    }
  });

  const noteitemsArray: React.JSX.Element[] = [];
  allNotes.forEach((note, index) => {
    if (pathLength === 4 && index === 0) {
      setDefaultNoteId(note.id);
    }
    noteitemsArray.push(
      <Fragment key={index}>
        <NoteTab
          id={note.id}
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

  return (
    <>
      {location.pathname.includes("/note-page") && (
        <div className="grow lg:hidden">
          <NotePage defaultNoteId={allNotes[0].id} />
        </div>
      )}
      {!location.pathname.includes("/note-page") && (
        <div className="flex flex-col gap-[16px] px-[16px] pt-[20px] lg:hidden dark:pt-[24px]">
          <div>
            <Link to="/tags" className="flex items-center gap-[4px]">
              <SvgIconArrowLeft className="size-[18px] fill-[#000] dark:fill-[#CACFD8]" />
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
              <span className="text-[#0E121B] dark:text-[#FFFFFF]">”Dev”</span>{" "}
              tag are shown here.
            </p>
            <div className="flex flex-col gap-[4px]">{noteitemsArray}</div>
          </div>
        </div>
      )}
      <div className="h-full max-lg:hidden">
        <div className="flex h-full pr-[32px]">
          <SidebarAllNotes page="tag" noteitemsArray={noteitemsArray} />
          <div className="grow">
            <NotePage defaultNoteId={allNotes[0].id} />
          </div>
          <SidebarRightMenu />
        </div>
      </div>
    </>
  );
}

export default TagNotes;
