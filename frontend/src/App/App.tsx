import { useEffect } from "react";
import Header from "../Header/Header";
import MenuBar from "../MenuBar/MenuBar";
import { useTheme } from "../store";

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
      <div className="flex h-screen flex-col">
        <Header />
        <div className="mt-auto">
          <MenuBar />
        </div>
      </div>
    </>
  );
}

export default App;
