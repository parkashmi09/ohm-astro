import React, { useState } from "react";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import translations from "../../components/translations/translations";
import { useQuery } from "@tanstack/react-query";
import { fetchTopRatedAstrologers } from "../../api/apiCalls";
// Custom Arrow Component
const CustomArrow = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`
      absolute top-1/2 -translate-y-1/2 z-20
      ${direction === "left" ? "-left-4" : "-right-4"}
      flex items-center justify-center
      w-8 h-8 rounded-full
      bg-white 
      border-2 border-pink-500
      hover:bg-pink-50 transition-colors
      focus:outline-none
    `}
  >
    <span className="text-pink-500 text-3xl text-center leading-none">
      {direction === "left" ? <FiChevronLeft /> : <FiChevronRight />}
    </span>
  </button>
);

const AstrologerCarousel3D = () => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);

  // Get the selected language from the Redux store
  const language = useSelector((state) => state.language.language);
  const t = translations[language];

  const { data, isLoading, error } = useQuery({
    queryKey: ["fetchTopRatedAstrologers"], // Query key without parameters
    queryFn: fetchTopRatedAstrologers, // Reference the function directly
  });

  console.log("this top rated astrologers data", data);

  if (isLoading)
    return (
      <div className="text-center p-8">
        {/* Spinner */}
        <div className="inline-block w-16 h-16 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="mt-4">Loading top-rated astrologers...</p>
      </div>
    );
  if (error)
    return <p>Error fetching top-rated astrologers: {error.message}</p>;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div className="bg-pink-50 p-6 perspective-1000">
      <div className="relative px-8 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text">
            {t.ourAstrologers}
          </h2>
          <div className="w-48 h-0.5 bg-pink-500 mx-auto mb-4"></div>
          <p className="text-gray-700">{t.contactAstrologers}</p>
        </div>

        <Slider {...settings}>
          {data?.map(({ astrologer, averageRating, totalReviews }, index) => (
            <div
              key={astrologer._id}
              className={`
        px-3 transform transition-all duration-300 ease-in-out
        ${
          index === activeSlide
            ? "scale-100 opacity-100 z-10"
            : "scale-75 opacity-70 z-0"
        }
      `}
            >
              <div
                className="
          bg-white rounded-lg border border-red-500 p-6 
          shadow-sm text-center mx-auto  max-w-[300px]  h-80
          cursor-pointer hover:shadow-lg transition-all
          transform transition-transform duration-300
          hover:-translate-y-2
        "
                onClick={() => navigate(`/astrologer/${astrologer._id}`)}
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
                  <img
                    src={astrologer.image || "default-image-url.png"} // Replace with fallback if image is missing
                    alt={astrologer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium text-lg mb-2">{astrologer.name}</h3>
                <p className="text-sm text-gray-700 mb-2">
                  {astrologer.bio.length > 60
                    ? `${astrologer.bio.slice(0, 60)}...` // Truncate bio if too long
                    : astrologer.bio}
                </p>
                <div className="text-sm">
                  {t.reviews}:{" "}
                  <span className="text-pink-500">{totalReviews}</span>
                </div>
                <div className="flex justify-center mt-2 text-yellow-400">
                  {"★".repeat(averageRating)}
                  {"☆".repeat(5 - averageRating)}{" "}
                  {/* Display full 5-star rating */}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AstrologerCarousel3D;
