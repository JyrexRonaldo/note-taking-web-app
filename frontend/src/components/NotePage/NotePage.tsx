import {
  useDeleteModalStatusControls,
  useArchiveModalStatusControls,
} from "../../store";
import { Link, useParams, useLocation } from "react-router";
import data from "../../data";
import SvgIconArrowLeft from "../../icons/IconArrowLeft";
import SvgIconDelete from "../../icons/IconDelete";
import SvgIconArchive from "../../icons/IconArchive";
import SvgIconTag from "../../icons/IconTag";
import SvgIconStatus from "../../icons/IconStatus";
import SvgIconClock from "../../icons/IconClock";
import { format } from "date-fns";
import { useDefaultNoteId } from "../../store";

function NotePage() {
  const defaultNoteId = useDefaultNoteId();
  const params = useParams();
  const { setDeleteModalStatus } = useDeleteModalStatusControls();
  const { setArchiveModalStatus } = useArchiveModalStatusControls();

  const handleDelete = () => [setDeleteModalStatus(true)];
  const handleArchive = () => [setArchiveModalStatus(true)];

  const selectedNoteData = data.notes.find(
    (note) => note.id === Number(params.id),
  );

  const defaultNoteData = data.notes.find(
    (note) => note.id === Number(defaultNoteId),
  );

  const location = useLocation();
  // console.log(location.pathname.split('/')[2]);
  const parentTag = location.pathname.split("/")[2];
  let goBackLink = "";
  if (location.pathname.includes("allNotes")) {
    goBackLink = "/allNotes";
  } else if (location.pathname.includes("archived-notes")) {
    goBackLink = "/archived-notes";
  } else if (location.pathname.includes("tab-notes")) {
    goBackLink = `/tags/${parentTag}/tab-notes`;
  } else if (location.pathname.includes("search")) {
    goBackLink = "/search";
  }

  const selectedNoteTags =
    selectedNoteData?.tags.join(", ") || defaultNoteData?.tags.join(", ");

  let lastEdited;

  if (selectedNoteData) {
    lastEdited = format(new Date(selectedNoteData.lastEdited), "d LLL yyyy");
  } else if (defaultNoteData) {
    lastEdited = format(new Date(defaultNoteData.lastEdited), "d LLL yyyy");
  }

  return (
    <>
      <div className="flex min-h-full grow flex-col gap-[12px] px-[16px] py-[20px] sm:max-lg:px-[32px] sm:max-lg:py-[24px] lg:gap-[16px] lg:px-[24px] dark:py-[20px]">
        <div className="flex justify-between border-b border-[#E0E4EA] pb-[12px] lg:hidden dark:border-[#232530]">
          <div>
            <Link
              to={goBackLink}
              className="flex items-center gap-[4px]"
            >
              <SvgIconArrowLeft className="size-[18px] fill-[#000] dark:fill-[#CACFD8]" />
              <p className="items-center font-inter text-[14px]/[130%] tracking-[-0.2px] text-[#525866] dark:text-[#CACFD8]">
                Go Back
              </p>
            </Link>
          </div>
          <div className="flex gap-[16px]">
            <button
              onClick={handleDelete}
              type="button"
              className="size-[18px]"
            >
              <SvgIconDelete className="size-[18px] stroke-[#525866] dark:stroke-[#CACFD8]" />
            </button>
            <button
              onClick={handleArchive}
              type="button"
              className="size-[18px]"
            >
              <SvgIconArchive className="size-[18px] stroke-[#525866] dark:stroke-[#CACFD8]" />
            </button>
            <button
              type="button"
              className="font-inter text-[14px]/[130%] tracking-[-0.2px] text-[#525866] dark:text-[#CACFD8]"
            >
              Cancel
            </button>
            <button
              type="button"
              className="font-inter text-[14px]/[130%] tracking-[-0.2px] text-[#335CFF]"
            >
              Save Note
            </button>
          </div>
        </div>
        <div>
          <p className="font-inter text-[24px]/[120%] font-bold tracking-[-0.5px] text-[#0E121B] dark:text-[#FFFFFF]">
            {selectedNoteData
              ? selectedNoteData?.title
              : defaultNoteData?.title}
          </p>
        </div>
        <div className="flex flex-col gap-[4px]">
          <div className="flex gap-[8px]">
            <div className="flex min-w-[115px] items-center gap-[6px] py-[4px]">
              <SvgIconTag className="size-[16px] stroke-[#2B303B] dark:stroke-[#99A0AE]" />
              <p className="items-center font-inter text-[12px]/[120%] tracking-[-0.2px] text-[#2B303B] sm:max-lg:text-[14px]/[130%] dark:text-[#CACFD8]">
                Tags
              </p>
            </div>
            <div className="flex items-center">
              <p className="font-inter text-[12px]/[120%] tracking-[-0.2px] text-[#0E121B] sm:max-lg:text-[14px]/[130%] dark:text-[#FFFFFF]">
                {selectedNoteTags}
              </p>
            </div>
          </div>
          {goBackLink === "/archived-notes" && (
            <div className="flex gap-[8px]">
              <div className="flex min-w-[115px] items-center gap-[6px] py-[4px]">
                <SvgIconStatus className="size-[16px] fill-[#2B303B] dark:fill-[#CACFD8]" />
                <p className="items-center font-inter text-[12px]/[120%] tracking-[-0.2px] text-[#2B303B] sm:max-lg:text-[14px]/[130%] dark:text-[#CACFD8]">
                  Status
                </p>
              </div>
              <div className="flex items-center">
                <p className="font-inter text-[12px]/[120%] tracking-[-0.2px] text-[#0E121B] sm:max-lg:text-[14px]/[130%] dark:text-[#FFFFFF]">
                  Archived
                </p>
              </div>
            </div>
          )}
          <div className="flex items-center gap-[8px]">
            <div className="flex min-w-[115px] items-center gap-[6px] py-[4px]">
              <SvgIconClock className="size-[16px] fill-[#2B303B] dark:fill-[#CACFD8]" />
              <p className="font-inter text-[12px]/[120%] tracking-[-0.2px] text-[#2B303B] sm:max-lg:text-[14px]/[130%] dark:text-[#CACFD8]">
                Last edited
              </p>
            </div>
            <div>
              <p className="font-inter text-[12px]/[120%] tracking-[-0.2px] text-[#2B303B] sm:max-lg:text-[14px]/[130%] dark:text-[#CACFD8]">
                {lastEdited}
              </p>
            </div>
          </div>
        </div>
        <hr className="text-[#E0E4EA] dark:text-[#232530]" />
        <pre className="grow font-inter text-[14px]/[130%] tracking-[-0.2px] text-[#232530] dark:text-[#F3F5F8]">
          {selectedNoteData
            ? selectedNoteData?.content
            : defaultNoteData?.content}
        </pre>
        <hr className="hidden text-[#E0E4EA] lg:block dark:text-[#232530]" />
        <div className="hidden gap-[16px] lg:flex">
          <button
            className="rounded-[8px] bg-[#335CFF] px-[16px] py-[12px] font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-white"
            type="button"
          >
            Save Note
          </button>
          <button
            className="rounded-[8px] bg-[#F3F5F8] px-[16px] py-[12px] font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-[#525866]"
            type="button"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default NotePage;