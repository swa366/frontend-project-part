import React from "react";

function Table({ Head, children, height }) {
  return (
    <div
      className={`w-full ${
        height === "billing"
          ? "h-64 "
          : height === "no data in form"
          ? "h-20"
          : "h-[170px]"
      } overflow-y-auto scroll`}
    >
      <table
        className=" w-11/12 laptop:w-full "
        cellPadding={0}
        cellSpacing={0}
      >
        <thead className="w-full ">
          <tr className="bg-gray-500 laptop:w-full ">
            {Head.map((val, i) => {
              return (
                <td
                  key={i}
                  // width={val.width}
                  className="capitalize text-white p-2 text-center  font-semibold"
                >
                  {val.title}
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody className=" ">{children}</tbody>
      </table>
    </div>
  );
}

export default Table;
