import SvgIconTag from "../../icons/IconTag";

function TagItem({ tagName }: { tagName: string }) {

  return (
    <div className="flex h-[40px] w-full items-center gap-[8px] lg:px-[12px] lg:py-[10px]">
      <SvgIconTag className="size-[24px] stroke-[#525866] lg:size-[20px] dark:stroke-[#E0E4EA]" />
      <p className="font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-[#2B303B] dark:text-[#CACFD8]">
        {tagName}
      </p>
    </div>
  );
}

export default TagItem;
