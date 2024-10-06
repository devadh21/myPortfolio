"use client";
import { Fragment, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import hero from "../../public/img/hero2.webp";

import { socialMediaIcons, menuLinks } from "../data";
import ButtonMenuHamburger from "./ui/ButtonMenuHamburger";
import ButtonLightMode from "./ui/ButtonLightMode";
import ButtonDarkMode from "./ui/ButtonDarkMode ";
import ButtonMenuClose from "./ui/ButtonMenuClose";

import { signOut, useSession } from "next-auth/react";
import ButtonLogout from "./ui/ButtonLogout";
import useLocalStorageState from "use-local-storage-state";

export default function Navbar() {
  const session  = useSession();
  // const { data: session } = useSession();
  const pathName = usePathname();

  const mobileMenu = useRef<HTMLDivElement>(null);
  const bgMenuMobile = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useLocalStorageState("theme", {
    defaultValue: "light",
  });

  useEffect(() => {
    // document.body.classList.remove("light");
    window.document.body.classList.add(theme);
  }, [theme]);

  // switch to dark mode
  function handleDark() {
    setTheme("dark");
    document.body.classList.remove("light");
  }
  // switch to light mode
  function handleLight() {
    setTheme("light");
    document.body.classList.remove("dark");
  }
  // End haldle dark mode

  // show list link in mobile menu
  function handleMenu() {
    mobileMenu.current?.classList.toggle("-top-[380px]");
    mobileMenu.current?.classList.toggle("top-0");
    bgMenuMobile.current?.classList.toggle("hidden");
  }
  function handlebgMenuMobile() {
    mobileMenu.current?.classList.toggle("-top-[380px]");
    mobileMenu.current?.classList.toggle("top-0");
    bgMenuMobile.current?.classList.toggle("hidden");
  }

  // handle button Logout
  const handleLogout = () => {
    signOut();
  };

  return (
    <nav className=" bg-bg-color-light  dark:bg-bg-color ">
      <div className="max-w-screen-xl flex  items-center justify-between container   ">
        {/* logo */}
        <a href="#" className="flex items-center ">
          <Image
            src={hero}
            width={70}
            height={90}
            // src="https://flowbite.com/docs/images/logo.svg"
            className="h-13 w-13 mr-3   "
            alt="logo"
          />
          <span className="text-color-text-light dark:text-color-text text-[22px]  ">
            Flowbite
          </span>
        </a>
        {/* navbar menu screen */}
        <div
          className="hidden [@media(min-width:990px)]:flex  transition ease-in duration-700      justify-between items-center gap-[6px]   "
          id="navbar-default2 "
        >
          <ul className=" flex font-sm uppercase    sm:gap-[6px]  dark:bg-bg-color   dark:text-color-text relative">
            {menuLinks.map((link, index) => (
              <Fragment key={index}>
                <Link
                  href={`${link.path}`}
                  className={`${link.style} ${
                    (link.id == 7 || link.id == 8) &&
                    session.status == "authenticated"
                      ? "hidden"
                      : ""
                  } ${link.path === pathName ? "text-primary" : ""} `}
                  aria-current="page"
                >
                  {link.title}
                </Link>
                <samp
                  className={`${
                    index >= menuLinks.length - 3 ? "hidden" : "flex"
                  } justify-center items-center text-primary `}
                >
                  |
                </samp>
              </Fragment>
            ))}
          </ul>

          {/* handle dark mode for screan */}
          <div className=" sm:flex    dark:border-gray-700 dark:text-color-text    cursor-pointer hover:text-primary hover:shadow-sm   ">
            {/* Dark icon moon */}
            <ButtonDarkMode on_click={handleDark} />
            {/* Light icon sun */}
            <ButtonLightMode on_click={handleLight} />
          </div>

          {/* menu social media */}
          <div className=" h-full">
            <div className="  flex items-center justify-center gap-1 bg-bg-color-light dark:bg-bg-color dark:border-gray-700 dark:text-color-text">
              {socialMediaIcons.map((smIcon) => (
                <div
                  key={smIcon.id}
                  className="flex items-center style-social-media-icon "
                >
                  {smIcon.icon}
                </div>
              ))}
            </div>
          </div>
          {/* handle button Logout */}
          {session.status !== "authenticated" ? (
            ""
          ) : (
            <div className="flex gap-2 items-center">
              <Image src={session.data.user.image} alt="avatar" width={40} height={40} className=" rounded-full cursor-pointer" title={session.data.user.name} />
              <ButtonLogout on_click={handleLogout} />
            </div>
          )}
        </div>

        {/* menu for mobile screen  */}
        <div
          className="hidden fixed  w-screen h-[190%]  z-30"
          onClick={handlebgMenuMobile}
          ref={bgMenuMobile}
        ></div>
        <div
          className="fixed bg-bg-color-light dark:bg-bg-color2 opacity-90 dark:opacity-90  dark:text-color-text   w-full  -top-[380px] left-0 z-50    transition-all ease-in-out  duration-1000   "
          ref={mobileMenu}
        >
          {/* header mobile screen menu */}
          <div className="">
            <div className=" bg-bg-color2-light dark:bg-bg-color flex justify-between items-center w-full p-4   ">
              {/* handle dark mode */}
              <div className=" ">
                {/* Dark icon moon */}
                <ButtonDarkMode on_click={handleDark} />
                {/* Light icon sun */}
                <ButtonLightMode on_click={handleLight} />
              </div>
              {/* menu social media f */}
              <div className="">
                <div className="text-sm flex gap-3 justify-center items-center  p-4  dark:text-color-text  ">
                  {socialMediaIcons.map((smIcon) => (
                    <div key={smIcon.id} className="style-social-media-icon">
                      {smIcon.icon}
                    </div>
                  ))}
                </div>
              </div>
              {/* handle button Logout */}
              {session.status !== "authenticated" ? (
                ""
              ) : (
                <div>
                  <p>Signed in as {session.data.user.name}</p>
                  <p>Signed in as {session.data.user.email}</p>
                  <p>Signed in as {session.data.user.image}</p>
                  <button
                    className="w-[30px] h-[30px] p-1 rounded-full  hover:scale-110"
                    title="Logout"
                    onClick={handleLogout}
                  >
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 15"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 7.5h11m0 0L8 3.786M12 7.5l-4 3.714M12 1h3c.53 0 1.04.196 1.414.544.375.348.586.82.586 1.313v9.286c0 .492-.21.965-.586 1.313A2.081 2.081 0 0 1 15 14h-3"
                      />
                    </svg>
                  </button>
                </div>
              )}
              {/* Button closed menu */}
              <ButtonMenuClose handleMenu={handleMenu} />
            </div>
          </div>

          {/* menu for mobile screen */}

          <ul className="text-[25px]    gap-4 h-full   uppercase  tracking-[3px] dark:bg-opacity-90 bg-opacity-90  bg-bg-color-light dark:bg-bg-color2  ">
            <div className="flex flex-col justify-center items-center  ">
              {menuLinks.map((link, index) => (
                <Link
                  key={index}
                  href={`${link.path}`}
                  className="hover:text-primary dark:hover:text-primary"
                  onClick={handleMenu}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </ul>
        </div>
      </div>

      {/* menu for mobile screen boorgur menu icon */}
      <ButtonMenuHamburger handleMenu={handleMenu} />
    </nav>
  );
}
