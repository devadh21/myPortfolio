import React from "react";

export default function ButtonMenuHamburger({handleMenu}) {
  return (
    <div>
      {/* menu for mobile screen boorgur menu icon */}
      <button
        onClick={handleMenu}
        type="button"
        className="absolute right-4 top-4 [@media(min-width:990px)]:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:shadow-md hover:shadow-primary focus:outline-none focus:ring-2 focus:ring-primary dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 z-40"
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </div>
  );
}
