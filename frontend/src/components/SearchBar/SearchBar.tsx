import SvgIconSearch from "../../icons/IconSearch";

function SearchBar({ placeholderText }: { placeholderText?: string }) {
  return (
    <div className="flex items-center gap-[8px] rounded-[8px] border border-[#CACFD8] bg-[#F5F7FA] px-[16px] py-[12px] lg:h-[44px] lg:w-[300px] lg:bg-white dark:border-[#525866] dark:bg-[#0E121B]">
      <SvgIconSearch className="fill-[#525866] dark:fill-[#99A0AE] size-[20px]" />
      <input
        type="search"
        name="search"
        id=""
        className="w-full font-inter text-[14px]/[130%] tracking-[-0.2px] focus-within:outline-none dark:text-[#FFFFFF]"
        placeholder={placeholderText}
      />
    </div>
  );
}

export default SearchBar;
