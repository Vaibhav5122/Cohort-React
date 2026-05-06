import React from "react";
import Cards from "./Cards";

const Header = () => {
  return (
    <div>
      <div className="flex justify-center align-middle items-center mt-10 text-white flex-col">
        <h1 className="text-2xl  ">Youtube Video</h1>
        <Cards />
      </div>
    </div>
  );
};

export default Header;
