import NoteTab from "../NoteTab/NoteTab";
import data from "../../data";
import NewNoteButton from "../NewNoteButton/NewNoteButton";
import { Fragment } from "react/jsx-runtime";
import SearchBar from "../SearchBar/SearchBar";
// import NotePageContent from "../NotePageContent/NotePageContent";
import SidebarRightMenu from "../SidebarRightMenu/SidebarRightMenu";
import SidebarAllNotes from "../SidebarAllNotes/SidebarAllNotes";
import { Outlet, useLocation } from "react-router";

function Search() {
  const location = useLocation();
  const foundNotes: {
    id: number;
    title: string;
    tags: string[];
    lastEdited: string;
  }[] = [];
  data.notes
    .filter((note) => note.tags.includes("Dev"))
    .forEach((note) => {
      foundNotes.push({
        id: note.id,
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
          id={note.id}
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
      {location.pathname.includes("/note-page") && (
        <div className="grow lg:hidden">
          <Outlet />
        </div>
      )}
      {!location.pathname.includes("/note-page") && (
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
      )}
      <div className="h-full max-lg:hidden">
        <div className="flex h-full pr-[32px]">
          <SidebarAllNotes noteitemsArray={noteitemsArray} />
          {/* <div className="flex min-h-full grow flex-col gap-[12px] px-[16px] py-[20px] lg:gap-[16px] lg:px-[24px] dark:py-[16px]">
            <NotePageContent />
          </div> */}
          <div className="grow">
            <Outlet />
          </div>
          <SidebarRightMenu />
        </div>
      </div>
    </>
  );
}

export default Search;
