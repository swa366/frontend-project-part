import React, { useState } from "react";
import AddProduct from "../../PageComponent/Product/AddProduct";
import ViewProduct from "../../PageComponent/Product/ViewProduct";
import SecondaryHeader from "../../UI/SecondaryHeader/SecondartHeader";
import SecondaryHeaderSmallDev from "../../UI/SecondaryHeader/SecondaryHeaderSmallDev";
function Product() {
  const [showData, setShowData] = useState("Add");
  const SearchText = () => {
    alert(4);
  };
  return (
    <div>
      <SecondaryHeader
        setShowData={setShowData}
        showData={showData}
        addBtn="AddProduct"
        viewBtn="ViewProduct"
        SearchText={SearchText}
      />
      {showData === "Add" ? <AddProduct /> : <ViewProduct />}
    </div>
  );
}
export default Product;