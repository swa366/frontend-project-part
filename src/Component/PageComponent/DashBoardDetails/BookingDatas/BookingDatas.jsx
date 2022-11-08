import React from "react";
import { IoIosArrowForward } from "react-icons/io";
function BookingDatas({ bookingData, Status }) {
  return (
    <div>
      <div className="my-3  ">
        {bookingData.map((val, i) => {
          return (
            <div className="bg-white rounded-md  my-4  px-5 py-2">
              <div className="flex justify-between">
                <div className="  text-yellow-500 font-bold text-lg">
                  #{val.booking_number}
                </div>

                <div className=" font-bold capitalize text-sm text-gray-800  my-1">
                  Rs.{val.price}
                </div>
              </div>
              <div className="font-bold capitalize text-xs text-gray-400  my-1">
                {val.no_services} Services
              </div>
              <div className="font-medium capitalize text-xs text-gray-400  my-1">
                {val.date}
              </div>
              <div className="  border-b border-gray-200 my-2.5 "></div>
              <div className="flex justify-between">
                <div className="font-medium capitalize flex gap-1.5 items-center text-xs text-gray-500  my-1">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      val.status === "pending"
                        ? "bg-orange-400"
                        : val.status === "accepted"
                        ? "bg-green-400"
                        : val.status === "rejected"
                        ? "bg-red-600"
                        : "bg-gray-400"
                    }`}
                  ></div>
                  <div>{val.status}</div>
                </div>
                <div className="border hover:border-gray-100  hvr-sweep-to-right font-medium capitalize text-xs text-gray-900  my-1">
                  <button className=" flex gap-2 items-center px-2 capitalize     hover:text-white  py-1.5">
                    view details
                    <IoIosArrowForward />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BookingDatas;