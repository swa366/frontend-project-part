import React, { useState } from "react";
import { TbFileInvoice } from "react-icons/tb";
import { CgSandClock } from "react-icons/cg";
import { FaCrown } from "react-icons/fa";
import {
  IoIosArrowForward,
  IoIosArrowDown,
  IoIosAddCircle,
  IoMdSearch,
} from "react-icons/io";
import BookingDatas from "../BookingDatas/BookingDatas";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function LeftDashboardSection() {
  const { id } = useParams();
  console.log("iddddd", id);
  const [active, setActive] = useState("all");
  const card = [
    {
      title: "create invoice",
      desc: "Create and share invoices in  seconds",
      icon: <TbFileInvoice className="w-7 h-7" />,
    },
    {
      title: "create booking ",
      desc: "Add booking offline and manage it here",
      icon: <IoIosAddCircle className="w-7 h-7" />,
    },
    {
      title: "memberships",
      desc: "Create and share invoices in  seconds",
      icon: <FaCrown className="w-7 h-7" />,
    },
    {
      title: "waitlist ",
      desc: "Add booking offline and manage it here",
      icon: <CgSandClock className="w-7 h-7" />,
    },
  ];
  const overview = [
    { number: "0", title: "bookings" },
    { number: "0.0", title: "total sales" },
    { number: "45", title: "store views" },
    { number: "5", title: "new leads" },
  ];
  const tabs = [
    { title: "all" },
    { title: "pending" },
    { title: "accepted" },
    { title: "completed" },
    { title: "rejected" },
  ];
  const bookingData = [
    {
      booking_number: "53623722",
      price: "1000",
      no_services: "4",
      date: "arraving sat jun 7,08:11 PM",
      status: "pending",
    },
    {
      booking_number: "53623722",
      price: "1000",
      no_services: "4",
      date: "arraving sat jun 7,08:11 PM",
      status: "completed",
    },
    {
      booking_number: "53623722",
      price: "1000",
      no_services: "4",
      date: "arraving sat jun 7,02:11 AM",
      status: "rejected",
    },
    {
      booking_number: "53623722",
      price: "1000",
      no_services: "4",
      date: "arravingsat jun 7,08:11 PM",
      status: "accepted",
    },
  ];
  const allTabs = (val) => {
    setActive(val);
    console.log(val);
  };
  return (
    <div>
      <div className="font-bold text-gray-500 text-xs">
        Tuesday 24 june 2022
      </div>
      <div className=" capitalize font-semibold text-xl text-gray-700">
        GoodMorning 
      </div>
      <div className="my-3 grid grid-cols-4 gap-4 ">
        {card.map((val, i) => {
          return (
            <Link to={`/dashboard/${val.title}`}>
              <div className="bg-white rounded-md  cursor-pointer px-4 py-6">
                <div className="text-yellow-400 my-1.5">{val.icon}</div>
                <div className="flex justify-between font-bold capitalize text-gray-700 items-center my-1">
                  <div className=""> {val.title}</div>
                  <div>
                    {" "}
                    <IoIosArrowForward className="w-3 h-3  " />
                  </div>
                </div>
                <div className="text-xs text-gray-500">{val.desc}</div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="  border-b border-gray-300  my-8"></div>{" "}
      <div>
        <div className="flex justify-between items-center">
          <div className="capitalize font-bold">overview</div>
          <div className="capitalize  px-2 text-sm flex gap-2 font-semibold text-gray-500 items-center">
            <div> this month</div>
            <div>
              <IoIosArrowDown className="w-4 h-4  " />
            </div>
          </div>
        </div>
        <div className="my-3 grid grid-cols-4 gap-4 ">
          {overview.map((val, i) => {
            return (
              <div className="bg-white rounded-md  cursor-pointer px-3 py-2">
                <div className="  text-yellow-500 font-bold text-lg">
                  {val.number}
                </div>

                <div className=" font-bold capitalize text-xs text-gray-500  my-1">
                  {val.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="  border-b border-gray-300 my-8 "></div>
      <div>
        <div className=" ">
          <div className="capitalize font-bold">bookings</div>
          <div className="capitalize  text-sm  rounded-md px-2 my-4 bg-white border-gray-400 flex gap-2 font-semibold text-gray-500 items-center">
            <div className="w-full ">
              <input
                type="text"
                name="booking"
                placeholder="Search Booking ..."
                className="py-3 px-1.5 rounded-md  w-full"
              />
            </div>
            <div>
              <IoMdSearch className="w-6 h-6  text-gray-400 " />
            </div>
          </div>
        </div>
        <div className="relative mb-4">
          <div className="my-1.5 flex  items-center  gap-8">
            {tabs.map((val, i) => {
              return (
                <div className="  ">
                  <button
                    className={` font-semibold capitalize  ${
                      active === val.title
                        ? "text-black border-b-2 border-yellow-500"
                        : "text-gray-400"
                    }  my-1`}
                    onClick={() => allTabs(val.title)}
                  >
                    {val.title}
                  </button>
                </div>
              );
            })}
          </div>
          <div className="  border-b  w-full  absolute bottom-1 border-gray-300 "></div>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <div className="uppercase text-gray-400 text-xs font-bold">
              all orders
            </div>
            <div className="capitalize  px-2 text-sm flex gap-2 font-semibold text-gray-500 items-center">
              <div> this month</div>
              <div>
                <IoIosArrowDown className="w-4 h-4  " />
              </div>
            </div>
          </div>
          <BookingDatas bookingData={bookingData} />
        </div>
      </div>
    </div>
  );
}

export default LeftDashboardSection;