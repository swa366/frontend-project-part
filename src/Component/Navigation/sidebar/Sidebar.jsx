 import Navitems from "../navitems/Navitems";
import React from "react";
import logoImage from "../../Resources/images/dreamlogo.jpg";

function Sidebar() {
  
    return (
        <div className="w-full ">
        {/* large device */}
        <div
          className=" flex flex-col justify-between py-5  w-full relative h-screen "
        // style={styles.fadeInLeft}
        >
          <div>
            <div className="flex justify-center pt-8 ">
              <img
                src={logoImage}
                alt="loading ..."
                height="100px"
                width="100px"
              />
            </div>

            <div className="py-8 ">
              {" "}
              <Navitems />
            </div>
          </div>
          <div className="text-white font-medium  text-sm tracking-wide text-center  w-full ">
            {" "}
            This copyright belongs to
            <div className="mt-[2px]">
              &copy; DreamSaloon
            </div>
          </div>
        </div>
      </div>
  );
}

export default Sidebar;