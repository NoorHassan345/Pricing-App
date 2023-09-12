import React, { useState } from "react";
import "../Pricing-Lists/Pricing-List.scss";

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
    <div className={` col-11 col-sm-10 col-lg-3 pr-0 pl-0 mb-3 ${margin}   `}>
      <div
        className={` text-center borderRadius pl-4 pr-4  ${backgroundColor}  `}
      >
        <p> {props.items.name} </p>
        <h1 className={`pb-3 font-price  ${borderBottom}`}>
          {" "}
          <span className="h3 font-weight-bold   "> $ </span>{" "}
          {props.items.price}{" "}
        </h1>
        <p className={`pb-3  ${borderBottom}`}>
          {" "}
          {props.items.storage} Storage{" "}
        </p>
        <p className={`pb-3  ${borderBottom}`}>
          {" "}
          {props.items.users} Users Allowed{" "}
        </p>
        <p className={`pb-3  ${borderBottom}`}>
          {" "}
          Send up to {props.items.send}{" "}
        </p>

        <button
          className={` p-2 font-btn buton ${
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
