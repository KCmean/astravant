import React, { useState, useEffect } from "react";
import logo from "../assets/image-2-2.png";

const Navbar = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [show, setShow] = useState(true);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {show && (
        <nav className="fixed top-0 left-0 w-full bg-transparent text-white flex justify-between items-center p-4 pl-8 pr-8 z-10">
          <a href="/">
            <img src={logo} alt="Logo" className="h-20 " />
          </a>

          <div className="flex items-center space-x-4">
            <div className="flex space-x-4">
              <a href="/" className="hover:underline">
                About us
              </a>
              <a href="/contact" className="hover:underline">
                Our services
              </a>
              <a href="/search" className="hover:underline">
                Search by area
              </a>
              <a href="/contactus" className="hover:underline">
                Contact Us
              </a>
            </div>
            <button
              onClick={toggleSideNav}
              className="px-4 rounded-md"
              style={{
                marginLeft: "auto",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <svg
                className="w-9 h-9"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
      )}
      {!show && (
        <div className="fixed top-0 left-0 w-full bg-transparent text-white flex flex-row-reverse p-4 pl-8 pr-8 z-10 ">
          <button
            onClick={toggleSideNav}
            className="flex transition duration-500 flex-row bg-transparent"
          >
            <svg
              className="w-9 h-9"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      )}
      {isSideNavOpen && (
        <div
          className=" bg-gray-300 opacity-80 "
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "250px",
            height: "100%",
            boxShadow: "-2px 0 5px rgba(0, 0, 0, 0.5)",
            zIndex: 50,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <button
            onClick={toggleSideNav}
            style={{
              padding: "16px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              alignSelf: "flex-end",
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <div style={{ padding: "16px", width: "100%" }}>
            <a
              href="/"
              style={{
                display: "block",
                padding: "8px 16px",
                textDecoration: "none",
                color: "#000",
              }}
              className="hover:bg-gray-200"
            >
              Home
            </a>
            <hr className="my-2 border-indigo-600 border-b-2" />
            <a
              href="#"
              style={{
                display: "block",
                padding: "8px 16px",
                textDecoration: "none",
                color: "#000",
              }}
              className="hover:bg-gray-200"
            >
              Our services
            </a>
            <hr className="my-2 border-indigo-600 border-b-2" />
            <a
              href="/search"
              style={{
                display: "block",
                padding: "8px 16px",
                textDecoration: "none",
                color: "#000",
              }}
              className="hover:bg-gray-200"
            >
              Search for properties
            </a>
            <hr className="my-2 border-indigo-600 border-b-2" />
            <a
              href="/propertypage"
              style={{
                display: "block",
                padding: "8px 16px",
                textDecoration: "none",
                color: "#000",
              }}
              className="hover:bg-gray-200"
            >
              Want to get your property listed?
            </a>
            <hr className="my-2 border-indigo-600 border-b-2" />
            <a
              href="#"
              style={{
                display: "block",
                padding: "8px 16px",
                textDecoration: "none",
                color: "#000",
              }}
              className="hover:bg-gray-200"
            >
              Rental Properties
            </a>
            <hr className="my-2 border-indigo-600 border-b-2" />
            <a
              href="/contactus"
              style={{
                display: "block",
                padding: "8px 16px",
                textDecoration: "none",
                color: "#000",
              }}
              className="hover:bg-gray-200"
            >
              Contact Us
            </a>
            <hr className="my-2 border-indigo-600 border-b-2" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
