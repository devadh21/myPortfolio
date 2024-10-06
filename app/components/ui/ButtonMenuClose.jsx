import React from "react";

export default function ButtonMenuClose({handleMenu}) {
  return (
    <button
      type="button"
      className="text-[25px]   dark:bg-bg-color2 rounded-lg w-[35px] h-[35px] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary hover:shadow-primary duration-700 "
      onClick={handleMenu}
    >
      X
    </button>
  );
}
