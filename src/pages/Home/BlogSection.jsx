
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import translations from '../../components/translations/translations';
import { useQuery } from '@tanstack/react-query';
import { fetchBlogs } from '../../api/apiCalls';

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 z-10 border border-gray-200"
    aria-label="Previous slide"
  >
    <ChevronLeft className="w-6 h-6 text-gray-600" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 z-10 border border-gray-200"
    aria-label="Next slide"
  >
    <ChevronRight className="w-6 h-6 text-gray-600" />
  </button>
);

const BlogSection = () => {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];
  //api acess
  const { data, isLoading, error } = useQuery({
    queryKey: ['blogs', { limit: 10, page: 1 }], // Query key with params
    queryFn: () => fetchBlogs({ limit: 10, page: 1 }), // Fetch function
  });

  console.log("this blogsection home data", data);
  //  if (isLoading) return <p>Loading blogs...</p>;
  //   if (error) return <p>Error: {error.message}</p>;



  const blogPosts = [
    {
      id: 1,
      title: t.blogtile1,
      image: "https://wpcontent.anytimeastro.com/blog_anytimeastro/blogimages/1396/3765-jupiter-saturn-conjunction.jpg",
      description: t.blogdesc1,
      badge: t.blogbage1,
    },
    {
      id: 2,
      title: t.blogtile2,
      image: "https://wpcontent.anytimeastro.com/blog_anytimeastro/blogimages/1395/144-the-child-lenormand-card.jpg",
      description: t.blogdesc2,
      badge: t.blogbage2,
    },
    {
      id: 3,
      title: t.blogtile3,
      image: "https://wpcontent.anytimeastro.com/blog_anytimeastro/blogimages/1394/3171-salman-khans-horoscope-analysis-and-predictions.jpg",
      description: t.blogdesc3,
      badge: t.blogbage3,
    },
  ];
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
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  // if (isLoading) return <p>Loading blogs...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.blog1}</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {t.blogdec1}
          </p>
        </div>

        {/* Blog Posts Slider */}
        <div className="relative px-8">
          <Slider {...settings}>
            {data?.data.map((post) => (
              <div key={post._id} className="px-4">
                <div className="bg-white border border-red-500 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                  {/* Badge */}
                  <div className="relative">
                    <img
                      src={post.profileImage}
                      alt={post.title}
                      className="w-full h-64 object-contain"
                    />
                  </div>


                  {/* Content */}
                  <div className="p-6 text-center min-h-24">
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.bio}
                    </p>
                    <Link
                      to="/ModernPage"
                      className="text-red-500 border border-red-500 rounded-full px-6 py-2 font-medium hover:text-red-600 transition-colors duration-200 flex items-center justify-center mx-auto"
                    >
                      Read More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

