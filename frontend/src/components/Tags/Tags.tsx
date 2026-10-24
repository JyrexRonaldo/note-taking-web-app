import TagItem from "../TagTab/TagTab";
import data from "../../data";
import NewNoteButton from "../NewNoteButton/NewNoteButton";

function Tags() {
  let allTags: string[] = [];
  data.notes.forEach((note) => allTags.push(...note.tags));
  allTags = [...new Set(allTags)];

  const tagElementsArray: React.JSX.Element[] = [];
  allTags.forEach((tag, index) =>
    tagElementsArray.push(
      <>
        <TagItem tagName={tag} />
        {allTags.length - 1 !== index ? (
          <hr className="text-[#E0E4EA] dark:text-[#232530]" />
        ) : null}
      </>,
    ),
  );

  return (
    <div className="flex flex-col gap-[16px] px-[16px] pt-[20px]">
      <p className="h-[29px] w-[343px] font-inter text-[24px]/[120%] font-bold tracking-[-0.5px] dark:text-white">
        Tags
      </p>
      <div className="flex flex-col gap-[4px]">{tagElementsArray}</div>
      <NewNoteButton />
    </div>
  );
}

export default Tags;
