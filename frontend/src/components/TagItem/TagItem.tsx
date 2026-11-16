import SvgIconTag from "../../icons/IconTag";
import { useLocation } from "react-router";
import SvgIconChevronRight from "../../icons/IconChevronRight";
import clsx from "clsx";

function TagItem({ tagName }: { tagName: string }) {
  const location = useLocation();
  const selected = location.pathname.includes(tagName);

  return (
    <button
      type="button"
      className={clsx(
        !selected &&
          "flex h-[40px] w-full items-center gap-[8px] rounded-[8px] lg:px-[12px] lg:py-[10px]",
        selected &&
          "flex h-[40px] w-full items-center gap-[8px] rounded-[8px] bg-[#F3F5F8] lg:px-[12px] lg:py-[10px] dark:bg-[#232530]",
      )}
    >
      <SvgIconTag
        className={clsx(
          !selected &&
            "size-[24px] stroke-[#525866] lg:size-[20px] dark:stroke-[#E0E4EA]",
          selected && "size-[24px] stroke-[#335CFF] lg:size-[20px]",
        )}
      />
      <p
        className={clsx(
          !selected &&
            "font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-[#2B303B] dark:text-[#CACFD8]",
          selected &&
            "font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-[#0E121B] dark:text-white",
        )}
      >
        {tagName}
      </p>
      {selected && (
        <SvgIconChevronRight className="ml-auto size-[24px] fill-[#000] dark:fill-[#FFF]" />
      )}
    </button>
  );
}
//
export default TagItem;
