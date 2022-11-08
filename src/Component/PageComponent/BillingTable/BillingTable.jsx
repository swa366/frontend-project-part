import React from "react";
import Table from "../../UI/Table/Table";
const Thead = [
  { title: "s.nO", with: "20%" },
  { title: "name", with: "20%" },
  { title: "unit", with: "20%" },
  { title: "quantity", with: "20%" },
  { title: "price", with: "20%" },
];
const Tbody = [
  { name: "apple", unit: "1", quantity: "1", price: "15" },
  { name: "banana", unit: "2", quantity: "2", price: "10" },
  { name: "strawberry", unit: "3", quantity: "1", price: "5" },
  { name: "pineapple", unit: "4", quantity: "2", price: "20" },
  { name: "pineapple", unit: "4", quantity: "2", price: "20" },
  { name: "pineapple", unit: "4", quantity: "2", price: "20" },
  { name: "pineapple", unit: "4", quantity: "2", price: "20" },
  { name: "pineapple", unit: "4", quantity: "2", price: "20" },
  { name: "pineapple", unit: "4", quantity: "2", price: "20" },
  { name: "pineapple", unit: "4", quantity: "2", price: "20" },
  { name: "pineapple", unit: "4", quantity: "2", price: "20" },
];
const TotalPrice = () => {
  let price = 0;

  Tbody.map((val, i) => {
    price += Number(val.price);
  });
  return price;
};
function BillingTable() {
  return (
    <div>
      {Tbody.length > 0 ? (
        <div className="mt-6 mb-3">
          <Table Head={Thead} height="billing">
            {Tbody.map((val, i) => {
              return (
                <tr key={i}>
                  <td align="center">
                    <div className="border-b p-2.5 border-gray-300">
                      {i + 1}
                    </div>
                  </td>
                  <td align="center">
                    <div className="border-b p-2.5 capitalize border-gray-300">
                      {val.name}
                    </div>
                  </td>
                  <td align="center">
                    <div className="border-b p-2.5 border-gray-300">
                      {val.unit}
                    </div>
                  </td>
                  <td align="center">
                    <div className="border-b p-2.5 border-gray-300">
                      {val.quantity}
                    </div>
                  </td>
                  <td align="center">
                    <div className="border-b p-2.5 border-gray-300">
                      {val.price}
                    </div>
                  </td>
                </tr>
              );
            })}
          </Table>
        </div>
      ) : (
        <div className="">
          <Table Head={Thead}></Table>
          <div className="text-2xl flex   justify-center items-center  h-96">
            No table data available yet!
          </div>
        </div>
      )}
      <div className="capitalize font-semibold text-lg laptop:px-9  border-b w-11/12 laptop:w-full flex  items-center  py-1 justify-end  ">
        <div className="text-gray-700">total price= </div>
        <div className="text-gray-800"> rs{TotalPrice()}</div>
      </div>
      <form className="laptop:flex  mt-7 justify-center ">
        <div className="capitalize   w-11/12 laptop:w-full laptop:mr-4 flex justify-end  my-2">
          <div className="w-fit   flex  items-center gap-1.5">
            <div className="text-gray-500 font-semibold ">discount price= </div>
            <input
              type="text"
              placeholder="Discount Amount"
              className="border bg-sky-50 my-0.5 w-48  px-2 py-0.5"
            />
          </div>
        </div>

        <div className="capitalize  w-11/12 laptop:w-full laptop:ml-4 flex justify-end my-2 ">
          <div className="w-fit  flex items-center gap-1.5">
            <div className="text-gray-500 font-semibold ">VAT = </div>
            <div className="text-gray-700">
              <input
                type="text"
                placeholder="VAT Amount"
                className="border bg-sky-50 my-0.5  px-2 py-0.5 w-48"
              />
            </div>
          </div>
        </div>
      </form>
      <div className="capitalize font-semibold   flex justify-end w-11/12 my-5 ">
        <div className="border-b w-fit  flex gap-1.5">
          <div className="text-gray-500">total amount = </div>
          <div className="text-gray-700"> rs.60</div>
        </div>
      </div>
      <div className="flex justify-end  w-11/12">
        <button className="bg-green-600 text-white  font-bold capitalize px-5 py-2 rounded-md hover:bg-opacity-70 ">
          proceed to pay
        </button>
      </div>
    </div>
  );
}

export default BillingTable;