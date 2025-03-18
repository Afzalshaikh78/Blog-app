import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
const Navigation = () => {
  return (
    <nav className="border-b-2 border-gray-300 p-4 flex justify-between items-center ">
      <div className="flex items-center border-2 rounded-full px-4 py-2 w-[30rem] ml-[3rem]">
        <FaSearch className="mr-2 text-xl" />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none bg-transparent w-full text-xl ml-2"
        />
      </div>
      <div className="flex items-center">
        <FaUserCircle className="mr-2 text-3xl cursor-pointer ml-2" />
      </div>
    </nav>
  );
};

export default Navigation;
