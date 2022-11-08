import React from "react";
import { useParams } from "react-router-dom";
function Products() {
  const { id } = useParams();
  console.log("iddddd", id);
  return <div> {id}</div>;
}

export default Products;