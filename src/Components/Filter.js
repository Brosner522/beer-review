import React from "react";

const Filter = (props) => {
  return (
    <div className="button-container">
      <div>
        <button onClick={() => props.handleOrganic()}>Toggle Organic</button>
        <button onClick={() => props.sortBeers()}> Sort by rating</button>
      </div>
    </div>
  );
};

export default Filter;
