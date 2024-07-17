"use client";

import React, { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  function onBtn() {
    setOpen(!open);
  }

  return (
    <main>
      <div
        className={`${
          !open ? "-translate-x-full" : ""
        }  w-96 h-screen border-2 border-black absolute top-0 bottom-0 bg-gray-400 flex justify-between transition-transform ease-in-out duration-1000`}
      >
        This is Side Bar
        <div>
          <button onClick={onBtn} className="bg-red-500 p-4">
            Close
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center h-screen">
        <button onClick={onBtn} className="bg-[#bcff02] p-5 border-2 shadow-2xl border-black">
          Open Side Bar
        </button>
      </div>
    </main>
  );
};

export default Sidebar;
