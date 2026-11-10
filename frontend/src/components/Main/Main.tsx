import Header from "../Header/Header";
import MenuBar from "../MenuBar/MenuBar";
// import AllNotes from "../AllNotes/AllNotest";
import { Outlet } from "react-router";
import DeleteModal from "../DeleteModal/DeleteModal";
import ArchiveNoteModal from "../ArchiveNoteModal/ArchiveNoteModal";
// import Toast from "../Toast/Toast";
import { useDeleteModalStatus, useArchiveModalStatus } from "../../store";
import Sidebar from "../SidebarNavigation/SidebarNavigation";
import DesktopPageHeader from "../DesktopPageHeader/DesktopPageHeader";

function Main() {
  const deleteModalStatus = useDeleteModalStatus();
  const archiveModalStatus = useArchiveModalStatus();

  return (
    <div className="flex h-screen flex-col dark:bg-[#0E121B]">
      <div className="sticky top-0 lg:hidden">
        <Header />
      </div>
      <div className="grow lg:hidden">
        <Outlet />
      </div>
      {deleteModalStatus && <DeleteModal />}
      {archiveModalStatus && <ArchiveNoteModal />}
      <div className="sticky bottom-0 mt-auto lg:hidden">
        <MenuBar />
      </div>
      <div className="hidden lg:flex lg:items-start">
        <Sidebar />
        <div className="flex h-full w-full flex-col">
          <DesktopPageHeader />
          <div className="h-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
