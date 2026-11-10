import SvgIconCross from "../../icons/IconCross";
import SvgIconCheckmark from "../../icons/IconCheckmark";

function Toast() {
  return (
    <div className="fixed z-2 flex h-screen w-full items-center justify-center bg-[#0E121B]/50 px-[16px]">
      <div className="flex w-[274px] items-center gap-[8px] rounded-[8px] bg-white p-[8px] text-[#0E121B] sm:w-[390px] dark:bg-[#232530] dark:text-white">
        <SvgIconCheckmark className="size-[16px]" />
        <p className="grow font-inter text-[12px]/[120%] tracking-[-0.2px]">
          Note archived
        </p>
        <p className="font-inter text-[12px]/[120%] tracking-[-0.2px]">
          Archived Notes
        </p>
        <SvgIconCross className="size-[16px] stroke-[#99A0AE]" />
      </div>
    </div>
  );
}

export default Toast;
