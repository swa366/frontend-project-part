import React, { useState } from "react";
import AddCategory from "../../PageComponent/CategoryData/AddCategory/AddCategory";
import ViewCategory from "../../PageComponent/CategoryData/ViewCategory/ViewCategory";
import SecondaryHeader from "../../UI/SecondaryHeader/SecondartHeader";

function Category() {
  const [showData, setShowData] = useState("Add");
  const SearchText = () => {
    alert(4);
  };
  return (
    <div>
      <SecondaryHeader
        setShowData={setShowData}
        showData={showData}
        addBtn="AddCategory"
        viewBtn="ViewCategory"
        SearchText={SearchText}
      />
      {showData === "Add" ? <AddCategory /> : <ViewCategory />}
    </div>
  );
}

export default Category;