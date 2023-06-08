import React from "react";
import "./Searchbox.css";

const Searchbox = ({ onSearchChange }) => {
  return (
    <div>
      <p className="f3 white">Schedule your grooming, on demand.</p>
      <div className="center">
        <div className="form pa4 br3 shadow-5 center">
        <input onChange={onSearchChange} className="f4 pa2 w-70 center" type="search" placeholder="search services" />
        </div>
      </div>


    </div>
  );
}

export default Searchbox;