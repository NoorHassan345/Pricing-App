import React, { useState } from "react";
import "../PricingLists/PricingLists.scss";

function PricingLists(props) {
  const [onMouseColor, setonMouseColor] = useState(false);
  const backgroundColor = props.index === 1 ? "bgIndex1" : "bgAll";
  const buttonColor = props.index === 1 ? "buttonIndex1" : "buttonAll";
  const buttonColorOnMouse =
    props.index === 1 ? "buttonOnMouseIndex1" : "buttonOnMouseAll";
  const borderBottom = props.index === 1 ? "borderIndex1" : "borderAll";
  const margin = props.index === 1 ? "marginIndex1" : "marginAll";

  const handleMouseEnter = () => {
    setonMouseColor(true);
    console.log(true);
  };
  const handleMouseLeave = () => {
    setonMouseColor(false);
  };

  return (
    <div className={`  PricingLists ${margin} `}>
      <div className={` PricingLists-Main ${backgroundColor}  `}>
        <p> {props.items.name} </p>
        <h1 className={` font-price  ${borderBottom}`}>
          {" "}
          <span className="price"> $ </span> {props.items.price}{" "}
        </h1>
        <p className={`pading-botom  ${borderBottom}`}>
          {" "}
          {props.items.storage} Storage{" "}
        </p>
        <p className={`pading-botom  ${borderBottom}`}>
          {" "}
          {props.items.users} Users Allowed{" "}
        </p>
        <p className={`pading-botom  ${borderBottom}`}>
          {" "}
          Send up to {props.items.send}{" "}
        </p>

        <button
          className={` font-btn buton ${
            onMouseColor ? buttonColorOnMouse : buttonColor
          } `}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {" "}
          LEARN MORE{" "}
        </button>
      </div>
    </div>
  );
}
export default PricingLists;
