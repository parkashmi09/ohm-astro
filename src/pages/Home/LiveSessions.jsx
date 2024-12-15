import { useSelector } from "react-redux";
import translations from "../../components/translations/translations";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // import icons for buttons
import { Link } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import { fetchastrologers } from "../../api/apiCalls";

// Custom Arrow Components
const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border-2 border-pink-500 text-pink-500 p-2 rounded-full hover:bg-pink-300 z-10"
    style={{ left: "-1.5rem" }}
  >
    <FaArrowLeft />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border-2 border-pink-500 text-pink-500 p-2 rounded-full hover:bg-pink-300 z-10"
    style={{ right: "-1.5rem" }}
  >
    <FaArrowRight />
  </button>
);

const LiveSessions = () => {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs", { limit: 10, page: 1 }], // Query key with params
    queryFn: () => fetchastrologers({ limit: 10, page: 1 }), // Fetch function
  });

  console.log("this fetchastrologers data", data);

  if (isLoading)
    return (
      <div className="text-center p-8">
        {/* Spinner */}
        <div className="inline-block w-16 h-16 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="mt-4">Loading top-rated astrologers...</p>
      </div>
    );
  if (error) return <p>Error: {error.message}</p>;

  // eslint-disable-next-line react-hooks/rules-of-hooks

  // const astrologers = [
  //   {
  //     id: 1,
  //     name: t.TaronRenu,
  //     expertise: t.expertise1,
  //     image:
  //       "https://play-lh.googleusercontent.com/eN6BWYXhJXGzQjTbPJYWGuBaKIjhu-d8z5dP8h2ZY-zHs2axwc8J4-RqdGIR61CfiA=w526-h296-rw",
  //     isLive: true,
  //   },
  //   {
  //     id: 2,
  //     name:t.Shivanshub,
  //     expertise: t.expertise2,
  //     image:
  //       "https://play-lh.googleusercontent.com/eN6BWYXhJXGzQjTbPJYWGuBaKIjhu-d8z5dP8h2ZY-zHs2axwc8J4-RqdGIR61CfiA=w526-h296-rw",
  //     isLive: true,
  //   },
  //   {
  //     id: 3,
  //     name: t.RameshP,
  //     expertise: t.expertise3,
  //     image:
  //       "https://play-lh.googleusercontent.com/71x0F6mT1jz9LxRb4-Dz8Rw8drfRCQ9PV3RASFE0A3l8J5Mw-nwKJioZNKlUnRZVNxA=w526-h296-rw",
  //     isLive: true,
  //   },
  //   {
  //     id: 4,
  //     name: t.PalakT,
  //     expertise: t.expertise4,
  //     image:
  //       "https://play-lh.googleusercontent.com/71x0F6mT1jz9LxRb4-Dz8Rw8drfRCQ9PV3RASFE0A3l8J5Mw-nwKJioZNKlUnRZVNxA=w526-h296-rw",
  //     isLive: true,
  //   },
  //   {
  //     id: 5,
  //     name: t.RameshPreferences,
  //     expertise: t.expertise5,
  //     image:
  //       "https://play-lh.googleusercontent.com/71x0F6mT1jz9LxRb4-Dz8Rw8drfRCQ9PV3RASFE0A3l8J5Mw-nwKJioZNKlUnRZVNxA=w526-h296-rw",
  //     isLive: true,
  //   },
  // ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text">
          {t.LIVESESSIONS}
        </h2>
        <div className="flex justify-center items-center">
          <div className="h-1 w-24 bg-red-500"></div>
        </div>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">{t.descri}</p>
      </div>

      <Slider {...settings}>
        {data?.data.map((astrologer) => (
          <div key={astrologer.id} className="px-2">
            <div className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer transition-transform duration-300 transform border border-red-600">
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <span className="animate-pulse w-2 h-2 bg-white rounded-full"></span>
                  {t.live}
                </span>
              </div>
              <div className="aspect-[3/4] relative">
                <img
                  src={astrologer.profileImage}
                  alt={astrologer.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                    <img
                      src={astrologer.profileImage}
                      alt={`${astrologer.name} avatar`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold">{astrologer.name}</h3>
                </div>
                <p className="text-sm text-yellow-400">
                  {astrologer.specialties.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="text-center mt-8">
        <Link
          to="/LiveSessions"
          className="inline-flex items-center justify-center px-10 py-2 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-colors duration-300"
        >
          {t.ViewMore}
        </Link>
      </div>
    </div>
  );
};

export default LiveSessions;
