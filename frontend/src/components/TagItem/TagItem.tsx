import { useTheme } from "../../store";

function TagItem({ tagName }: { tagName: string }) {
  const theme = useTheme();
  let isDark;
  if (theme === "light") {
    isDark = false;
  } else if (theme === "dark") {
    isDark = true;
  } else {
    isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  return (
    <div className="flex h-[40px] min-w-[343px] items-center gap-[8px]">
      {isDark ? (
        <img className="size-[24px]" src="/images/icon-tag-dark.svg" alt="" />
      ) : (
        <img className="size-[24px]" src="/images/icon-tag.svg" alt="" />
      )}
      <p className="text-[#2B303B] dark:text-[#CACFD8]">{tagName}</p>
    </div>
  );
}

export default TagItem;
