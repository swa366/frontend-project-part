import React from "react";
import BillingTable from "../../PageComponent/BillingTable/BillingTable";
import { useLocation } from "react-router-dom";
import BillingForm from "../../PageComponent/BillingForm/BillingForm";
import Items from "../../PageComponent/BillingItems/Items";
import { useState } from "react";

function Billing() {
  const location = useLocation();
  console.log("location", location);
  const [Customerinfo, setCustomerinfo] = useState([])
  const [OrderList, setOrderList] = useState([])
  const Receive=(values)=>{
    console.log (values)
    let data={
      product_name:values.product_name,
      quantity:1,
      unit:values.priceandunit[0].product_unit,
      price:values.priceandunit[0].product_price,
      total:values.priceandunit[0].product_price,
    }

    setOrderList((previous)=>{
      return [...previous,data]
    })



  }
  const tabs = [
    {
      title: "product",
    },
    {
      title: "service",
    },
    {
      title: " offers",
    },
    {
      title: "booking",
    },
  ];
  return (
    <div>
      {/* <BreakPoint /> */}
      <div className="  flex  gap-2 mobileL:gap-5 mobileL:px-5 mt-8">
        {tabs.map((val, i) => {
          return (
            <div key={i}>
              <div
                className={`${
                  i === 0
                    ? "bg-gray-400"
                    : i === 1
                    ? "bg-green-500"
                    : i === 2
                    ? "bg-red-500"
                    : "bg-blue-500"
                }  text-white font-semibold rounded-sm hover:bg-opacity-70 cursor-pointer text-lg capitalize  w-fit tablet:w-full px-2.5 tablet:px-10 py-2 Poppins`}
              >
                {val.title}
              </div>
            </div>
          );
        })}
      </div>
      <div
        className={`tablet:grid 
          
         grid-cols-2 tablet:px-2 laptop:px-6  py-4 `}
      >
        <div className="col-span-1">
          {" "}
          <Items OrderFood = {Receive} />
        </div>
        <div className="col-span-1">
          <BillingForm  setCustomerinfo={setCustomerinfo}/>

          <BillingTable  OrderList={OrderList} Customerinfo={Customerinfo}/>
        </div>
      </div>
    </div>
  );
}

export default Billing;
