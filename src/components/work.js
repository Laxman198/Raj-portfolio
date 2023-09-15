import React from "react";
import "./work.css";
import {AccData} from "./workdata";
import AccCard from "./workcard";
import Separator from "./seperator";
function Acc() {
  const data = AccData;
  return (
    <div className="work">
      <div><h1 className="htitle">Accomplishments</h1></div>
      <div className="work-list">
        {data.map((item) => {
          return <AccCard item={item} />;
        })}
      </div>
    </div>
  );  
}

export default Acc;
