import type { ThemeVariableType } from "../../type";

function Option({
  title,
  description,
  iconUrl,
  value,
  optionSelectHandler,
}: {
  title: string;
  description: string;
  iconUrl: string;
  value: ThemeVariableType;
  optionSelectHandler: (value: ThemeVariableType) => void;
}) {
  return (
    <>
      <label htmlFor={value}>
        <div className="flex items-center gap-[16px] rounded-[12px] border border-[#E0E4EA] p-[16px] dark:border-[#2B303B]">
          <div className="rounded-[12px] border border-[#E0E4EA] p-[8px] dark:border-[#2B303B]">
            <img src={iconUrl} alt="" className="size-[24px]" />
          </div>
          <div className="flex flex-col gap-[6px]">
            <p className="font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-[#0E121B] dark:text-[#FFFFFF]">
              {title}
            </p>
            <p className="font-inter text-[12px]/[120%] tracking-[-0.2px] text-[#2B303B] dark:text-[#CACFD8]">
              {description}
            </p>
          </div>
          <div className="ml-auto">
            <input
              onInput={() => {
                optionSelectHandler(value);
              }}
              type="radio"
              name="theme"
              value={value}
              id={value}
              className="relative h-[16px] w-[16px] appearance-none rounded-[50%] border border-[#E0E4EA] align-[-2px] checked:border-[4px] checked:border-[#335CFF]"
            />
          </div>
        </div>
      </label>
    </>
  );
}

export default Option;
