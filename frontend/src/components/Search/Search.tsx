import NoteTab from "../NoteTab/NoteTab";
import data from "../../data";
import NewNoteButton from "../NewNoteButton/NewNoteButton";

function Search() {
  const foundNotes: { title: string; tags: string[]; lastEdited: string }[] =
    [];
  data.notes
    .filter((note) => note.tags.includes("Dev"))
    .forEach((note) => {
      foundNotes.push({
        title: note.title,
        tags: note.tags,
        lastEdited: note.lastEdited,
      });
    });

  const noteitemsArray: React.JSX.Element[] = [];
  foundNotes.forEach((note, index) => {
    noteitemsArray.push(
      <>
        <NoteTab
          title={note.title}
          tags={note.tags}
          lastEdited={note.lastEdited}
        />
        {foundNotes.length - 1 !== index ? (
          <hr className="text-[#E0E4EA] dark:text-[#232530]" />
        ) : null}
      </>,
    );
  });

  return (
    <div className="flex flex-col gap-[16px] px-[16px] pt-[20px]">
      <div className="flex flex-col gap-[16px]">
        <p className="h-[29px] w-[343px] font-inter text-[24px]/[120%] font-bold tracking-[-0.5px] dark:text-white">
          Search
        </p>
        <div className="flex items-center gap-[8px] rounded-[8px] border border-[#CACFD8] bg-[#F5F7FA] px-[16px] py-[12px] dark:border-[#525866] dark:bg-[#0E121B]">
          <img src="/images/icon-search.svg" alt="" />
          <input
            type="search"
            name="search"
            id=""
            className="w-full focus-within:outline-none dark:text-[#FFFFFF]"
          />
        </div>
      </div>
      <div className="flex flex-col gap-[16px]">
        <p className="h-[18px] min-w-[343px] font-inter text-[14px]/[130%] tracking-[-0.2px] text-[#2B303B] dark:text-[#CACFD8]">
          All notes matching{" "}
          <span className="text-[#0E121B] dark:text-white">”Dev”</span> are
          displayed below.
        </p>
        <div className="flex flex-col gap-[4px]">{noteitemsArray}</div>
      </div>
      <NewNoteButton />
    </div>
  );
}

export default Search;
