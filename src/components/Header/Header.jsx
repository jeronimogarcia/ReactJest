import React from "react";
import { SiJest } from "react-icons/si";

const Header = () => {
  return (
    <div className="flex items-center justify-between h-20 w-full bg-gray-200 shadow-lg px-20 fixed top-0 text-2xl text-purple-600">
      <div className="flex flex-row gap-2 w-52">
        <span className="flex items-center ">
          <SiJest role='logo'></SiJest>
        </span>
        <span>ReactJS/Jest</span>
      </div>
      <div>
        <h1>Unit Testing </h1>
      </div>
    </div>
  );
};

export default Header;
