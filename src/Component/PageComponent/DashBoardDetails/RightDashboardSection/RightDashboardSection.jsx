import React, { useState } from "react";
import { TbFileInvoice } from "react-icons/tb";
import { CgSandClock } from "react-icons/cg";
import { FaCrown } from "react-icons/fa";
import image from "../../../Resources/images/japan.jpg";
import BookingDatas from "../BookingDatas/BookingDatas";
import {
  IoIosArrowForward,
  IoIosArrowDown,
  IoIosAddCircle,
  IoMdSearch,
} from "react-icons/io";
import { GiSevenPointedStar } from "react-icons/gi";
function RightDashboardSection() {
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
  return (
    <div className="    h-screen px-7 ">
      <div className="flex gap-2 bg-gray-300  p-4 rounded-md">
        <div className="">
          <div className=" font-bold">
            Get the best with{" "}
            <div className="text-blue-800 text-3xl">DreamSalon</div>
          </div>
          <div className="text-gray-600 text-sm font-semibold my-1">
            business section
          </div>
          <div className="text-gray-500 text-xs mb-1">
            Attract more clients and get online booking by sharingyour online
            link
          </div>
          <div className=" my-2">
            <button className="capitalize  font-semibold text-sm rounded-md px-4 py-2 bg-yellow-500 text-white hover:bg-opacity-80 ">
              register here!
            </button>
          </div>
        </div>
        <div className="w-40 mt-10">
          <img src={image} alt="Loading .." height={100} width={500} />
        </div>
      </div>
      <div className="bg-yellow-500 text-white p-6 my-5 rounded-sm">
        <div className="font-bold">Share Link to Your Online Salon</div>
        <div className="text-xs w-11/12 my-1 font-normal">
          Attracts more clients and get online bookings by sharing your online
          links
        </div>
        <div className="capitalize flex gap-4  mt-4 text-sm font-semibold">
          <button className="px-3 capitalize py-0.5 hover:bg-yellow-600 bg-yellow-500 rounded-md border">
            share
          </button>
          <button className="px-3 capitalize py-0.5 hover:bg-yellow-600 bg-yellow-500  rounded-md border">
            copy link
          </button>
        </div>
      </div>
      <div className="bg-gray-800  text-white p-4 rounded-md my-1">
        <div className="flex gap-2 ">
          <div>
            <GiSevenPointedStar className="bg-white  text-gray-800 rounded-full p-1.5 w-8 h-8" />
          </div>
          <div>
            <div className="font-semibold flex gap-5 items-center ">
              <div> You have 5 new appoitments </div>{" "}
              <div>
                {" "}
                <IoIosArrowForward />
              </div>
            </div>
            <div className="capitalize text-[11px] cursor-pointer w-fit underline font-semibold ">
              visit now
            </div>
          </div>
        </div>
      </div>
      <div className="font-bold text-gray-700 capitalize my-4 ">
        today's bookings
      </div>
      <BookingDatas Status="accepted" bookingData={bookingData} />
    </div>
  );
}

export default RightDashboardSection;