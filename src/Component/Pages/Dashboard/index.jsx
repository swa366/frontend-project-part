import React from "react";
import LeftDashboardSection from "../../PageComponent/DashBoardDetails/LeftDashboardSection/LeftDashboardSection";
import RightDashboardSection from "../../PageComponent/DashBoardDetails/RightDashboardSection/RightDashboardSection";

function DashBoard() {
  return (
    <div className="bg-gray-200 h-fit p-5">
      <div className="grid grid-cols-3 ">
        <div className="col-span-2 border-r border-gray-300 pr-8">
          <LeftDashboardSection />
        </div>
        <div className="col-span-1">
          <RightDashboardSection />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
