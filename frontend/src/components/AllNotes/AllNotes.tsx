import NoteTab from "../NoteTab/NoteTab";
import data from "../../data";
import NewNoteButton from "../NewNoteButton/NewNoteButton";
import { Fragment } from "react/jsx-runtime";

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
    <div className="flex flex-col gap-[16px] px-[16px] pt-[20px]">
      <p className="h-[29px] w-[343px] font-inter text-[24px]/[120%] font-bold tracking-[-0.5px] dark:text-white">
        All Notes
      </p>

      <div className="flex flex-col gap-[4px]">{noteitemsArray}</div>
      <NewNoteButton />
    </div>
  );
}

export default AllNotes;
