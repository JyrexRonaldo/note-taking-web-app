import { useEffect } from "react";
// import Header from "../Header/Header";
// import MenuBar from "../MenuBar/MenuBar";
// import Settings from "../Settings/Settings";
// import Tags from "../Tags/Tags";
// import ArchivedNotes from "../ArchivedNotes/ArchivedNotes";
// import Search from "../Search/Search";
// import AllNotes from "../AllNotes/AllNotest";
import { useTheme } from "../../store";
import { Outlet } from "react-router";

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
      <Outlet />
    </>
  );
}

export default App;
