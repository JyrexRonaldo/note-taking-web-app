import SvgIconArchive from "../../icons/IconArchive";
import SvgIconDelete from "../../icons/IconDelete";
import SvgIconRestore from "../../icons/IconRestore";

function SidebarRightMenu({ archivedPage = false }: { archivedPage?: boolean }) {
  const archiveIcon = archivedPage ? (
    <SvgIconRestore className="size-[20px] fill-[#0E121B] dark:fill-white" />
  ) : (
    <SvgIconArchive className="size-[20px] fill-none stroke-[#525866] dark:stroke-white" />
  );

  return (
    <div className="flex w-[258px] shrink-0 flex-col gap-[12px] border-l border-l-[#F0F0F0] py-[20px] pr-[0px] pl-[16px] *:flex *:h-[44px] *:w-[242px] *:gap-[8px] *:rounded-[8px] *:border *:border-[#CACFD8] *:px-[16px] *:py-[12px] dark:border-l-[#232530] *:dark:border-[#525866] **:dark:text-white">
      <button type="button">
        {archiveIcon}
        <p className="font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-[#0E121B]">
          Archive Note
        </p>
      </button>
      <button>
        <SvgIconDelete className="size-[20px] fill-none stroke-[#525866] dark:stroke-white" />
        <p className="font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-[#0E121B]">
          Delete Note
        </p>
      </button>
    </div>
  );
}

export default SidebarRightMenu;
