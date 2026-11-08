import { useArchiveModalStatusControls } from "../../store";

function ArchiveNoteModal() {
  const { setArchiveModalStatus } = useArchiveModalStatusControls();

  const handleArchive = (
    e:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    if (e.target === e.currentTarget) {
      setArchiveModalStatus(false);
    }
  };

  return (
    <div
      onClick={handleArchive}
      className="fixed z-2 flex h-screen w-full items-center justify-center bg-[#0E121B]/50 px-[16px]"
    >
      <div className="rounded-[12px] border border-[#E0E4EA] bg-white max-w-[440px] dark:border-[#525866] dark:bg-[#2B303B]">
        <div className="flex items-start gap-[16px] p-[20px]">
          <div className="flex size-[40px] shrink-0 items-center justify-center rounded-[8px] bg-[#F3F5F8] dark:bg-[#525866]">
            {/* <img src={archiveIconUrl} alt="" className="w-[24px] w-[25px]" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-[#0E121B] dark:stroke-white"
            >
              <path
                // stroke="#0E121B"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M21 7.782v8.435C21 19.165 18.919 21 15.974 21H8.026C5.081 21 3 19.165 3 16.216V7.782C3 4.834 5.081 3 8.026 3h7.948C18.919 3 21 4.843 21 7.782Z"
              />
              <path
                // stroke="#0E121B"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="m15 14-3.002 3L9 14M11.998 17v-7M20.934 7H3.059"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-[6px]">
            <p className="font-inter text-[16px]/[120%] font-semibold tracking-[-0.3px] text-[#0E121B] dark:text-white">
              Archive Note
            </p>
            <p className="font-inter text-[14px]/[130%] tracking-[-0.2px] text-[#2B303B] dark:text-[#E0E4EA]">
              Are you sure you want to archive this note? You can find it in the
              Archived Notes section and restore it anytime.
            </p>
          </div>
        </div>
        <hr className="text-[#E0E4EA] dark:text-[#525866]" />
        <div className="flex justify-end gap-[16px] px-[20px] py-[16px]">
          <button
            className="rounded-[8px] bg-[#F3F5F8] px-[16px] py-[12px] text-[#525866] dark:bg-[#717784] dark:text-[#E0E4EA]"
            type="button"
            onClick={handleArchive}
          >
            Cancel
          </button>
          <button
            className="rounded-[8px] bg-[#335CFF] px-[16px] py-[12px] text-white"
            type="button"
          >
            Archive Note
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArchiveNoteModal;
