import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../Context";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside
      style={isSidebarOpen ? { display: "flex" } : { display: "none" }}
      className="fixed top-0 left-0 w-[100%] h-[100%] bg-white md:hidden"
    >
      <div className="px-8 py-16 relative ">
        <button className="absolute text-gray-500 top-4 right-4">
          <FaTimes />
        </button>
        <div className="flex flex-col mb-8 ">
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Products</Link>
          <Link>Contact</Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
