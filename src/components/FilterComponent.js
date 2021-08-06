import React from "react";
import '../App.css';


const FilterComponent = ({ onChange }) => {
    return (
      <div className="filterContainer">
        <select className="regionSelector" onChange={onChange}>
          <option value="">Filter by Language</option>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="ar">Arabic</option>
          <option value="zh">Chinese</option>
        </select>
      </div>
    );
  };
  
  export default FilterComponent;