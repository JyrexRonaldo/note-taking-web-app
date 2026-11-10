import NewNoteButton from "../NewNoteButton/NewNoteButton";
import data from "../../data";
import { Fragment } from "react/jsx-runtime";
import NoteTab from "../NoteTab/NoteTab";

import CreatePageContent from "../CreatePageContent/CreatePageContent";

function CreateNote() {
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
      <div className="flex min-h-full flex-col gap-[12px] px-[16px] py-[20px] sm:gap-[16px] sm:px-[32px] lg:hidden dark:py-[16px]">
        <CreatePageContent />
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
            <div className="flex min-h-full max-w-[588px] flex-col gap-[12px] border-r border-r-[#E0E4EA] px-[16px] py-[20px] sm:gap-[16px] sm:px-[32px] lg:px-[24px] dark:border-r-[#232530] dark:py-[16px]">
              <CreatePageContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateNote;
