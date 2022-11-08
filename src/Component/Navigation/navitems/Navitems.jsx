import { NavData } from "../NavData";
import React from "react";
import Navitem from "../navitem/Navitem";

function Navitems() {
  return (
    <div>
      <div className="">
        {NavData.map((val, i) => {
          return <Navitem key={i} title={val.title} path={val.path} icon={val.icon}/>;
        })}
      </div>
    </div>
  );
}

export default Navitems;