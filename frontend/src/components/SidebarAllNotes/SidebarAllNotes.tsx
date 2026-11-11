import NewNoteButton from "../NewNoteButton/NewNoteButton";

function SidebarAllNotes({
  noteitemsArray,
  page,
}: {
  noteitemsArray: React.JSX.Element[];
  page?: string;
}) {
  return (
    <div className="flex w-[290px] flex-col gap-[16px] border-r border-r-[#E0E4EA] py-[20px] pr-[16px] pl-[32px] max-lg:hidden dark:border-r-[#232530]">
      <div>
        <NewNoteButton />
      </div>
      {page === "archived" && (
        <p className="w-full font-inter text-[14px]/[130%] tracking-[-0.2px] text-[#2B303B] dark:text-[#E0E4EA]">
          All your archived notes are stored here. You can restore or delete
          them anytime.
        </p>
      )}
      {page === "tag" && (
        <p className="w-full font-inter text-[14px]/[130%] tracking-[-0.2px] text-[#2B303B] dark:text-[#E0E4EA]">
          All notes with the{" "}
          <span className="text-[#0E121B] dark:text-[#FFFFFF]">”Dev”</span> tag
          are shown here.
        </p>
      )}
      <div className="flex h-[200px] grow scrollbar-none flex-col gap-[4px] overflow-scroll">
        {page === "new" && (
          <p className="rounded-[6px] bg-[#F3F5F8] p-[8px] font-inter text-[16px]/[120%] font-semibold tracking-[-0.3px] text-[#0E121B] dark:bg-[#232530] dark:text-[#FFFFFF]">
            Untitled Note
          </p>
        )}
        {noteitemsArray}
      </div>
    </div>
  );
}

export default SidebarAllNotes;
