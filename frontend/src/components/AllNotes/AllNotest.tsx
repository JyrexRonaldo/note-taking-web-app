import NoteItem from "../NoteItem/NoteItem";
import data from "../../data";

function AllNotes() {
  const allNotes = [];
  data.notes.forEach((note) => {
    allNotes.push({
      title: note.title,
      tags: note.tags,
      lastEdited: note.lastEdited,
    });
  });

  const noteitemsArray = [];
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
      <p className="h-[29px] w-[343px] font-inter text-[24px]/[120%] font-bold tracking-[-0.5px] dark:text-white">
        All Notes
      </p>

      <div className="flex flex-col gap-[4px]">{noteitemsArray}</div>
      <button className="fixed right-[16px] bottom-[72px] ml-auto flex size-[48px] items-center justify-center rounded-full bg-[#335CFF] text-[#2B303B] dark:text-[#CACFD8]">
        <img src="/images/icon-plus.svg" alt="" className="size-[18px]" />
      </button>
    </div>
  );
}

export default AllNotes;
