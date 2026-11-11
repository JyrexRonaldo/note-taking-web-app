import { useNavigate } from "react-router";

function NewNoteButton() {
  const navigate = useNavigate();

  const newNotehandler = () => {
    navigate("/new-note");
  };

  return (
    <button
      type="button"
      className="ml-auto flex size-[48px] items-center justify-center rounded-full bg-[#335CFF] text-[#2B303B] sm:max-lg:size-[64px] lg:size-auto lg:h-[41px] lg:w-full lg:rounded-[8px] lg:px-[16px] lg:py-[12px] dark:text-[#CACFD8]"
      onClick={newNotehandler}
    >
      <img
        src="/images/icon-plus.svg"
        alt=""
        className="size-[30px] lg:hidden"
      />
      <p className="hidden font-inter text-[16px]/[120%] font-medium text-white lg:block">
        + Create New Note
      </p>
    </button>
  );
}

export default NewNoteButton;
