import App from "./components/App/App";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import AllNotes from "./components/AllNotes/AllNotes";
import Main from "./components/Main/Main";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Settings from "./components/Settings/Settings";
import ColorTheme from "./components/ColorTheme/ColorTheme";
import FontOptions from "./components/FontOptions/FontOptions";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import Search from "./components/Search/Search";
import ArchivedNotes from "./components/ArchivedNotes/ArchivedNotes";
import Tags from "./components/Tags/Tags";
import CreateNote from "./components/CreateNote/CreateNote";
import NotePage from "./components/NotePage/NotePage";
import TagNotes from "./components/TagNotes/TagNotes";
import DeleteModal from "./components/DeleteModal/DeleteModal";
import ArchiveNoteModal from "./components/ArchiveNoteModal/ArchiveNoteModal";
import Toast from "./components/Toast/Toast";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
        children: [
          // { index: true, element: <AllNotes /> },
          {
            path: "/allNotes",
            element: <AllNotes />,
            children: [
              {
                path: "/allNotes/note-page/:id",
                element: <NotePage />,
              },
            ],
          },
          {
            path: "/settings",
            element: <Settings />,
            children: [
              { index: true, element: <ColorTheme /> },
              {
                path: "/settings/color-theme",
                element: <ColorTheme />,
              },
              {
                path: "/settings/font-options",
                element: <FontOptions />,
              },
              {
                path: "/settings/change-password",
                element: <ChangePassword />,
              },
            ],
          },
          {
            path: "/search",
            element: <Search />,
          },
          {
            path: "/archived-notes",
            element: <ArchivedNotes />,
            children: [
              {
                path: "/archived-notes/note-page/:id",
                element: <NotePage />,
              },
            ],
          },
          {
            path: "/tags",
            element: <Tags />,
          },
          {
            path: "/new-note",
            element: <CreateNote />,
          },

          {
            path: "/tab-notes",
            element: <TagNotes />,
          },
        ],
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/delete",
        element: <DeleteModal />,
      },
      {
        path: "/note-modal",
        element: <ArchiveNoteModal />,
      },
      {
        path: "/toast",
        element: <Toast />,
      },
    ],
  },
];

export default routes;
