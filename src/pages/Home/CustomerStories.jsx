import React from 'react';
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSelector } from "react-redux";
import translations from "../../components/translations/translations";
import { useQuery } from "@tanstack/react-query";
import { fetchTopRatedAstrologers } from "../../api/apiCalls";

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-10 h-10 rounded-full border-2 border-pink-500 bg-white shadow-lg items-center justify-center hover:bg-pink-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 z-10"
  >
    <ChevronLeft className="w-6 h-6 text-pink-500" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-10 h-10 rounded-full border-2 border-pink-500 bg-white shadow-lg items-center justify-center hover:bg-pink-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 z-10"
  >
    <ChevronRight className="w-6 h-6 text-pink-500" />
  </button>
);

const CustomerStories = () => {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];

  const { data, isLoading, error } = useQuery({
    queryKey: ["fetchTopRatedAstrologers"],
    queryFn: fetchTopRatedAstrologers,
  });

  if (isLoading) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center p-4">
        <div className="w-12 h-12 border-4 border-t-4 border-gray-200 border-t-pink-500 rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600">Loading top-rated astrologers...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[400px] flex items-center justify-center p-4">
        <p className="text-red-500">Error fetching astrologers: {error.message}</p>
      </div>
    );
  }

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    swipeToSlide: true,
    touchThreshold: 10,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: '16px',
        }
      }
    ]
  };

  return (
    <div className="bg-gradient-to-b from-red-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text">
            {t.Customer}
          </h2>
          <div className="flex justify-center items-center gap-2">
            <div className="h-1 w-12 bg-amber-500 rounded-full"></div>
            <div className="h-1 w-20 bg-pink-500 rounded-full"></div>
          </div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">{t.desc}</p>
        </div>

        <div className="relative px-0 md:px-16">
          <Slider {...settings}>
            {data?.map(({ astrologer, averageRating }) => (
              <div key={astrologer._id} className="px-2 md:px-4 h-full">
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 h-[500px] md:h-[550px] flex flex-col transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl border border-pink-100">
                  <div className="flex-1 flex flex-col items-center">
                    <div className="relative mb-6">
                      <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-4 ring-pink-100 ring-offset-2">
                        <img
                          src={astrologer.image || "https://cdn.anytimeastro.com/dashaspeaks/expert/thumb/628289f4-bd17-4d80-b2d6-b3586fcb824a.png"}
                          alt={astrologer.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md border border-pink-100">
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-400 text-lg">★</span>
                          <span className="text-gray-700 font-medium">{averageRating?.toFixed(1) || "5.0"}</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 text-center">
                      {astrologer.name}
                    </h3>

                    {astrologer.role && (
                      <p className="text-pink-500 font-medium mb-2 text-center">
                        {astrologer.role}
                      </p>
                    )}

                    {astrologer.location && (
                      <p className="text-gray-500 text-sm mb-4 flex items-center gap-1 text-center">
                        <span className="inline-block w-1 h-1 rounded-full bg-gray-400"></span>
                        {astrologer.location}
                      </p>
                    )}

                    <p className="text-gray-600 text-center line-clamp-4 flex-1">
                      {astrologer.bio}
                    </p>

                    <button className="mt-6 px-6 py-2 bg-gradient-to-r from-amber-500 to-pink-500 text-white rounded-full font-medium hover:from-amber-600 hover:to-pink-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                      Book Consultation
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CustomerStories;