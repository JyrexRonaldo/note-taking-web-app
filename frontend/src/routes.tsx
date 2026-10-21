import App from "./components/App/App";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import AllNotes from "./components/AllNotes/AllNotes";
import Main from "./components/Main/Main";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
        children: [{ index: true, element: <AllNotes /> }],
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
    ],
    // errorElement: <ErrorPage />,
  },
];

export default routes;
