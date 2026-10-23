import NoteItem from "../NoteItem/NoteItem";
import data from "../../data";
import NewNoteButton from "../NewNoteButton/NewNoteButton";

function ArchivedNotes() {
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
      <>
        <NoteItem
          title={note.title}
          tags={note.tags}
          lastEdited={note.lastEdited}
        />
        {allNotes.length - 1 !== index ? (
          <hr className="text-[#E0E4EA] dark:text-[#232530]" />
        ) : null}
      </>,
    );
  });

  return (
    <div className="flex flex-col gap-[16px] px-[16px] pt-[20px]">
      <div className="flex flex-col gap-[8px]">
        <p className="h-[29px] w-[343px] font-inter text-[24px]/[120%] font-bold tracking-[-0.5px] dark:text-white">
          Archived Notes
        </p>
        <p className="h-[36px] min-w-[343px] font-inter text-[14px]/[130%] tracking-[-0.2px] text-[#2B303B] dark:text-[#E0E4EA]">
          All your archived notes are stored here. You can restore or delete
          them anytime.
        </p>
      </div>
      <div className="flex flex-col gap-[4px]">{noteitemsArray}</div>
      <NewNoteButton />
    </div>
  );
}

export default ArchivedNotes;
