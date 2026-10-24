import { useNavigate } from "react-router";

function NewNoteButton() {
  const navigate = useNavigate();

  const newNotehandler = () => {
    navigate("/new-note");
  };

  return (
    <button
      type="button"
      className="fixed right-[16px] bottom-[72px] ml-auto flex size-[48px] items-center justify-center rounded-full bg-[#335CFF] text-[#2B303B] dark:text-[#CACFD8]"
      onClick={newNotehandler}
    >
      <img src="/images/icon-plus.svg" alt="" className="size-[30px]" />
    </button>
  );
}

export default NewNoteButton;
