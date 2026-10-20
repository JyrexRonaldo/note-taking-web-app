import { useEffect } from "react";
import Header from "../Header/Header";
import MenuBar from "../MenuBar/MenuBar";
// import Settings from "../Settings/Settings";
// import Tags from "../Tags/Tags";
// import ArchivedNotes from "../ArchivedNotes/ArchivedNotes";
import Search from "../Search/Search";
import { useTheme } from "../../store";

function App() {
  const theme = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      localStorage.setItem("theme", "dark");
    } else if (theme === "light") {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.removeItem("theme");
    }
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
  }, [theme]);

  return (
    <>
      <div className="flex h-screen flex-col dark:bg-[#0E121B]">
        <div className="sticky top-0">
          <Header />
        </div>
        <div>
          <Search />
        </div>
        <div className="sticky bottom-0 mt-auto">
          <MenuBar />
        </div>
      </div>
    </>
  );
}

export default App;
