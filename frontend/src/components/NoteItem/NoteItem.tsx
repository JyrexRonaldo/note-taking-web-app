import { format } from "date-fns";

function NoteItem({
  title,
  tags,
  lastEdited,
}: {
  title: string;
  tags: string[];
  lastEdited: string;
}) {
  const tagElementsArray = tags.map((tag) => (
    <p className="flex h-[18px] min-w-[min-content] items-center justify-center rounded-[4px] border-[1px] border-[#D4E2FF] bg-[#E0E4EA] px-[6px] py-[2px] font-inter text-[12px]/[120%] tracking-[0.2px] dark:border-[#2B303B] dark:bg-[#2B303B] dark:text-white">
      {tag}
    </p>
  ));
  lastEdited = format(new Date(lastEdited), "d LLL yyyy");

  return (
    <div className="flex flex-col gap-[12px] p-[8px]">
      <p className="font-inter text-[16px]/[120%] font-semibold tracking-[-0.3px] text-[#0E121B] dark:text-white">
        {title}
      </p>
      <div className="flex gap-[4px]">{tagElementsArray}</div>
      <p className="font-inter text-[12px]/[120%] tracking-[0.2px] text-[#2B303B] dark:text-[#E0E4EA]">
        {lastEdited}
      </p>
    </div>
  );
}

export default NoteItem;
