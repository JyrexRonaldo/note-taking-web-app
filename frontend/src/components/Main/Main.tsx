import Header from "../Header/Header";
import MenuBar from "../MenuBar/MenuBar";
// import AllNotes from "../AllNotes/AllNotest";
import { Outlet } from "react-router";

function Main() {
  return (
    <div className="flex h-screen flex-col dark:bg-[#0E121B]">
      <div className="sticky top-0">
        <Header />
      </div>
      <div className="grow">
        <Outlet />
      </div>
      <div className="sticky bottom-0 mt-auto">
        <MenuBar />
      </div>
    </div>
  );
}

export default Main;
