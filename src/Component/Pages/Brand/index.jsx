import React, { useState, useEffect } from "react";
import axios from "axios";
import AddBrand from "../../PageComponent/Brand/AddBrand";
import ViewBrand from "../../PageComponent/Brand/ViewBrand";
// import SecondaryHeader from "../../UI/SecondaryHeader/SecondaryHeader";
// import SecondaryHeaderSmallDev from "../../UI/SecondaryHeader/SecondaryHeaderSmallDev";
function Brand() {
  const [showData, setShowData] = useState("Add");
  const [Tbody, setTbody] = useState([]);
  const SearchText = () => {
    alert(4);
  };
  const getBrand = () => {
    try {
      axios
        .get("/brand")
        .then((res) => {
          console.log(res);
          setTbody(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBrand();
  }, []);
  return (
    <div>
      {/* <SecondaryHeader
        setShowData={setShowData}
        showData={showData}
        addBtn="AddBrand"
        viewBtn="ViewBrand"
        SearchText={SearchText}
      /> */}
      {showData === "Add" ? (
        <AddBrand setShowData={setShowData} getBrand={getBrand} />
      ) : (
        <ViewBrand
          setShowData={setShowData}
          getBrand={getBrand}
          Tbody={Tbody}
          setTbody={setTbody}
        />
      )}
    </div>
  );
}

export default Brand;