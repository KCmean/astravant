import React, { useState, useEffect } from "react";

const reviewsData = [
  {
    name: "Astra Vant",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem libero id exercitationem officia, maxime a laboriosam labore est ullam? Beatae aliquid odit necessitatibus, quasi quisquam quam, enim animi dolorem aperiam excepturi porro facilis.",
    date: "18th October",
    stars: 4,
  },
  {
    name: "John Doe",
    review: "Great service and support!",
    date: "12th November",
    stars: 5,
  },
  {
    name: "Jane Smith",
    review: "Very satisfied with the real estate projects.",
    date: "5th December",
    stars: 3,
  },
  {
    name: "Bob Brown",
    review: "Professional and reliable.",
    date: "25th January",
    stars: 4,
  },
  {
    name: "Alice Green",
    review: "Highly recommended!",
    date: "3rd February",
    stars: 5,
  },
  // More reviews can be added here
];

const Card = ({ name, review, date, stars }) => {
  return (
    <div className="bg-white shadow-lg p-4 pl-8 pr-8 rounded-3xl gap-4 flex flex-col hover:shadow-xl">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-3 items-center">
          <img src="charman.png" className="rounded-full w-9 h-9" alt="" />
          <p>{name}</p>
        </div>
        <div className="flex flex-row gap-1">
          {[...Array(stars)].map((_, i) => (
            <svg
              key={`filled-star-${i}`}
              className="text-[#001F66] w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.568L24 9.751l-6 5.901 1.421 8.548L12 19.412l-7.421 4.788L6 15.652 0 9.751l8.332-1.596L12 .587z" />
            </svg>
          ))}
          {[...Array(5 - stars)].map((_, i) => (
            <svg
              key={`empty-star-${i}`}
              className="text-gray-500 w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.568L24 9.751l-6 5.901 1.421 8.548L12 19.412l-7.421 4.788L6 15.652 0 9.751l8.332-1.596L12 .587z" />
            </svg>
          ))}
        </div>
      </div>
      <div className="leading-tight">
        <p>{review}</p>
      </div>
      <p className="text-gray-500 text-xs">{date}</p>
    </div>
  );
};

const Highlight = ({ t1, t2 }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-6xl">{t1}</p>
      <div className="h-1 w-full bg-[#001F66]"></div>
      <p className="w-2/3 leading-none">{t2}</p>
    </div>
  );
};

const Thrust = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentReviews, setCurrentReviews] = useState([]);

  const reviewsPerPage = 2;

  useEffect(() => {
    const startIndex = currentPage * reviewsPerPage;
    const endIndex = startIndex + reviewsPerPage;
    setCurrentReviews(reviewsData.slice(startIndex, endIndex));
  }, [currentPage]);

  const handleNext = () => {
    if ((currentPage + 1) * reviewsPerPage < reviewsData.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-between bg-[#E79700] w-full p-20">
        <div className="mx-auto flex flex-col items-center justify-center text-2xl md:text-4xl xl:text-6xl text-[#001F66]">
          <p>Holding an taking care of more than</p>
          <p>10,000+ customers trust</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-8 gap-8">
          {currentReviews.map((review, index) => (
            <Card
              key={index}
              name={review.name}
              review={review.review}
              date={review.date}
              stars={review.stars}
            />
          ))}
        </div>

        <div className="flex justify-center gap-4 my-4">
          <button
            onClick={handlePrevious}
            className="bg-[#001F66] text-white py-2 px-4 rounded-lg disabled:bg-gray-400"
            disabled={currentPage === 0}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="bg-[#001F66] text-white py-2 px-4 rounded-lg disabled:bg-gray-400"
            disabled={(currentPage + 1) * reviewsPerPage >= reviewsData.length}
          >
            Next
          </button>
        </div>

        <div className="flex flex-col md:flex-row my-8 text-[#001F66] justify-between">
          <Highlight t1="12+" t2="Years of experience in real estate" />
          <Highlight t1="800+" t2="Real estate projects" />
          <Highlight t1="5+" t2="Million sq. ft sold." />
        </div>
      </div>
    </div>
  );
};

export default Thrust;
