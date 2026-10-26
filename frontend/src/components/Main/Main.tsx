import Header from "../Header/Header";
import MenuBar from "../MenuBar/MenuBar";
// import AllNotes from "../AllNotes/AllNotest";
import { Outlet } from "react-router";
// import DeleteModal from "../DeleteModal/DeleteModal";
// import ArchiveNoteModal from "../ArchiveNoteModal/ArchiveNoteModal";
// import Toast from "../Toast/Toast";

function Main() {
  return (
    <div className="flex h-screen flex-col dark:bg-[#0E121B]">
      <div className="sticky top-0">
        <Header />
      </div>
      <div className="grow">
        <Outlet />
      </div>
      {/* <DeleteModal /> */}
      {/* * <ArchiveNoteModal /> */}
      {/* <Toast /> */}
      <div className="sticky bottom-0 mt-auto">
        <MenuBar />
      </div>
    </div>
  );
}

export default Main;
