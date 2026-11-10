import { Link, useNavigate } from "react-router";
import SvgIconArrowLeft from "../../icons/IconArrowLeft";
import SvgIconTag from "../../icons/IconTag";
import SvgIconClock from "../../icons/IconClock";

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
            <SvgIconArrowLeft className="size-[18px] fill-black dark:fill-[#CACFD8]" />
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
            <SvgIconTag className="size-[16px] stroke-[#525866] dark:stroke-[#CACFD8]" />
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
            <SvgIconClock className="size-[16px] fill-[#2B303B] dark:fill-[#CACFD8]" />
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
