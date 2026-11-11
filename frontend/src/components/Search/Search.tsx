import NoteTab from "../NoteTab/NoteTab";
import data from "../../data";
import NewNoteButton from "../NewNoteButton/NewNoteButton";
import { Fragment } from "react/jsx-runtime";
import SearchBar from "../SearchBar/SearchBar";
import NotePageContent from "../NotePageContent/NotePageContent";
import SidebarRightMenu from "../SidebarRightMenu/SidebarRightMenu";

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
      <Fragment key={index}>
        <NoteTab
          title={note.title}
          tags={note.tags}
          lastEdited={note.lastEdited}
        />
        {foundNotes.length - 1 !== index ? (
          <hr className="text-[#E0E4EA] dark:text-[#232530]" />
        ) : null}
      </Fragment>,
    );
  });

  return (
    <>
      <div className="flex flex-col gap-[16px] px-[16px] pt-[20px] lg:hidden">
        <div className="flex flex-col gap-[16px]">
          <p className="h-[29px] w-full font-inter text-[24px]/[120%] font-bold tracking-[-0.5px] dark:text-white">
            Search
          </p>
          <SearchBar />
        </div>
        <div className="flex flex-col gap-[16px]">
          <p className="h-[18px] w-full font-inter text-[14px]/[130%] tracking-[-0.2px] text-[#2B303B] dark:text-[#CACFD8]">
            All notes matching{" "}
            <span className="text-[#0E121B] dark:text-white">”Dev”</span> are
            displayed below.
          </p>
          <div className="flex flex-col gap-[4px]">{noteitemsArray}</div>
        </div>
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
            <NotePageContent />
          </div>
          <SidebarRightMenu />
        </div>
      </div>
    </>
  );
}

export default Search;
