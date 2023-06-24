import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/cafaLogo.png";

function NavBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const sliderRef = useRef(null);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleClickOutside = (event) => {
    if (
      sidebarOpen &&
      sliderRef.current &&
      !sliderRef.current.contains(event.target)
    ) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleItemClick = (item) => {
    setActiveItem(activeItem === item ? null : item);
  };

  return (
    <nav className="flex items-center justify-between p-10 bg-slate-300 font-bold text-slate-900">
      <div className="flex items-center">
        <a href="/">
          <img
            src={logo}
            alt="Logo"
            className="w-20 h-30 mr-1"
          />
        </a>
        <div className="flex flex-col">
          <div className="font-bold text-5xl text-red-700">
            <a href="/">TUP</a>
          </div>
          <div className="ml-1 text-4xl text-red-700">
            <a href="/">CAFA</a>
          </div>
        </div>
        <NavLink
          to="/menu"
          className="ml-10 text-2xl hover:text-red-700">
          About CAFA
        </NavLink>
        <NavLink
          to="/news"
          className="ml-10 text-2xl hover:text-red-700">
          News
        </NavLink>
      </div>
      <div
        className={`ml-auto flex items-center relative ${
          sidebarOpen ? "opacity-70" : ""
        }`}>
        {/* Search bar */}
        {!sidebarOpen && (
          <input
            type="text"
            placeholder="Search"
            className={`px-4 py-3 mr-1 bg-gray-300 text-white rounded-full border border-black transition-opacity duration-300 ${
              sidebarOpen ? "opacity-0" : "opacity-100"
            }`}
            style={{ position: "absolute", right: "-100px" }}
          />
        )}
        {/* Hamburger menu */}
        {sidebarOpen ? null : (
          <button
            className={`flex items-center cursor-pointer bg-gray-400 rounded p-3 transition-opacity duration-300 ${
              sidebarOpen ? "opacity-0" : "opacity-100"
            }`}
            style={{ position: "absolute", right: "-180px" }} // Add this line to move the button to the right
            onClick={handleSidebarToggle}>
            <svg
              fill="black"
              viewBox="0 0 100 80"
              width="40"
              height="40">
              <rect
                width="100"
                height="10"></rect>
              <rect
                y="30"
                width="100"
                height="10"></rect>
              <rect
                y="60"
                width="100"
                height="10"></rect>
            </svg>
          </button>
        )}
      </div>
      {/* Slider */}
      <div
        ref={sliderRef}
        className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-10`}>
        <div className="p-4 flex justify-between items-center bg-red-700">
          <h3 className="text-xl font-semibold text-white mb-0">Menu</h3>
          <button
            className="text-gray-600 hover:text-gray-800 focus:outline-none bg-gray-300 rounded-full p-2"
            onClick={handleSidebarToggle}>
            <svg
              className={`w-6 h-6 ${sidebarOpen ? "transform rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="container">
          <div className="overflow-y-auto max-h-screen">
            <div>
              <button
                onClick={() => handleItemClick(1)}
                className="mb-1 text-lg flex items-center justify-between w-full focus:outline-none">
                <span>ABOUT</span>
                <span
                  className={`mb-1 ml-2 w-4 h-4 border border-gray-500 rounded-full transition-transform ${
                    activeItem === 1 ? "transform rotate-180" : ""
                  }`}></span>
              </button>
              {activeItem === 1 && (
                <div className="pl-4 mt-2 border-l-4 border-gray-300">
                  <ul>
                    <li>Subitem 1</li>
                    <li>Subitem 2</li>
                    <li>Subitem 3</li>
                  </ul>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => handleItemClick(2)}
                className="mb-1 text-lg flex items-center justify-between w-full focus:outline-none">
                <span>NEWS</span>
                <span
                  className={`mb-1 ml-2 w-4 h-4 border border-gray-500 rounded-full transition-transform ${
                    activeItem === 2 ? "transform rotate-180" : ""
                  }`}></span>
              </button>
              {activeItem === 2 && (
                <div className="pl-4 mt-2 border-l-4 border-gray-300">
                  <ul>
                    <li>Subitem 1</li>
                    <li>Subitem 2</li>
                    <li>Subitem 3</li>
                  </ul>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => handleItemClick(3)}
                className="mb-1 text-lg flex items-center justify-between w-full focus:outline-none">
                <span>FACULTY & STAFF</span>
                <span
                  className={`mb-1 text-lg ml-2 w-4 h-4 border border-gray-500 rounded-full transition-transform ${
                    activeItem === 3 ? "transform rotate-180" : ""
                  }`}></span>
              </button>
              {activeItem === 3 && (
                <div className="pl-4 mt-2 border-l-4 border-gray-300">
                  <ul>
                    <li>Subitem 1</li>
                    <li>Subitem 2</li>
                    <li>Subitem 3</li>
                  </ul>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => handleItemClick(4)}
                className="mb-1 text-lg flex items-center justify-between w-full focus:outline-none">
                <span>ORGANIZATION</span>
                <span
                  className={`mb-1 ml-2 w-4 h-4 border border-gray-500 rounded-full transition-transform ${
                    activeItem === 4 ? "transform rotate-180" : ""
                  }`}></span>
              </button>
              {activeItem === 4 && (
                <div className="pl-4 mt-2 border-l-4 border-gray-300">
                  <ul>
                    <li>Subitem 1</li>
                    <li>Subitem 2</li>
                    <li>Subitem 3</li>
                  </ul>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => handleItemClick(5)}
                className="mb-1 text-lg flex items-center justify-between w-full focus:outline-none">
                <span>PROGRAMS</span>
                <span
                  className={`mb-1 ml-2 w-4 h-4 border border-gray-500 rounded-full transition-transform ${
                    activeItem === 5 ? "transform rotate-180" : ""
                  }`}></span>
              </button>
              {activeItem === 5 && (
                <div className="pl-4 mt-2 border-l-4 border-gray-300">
                  <ul>
                    <li>Subitem 1</li>
                    <li>Subitem 2</li>
                    <li>Subitem 3</li>
                  </ul>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => handleItemClick(6)}
                className="mb-1 text-lg flex items-center justify-between w-full focus:outline-none">
                <span>ACTIVITIES</span>
                <span
                  className={`mb-1 ml-2 w-4 h-4 border border-gray-500 rounded-full transition-transform ${
                    activeItem === 6 ? "transform rotate-180" : ""
                  }`}></span>
              </button>
              {activeItem === 6 && (
                <div className="pl-4 mt-2 border-l-4 border-gray-300">
                  <ul>
                    <li>Subitem 1</li>
                    <li>Subitem 2</li>
                    <li>Subitem 3</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={`ml-64 ${sidebarOpen ? "opacity-50" : ""}`}>
        {/* Main content */}
        {/* Add your main content here */}
      </div>
    </nav>
  );
}

export default NavBar;
