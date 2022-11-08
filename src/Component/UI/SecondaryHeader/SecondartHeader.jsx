import React, { useState } from "react";
import { MdLibraryAdd } from "react-icons/md";
import { RiEyeCloseLine, RiEyeFill } from "react-icons/ri";
function SecondaryHeader({
  showData,
  setShowData,
  SearchText,
  addBtn,
  viewBtn,
}) {
  const [SearchValue, setSearchValue] = useState("");
  return (
    <div className="hidden tablet:flex justify-between px-6 pt-3">
      <div className="w-full flex ">
        {addBtn ? (
          <div
            className={`border-2 border-yellow-400 py-4 px-5 flex gap-2 cursor-pointer items-center
        ${showData === "Add" ? "bg-yellow-400 text-white" : "text-yellow-500"}
        hover:bg-yellow-400 w-fit capitalize font-semibold  hover:text-white hover:border-r-white`}
            onClick={() => setShowData("Add")}
          >
            <div>
              <MdLibraryAdd className="w-6 h-6" />
            </div>
            <button>
              <div className="capitalize"> {addBtn}</div>
            </button>
          </div>
        ) : (
          ""
        )}
        {viewBtn ? (
          <div
            className={`border-2 border-yellow-400 py-4 px-5 flex gap-2 cursor-pointer items-center
         ${
           showData === "View"
             ? "bg-yellow-400 text-white"
             : "text-yellow-500"
         }
         hover:bg-yellow-400 w-fit capitalize font-semibold  hover:text-white hover:border-l-white`}
            onClick={() => setShowData("View")}
          >
            {showData === "View" ? (
              <div>
                <RiEyeFill />
              </div>
            ) : (
              <RiEyeCloseLine />
            )}
            <button>
              <div className="capitalize">{viewBtn}</div>
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      {/* search bar starts here */}
      {showData === "View" && (
        <div className="flex justify-between w-full items-center">
          <div className="flex gap-3 w-full">
            <div className="w-full">
              <input
                type="text"
                name="search"
                placeholder="Search ..."
                onChange={(e) => setSearchValue(e.target.value)}
                className="bg-gray-50 text-gray-500 placeholder:text-gray-500 border-gray-300 w-full p-2 rounded-md border-2"
              />
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => SearchText(SearchValue)}
                className="px-5 py-1.5 text-white  font-semibold cursor-pointer capitalize bg-green-500 rounded-sm  drop-shadow-md"
              >
                search
              </button>
              <button className="px-5 py-1.5 text-white  font-semibold cursor-pointer capitalize bg-orange-500 rounded-sm  drop-shadow-md">

                Export
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SecondaryHeader;