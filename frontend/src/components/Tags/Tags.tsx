import TagItem from "../TagItem/TagItem";
import data from "../../data";
import NewNoteButton from "../NewNoteButton/NewNoteButton";
import { Link } from "react-router";
import { Fragment } from "react/jsx-runtime";
import SidebarRightMenu from "../SidebarRightMenu/SidebarRightMenu";
import SidebarAllNotes from "../SidebarAllNotes/SidebarAllNotes";
import { Outlet } from "react-router";
import NoteTab from "../NoteTab/NoteTab";

function Tags() {
  let allTags: string[] = [];
  data.notes.forEach((note) => allTags.push(...note.tags));
  allTags = [...new Set(allTags)];

  const tagElementsArray: React.JSX.Element[] = [];
  allTags.forEach((tag, index) =>
    tagElementsArray.push(
      <Fragment key={index}>
        <Link to={`/tags/${tag}/tab-notes`}>
          <TagItem tagName={tag} />
          {allTags.length - 1 !== index ? (
            <hr className="text-[#E0E4EA] dark:text-[#232530]" />
          ) : null}
        </Link>
      </Fragment>,
    ),
  );

  const allNotes: {
    id: number;
    title: string;
    tags: string[];
    lastEdited: string;
  }[] = [];
  data.notes.forEach((note) => {
    if (note.tags.includes("Dev")) {
      allNotes.push({
        id: note.id,
        title: note.title,
        tags: note.tags,
        lastEdited: note.lastEdited,
      });
    }
  });

  const noteitemsArray: React.JSX.Element[] = [];
  allNotes.forEach((note, index) => {
    noteitemsArray.push(
      <Fragment key={index}>
        <NoteTab
          id={note.id}
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
    <div className="flex flex-col gap-[16px] px-[16px] py-[20px] sm:max-lg:px-[32px] sm:max-lg:py-[24px] lg:hidden">
      <p className="h-[29px] w-full font-inter text-[24px]/[120%] font-bold tracking-[-0.5px] dark:text-white">
        Tags
      </p>
      <div className="flex flex-col gap-[4px]">{tagElementsArray}</div>
      <div className="fixed right-[16px] bottom-[72px] sm:max-lg:right-[35px] sm:max-lg:bottom-[104px]">
        <NewNoteButton />
      </div>
    </div>
    <div className="h-full max-lg:hidden">
        <div className="flex h-full pr-[32px]">
          <SidebarAllNotes page="tag" noteitemsArray={noteitemsArray} />
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

export default Tags;
