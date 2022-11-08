import {useLocation,NavLink} from  "react-router-dom"
import React from "react";
function Navitem({path,title,icon}){
   const router = useLocation();
   console.log("router",router);
   console.log(path)
   return(
     <NavLink
       to={path}
       className={` ${router.pathname===path ? "bg-white text-black " : " hover:bg-white text-white hover:text-black "}
       mx-5 my-4 font-semibold   cursor-pointer rounded-md  flex gap-2  items-center px-5 py-2`
           }
       >
          <div>{icon}</div> 
          <div>{title}</div>
       </NavLink>   
   );
}

export default Navitem;