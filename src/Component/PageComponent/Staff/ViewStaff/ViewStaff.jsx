import React, { useState,useEffect } from "react";
// import image from "../../../Resources/images/japan.jpg";
import { MdDelete, MdEdit } from "react-icons/md";
import Table from "../../../UI/Table/Table";
import axios from "../../../../Hoc/Axios/CreateAxios";

function ViewStaff({ showProduct }) {
  const [Tbody, setTbody] = useState([
   
  ]);
  const tHead = [
    { title: "s.nO", width: "10%" },
    { title: "staff Name", width: "20%" },
    { title: "staff Image", width: "20%" },
    { title: "address", width: "10%" },
    { title: "contact Number", width: "10%" },
    { title: " salary", width: "10%" },
    { title: "email", width: "10%" },
    { title: "action", width: "30%" },
  ];
  const DeleteItems = (id) => {
    console.log(id);
  };

  const getCategory = () => {
    axios
      .get("staff")
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

  return (
    <div className=" p-6">
      <Table celspacing={0} cellPadding={0} Head={tHead}>
        {Tbody.map((val, i) => {
          return (
            <tr key={i} className=" w-full font-medium text-gray-700">
              <td className="border-b p-2 text-center"> {i + 1}</td>
              <td className="border-b p-2 text-center capitalize  ">
                {val.staff_name}
              </td>
              <td className="border-b p-2 ">
                <div className="flex justify-center ">
                  <img
                    src={val.employee_img}
                    alt="loading ..."
                    height="50px"
                    width="50px"
                    className="rounded-full w-16 h-16"
                  />
                </div>
              </td>
              <td className="border-b p-2 text-center capitalize">
                {val.address}
              </td>
              <td className="border-b p-2 text-center capitalize">
                {val.phone_no}
              </td>
              <td className="border-b p-2 text-center ">Rs. {val.salary}</td>
              <td className="border-b p-2 ">
                <div className="  ml-10 ">{val.email} </div>
              </td>
              <td className="border-b p-2 text-center">
                <div className="flex gap-3 items-center justify-center text-white font-semibold ">
                  <div>
                    <button className="bg-blue-400 px-2.5 py-1.5 rounded-md capitalize cursor-pointer hover:text-blue-400 hover:bg-gray-300 ">
                      <MdEdit className="w-7 h-7" />
                    </button>
                  </div>
                  <div>
                    <button
                      className="bg-primary bg-red-500 px-2.5 py-1.5 rounded-md capitalize hover:text-red-500 hover:bg-gray-300  cursor-pointer"
                      onClick={() => DeleteItems(i)}
                    >
                      <MdDelete className="w-7 h-7" />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          );
        })}
      </Table>
    </div>
  );
}

export default ViewStaff;