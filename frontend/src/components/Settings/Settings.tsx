import { Link } from "react-router";
// import { useTheme } from "../../store";
// import ColorTheme from "../ColorTheme/ColorTheme";
// import FontOptions from "../FontOptions/FontOptions";
import ChangePassword from "../ChangePassword/ChangePassword";

function Settings() {
  // const theme = useTheme();

  // let isDark;
  // if (theme === "light") {
  //   isDark = false;
  // } else if (theme === "dark") {
  //   isDark = true;
  // } else {
  //   isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  // }

  // const themeIconUrl = isDark
  //   ? "/images/icon-sun-dark.svg"
  //   : "/images/icon-sun.svg";
  // const fontIconUrl = isDark
  //   ? "/images/icon-font-dark.svg"
  //   : "/images/icon-font.svg";
  // const passwordIconUrl = isDark
  //   ? "/images/icon-lock-dark.svg"
  //   : "/images/icon-lock.svg";
  // const logoutIconUrl = isDark
  //   ? "/images/icon-logout-dark.svg"
  //   : "/images/icon-logout.svg";

  return (
    <>
      <div className="px-[16px] py-[24px] sm:max-lg:px-[32px] lg:hidden">
        <div className="flex flex-col gap-[16px]">
          <p className="h-[29px] w-full font-inter text-[24px]/[120%] font-bold tracking-[-0.5px] dark:text-white">
            Settings
          </p>
          <div className="flex flex-col gap-[8px] *:flex *:gap-[8px]">
            <Link
              to="/settings/color-theme"
              className="flex items-center p-[8px]"
            >
              {/* <img src={themeIconUrl} alt="" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-[#0E121B] dark:stroke-[#E0E4EA]"
              >
                <path
                  // stroke="#0E121B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M12.055 3v1.372m0 15.256V21m9-9h-1.372M4.427 12H3.055m15.364-6.364-.97.97M6.66 17.394l-.97.97m12.728 0-.97-.97M6.66 6.606l-.97-.97"
                />
                <path
                  // stroke="#0E121B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M12.055 7.805a4.195 4.195 0 1 1 0 8.39 4.195 4.195 0 0 1 0-8.39Z"
                  clip-rule="evenodd"
                />
              </svg>
              <p className="font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-[#2B303B] dark:text-white">
                Color Theme
              </p>
            </Link>
            <Link
              to="/settings/font-options"
              className="flex items-center p-[8px]"
            >
              {/* <img src={fontIconUrl} alt="" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                className="fill-[#0E121B] dark:fill-[#E0E4EA]"
              >
                <path
                  // fill="#0E121B"
                  fill-rule="evenodd"
                  d="M20.999 10.979H14.63a1 1 0 0 0-1 1v1.13a1 1 0 1 0 2 0v-.13h1.154v4.409h-.39a1 1 0 1 0 0 2h2.84a1 1 0 1 0 0-2h-.45v-4.41h1.214v.13a1 1 0 1 0 2 0v-1.13a1 1 0 0 0-1-1Z"
                  clip-rule="evenodd"
                />
                <path
                  // fill="#0E121B"
                  fill-rule="evenodd"
                  d="M12.185 17.388H10.29V6.61h4.415v1.25a1 1 0 0 0 2 0V5.61a1 1 0 0 0-1-1H2.999a1 1 0 0 0-1 1v2.25a1 1 0 0 0 2 0V6.61H8.29v10.78H6.517a1 1 0 1 0 0 2h5.668a1 1 0 1 0 0-2Z"
                  clip-rule="evenodd"
                />
              </svg>
              <p className="font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-[#2B303B] dark:text-white">
                Font Theme
              </p>
            </Link>
            <Link
              to="/settings/change-password"
              className="flex items-center p-[8px]"
            >
              {/* <img src={passwordIconUrl} alt="" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-[#0E121B] dark:stroke-[#E0E4EA]"
              >
                <path
                  // stroke="#0E121B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.8"
                  d="M16.424 9.448V7.3a4.552 4.552 0 0 0-4.551-4.551 4.55 4.55 0 0 0-4.57 4.53v2.168"
                />
                <path
                  // stroke="#0E121B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.8"
                  d="M15.683 21.25H8.042a3.792 3.792 0 0 1-3.792-3.792v-4.29a3.792 3.792 0 0 1 3.792-3.791h7.641a3.792 3.792 0 0 1 3.792 3.792v4.289a3.792 3.792 0 0 1-3.792 3.792Z"
                  clip-rule="evenodd"
                />
                <path
                  // stroke="#0E121B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.8"
                  d="M11.862 14.203v2.22"
                />
              </svg>
              <p className="font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] text-[#2B303B] dark:text-white">
                Change Password
              </p>
            </Link>
            <hr className="text-[#E0E4EA] dark:text-[#232530]" />
            <button type="button" className="flex items-center p-[8px]">
              {/* <img src={logoutIconUrl} alt="" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-[#0E121B] dark:stroke-[#E0E4EA]"
              >
                <path
                  // stroke="#0E121B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.8"
                  d="M21 11.998H8.945m12.055 0-2.932-2.934M21 11.998l-2.932 2.936M14.556 8.266V7.251c0-1.56-1.121-2.891-2.651-3.15L6.702 3.046C4.765 2.718 3 4.219 3 6.195v11.61c0 1.976 1.765 3.477 3.702 3.15l5.203-1.057a3.188 3.188 0 0 0 2.65-3.149v-1.014"
                />
              </svg>
              <p className="font-inter text-[14px] font-medium tracking-[-0.2px] dark:text-white text-[#2B303B]">
                Logout
              </p>
            </button>
          </div>
        </div>
      </div>

      <div className="h-full max-lg:hidden">
        <div className="flex h-full pr-[32px]">
          <div className="flex flex-col gap-[16px] border-r border-r-[#E0E4EA] py-[20px] pr-[16px] pl-[32px] max-lg:hidden dark:border-r-[#232530]">
            {/* <div className="w-min">
              <NewNoteButton />
            </div> */}
            {/* <p className="w-full font-inter text-[14px]/[130%] tracking-[-0.2px] text-[#2B303B] dark:text-[#E0E4EA]">
              All your archived notes are stored here. You can restore or delete
              them anytime.
            </p> */}
            <div className="flex h-[200px] grow scrollbar-none flex-col gap-[4px] overflow-scroll dark:text-white">
              <div className="flex lg:w-[210px] flex-col gap-[8px] *:flex *:gap-[8px]">
                <Link to="/settings/color-theme" className="py-[8px]">
                  {/* <img src={themeIconUrl} alt="" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-[#0E121B] dark:stroke-[#E0E4EA]"
                  >
                    <path
                      // stroke="#0E121B"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M12.055 3v1.372m0 15.256V21m9-9h-1.372M4.427 12H3.055m15.364-6.364-.97.97M6.66 17.394l-.97.97m12.728 0-.97-.97M6.66 6.606l-.97-.97"
                    />
                    <path
                      // stroke="#0E121B"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M12.055 7.805a4.195 4.195 0 1 1 0 8.39 4.195 4.195 0 0 1 0-8.39Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p className="font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] dark:text-white">
                    Color Theme
                  </p>
                </Link>
                <Link to="/settings/font-options" className="py-[8px]">
                  {/* <img src={fontIconUrl} alt="" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="fill-[#0E121B] dark:fill-[#E0E4EA]"
                  >
                    <path
                      // fill="#0E121B"
                      fill-rule="evenodd"
                      d="M20.999 10.979H14.63a1 1 0 0 0-1 1v1.13a1 1 0 1 0 2 0v-.13h1.154v4.409h-.39a1 1 0 1 0 0 2h2.84a1 1 0 1 0 0-2h-.45v-4.41h1.214v.13a1 1 0 1 0 2 0v-1.13a1 1 0 0 0-1-1Z"
                      clip-rule="evenodd"
                    />
                    <path
                      // fill="#0E121B"
                      fill-rule="evenodd"
                      d="M12.185 17.388H10.29V6.61h4.415v1.25a1 1 0 0 0 2 0V5.61a1 1 0 0 0-1-1H2.999a1 1 0 0 0-1 1v2.25a1 1 0 0 0 2 0V6.61H8.29v10.78H6.517a1 1 0 1 0 0 2h5.668a1 1 0 1 0 0-2Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p className="font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] dark:text-white">
                    Font Theme
                  </p>
                </Link>
                <Link to="/settings/change-password" className="py-[8px]">
                  {/* <img src={passwordIconUrl} alt="" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-[#0E121B] dark:stroke-[#E0E4EA]"
                  >
                    <path
                      // stroke="#0E121B"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.8"
                      d="M16.424 9.448V7.3a4.552 4.552 0 0 0-4.551-4.551 4.55 4.55 0 0 0-4.57 4.53v2.168"
                    />
                    <path
                      // stroke="#0E121B"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.8"
                      d="M15.683 21.25H8.042a3.792 3.792 0 0 1-3.792-3.792v-4.29a3.792 3.792 0 0 1 3.792-3.791h7.641a3.792 3.792 0 0 1 3.792 3.792v4.289a3.792 3.792 0 0 1-3.792 3.792Z"
                      clip-rule="evenodd"
                    />
                    <path
                      // stroke="#0E121B"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.8"
                      d="M11.862 14.203v2.22"
                    />
                  </svg>
                  <p className="font-inter text-[14px]/[120%] font-medium tracking-[-0.2px] dark:text-white">
                    Change Password
                  </p>
                </Link>
                <hr className="text-[#E0E4EA] dark:text-[#232530]" />
                <div className="py-[8px]">
                  {/* <img src={logoutIconUrl} alt="" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-[#0E121B] dark:stroke-[#E0E4EA]"
                  >
                    <path
                      // stroke="#0E121B"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.8"
                      d="M21 11.998H8.945m12.055 0-2.932-2.934M21 11.998l-2.932 2.936M14.556 8.266V7.251c0-1.56-1.121-2.891-2.651-3.15L6.702 3.046C4.765 2.718 3 4.219 3 6.195v11.61c0 1.976 1.765 3.477 3.702 3.15l5.203-1.057a3.188 3.188 0 0 0 2.65-3.149v-1.014"
                    />
                  </svg>
                  <p className="font-inter text-[14px] font-medium tracking-[-0.2px] dark:text-white">
                    Logout
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grow p-[32px]">
            {/* <ColorTheme /> */}
            {/* <FontOptions /> */}
            <ChangePassword />
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
