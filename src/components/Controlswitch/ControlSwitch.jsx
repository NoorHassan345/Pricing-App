import React, { useState } from "react";
import "../Controlswitch/ControlSwitch.scss";

function ControlSwitch(props) {
  const [mouseEnter, setMouseEnter] = useState(false);
  const handleMouseEnter = () => {
    setMouseEnter(true);
  };
  const handleMouseLeave = () => {
    setMouseEnter(false);
  };

  return (
    <>
      <label
        className="toggle-switch"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <input
          type="checkbox"
          checked={props.Toggle}
          onChange={() => props.handleOnToggle()}
        />
        <span
          className={`switch ${
            mouseEnter ? "switchOnMouse" : "switchOnMouseLeave"
          } `}
        />
      </label>
    </>
  );
}
export default ControlSwitch;
