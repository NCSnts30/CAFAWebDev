import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/cafaLogo.png'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'

function NavBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeItem, setActiveItem] = useState(null)
  const sliderRef = useRef(null)

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const handleClickOutside = (event) => {
    if (
      sidebarOpen &&
      sliderRef.current &&
      !sliderRef.current.contains(event.target)
    ) {
      setSidebarOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleItemClick = (item) => {
    setActiveItem(activeItem === item ? null : item)
  }

  return (
    <nav className="flex items-center justify-between p-10 bg-slate-300 font-bold text-slate-900">
      <div className="flex items-center">
        <a href="/">
          <img src={logo} alt="Logo" className="w-20 h-30 mr-1" />
        </a>
        <div className="flex flex-col">
          <div className="font-bold text-5xl text-red-700">
            <a href="/">TUP</a>
          </div>
          <div className="ml-1 text-4xl text-red-700">
            <a href="/">CAFA</a>
          </div>
        </div>
        <NavLink to="/about" className="ml-10 text-xl hover:text-red-700">
          About CAFA
        </NavLink>
        <NavLink to="/news" className="ml-10 text-xl hover:text-red-700">
          News
        </NavLink>
        <NavLink to="/faculty" className="ml-10 text-xl hover:text-red-700">
          Faculty
        </NavLink>
        <NavLink
          to="/organization"
          className="ml-10 text-xl hover:text-red-700"
        >
          Organizations
        </NavLink>
      </div>
      <div
        className={`ml-auto flex items-center relative ${
          sidebarOpen ? 'opacity-70' : ''
        }`}
      >
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search"
          className={`px-4 py-3 mr-1 bg-gray-300 text-white rounded-full border border-black transition-opacity duration-300`}
          style={{ position: 'absolute', right: '-100px' }}
        />

        {/* Hamburger menu */}
        {sidebarOpen ? null : (
          <button
            className={`flex items-center cursor-pointer bg-gray-400 rounded p-3 transition-opacity duration-300`}
            style={{ position: 'absolute', right: '-180px' }}
            onClick={handleSidebarToggle}
          >
            <svg fill="black" viewBox="0 0 100 80" width="40" height="40">
              <rect width="100" height="10"></rect>
              <rect y="30" width="100" height="10"></rect>
              <rect y="60" width="100" height="10"></rect>
            </svg>
          </button>
        )}
      </div>
      {/* Slider */}
      <div
        ref={sliderRef}
        className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-lg transform ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 z-10`}
      >
        <div className="p-4 flex justify-between items-center bg-red-700">
          <h3 className="text-xl font-semibold text-white mb-0"></h3>
          <button
            className="text-gray-600 hover:text-gray-800 focus:outline-none bg-gray-300 rounded-full p-2"
            onClick={handleSidebarToggle}
          >
            <svg
              className={`w-6 h-6 ${sidebarOpen ? 'transform rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
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
                className="mb-5 text-base flex items-center justify-between w-full focus:outline-none"
              >
                <span>ABOUT</span>
                <svg
                  className={`w-4 h-4 ml-2 ${
                    activeItem === 1 ? 'transform rotate-180' : ''
                  }`}
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {activeItem === 1 && (
                <div className="mb-5 pl-4 mt-2 border-l-4 border-gray-300">
                  <ul>
                    <a href="/">
                      <li className="mb-4">Welcome to CAFA</li>
                    </a>
                  </ul>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => handleItemClick(2)}
                className="mb-5 text-base flex items-center justify-between w-full focus:outline-none"
              >
                <span>NEWS</span>
                <svg
                  className={`w-4 h-4 ml-2 ${
                    activeItem === 2 ? 'transform rotate-180' : ''
                  }`}
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {activeItem === 2 && (
                <div className="mb-5 pl-4 mt-2 border-l-4 border-gray-300">
                  <ul>
                    <a href="/news">
                      <li className="mb-4">Whats in it today?</li>
                    </a>
                  </ul>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => handleItemClick(3)}
                className="mb-5 text-base flex items-center justify-between w-full focus:outline-none"
              >
                <span>FACULTY & STAFF</span>
                <svg
                  className={`w-4 h-4 ml-2 ${
                    activeItem === 3 ? 'transform rotate-180' : ''
                  }`}
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {activeItem === 3 && (
                <div className="mb-5 pl-4 mt-2 border-l-4 border-gray-300">
                  <ul>
                    <li className="mb-4">
                      <ScrollLink
                        to="dean-section"
                        smooth={true}
                        duration={500}
                        style={{ cursor: 'pointer' }}
                        offset={-1000}
                      >
                        Office of the Dean
                      </ScrollLink>
                    </li>
                    <li className="mb-4">
                      <ScrollLink
                        to="college-section"
                        smooth={true}
                        duration={500}
                        style={{ cursor: 'pointer' }}
                      >
                        Dept. Officials
                      </ScrollLink>
                    </li>
                    <li className="mb-4">
                      <ScrollLink
                        to="faculty-section"
                        smooth={true}
                        duration={500}
                        style={{ cursor: 'pointer' }}
                      >
                        Faculty
                      </ScrollLink>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => handleItemClick(4)}
                className="mb-5 text-base flex items-center justify-between w-full focus:outline-none"
              >
                <span>ORGANIZATION</span>
                <svg
                  className={`w-4 h-4 ml-2 ${
                    activeItem === 4 ? 'transform rotate-180' : ''
                  }`}
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {activeItem === 4 && (
                <div className="mb-5 pl-4 mt-2 border-l-4 border-gray-300">
                  <ul>
                    <li className="mb-4">
                      <ScrollLink
                        to="asap-section"
                        smooth={true}
                        duration={500}
                        style={{ cursor: 'pointer' }}
                        offset={-1000}
                      >
                        ASAP
                      </ScrollLink>
                    </li>
                    <li className="mb-4">
                      <ScrollLink
                        to="threads-section"
                        smooth={true}
                        duration={500}
                        style={{ cursor: 'pointer' }}
                      >
                        THREADS
                      </ScrollLink>
                    </li>
                    <li className="mb-4">
                      <ScrollLink
                        to="uapsa-tup-section"
                        smooth={true}
                        duration={500}
                        style={{ cursor: 'pointer' }}
                      >
                        UAPSA - TUP
                      </ScrollLink>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => handleItemClick(5)}
                className="mb-5 text-base flex items-center justify-between w-full focus:outline-none"
              >
                <span>PROGRAMS</span>
                <svg
                  className={`w-4 h-4 ml-2 ${
                    activeItem === 5 ? 'transform rotate-180' : ''
                  }`}
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {activeItem === 5 && (
                <div className="mb-5 pl-4 mt-2 border-l-4 border-gray-300">
                  <ul>
                    <a href="/">
                      <li className="mb-4">Subitem 1</li>
                    </a>
                    <a href="/">
                      <li className="mb-4">Subitem 1</li>
                    </a>
                    <a href="/">
                      <li className="mb-4">Subitem 1</li>
                    </a>
                  </ul>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => handleItemClick(6)}
                className="mb-5 text-base flex items-center justify-between w-full focus:outline-none"
              >
                <span>ACTIVITIES</span>
                <svg
                  className={`w-4 h-4 ml-2 ${
                    activeItem === 6 ? 'transform rotate-180' : ''
                  }`}
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {activeItem === 6 && (
                <div
                  className="mb-5 pl-4 mt-2 border-l-4 border-gray-300"
                  style={{
                    maxHeight: activeItem === 6 ? '1000px' : '0',
                    transition: 'max-height duration-1000 ease',
                    overflow: 'hidden',
                  }}
                >
                  <ul>
                    <a href="/">
                      <li className="mb-4">Subitem 1</li>
                    </a>
                    <a href="/">
                      <li className="mb-4">Subitem 1</li>
                    </a>
                    <a href="/">
                      <li className="mb-4">Subitem 1</li>
                    </a>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={`ml-64 ${sidebarOpen ? 'opacity-50' : ''}`}></div>
    </nav>
  )
}

export default NavBar
