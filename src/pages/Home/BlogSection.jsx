import React from 'react';
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import translations from "../../components/translations/translations";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "../../api/apiCalls";

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 
    w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg 
    flex items-center justify-center transition-all duration-200
    hover:bg-gray-50 hover:shadow-xl focus:outline-none 
    focus:ring-2 focus:ring-red-500 focus:ring-offset-2 z-10 
    border border-red-100 group"
    aria-label="Previous slide"
  >
    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-red-500 group-hover:text-red-600" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 
    w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg 
    flex items-center justify-center transition-all duration-200
    hover:bg-gray-50 hover:shadow-xl focus:outline-none 
    focus:ring-2 focus:ring-red-500 focus:ring-offset-2 z-10 
    border border-red-100 group"
    aria-label="Next slide"
  >
    <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-red-500 group-hover:text-red-600" />
  </button>
);

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="min-h-[400px] flex items-center justify-center p-4">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 relative">
        <div className="absolute inset-0 border-4 border-red-200 rounded-full animate-pulse"></div>
        <div className="absolute inset-0 border-4 border-t-red-500 rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-gray-600 animate-pulse">Loading amazing blogs...</p>
    </div>
  </div>
);

const BlogSection = () => {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];

  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs", { limit: 10, page: 1 }],
    queryFn: () => fetchBlogs({ limit: 10, page: 1 }),
  });

  if (isLoading) return <LoadingSpinner />;

  if (error) {
    return (
      <div className="min-h-[400px] flex items-center justify-center p-4">
        <div className="text-center text-red-500 bg-red-50 px-6 py-4 rounded-lg">
          <p>Error loading blogs: {error.message}</p>
        </div>
      </div>
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          centerMode: true,
          centerPadding: "24px",
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 
            bg-gradient-to-r from-amber-500 to-red-500 
            text-transparent bg-clip-text">
            {t.blog1}
          </h2>
          <div className="flex justify-center items-center gap-2 mb-6">
            <div className="h-1 w-12 bg-amber-500 rounded-full"></div>
            <div className="h-1 w-20 bg-red-500 rounded-full"></div>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
            {t.blogdec1}
          </p>
        </div>

        <div className="relative px-2 md:px-8 xl:px-12">
          <Slider {...settings}>
            {data?.data.map((post) => (
              <div key={post._id} className="p-3 md:p-4">
                <div className="group bg-white rounded-xl overflow-hidden shadow-lg 
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl 
                  border border-red-100 h-[500px] md:h-[550px] flex flex-col">
                  {/* Image Container with Improved Aspect Ratio */}
                  <div className="relative h-[250px] md:h-[300px] w-full overflow-hidden">
                    <img
                      src={post.profileImage || "/placeholder-image.jpg"}
                      alt={post.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = "/placeholder-image.jpg";
                      }}
                    />
                    {/* Enhanced Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Category Tag with Animation */}
                    <div className="absolute top-4 left-4 transform -translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="bg-red-500 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
                        {post.category || 'Blog'}
                      </span>
                    </div>
                    
                    {/* Date with Enhanced Styling */}
                    <div className="absolute bottom-4 left-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {new Date(post.createdAt).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </div>
                  </div>

                  {/* Content Container with Better Spacing */}
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-red-500 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-3 text-sm md:text-base">
                        {post.bio}
                      </p>
                    </div>

                    {/* Enhanced Footer */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <Link
                        to="/ModernPage"
                        className="inline-flex items-center justify-center w-full
                          bg-gradient-to-r from-amber-500 to-red-500 
                          text-white rounded-full px-6 py-3
                          text-sm font-medium transition-all duration-300
                          hover:from-amber-600 hover:to-red-600 
                          focus:outline-none focus:ring-2 focus:ring-red-500 
                          focus:ring-offset-2 transform hover:-translate-y-0.5
                          shadow-md hover:shadow-lg group"
                      >
                        Read More
                        <ChevronRight className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx>{`
        .slick-dots {
          bottom: -40px;
          display: flex !important;
          justify-content: center;
          list-style: none;
          padding: 0;
        }
        .slick-dots li {
          margin: 0 4px;
        }
        .slick-dots li button {
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background-color: #fee2e2;
          border: none;
          padding: 0;
          font-size: 0;
          transition: all 0.3s ease;
        }
        .slick-dots li.slick-active button {
          background-color: #ef4444;
          width: 24px;
        }
        @media (max-width: 768px) {
          .slick-dots li button {
            width: 6px;
            height: 6px;
          }
          .slick-dots li.slick-active button {
            width: 18px;
          }
        }
      `}</style>
    </section>
  );
};

export default BlogSection;