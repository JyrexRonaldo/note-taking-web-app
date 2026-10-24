import { Link } from "react-router";

function NewNoteButton() {
  return (
    <Link to="/new-note">
      <button className="fixed right-[16px] bottom-[72px] ml-auto flex size-[48px] items-center justify-center rounded-full bg-[#335CFF] text-[#2B303B] dark:text-[#CACFD8]">
        <img src="/images/icon-plus.svg" alt="" className="size-[30px]" />
      </button>
    </Link>
  );
}

export default NewNoteButton;
