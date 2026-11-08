function SearchBar({ placeholderText }: { placeholderText?: string }) {
  return (
    <div className="flex items-center gap-[8px] rounded-[8px] border border-[#CACFD8] bg-[#F5F7FA] px-[16px] py-[12px] lg:h-[44px] lg:w-[300px] lg:bg-white dark:border-[#525866] dark:bg-[#0E121B]">
      {/* <img src="/images/icon-search.svg" className="size-[20px]" alt="" /> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        className="fill-[#525866] dark:fill-[#99A0AE] size-[20px]"
      >
        <path
          // fill="#525866"
          fill-rule="evenodd"
          d="M11.248 3.5a7.289 7.289 0 1 0 0 14.577 7.289 7.289 0 0 0 0-14.577ZM2.46 10.79a8.789 8.789 0 1 1 17.577 0 8.789 8.789 0 0 1-17.577 0Z"
          clip-rule="evenodd"
        />
        <path
          // fill="#525866"
          fill-rule="evenodd"
          d="m16.736 15.648 5.616 5.6-1.06 1.063-5.615-5.601 1.06-1.062Z"
          clip-rule="evenodd"
        />
      </svg>
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
