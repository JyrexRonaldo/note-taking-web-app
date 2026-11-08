import { Link, useNavigate } from "react-router";

function CreatePageContent() {
  const navigate = useNavigate();

  const backButtonHandler = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault(); // Prevents navigating to '#'
    navigate(-1); // Goes back to the previous page
  };

  return (
    <>
      <div className="flex justify-between border-b border-[#E0E4EA] pb-[12px] lg:hidden dark:border-[#232530]">
        <div>
          <Link
            to="#"
            onClick={backButtonHandler}
            className="flex items-center gap-[4px]"
          >
            {/* <img className="size-[18px]" src={leftArrowIconUrl} alt="" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              className="size-[18px] fill-black dark:fill-[#CACFD8]"
            >
              <path
                // fill="#000"
                fill-rule="evenodd"
                d="M15.75 20.414 7.336 12l8.414-8.414L17.164 5l-7 7 7 7-1.414 1.414Z"
                clip-rule="evenodd"
              />
            </svg>
            <p className="items-center font-inter text-[14px]/[130%] tracking-[-0.2px] text-[#525866] dark:text-[#CACFD8]">
              Go Back
            </p>
          </Link>
        </div>
        <div className="flex gap-[16px]">
          <button
            type="button"
            className="font-inter text-[14px]/[130%] tracking-[-0.2px] text-[#525866] dark:text-[#CACFD8]"
          >
            Cancel
          </button>
          <button
            type="button"
            className="font-inter text-[14px]/[130%] tracking-[-0.2px] text-[#335CFF]"
          >
            Save Note
          </button>
        </div>
      </div>
      <div>
        <input
          type="text"
          name=""
          className="w-full font-inter text-[20px]/[120%] font-bold tracking-[-0.3px] text-[#0E121B] outline-none dark:text-white"
          defaultValue={"Enter a title..."}
          id=""
        />
      </div>
      <div className="flex flex-col gap-[4px]">
        <div className="flex gap-[8px]">
          <div className="flex min-w-[115px] items-center gap-[6px] py-[4px]">
            {/* <img src={tagIconUrl} alt="" className="size-[16px]" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              className="size-[16px] stroke-[#525866] dark:stroke-[#99A0AE]"
            >
              <path
                // stroke="#525866"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.8"
                d="M3.016 5.966c.003-1.411 1.07-2.677 2.456-2.916.284-.05 3.616-.042 4.995-.041 1.364 0 2.527.491 3.49 1.452 2.045 2.042 4.088 4.085 6.128 6.13 1.208 1.21 1.224 3.066.022 4.28a805.496 805.496 0 0 1-5.229 5.228c-1.212 1.201-3.069 1.186-4.279-.022-2.064-2.058-4.127-4.115-6.182-6.182-.795-.8-1.264-1.766-1.368-2.895-.084-.903-.035-4.26-.033-5.034Z"
                clip-rule="evenodd"
              />
              <path
                // stroke="#525866"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.8"
                d="M9.907 8.315a1.607 1.607 0 0 1-1.61 1.583c-.872-.002-1.599-.73-1.594-1.596a1.604 1.604 0 0 1 1.633-1.607c.864.003 1.575.736 1.571 1.62Z"
                clip-rule="evenodd"
              />
            </svg>
            <p className="items-center font-inter text-[12px]/[120%] tracking-[-0.2px] text-[#525866] dark:text-[#CACFD8]">
              Tags
            </p>
          </div>
          <div>
            <p className="font-inter text-[12px]/[120%] tracking-[-0.2px] text-[#99A0AE]">
              Add tags separated by commas (e.g. Work, Planning)
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[8px]">
          <div className="flex min-w-[115px] items-center gap-[6px] py-[4px]">
            {/* <img src={clockIconUrl} alt="" className="size-[16px]" /> */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-[16px] fill-[#2B303B] dark:fill-[#CACFD8]"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.2505 3.75C7.69378 3.75 4.00049 7.44329 4.00049 12C4.00049 16.5558 7.69384 20.25 12.2505 20.25C16.8072 20.25 20.5005 16.5558 20.5005 12C20.5005 7.44329 16.8072 3.75 12.2505 3.75ZM2.50049 12C2.50049 6.61487 6.86536 2.25 12.2505 2.25C17.6356 2.25 22.0005 6.61487 22.0005 12C22.0005 17.3841 17.6357 21.75 12.2505 21.75C6.8653 21.75 2.50049 17.3841 2.50049 12Z"
                // fill="#2B303B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.9224 7.82666C12.3366 7.82666 12.6724 8.16245 12.6724 8.57666V12.2493L15.4819 13.9283C15.8375 14.1408 15.9535 14.6013 15.741 14.9569C15.5285 15.3124 15.068 15.4284 14.7124 15.2159L11.5376 13.3186C11.3111 13.1832 11.1724 12.9388 11.1724 12.6748V8.57666C11.1724 8.16245 11.5082 7.82666 11.9224 7.82666Z"
                // fill="#2B303B"
              />
            </svg>

            <p className="font-inter text-[12px]/[120%] tracking-[-0.2px] text-[#525866] dark:text-[#CACFD8]">
              Last edited
            </p>
          </div>
          <div>
            <p className="font-inter text-[12px]/[120%] tracking-[-0.2px] text-[#99A0AE]">
              Not yet saved
            </p>
          </div>
        </div>
      </div>
      <hr className="text-[#E0E4EA] dark:text-[#232530]" />
      <textarea
        name=""
        id=""
        className="grow resize-none font-inter text-[12px]/[120%] tracking-[-0.2px] text-[#2B303B] outline-none dark:text-[#F3F5F8]"
        defaultValue={"Start typing your note here…"}
      ></textarea>
      <hr className="hidden text-[#E0E4EA] lg:block dark:text-[#232530]" />
      <div className="hidden gap-[16px] lg:flex">
        <button
          className="rounded-[8px] bg-[#335CFF] px-[16px] py-[12px] font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-white"
          type="button"
        >
          Save Note
        </button>
        <button
          className="rounded-[8px] bg-[#F3F5F8] px-[16px] py-[12px] font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-[#525866]"
          type="button"
        >
          Cancel
        </button>
      </div>
    </>
  );
}

export default CreatePageContent;
