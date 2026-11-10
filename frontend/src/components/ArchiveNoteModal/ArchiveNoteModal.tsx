import { useArchiveModalStatusControls } from "../../store";
import SvgIconArchive from "../../icons/IconArchive";

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
      <div className="max-w-[440px] rounded-[12px] border border-[#E0E4EA] bg-white dark:border-[#525866] dark:bg-[#2B303B]">
        <div className="flex items-start gap-[16px] p-[20px]">
          <div className="flex size-[40px] shrink-0 items-center justify-center rounded-[8px] bg-[#F3F5F8] dark:bg-[#525866]">
            {/* <img src={archiveIconUrl} alt="" className="w-[24px] w-[25px]" /> */}
            <SvgIconArchive className="size-[24px] fill-none stroke-[#0E121B] dark:stroke-white" />            
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
