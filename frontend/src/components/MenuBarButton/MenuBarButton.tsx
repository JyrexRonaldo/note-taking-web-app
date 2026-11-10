import { Link } from "react-router";

function MenuBarButton({
  path,
  icon,
  text,
}: {
  path: string;
  icon: React.JSX.Element;
  text: string;
}) {
  return (
    <Link to={path} className="sm:max-lg:min-h-[50px]">
      <button
        type="button"
        className="sm:max-lg:flex sm:max-lg:h-[50px] sm:max-lg:w-[80px] sm:max-lg:flex-col sm:max-lg:items-center sm:max-lg:gap-[4px] sm:max-lg:py-[4px]"
      >
        {icon}
        <p className="hidden font-inter text-[12px]/[120%] tracking-[-0.2px] text-[#525866] sm:max-lg:block dark:text-[#99A0AE]">
          {text}
        </p>
      </button>
    </Link>
  );
}

export default MenuBarButton;
