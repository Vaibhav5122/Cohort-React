import React from "react";

const Header = () => {
  return (
    <div className="flex gap-4 bg-gray-800 align-middle justify-center text-center items-center text-xl pt-4 pb-4">
      <div id="logo" className="flex gap-2 items-center">
        <img
          className="h-10 flex"
          src="https://cdn-icons-png.freepik.com/256/2959/2959150.png?semt=ais_white_label"
          alt="laugh"
        />
        <h2 className="text-orange-400 text-xl hover:text-orange-500">
          Daily Chuckle
        </h2>
      </div>
      <h3 className="hover:text-gray-300">Random Joke</h3>
      <h3 className="hover:text-gray-300">Categories</h3>
      <h3 className="hover:text-gray-300">Submit a Joke</h3>
    </div>
  );
};

export default Header;
