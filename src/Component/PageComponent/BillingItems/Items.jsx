import React, { useState, useEffect } from "react";
import { MdGradient } from "react-icons/md";
import image1 from "../../Resources/images/japan.jpg";
import axios from "../../../Hoc/Axios/CreateAxios";

function Items({OrderFood}) {
  const [filterData, setFilterData] = useState("");
  const [Tbody, setTbody] = useState([]);

  const showFilter = (e) => {
   
    setFilterData(e.target.value);
  };
  const Filter = (options) => {
    return options.filter((val) => {
      return (
        val["name"].toLowerCase().indexOf(filterData.toLocaleLowerCase()) > -1
      );
    });
  };

  const getCategory = () => {
    axios
      .get("product")
      .then((res) => {
        console.log(res);
        setTbody(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getCategory();
  }, []);
  const data = [
    { name: "nischal ", category: "naam", image: image1 },
    { name: "karki", category: "surnaam", image: image1 },
    { name: "kisan", category: "naam", image: image1 },
    { name: "mahat", category: "surnaam", image: image1 },
    { name: "butwal", category: "address", image: image1 },
    { name: "kathmandu", category: "address", image: image1 },
    { name: "nischal ", category: "naam", image: image1 },
    { name: "karki", category: "surnaam", image: image1 },
    { name: "kisan", category: "naam", image: image1 },
    { name: "mahat", category: "surnaam", image: image1 },
    { name: "butwal", category: "address", image: image1 },
    { name: "kathmandu", category: "address", image: image1 },
  ];
  return (
    <div>
      <div className="my-6">
        <input
          type="text"
          onChange={(e) => showFilter(e)}
          placeholder="Search Items ..."
          className="bg-gray-100 border outline-none w-11/12 p-2.5 rounded-sm"
        />
      </div>

      <div
        className="grid grid-cols-3 laptop:grid-cols-3 desktopS:grid-cols-5 gap-3  border border-black border-opacity-25 bg-gray-100 
      h-128 overflow-y-auto scroll w-11/12  p-2 "
      >
        {Tbody.map((val, i) => {
          return (
            <div
              key={i}
              onClick={()=>OrderFood(val)}
              className=" h-fit   flex   justify-center   items-center"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(2,10,20,0.4) 20%, rgba(0,2,20,0.6) 55%, rgba(1,2,1,0.5) 80%, rgba(1,2,3,0.5) 100%),url(${val.image})`,
                // backgroundImage:
                // "linear-gradient(0deg, rgba(2,10,20,0.8995973389355743) 20%, rgba(0,2,20,0.6979166666666667) 55%, rgba(1,2,1,0.3029586834733894) 80%, rgba(1,2,3,0.8995973389355743) 100%), url(https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
                // backgroundImage: `url(${externalImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "200px",
              }}
            >
              <div
                className="   capitalize   px-2 line-clamp-1 text-white
                 font-bold  text-lg  
              "
              >
                {val.product_name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Items;