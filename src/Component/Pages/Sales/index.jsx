import React, { useState, useEffect } from "react";
// import image from "../../../Resources/images/profile.jpg";
import { MdDelete, MdEdit } from "react-icons/md";
import Table from "../../../Component/UI/Table/Table";
import axios from "../../../Hoc/Axios/CreateAxios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ViewSales({ showCategory, searchText }) {
  const [Tbody, setTbody] = useState([]);
  const getSales = () => {
    axios
      .get("sales")
      .then((res) => {
        console.log(res);
        setTbody(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getSales();
  }, []);

  const tHead = [
    { title: "s.nO", width: "10%" },
    { title: "invoice no", width: "10%" },
    { title: "customer name", width: "20%" },
    { title: "contact no", width: "20%" },
    { title: "address", width: "20%" },
    { title: "orders", width: "20%" },
   
  ];
  const DeleteItems = (id) => {
    axios
      .delete(`sales/${id}`)
      .then((res) => {
        if (res.status === 200) {
          getSales(id);
          console.log(res);
          toast.error(
            res ? res?.data?.message : "sales has been deleted sucessfully"
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
        option["sales_name"]
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
              <td className="border-b p-2 text-center border-l"> {"INVC-##"+ i}</td>
              <td className="border-b p-2 text-center">{
                val.Customerinfo[0].customer_name
              }</td>
               <td className="border-b p-2 text-center">{
                val.Customerinfo[0].phone_no
              }</td>
               <td className="border-b p-2 text-center">{
                val.Customerinfo[0].address
              }</td>
             <td className="border-b p-2 text-center">
                <ol>
                {
                    
                   val.OrderList?.map((val,i)=>{
                    return <li key={i}>
                        {val.product_name} ({val.quantity}) (Rs. {val.price})
                    </li>
                   })
                   
              } 
              </ol>
              </td>
            
            </tr>
          );
        })}
      </Table>
      <ToastContainer />
    </div>
  );
}

export default ViewSales;