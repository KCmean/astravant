import React from "react";
import Navbar from "../Components/Navbar";
import ConBanTwo from "../Components/ConBanTwo";
import Nsl from "../Components/Nsl";
import SearchByAddress from "../Components/SearchByAddress.jsx";
import ApartmentListing from "../Components/ApartmentListing.jsx";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import "../Pages/Search.css";
import Footer from "../Components/Footer.jsx";
import db from "../assets/db.json";
import { Link } from "react-router-dom";

const statuses = {
  Paid: "text-green-700 bg-green-50 ring-green-600/20",
  Withdraw: "text-gray-600 bg-gray-50 ring-gray-500/10",
  Overdue: "text-red-700 bg-red-50 ring-red-600/10",
};
const clients = [
  {
    id: 1,
    name: "Tuple",
    imageUrl: "https://tailwindui.com/img/logos/48x48/tuple.svg",
    lastInvoice: {
      date: "December 13, 2022",
      dateTime: "2022-12-13",
      amount: "$2,000.00",
      status: "Overdue",
    },
  },
  {
    id: 2,
    name: "SavvyCal",
    imageUrl: "https://tailwindui.com/img/logos/48x48/savvycal.svg",
    lastInvoice: {
      date: "January 22, 2023",
      dateTime: "2023-01-22",
      amount: "$14,000.00",
      status: "Paid",
    },
  },
  {
    id: 3,
    name: "Reform",
    imageUrl: "https://tailwindui.com/img/logos/48x48/reform.svg",
    lastInvoice: {
      date: "January 23, 2023",
      dateTime: "2023-01-23",
      amount: "$7,600.00",
      status: "Paid",
    },
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div
        className="relative text-white bg-cover flex flex-col bg-center w-full h-screen mb-44"
        style={{ backgroundImage: "url('/rentalprop.svg')" }}
      >
        <div className="mx-auto my-auto ">
          <div className="text-7xl flex justify-center">
            <p className="font-serif">Rental Properties</p>
          </div>

          {/* <div className="p-2 pl-4 pr-4 hover:bg-white transition duration-500 hover:text-black hover:cursor-pointer font-medium flex flex-col items-center justify-center text-white border border-[2px] mb-20 border-white mx-auto">
                        <p>Contact Us</p>
                    </div> */}
        </div>
      </div>
      <SearchByAddress />
      <div className="p-10">
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8"
        >
          {db.map((prop, index) => (
            <li
              key={index}
              className="overflow-hidden rounded-xl border border-gray-200"
            >
              <Link to={`/propertypage/${index}`}>
                <div className="flex flex-col gap-4">
                  <div
                    className="flex items-center lg:p-[200px]"
                    style={{ backgroundImage: `url(${prop.imgurl})` }}
                  >
                    {/* <div className="p-2 border border-2 hover:bg-white hover:text-black transition duration-500 hover:font-medium hover:cursor-pointer border-white text-white bg-transparent">
                            <p className='pl-9 pr-9'>2 BHK</p>
                        </div> */}
                  </div>

                  <div>
                    <div className="flex justify-between p-4">
                      <p>{prop.name}</p>
                      <p>
                        {prop.bhk}, {prop.area}
                      </p>
                    </div>
                    <div className="flex justify-between p-4">
                      <p>Address :-</p>
                      <br></br>
                      <p>{prop.address}</p>
                      <p className="flex ">
                        <FaStarHalf />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* ---------------------------------------- */}

      <div className="pb-8">
        <div className="flex flex-col justify-between bg-[#E79700] w-full p-20 md:p-10 sm:p-6">
          <div className="lg:text-7xl text-[#04236D]">
            <p>Want to find your ideal house?</p>
          </div>

          <div className="flex flex-wrap md:flex-nowrap sm:flex-wrap">
            <div className="text-[#04236D] text-md w-full md:w-1/2 sm:w-full">
              <p className="w-[70%] font-bold pt-6 tracking-widest">
                Contact us and we will provide you our expert guidance and
                assistance in finding your dream house.
              </p>
              <div className="pt-6 font-bold">
                <p>Connect with us</p>
                <div className="py-2">
                  <p className="text-white pb-4">
                    <a href="info@astravant.com">info@astravant.com</a>
                  </p>
                  <p className="text-white">+91 8329 109 390</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-8 pt-8 w-full md:w-1/2 sm:w-full">
              <div className="flex flex-wrap gap-8 w-full max-w-2xl">
                <input
                  type="text"
                  placeholder="First Name"
                  className="flex-1 p-2 border border-2 hover:bg-white hover:text-black transition duration-500  hover:cursor-pointer border-white text-white bg-transparent font-bold placeholder-bold"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="flex-1 p-2 border border-2 hover:bg-white hover:text-black transition duration-500  hover:cursor-pointer border-white text-white bg-transparent font-bold placeholder-bold"
                />
              </div>

              <div className="w-full max-w-2xl">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full p-2 border border-2 hover:bg-white hover:text-black transition duration-500  hover:cursor-pointer border-white text-white bg-transparent font-bold placeholder-bold"
                />
              </div>

              <div className="w-full max-w-2xl">
                <input
                  type="text"
                  placeholder="Property Requirements"
                  className="w-full p-2 border border-2 hover:bg-white hover:text-black transition duration-500  hover:cursor-pointer border-white text-white bg-transparent font-bold placeholder-bold"
                />
              </div>

              <div className="w-full max-w-2xl">
                <input
                  type="text"
                  placeholder="Your Budget Range"
                  className="w-full p-2 border border-2 hover:bg-white hover:text-black transition duration-500  hover:cursor-pointer border-white text-white bg-transparent font-bold placeholder-bold"
                />
              </div>
              <div className="w-full max-w-2xl">
                <button className=" p-2 pl-8 pr-8 border border-2 hover:bg-[#04236D] hover:text-black transition duration-500  hover:cursor-pointer border-[#04236D] text-white bg-transparent font-bold placeholder-bold">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Nsl />

      <Footer />
    </div>
  );
};

export default Contact;
