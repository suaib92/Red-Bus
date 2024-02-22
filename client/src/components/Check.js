import React, { useState } from "react";

const CustomCheckbox = ({ id, checked, 

    onChange }) => {
    const handleClick = () => {
      onChange(!checked);
    };
  
    return (
      <div className={`custom-checkbox ${checked ? "checked" : ""}`} onClick={handleClick}>
        {/* Render the rectangle shape */}
        <div className="rectangle border border-gray-500"></div>
      </div>
    );
  };
  
  export default CustomCheckbox;
  