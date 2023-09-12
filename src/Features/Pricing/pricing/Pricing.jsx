import React, { useState, useEffect } from "react";
import { AnnualData, MonthData } from "../Var";
import "../pricing/Pricing.scss";
import PricingLists from "../Pricing-Lists/PricingLists";
import ControlSwitch from "../Control-Switch/ControlSwitch";

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
      <div className=" container-fluid ">
        <div className="row ">
          <div className=" col-sm-11  centered-div Pricing-Main background-image m-auto ">
            <h4 className=" text-center ourPricing">Our Pricing </h4>
            <div className="  annualMonth d-flex justify-content-center align-items-center ">
              {" "}
              <div className="  mr-3">Annualy</div>{" "}
              <ControlSwitch handleOnToggle={handleOnToggle} Toggle={Toggle} />{" "}
              <div className=" ml-3">Monthly</div>{" "}
            </div>
            <div className="row justify-content-center map">
              {arrayToMap.map((items, index) => (
                <PricingLists key={index} items={items} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Pricing;
