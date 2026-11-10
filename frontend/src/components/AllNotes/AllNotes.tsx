import NoteTab from "../NoteTab/NoteTab";
import data from "../../data";
import NewNoteButton from "../NewNoteButton/NewNoteButton";
import { Fragment } from "react/jsx-runtime";
import NotePage from "../NotePage/NotePage";
import SvgIconArchive from "../../icons/IconArchive";
import SvgIconDelete from "../../icons/IconDelete";

function AllNotes() {
  const allNotes: { title: string; tags: string[]; lastEdited: string }[] = [];
  data.notes.forEach((note) => {
    allNotes.push({
      title: note.title,
      tags: note.tags,
      lastEdited: note.lastEdited,
    });
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

  return (
    <>
      <div className="gap-[16px] px-[16px] py-[20px] max-lg:flex max-lg:flex-col sm:max-lg:px-[32px] sm:max-lg:py-[24px] lg:hidden">
        <p className="h-[29px] font-inter text-[24px]/[120%] font-bold tracking-[-0.5px] dark:text-white">
          All Notes
        </p>
        <div className="flex flex-col gap-[4px]">{noteitemsArray}</div>
        <div className="fixed right-[16px] bottom-[72px] sm:max-lg:right-[35px] sm:max-lg:bottom-[104px]">
          <NewNoteButton />
        </div>
      </div>
      <div className="h-full max-lg:hidden">
        <div className="flex h-full pr-[32px]">
          <div className="flex flex-col gap-[16px] border-r border-r-[#E0E4EA] py-[20px] pr-[16px] pl-[32px] max-lg:hidden dark:border-r-[#232530]">
            <div className="w-min">
              <NewNoteButton />
            </div>
            <div className="flex h-[200px] grow scrollbar-none flex-col gap-[4px] overflow-scroll">
              {noteitemsArray}
            </div>
          </div>
          <div className="grow">
            <NotePage />
          </div>
          <div className="flex w-[258px] shrink-0 flex-col gap-[12px] border-l border-l-[#F0F0F0] py-[20px] pr-[0px] pl-[16px] *:flex *:h-[44px] *:w-[242px] *:gap-[8px] *:rounded-[8px] *:border *:border-[#CACFD8] *:px-[16px] *:py-[12px] dark:border-l-[#232530] *:dark:border-[#525866] **:dark:text-white">
            <button type="button" className="text-red-700">
              {/* <img className="size-[20px]" src={archiveIconUrl} alt="" /> */}
              <SvgIconArchive className="size-[20px] stroke-[#525866] dark:stroke-white fill-none" />
              <p className="font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-[#0E121B]">
                Archive Note
              </p>
            </button>
            <button>
              <SvgIconDelete className="size-[20px] stroke-[#525866] dark:stroke-white fill-none" />
              <p className="font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-[#0E121B]">
                Delete Note
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllNotes;
