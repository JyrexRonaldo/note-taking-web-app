function ArchiveNoteModal() {
  return (
    <div className="fixed z-2 flex h-screen w-full items-center justify-center bg-[#0E121B]/50 px-[16px]">
      <div className="rounded-[12px] border border-[#E0E4EA] bg-white">
        <div className="flex items-start gap-[16px] p-[20px]">
          <div className="flex size-[40px] shrink-0 items-center justify-center rounded-[8px] bg-[#F3F5F8]">
            <img
              src="/images/icon-archive.svg"
              alt=""
              className="w-[24px] w-[25px]"
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <p className="font-inter text-[16px]/[120%] font-semibold tracking-[-0.3px] text-[#0E121B]">
              Archive Note
            </p>
            <p className="font-inter text-[14px]/[130%] tracking-[-0.2px] text-[#2B303B]">
              Are you sure you want to archive this note? You can find it in the
              Archived Notes section and restore it anytime.
            </p>
          </div>
        </div>
        <hr className="text-[#E0E4EA]" />
        <div className="flex justify-end gap-[16px] px-[20px] py-[16px]">
          <button
            className="rounded-[8px] bg-[#F3F5F8] px-[16px] py-[12px] text-[#525866]"
            type="button"
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
