import React, { useState } from "react";
import AddStaff from "../../PageComponent/Staff/AddStaff/AddStaff";
import ViewStaff from "../../PageComponent/Staff/ViewStaff/ViewStaff";
import SecondaryHeader from "../../UI/SecondaryHeader/SecondartHeader";

function Staff() {
  const [showData, setShowData] = useState("Add");
  return (
    <div>
      <SecondaryHeader
        setShowData={setShowData}
        showData={showData}
        addBtn="AddStaff"
        viewBtn="ViewStaff"
        // SearchText={SearchText}
      />

      {showData === "Add" ? <AddStaff /> : <ViewStaff />}
    </div>
  );
}

export default Staff;