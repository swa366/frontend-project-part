import React, { useState } from "react";
import Table from "../../../UI/Table/Table";
import image from "../../../../Resources/images/images.jpg";
import { MdDelete, MdEdit } from "react-icons/md";
function ViewService() {
  const [Tbody, setTbody] = useState([
    { product_name: "hair shampoo", quantity: "1", price: "560", image: image },
    { product_name: "hair shampoo", quantity: "12", price: "30", image: image },
    { product_name: "hair shampoo", quantity: "2", price: "1", image: image },
    {
      product_name: "hair shampoo",
      quantity: "5",
      price: "6000 ",
      image: image,
    },
  ]);
  const tHead = [
    { title: "s.nO", width: "10%" },
    { title: "name", width: "20%" },
    { title: "image", width: "20%" },
    { title: "quantity", width: "10%" },
    { title: "price(Rs)", width: "10%" },
    { title: "action", width: "30%" },
  ];
  const DeleteItems = (id) => {
    console.log(id);
  };

  return (
    <div className=" p-6">
      <Table celspacing={0} cellPadding={0} Head={tHead}>
        {Tbody.map((val, i) => {
          return (
            <tr key={i} className=" w-full">
              <td className="border-b p-2 text-center"> {i + 1}</td>
              <td className="border-b p-2 text-center">{val.product_name}</td>
              <td className="border-b p-2 ">
                <div className="flex justify-center ">
                  <img
                    src={val.image}
                    alt="loading ..."
                    height="50px"
                    width="50px"
                    className="rounded-full"
                  />
                </div>
              </td>
              <td className="border-b p-2 text-center">{val.quantity}</td>
              <td className="border-b p-2 text-center">
                <div className="">{val.price} </div>
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

export default ViewService;