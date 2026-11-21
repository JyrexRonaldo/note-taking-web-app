import SvgIconSearch from "../../icons/IconSearch";
import { useNavigate, useLocation } from "react-router";
import { useDebouncedCallback } from "use-debounce";
import { useSearchTermControls } from "../../store";

function SearchBar({ placeholderText }: { placeholderText?: string }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { setSearchTerm } = useSearchTermControls();

  // function handleSeachBarinput(
  //   e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  // ) {
  //   if (!location.pathname.includes("search")) {
  //     navigate("/search");
  //   }
  //   console.log(e.target.textContent);
  // }

  const handleSeachBarinput = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
      if (!location.pathname.includes("search")) {
        navigate("/search");
      }
      setSearchTerm(e.target.value.trim());
    },
    500,
  );

  return (
    <div className="flex items-center gap-[8px] rounded-[8px] border border-[#CACFD8] bg-[#F5F7FA] px-[16px] py-[12px] hover:bg-[#F5F7FA] lg:h-[44px] lg:w-[300px] lg:bg-white dark:border-[#525866] dark:bg-[#0E121B] dark:hover:bg-[#232530]">
      <SvgIconSearch className="size-[20px] fill-[#525866] dark:fill-[#99A0AE]" />
      <input
        type="search"
        name="search"
        id=""
        className="w-full font-inter text-[14px]/[130%] tracking-[-0.2px] focus-within:outline-none dark:text-[#FFFFFF]"
        placeholder={placeholderText}
        onChange={(
          e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
        ) => {
          handleSeachBarinput(e);
        }}
      />
    </div>
  );
}

export default SearchBar;
