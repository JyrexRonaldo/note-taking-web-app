function Toast() {
  return (
    <div className="fixed z-2 flex h-screen w-full items-center justify-center bg-[#0E121B]/50 px-[16px]">
      <div className="flex w-[274px] items-center gap-[8px] rounded-[8px] bg-white p-[8px] text-[#0E121B] dark:bg-[#232530] dark:text-white">
        <img src="/images/icon-checkmark.svg" className="size-[16px]" alt="" />
        <p className="grow font-inter text-[12px]/[120%] tracking-[-0.2px]">
          Note archived
        </p>
        <p className="font-inter text-[12px]/[120%] tracking-[-0.2px]">
          Archived Notes
        </p>
        <img src="/images/icon-cross.svg" className="size-[16px]" alt="" />
      </div>
    </div>
  );
}

export default Toast;
