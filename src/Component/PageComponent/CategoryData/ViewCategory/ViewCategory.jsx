import React, { useState, useEffect } from "react";
import image from "../../../Resources/images/profile.jpg";
import { MdDelete, MdEdit } from "react-icons/md";
import Table from "../../../UI/Table/Table";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ViewCategory({ showCategory, searchText }) {
  const [Tbody, setTbody] = useState([]);
  const getCategory = () => {
    axios
      .get("/category")
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

  const tHead = [
    { title: "s.nO", width: "10%" },
    { title: "name", width: "20%" },
    { title: "image", width: "20%" },
    { title: "action", width: "30%" },
  ];
  const DeleteItems = (id) => {
    axios
      .delete(`category/${id}`)
      .then((res) => {
        if (res.status === 200) {
          getCategory(id);
          console.log(res);
          toast.error(
            res ? res?.data?.message : "Category has been deleted sucessfully"
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Filter = (array) => {
    console.log(searchText);
    return array.filter(
      (option) =>
        option["category_name"]
          .toLowerCase()
          .indexOf(searchText.toLowerCase()) > -1
    );
  };

  return (
    <div className=" p-6">
      <Table celspacing={0} cellPadding={0} Head={tHead}>
        {Tbody.map((val, i) => {
          return (
            <tr key={i} className=" w-full">
              <td className="border-b p-2 text-center border-l"> {i + 1}</td>
              <td className="border-b p-2 text-center">{val.category_name}</td>
              <td className="border-b p-2 ">
                <div className="flex justify-center ">
                  <img
                    src={val.image}
                    alt="loading ..."
                    height="40px"
                    width="40px"
                    className="rounded-full w-16 h-16"
                  />
                </div>
              </td>
              <td className="border-b p-2 text-center border-r">
                <div className="flex gap-3 items-center justify-center text-white font-semibold ">
                  <div>
                    <MdEdit className="text-blue-400 text-2xl hover:scale-110 cursor-pointer" />
                  </div>
                  <div>
                    {/* <button
                    > */}
                    <MdDelete
                      className="text-red-400 text-2xl hover:scale-110 cursor-pointer"
                      onClick={() => DeleteItems(val._id)}
                    />
                    {/* </button> */}
                  </div>
                </div>
              </td>
            </tr>
          );
        })}
      </Table>
      <ToastContainer />
    </div>
  );
}

export default ViewCategory;