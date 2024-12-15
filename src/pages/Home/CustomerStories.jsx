import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSelector } from "react-redux";
import translations from "../../components/translations/translations";
import { useQuery } from "@tanstack/react-query";
import { fetchTopRatedAstrologers } from "../../api/apiCalls";

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 rounded-full border-2 border-pink-500 bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 z-10"
  >
    <ChevronLeft className="w-6 h-6 text-pink-500" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 rounded-full bg-white border-2 border-pink-500 shadow-lg flex items-center justify-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 z-10"
  >
    <ChevronRight className="w-6 h-6 text-pink-500" />
  </button>
);

const CustomerStories = () => {
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
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-red-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text">{t.Customer}</h2>
          <div className="flex justify-center items-center">
            <div className="h-1 w-24 bg-red-500"></div>
          </div>
          <p className="text-gray-600">{t.desc}</p>
        </div>

        <div className="relative px-16 p-8">
          <Slider {...settings}>
            {data?.map(({ astrologer, averageRating, totalReviews }, index) => (
              <div key={astrologer._id} className="px-4">
                <div className="bg-white border border-red-500 rounded-lg shadow-lg p-8">
                  <div className="flex flex-col items-center">
                    <img
                      src={astrologer.image || "default-avatar.jpg"}
                      alt={astrologer.name}
                      className="w-20 h-20 rounded-full mb-4"
                    />
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-2xl">
                          ★
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-1">
                      {astrologer.name}
                    </h3>
                    {astrologer.role && (
                      <p className="text-gray-600 mb-1">{astrologer.role}</p>
                    )}
                    {astrologer.location && (
                      <p className="text-gray-600 mb-4">
                        {astrologer.location}
                      </p>
                    )}
                    <p className="text-gray-700 text-center">
                      {astrologer.bio.slice(0, 100)}
                    </p>
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
