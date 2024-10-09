import React from "react";

const Navbar = () => {
  return (
    <>
         <nav className="bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-white text-2xl font-bold">Vishal Chauhan</a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="/home" className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium">Home</a>
         
          
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
