import React, { useState, useEffect } from "react";
import { AnnualData, MonthData } from "../../Var";
import "../Pricing/Pricing.scss"
import PricingLists from "../PricingLists/PricingLists";
import ControlSwitch from "../Controlswitch/ControlSwitch";

function Pricing() {
  const [Toggle, setToggle] = useState(false);
  const handleOnToggle = () => setToggle(!Toggle);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "ArrowLeft") {
        setToggle(false);
      } else if (event.key === "ArrowRight") {
        setToggle(true);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const arrayToMap = Toggle ? MonthData : AnnualData;

  return (
    <>
      
          <div className=" Pricing-Main">
            <h4 className="ourPricing">Our Pricing </h4>
            <div className="  AnnualMonth">
              {" "}
              <div className="Annual">Annualy</div>{" "}
              <ControlSwitch handleOnToggle={handleOnToggle} Toggle={Toggle} />{" "}
              <div className="Month">Monthly</div>{" "}
            </div>
            <div className=" map">
              {arrayToMap.map((items, index) => (
                <PricingLists key={index} items={items} index={index} />
              ))}
            </div>
          </div>
        
    </>
  );
}
export default Pricing;