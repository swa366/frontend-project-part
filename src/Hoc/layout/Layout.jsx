import Radium, { StyleRoot } from "radium";
import React, { useEffect, useState } from "react";
import Toolbar from "../../Component/Navigation/toolBar/Toolbar";
import Sidebar from "../../Component/Navigation/sidebar/Sidebar";
import { MdClose } from "react-icons/md";
import { fadeInLeft } from "react-animations";

function Layout(props) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [hideSideBar, setHideSideBar] = useState(false);
  const [showCancelButton, setShowCancelButton] = useState(false);
  const styles = {
    fadeInLeft: {
      animation: "x 0.6s",
      animationName: Radium.keyframes(fadeInLeft, "fadeInLeft"),
    },
  };
  useEffect(() => {
    if (showSidebar === true) {
      let cancelSlowlyAppear = setTimeout(() => {
        setShowCancelButton(true);
      }, 600);
      return () => clearTimeout(cancelSlowlyAppear);
    }
  }, [showSidebar]);
  // for sidebar
  return (
    <div className="grid laptop:grid-cols-12 gap-0 w-screen h-screen">
      {/* small device only from tablet to downward */}
      {showSidebar && (
        <div
          style={{
            background: "rgba(0,0,0,.3)",
          }}
          className="laptop:hidden col-span-12 grid grid-cols-12 fixed top-0 left-0 z-50
					 w-screen h-screen"
        >
          <div
            className="col-span-6 tablet:col-span-4
					 "
          >
            <StyleRoot>
              <div
                onClick={() => setShowSidebar(false)}
                style={styles.fadeInLeft}
                className=" bg-gray-700  w-full"
              >
                <Sidebar />
              </div>
            </StyleRoot>
          </div>

          <div
            className="w-full col-span-6 tablet:col-span-8"
            onClick={() => {
              setShowSidebar(false);
              setShowCancelButton(false);
            }}
          >
            {showCancelButton && (
              <div className="mobileS:col-span-3 fixed top-0 mobileL:col-span-8 col-span-3 tablet:col-span-8  laptop:hidden">
                <div>
                  <MdClose
                    className={` h-10 w-10 relative z-50 text-white tablet:text-white tablet:bg-transparent hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer  border border-white rounded-full p-1.5 mobileS:bg-white mobileS:text-black tablet:hover:bg-white tablet:hover:text-black mx-4 my-2 `}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {/* small devices ends here */}
      {/* large device only from laptop to upward */}
      {!hideSideBar ? (
        <div
          className={`hidden laptop:flex laptop:col-span-3 laptopM:col-span-2 w-full bg-gray-700`}
        >
          <div className="hidden laptop:block w-full">
            <div className=" w-full">
              <Sidebar />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* for larger ends here */}
      <div
        className={` ${
          hideSideBar ? " laptopM:col-span-12 " : " laptopM:col-span-10  "
        } laptop:col-span-9  `}
      >
        <div>
          <Toolbar
            hideSideBar={hideSideBar}
            setHideSideBar={setHideSideBar}
            setShowSidebar={setShowSidebar}
            showSidebar={showSidebar}
          />
        </div>
        <div className="">{props.children}</div>
      </div>
    </div>
  );
}

export default Layout;