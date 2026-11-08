import NoteTab from "../NoteTab/NoteTab";
import data from "../../data";
import NewNoteButton from "../NewNoteButton/NewNoteButton";
import { Fragment } from "react/jsx-runtime";
import NotePage from "../NotePage/NotePage";

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
        {/* <div className="flex flex-col gap-[8px]"> */}
        <p className="w-full font-inter text-[24px]/[120%] font-bold tracking-[-0.5px] dark:text-white">
          Archived Notes
        </p>
        <p className="w-full font-inter text-[14px]/[130%] tracking-[-0.2px] text-[#2B303B] dark:text-[#E0E4EA]">
          All your archived notes are stored here. You can restore or delete
          them anytime.
        </p>
        {/* </div> */}
        <div className="flex flex-col gap-[4px]">{noteitemsArray}</div>
        {/* <NewNoteButton /> */}
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
            <p className="w-full font-inter text-[14px]/[130%] tracking-[-0.2px] text-[#2B303B] dark:text-[#E0E4EA]">
              All your archived notes are stored here. You can restore or delete
              them anytime.
            </p>
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
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                className="size-[20px] fill-[#0E121B] dark:fill-white"
              >
                <path
                  // fill="#0E121B"
                  fill-rule="evenodd"
                  d="M3.708 7.404a.75.75 0 0 1 .983.398l1.316 3.114L9.1 9.608a.75.75 0 0 1 .584 1.382L5.9 12.59a.75.75 0 0 1-.983-.4L3.309 8.387a.75.75 0 0 1 .4-.982Z"
                  clip-rule="evenodd"
                />
                <path
                  // fill="#0E121B"
                  fill-rule="evenodd"
                  d="M12.915 5.664c-3.447 0-6.249 2.746-6.335 6.16a.75.75 0 0 1-1.5-.038c.108-4.228 3.575-7.622 7.835-7.622a7.838 7.838 0 0 1 7.835 7.835 7.833 7.833 0 0 1-7.835 7.835 7.843 7.843 0 0 1-6.457-3.384.75.75 0 1 1 1.232-.856 6.343 6.343 0 0 0 5.225 2.74 6.333 6.333 0 0 0 6.335-6.335 6.339 6.339 0 0 0-6.335-6.335Z"
                  clip-rule="evenodd"
                />
              </svg>
              <p className="font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-[#0E121B]">
                Restore Note
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

export default ArchivedNotes;
