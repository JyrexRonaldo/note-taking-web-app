import NotePageContent from "../NotePageContent/NotePageContent";
import SidebarAllNotes from "../SidebarAllNotes/SidebarAllNotes";
import data from "../../data";
import { Fragment } from "react/jsx-runtime";
import NoteTab from "../NoteTab/NoteTab";

function NotePage() {
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
      <div className="flex min-h-full flex-col gap-[12px] px-[16px] py-[20px] lg:hidden lg:gap-[16px] lg:px-[24px] dark:py-[16px]">
        <NotePageContent />
      </div>
      <div className="h-full max-lg:hidden">
        <div className="flex h-full pr-[32px]">
          <SidebarAllNotes page="new" noteitemsArray={noteitemsArray} />
          <div className="grow pr-[258px]">
            <div className="flex min-h-full flex-col gap-[12px] px-[16px] py-[20px] lg:gap-[16px] lg:px-[24px] dark:py-[16px]">
              <NotePageContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotePage;
