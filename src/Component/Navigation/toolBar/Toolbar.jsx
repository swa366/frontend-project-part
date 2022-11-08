import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import React, { useState } from "react";

import { MdDehaze } from "react-icons/md";
import images from "../../Resources/images/profile.jpg";
import { Link, useNavigate } from "react-router-dom";

function Toolbar({ setShowSidebar, showSidebar, hideSideBar, setHideSideBar }) {
  const [toggleArrowDown, setToggleArrowDown] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="bg-gray-700  relative laptop:z-50 w-fit  mobileL:w-full  text-white flex 
     justify-between items-center  px-8 py-4  "
    >
      <div onClick={() => setShowSidebar(!showSidebar)}>
        <MdDehaze className="w-8 h-10  cursor-pointer" />
      </div>
      <div className="flex gap-10 items-center ">
        {/* <Link to="/billing"> */}{" "}
        <div>
          <button
            className="bg-gray-400 font-semibold px-6 py-2  text-sm
      rounded-md capitalize transition-all ease-in-out duration-300 
       hover:scale-105 text-white hover:bg-SecondaryColor"
            onClick={() => {
              setHideSideBar(true);
              navigate("/billing", { state: { hideSideBar } });
            }}
          >
            billing
          </button>
        </div>
        <div className="flex gap-2 items-center">
          <div className="rounded-full ">
            <img
              src={images}
              alt="loading..."
              height="35"
              width="35"
              className="rounded-full"
            />
          </div>
          <div
            className="flex gap-2 cursor-pointer"
            onClick={() => setToggleArrowDown(!toggleArrowDown)}
          >
            <div className="capitalize">Admin</div>
            <div>
              {!toggleArrowDown ? (
                <IoMdArrowDropdown className="w-8 h-8" />
              ) : (
                <IoMdArrowDropup className="w-8 h-8" />
              )}
            </div>
          </div>
          {toggleArrowDown ? (
            <div
              className="absolute top-12  px-2  rounded-md py-4 
          right-5 bg-gray-200"
            >
              <div
                className="bg-blue-500 hover:bg-blue-500 px-7 
            rounded-md text-white font-semibold  capitalize hover:text-white py-1"
              >
                logout
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Toolbar;