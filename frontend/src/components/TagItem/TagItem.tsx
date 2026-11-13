import SvgIconTag from "../../icons/IconTag";
import { useLocation } from "react-router";
import SvgIconChevronRight from "../../icons/IconChevronRight";

function TagItem({ tagName }: { tagName: string }) {
  const location = useLocation();
  const selected = location.pathname.includes(tagName);
  return (
    <button
      type="button"
      className="flex h-[40px] w-full items-center gap-[8px] lg:px-[12px] lg:py-[10px]"
    >
      <SvgIconTag className="size-[24px] stroke-[#525866] lg:size-[20px] dark:stroke-[#E0E4EA]" />
      <p className="font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-[#2B303B] dark:text-[#CACFD8]">
        {tagName}
      </p>
      {selected && (
        <SvgIconChevronRight className="ml-auto size-[24px] fill-[#000] dark:fill-[#FFF]" />
      )}
    </button>
  );
}

export default TagItem;
