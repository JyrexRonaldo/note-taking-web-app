import TagItem from "../TagItem/TagItem";
import data from "../../data";
import NewNoteButton from "../NewNoteButton/NewNoteButton";
import { Link } from "react-router";
import { Fragment } from "react/jsx-runtime";

function Tags() {
  let allTags: string[] = [];
  data.notes.forEach((note) => allTags.push(...note.tags));
  allTags = [...new Set(allTags)];

  const tagElementsArray: React.JSX.Element[] = [];
  allTags.forEach((tag, index) =>
    tagElementsArray.push(
      <Fragment key={index}>
        <Link to="/tab-notes">
          <TagItem tagName={tag} />
          {allTags.length - 1 !== index ? (
            <hr className="text-[#E0E4EA] dark:text-[#232530]" />
          ) : null}
        </Link>
      </Fragment>,
    ),
  );

  return (
    <div className="flex flex-col gap-[16px] px-[16px] py-[20px] sm:max-lg:px-[32px] sm:max-lg:py-[24px]">
      <p className="h-[29px] w-full font-inter text-[24px]/[120%] font-bold tracking-[-0.5px] dark:text-white">
        Tags
      </p>
      <div className="flex flex-col gap-[4px]">{tagElementsArray}</div>
      <div className="fixed right-[16px] bottom-[72px] sm:max-lg:right-[35px] sm:max-lg:bottom-[104px]">
        <NewNoteButton />
      </div>
    </div>
  );
}

export default Tags;
