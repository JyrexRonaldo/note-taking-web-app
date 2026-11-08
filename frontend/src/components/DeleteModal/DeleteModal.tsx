import { 
  // useTheme, 
  useDeleteModalStatusControls } from "../../store";

function DeleteModal() {
  // const theme = useTheme();
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

  // let isDark;
  // if (theme === "light") {
  //   isDark = false;
  // } else if (theme === "dark") {
  //   isDark = true;
  // } else {
  //   isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  // }

  // const deleteIconUrl = isDark
  //   ? "/images/icon-delete-modal-dark.svg"
  //   : "/images/icon-delete-modal.svg";

  return (
    <div
      onClick={handleDelete}
      className="fixed z-2 flex h-screen w-full items-center justify-center bg-[#0E121B]/50 px-[16px]"
    >
      <div className="rounded-[12px] border border-[#E0E4EA] bg-white max-w-[440px] dark:border-[#525866] dark:bg-[#2B303B]">
        <div className="flex items-start gap-[16px] p-[20px]">
          <div className="flex size-[40px] shrink-0 items-center justify-center rounded-[8px] bg-[#F3F5F8] dark:bg-[#525866]">
            {/* <img src={deleteIconUrl} alt="" className="w-[24px] w-[25px]" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              fill="none"
              viewBox="0 0 24 25"
              className="w-[24px] h-[25px] stroke-[#0E121B] dark:stroke-white"
            >
              <path
                // stroke="#0E121B"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="m14.852 3.879.818 1.785h2.64c.811 0 1.47.658 1.47 1.47V8.22c0 .555-.45 1.005-1.006 1.005H5.005C4.45 9.226 4 8.776 4 8.221V7.133c0-.811.658-1.47 1.47-1.47h2.639l.818-1.784c.246-.536.78-.879 1.37-.879h3.185c.59 0 1.125.343 1.37.879ZM18.24 9.3v8.686c0 1.665-1.333 3.014-2.977 3.014H8.517c-1.644 0-2.977-1.349-2.977-3.014V9.301M10.2 12.816v4.509m3.38-4.509v4.509"
              />
            </svg>
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
