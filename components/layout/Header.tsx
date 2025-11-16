import React from "react";

const Header = () => {
  return (
    <header className="w-full px-6 py-4 flex flex-col gap-4 bg-white shadow-md">

      {/* Top Row */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">StayFinder</h1>

        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="border p-2 rounded-md w-64"
          />
          <button className="text-gray-700">Sign In</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Sign Up
          </button>
        </div>
      </div>

      {/* Nav Categories */}
      <nav className="flex gap-6 text-gray-600 font-medium">
        <button>Rooms</button>
        <button>Mansion</button>
        <button>Countryside</button>
        <button>Beach</button>
        <button>Forest</button>
        <button>Modern</button>
      </nav>
    </header>
  );
};

export default Header;
