import NoteTab from "../NoteTab/NoteTab";
import data from "../../data";
import NewNoteButton from "../NewNoteButton/NewNoteButton";
import { Fragment } from "react/jsx-runtime";
import NotePageContent from "../NotePageContent/NotePageContent";
import SidebarRightMenu from "../SidebarRightMenu/SidebarRightMenu";
import SidebarAllNotes from "../SidebarAllNotes/SidebarAllNotes";

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
          <SidebarAllNotes noteitemsArray={noteitemsArray} />
          <div className="grow flex min-h-full flex-col gap-[12px] px-[16px] py-[20px] lg:gap-[16px] lg:px-[24px] dark:py-[16px]">
            <NotePageContent />
          </div>
          <SidebarRightMenu />
        </div>
      </div>
    </>
  );
}

export default AllNotes;
