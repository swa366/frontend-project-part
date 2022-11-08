import React, { useState } from "react";
import ViewSpecialOffers from "../../PageComponent/Brand/ViewBrand";
import AddSpecialOffers from "../../PageComponent/SpecialOffers/AddSpecialOffers";
import SecondaryHeader from "../../UI/SecondaryHeader/SecondaryHeader";
import SecondaryHeaderSmallDev from "../../UI/SecondaryHeader/SecondaryHeaderSmallDev";
function SpecialOffers() {
  const [showData, setShowData] = useState("Add");
  const SearchText = () => {
    alert(4);
  };
  return (
    <div>
      <SecondaryHeader
        setShowData={setShowData}
        showData={showData}
        addBtn="AddSpecialOffers"
        viewBtn="ViewSpecialOffers"
        SearchText={SearchText}
      />
      {showData === "Add" ? <AddSpecialOffers /> : <ViewSpecialOffers />}
    </div>
  );
}
export default SpecialOffers;