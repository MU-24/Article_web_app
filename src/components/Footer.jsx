import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-700 p-6 ">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      
       
       
      </div>

      <div className="text-center mt-6 flex justify-between">
        <div className=" ml-4">
          {" "}
          <div className=" lg:text-2xl font-bold text-xl md:text-xl cursor-pointer text-gray-800">
            <span className="text-orange-600">UK</span> Articles
          </div>
        </div>
        <div className=" mr-4">
          <p>All Rights Reserved - Muhammad Umair 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
