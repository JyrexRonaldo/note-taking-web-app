import { useTheme, useDeleteModalStatusControls } from "../../store";

function DeleteModal() {
  const theme = useTheme();
  const { setDeleteModalStatus } = useDeleteModalStatusControls();

  const handleDelete = (
    e:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    if (e.target === e.currentTarget) {
      setDeleteModalStatus(false);
    }
  };

  let isDark;
  if (theme === "light") {
    isDark = false;
  } else if (theme === "dark") {
    isDark = true;
  } else {
    isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  const deleteIconUrl = isDark
    ? "/images/icon-delete-modal-dark.svg"
    : "/images/icon-delete-modal.svg";

  return (
    <div
      onClick={handleDelete}
      className="fixed z-2 flex h-screen w-full items-center justify-center bg-[#0E121B]/50 px-[16px]"
    >
      <div className="rounded-[12px] border border-[#E0E4EA] bg-white dark:border-[#525866] dark:bg-[#2B303B]">
        <div className="flex items-start gap-[16px] p-[20px]">
          <div className="flex size-[40px] shrink-0 items-center justify-center rounded-[8px] bg-[#F3F5F8] dark:bg-[#525866]">
            <img src={deleteIconUrl} alt="" className="w-[24px] w-[25px]" />
          </div>
          <div className="flex flex-col gap-[6px]">
            <p className="font-inter text-[16px]/[120%] font-semibold tracking-[-0.3px] text-[#0E121B] dark:text-white">
              Delete Note
            </p>
            <p className="font-inter text-[14px]/[130%] tracking-[-0.2px] text-[#2B303B] dark:text-[#E0E4EA]">
              Are you sure you want to permanently delete this note? This action
              cannot be undone.
            </p>
          </div>
        </div>
        <hr className="text-[#E0E4EA] dark:text-[#525866]" />
        <div className="flex justify-end gap-[16px] px-[20px] py-[16px]">
          <button
            className="rounded-[8px] bg-[#F3F5F8] px-[16px] py-[12px] text-[#525866] dark:bg-[#717784] dark:text-[#E0E4EA]"
            type="button"
            onClick={handleDelete}
          >
            Cancel
          </button>
          <button
            className="rounded-[8px] bg-[#FB3748] px-[16px] py-[12px] text-white"
            type="button"
          >
            Delete Note
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
