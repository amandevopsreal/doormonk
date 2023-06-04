import React from "react";


const Searchbox = ({onSearchChange}) => {
  return (
    <div className="pa2">
    <input onChange={onSearchChange} className="pa3 ba b--black bg-white" type="search" placeholder="search services"/>
    </div>
  );
}

export default Searchbox;