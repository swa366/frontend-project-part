import React, { useState } from "react";
import AddService from "../../PageComponent/ServiceData/AddService/AddService";
import ViewService from "../../PageComponent/ServiceData/ViewService/ViewService";
import SecondaryHeader from "../../UI/SecondaryHeader/SecondaryHeader";
function Service() {
  const [showData, setShowData] = useState("Add");
  const SearchText = () => {
    alert(4);
  };
  return (
    <div>
      <SecondaryHeader
        setShowData={setShowData}
        showData={showData}
        addBtn="AddService"
        viewBtn="ViewService"
        SearchText={SearchText}
      />
      {showData === "Add" ? <AddService /> : <ViewService />}
    </div>
  );
}

export default Service;