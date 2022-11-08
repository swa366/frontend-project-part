import React,{useEffect,useState} from "react";
import { Link, useNavigate } from "react-router-dom";

function PageNotFound() {
    const[show,setShow]=useState(false)
    useEffect(() => {
      navigate('/404Error')
    }, [show])
    
  const navigate = useNavigate();
  return <div onClick={()=>setShow(true)} className="text-4xl  text-gray-500  font-semibold flex justify-center items-center h-148">No Page Found. Go Back To Main page...</div>;
}

export default PageNotFound;