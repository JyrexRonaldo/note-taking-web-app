import NoteTab from "../NoteTab/NoteTab";
import data from "../../data";
import NewNoteButton from "../NewNoteButton/NewNoteButton";
import { Fragment } from "react/jsx-runtime";
import NotePage from "../NotePage/NotePage";

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
          <div className="flex flex-col gap-[16px] border-r border-r-[#E0E4EA] py-[20px] pr-[16px] pl-[32px] max-lg:hidden dark:border-r-[#232530]">
            <div className="w-min">
              <NewNoteButton />
            </div>
            <div className="flex h-[200px] grow scrollbar-none flex-col gap-[4px] overflow-scroll">
              {noteitemsArray}
            </div>
          </div>
          <div className="grow">
            <NotePage />
          </div>
          <div className="flex w-[258px] shrink-0 flex-col gap-[12px] border-l border-l-[#F0F0F0] py-[20px] pr-[0px] pl-[16px] *:flex *:h-[44px] *:w-[242px] *:gap-[8px] *:rounded-[8px] *:border *:border-[#CACFD8] *:px-[16px] *:py-[12px] dark:border-l-[#232530] *:dark:border-[#525866] **:dark:text-white">
            <button type="button">
              {/* <img className="size-[20px]" src={archiveIconUrl} alt="" /> */}
              <svg
                className="size-[20px] stroke-[#525866] dark:stroke-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  // stroke="#525866"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M21 7.782v8.435C21 19.165 18.919 21 15.974 21H8.026C5.081 21 3 19.165 3 16.216V7.782C3 4.834 5.081 3 8.026 3h7.948C18.919 3 21 4.843 21 7.782Z"
                />
                <path
                  // stroke="#525866"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="m15 14-3.002 3L9 14M11.998 17v-7M20.934 7H3.059"
                />
              </svg>
              <p className="font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-[#0E121B]">
                Archive Note
              </p>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                fill="none"
                viewBox="0 0 24 25"
                className="size-[20px] stroke-[#525866] dark:stroke-white"
              >
                <path
                  // stroke="#525866"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="m14.852 3.879.818 1.785h2.64c.811 0 1.47.658 1.47 1.47V8.22c0 .555-.45 1.005-1.006 1.005H5.005C4.45 9.226 4 8.776 4 8.221V7.133c0-.811.658-1.47 1.47-1.47h2.639l.818-1.784c.246-.536.78-.879 1.37-.879h3.185c.59 0 1.125.343 1.37.879ZM18.24 9.3v8.686c0 1.665-1.333 3.014-2.977 3.014H8.517c-1.644 0-2.977-1.349-2.977-3.014V9.301M10.2 12.816v4.509m3.38-4.509v4.509"
                />
              </svg>
              <p className="font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-[#0E121B]">
                Delete Note
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllNotes;
