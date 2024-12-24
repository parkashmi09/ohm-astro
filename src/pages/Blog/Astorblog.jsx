import React, { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import translations from "../../components/translations/translations";
import { Nakshatras, Nakshatra } from "../../components/content/astordata";

import { useQuery } from "@tanstack/react-query";
import {
  fetchBlogs,
  fetchRecentBlogs,
  fetchBlogsByCategory,
} from "../../api/apiCalls";
// Content data

const categories = [
  "Zodiac Signs",
  "Vastu",
  "Trending",
  "Tarot",
  "Psychic Reading",
  "Numerology",
  "Nakshatra",
  "Muhurat",
  "Moon Sign",
  "Gemstones",
  "Compatibility",
  "Celebrity",
  "Career",
  "Astrology",
];

const popularPosts = [
  "Vehicles on These Dates in 2024",
  "Nakshatra Matching For Marriage | Nakshatra Compatibility",
  "Shubh Muhurat For Gold Purchase in 2024 - Best Days to Buy Gold",
  "Mundan Muhurat 2024: Best Mundan Ceremony Date and Time",
  "Home Purchase Muhurat | Shubh Property Purchase Muhurat in 2024",
  "Right Eye Twitching for Female Meaning in Astrology",
  "Left Eye Twitching for Male Meaning in Astrology",
  "Bharani Nakshatra Compatibility With Other Nakshatra",
];

const BlogHeader = () => {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];
  const blogHeader = {
    title: t.title0,
    description: t.Description0,
  };
  return (
    <div className="relative h-64 bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center z-10">
        <h1 className="text-4xl font-bold mb-4">{blogHeader.title}</h1>
        <p className="text-lg max-w-3xl mx-auto">{blogHeader.description}</p>
      </div>
    </div>
  );
};

const BlogSlider = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs", { limit: 10, page: 1 }],
    queryFn: () => fetchBlogs({ limit: 10, page: 1 }),
  });

  console.log("this blog data", data);

  if (isLoading)
    return (
      <div className="text-center p-8">
        {/* Spinner */}
        <div className="inline-block w-16 h-16 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="mt-4">Loading top-rated astrologers...</p>
      </div>
    );
  if (error) return <p>Error: {error.message}</p>;

  // Filter duplicates (if any) using `_id`
  const uniquePosts = data?.data.filter(
    (post, index, self) => self.findIndex((p) => p._id === post._id) === index
  );

  const settings = {
    dots: true,
    infinite: uniquePosts.length > 3, // Disable infinite if less than 3 slides
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
    <div className="mb-8">
      <Slider {...settings}>
        {uniquePosts.map((post) => (
          <div key={post._id} className="px-2">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img
                src={post.category.image}
                alt={post.title}
                className="w-full h-full object-contain" // Ensures full image visibility
              />
              <div className="p-4">
                <div className="text-sm text-gray-500 mb-2">
                  {new Date(post.category.createdAt).toLocaleDateString()} by{" "}
                  {post.author}
                </div>
                <h3 className="font-semibold mb-2">{post.category.name}</h3>
                <p className="text-sm text-gray-600">{post.english.excerpt}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const Sidebar = () => {
  const [email, setEmail] = useState("");

  const [activeTab, setActiveTab] = useState("popular"); // Track active tab

  const {
    data: recentBlogs,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["recentBlogs"],
    queryFn: fetchRecentBlogs,
  });

  console.log("this recent blog data", recentBlogs);

  const { data: blogsByCategory } = useQuery({
    queryKey: ["blogsByCategory", "Tarot Reading"], // Category-specific key
    queryFn: () => fetchBlogsByCategory({ categoryName: "Tarot Reading" }), // Fetch function
  });

  if (isLoading)
    return (
      <div className="text-center p-8">
        {/* Spinner */}
        <div className="inline-block w-16 h-16 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="mt-4">Loading top-rated astrologers...</p>
      </div>
    );
  if (error) return <p>Error: {error.message}</p>;

  console.log("Blogs by Category:", blogsByCategory);

  // Popular posts data (static)
  const popularPosts = [
    "Vehicles on These Dates in 2024",
    "Nakshatra Matching For Marriage | Nakshatra Compatibility",
    "Shubh Muhurat For Gold Purchase in 2024 - Best Days to Buy Gold",
    "Mundan Muhurat 2024: Best Mundan Ceremony Date and Time",
    "Home Purchase Muhurat | Shubh Property Purchase Muhurat in 2024",
    "Right Eye Twitching for Female Meaning in Astrology",
    "Left Eye Twitching for Male Meaning in Astrology",
    "Bharani Nakshatra Compatibility With Other Nakshatra",
  ];

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-200 to-cyan-200 rounded-lg shadow p-4">
        <div className="flex border-b gap-4">
          <button
            className={`w-full px-4 py-2 rounded-t-lg ${
              activeTab === "popular"
                ? "bg-gradient-to-r from-rose-400 to-red-500 text-white"
                : "bg-gray-100"
            }`}
            onClick={() => setActiveTab("popular")}
          >
            Popular Posts
          </button>
          <button
            className={`w-full px-4 py-2 rounded-t-lg ${
              activeTab === "recent"
                ? "bg-gradient-to-r from-rose-400 to-red-500 text-white"
                : "bg-gray-100"
            }`}
            onClick={() => setActiveTab("recent")}
          >
            Recent Posts
          </button>
        </div>
        <div className="mt-4">
          <ul className="space-y-3">
            {activeTab === "popular" ? (
              // Show popular posts
              popularPosts.map((post, index) => (
                <li
                  key={index}
                  className="text-gray-700 hover:text-red-700 cursor-pointer hover:underline"
                >
                  <span className="text-red-700">&#9827;</span> {post}
                </li>
              ))
            ) : // Show recent posts
            isLoading ? (
              <div className="text-center p-8">
                {/* Spinner */}
                <div className="inline-block w-16 h-16 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
                <p className="mt-4">Loading top-rated astrologers...</p>
              </div>
            ) : error ? (
              <p>Error loading recent posts</p>
            ) : (
              recentBlogs?.data.map((post, index) => (
                <li
                  key={index}
                  className="text-gray-700 hover:text-red-700 cursor-pointer hover:underline"
                >
                  <span className="text-red-700">&#9827;</span>{" "}
                  {post.english.title}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="font-semibold mb-4 bg-gradient-to-r from-rose-400 to-red-500 w-full p-2">
          Categories
        </h3>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li
              key={index}
              className="text-gray-700 hover:text-red-700 cursor-pointer border-b hover:underline"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-red-700 text-white p-4 rounded-lg">
        <h3 className="font-semibold mb-4">Subscribe to Our Newsletter</h3>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Enter Email Address"
            className="w-full px-3 py-2 rounded bg-gray-100 text-gray-800"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="w-full bg-yellow-400 text-gray-900 py-2 rounded font-semibold">
            Subscribe
          </button>
          <p className="text-sm text-center">
            Subscribe to get all the necessary notifications.
          </p>
        </div>
      </div>
    </div>
  );
};

// Add this error boundary component at the top
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Blog Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center py-8">
          <h2 className="text-xl font-bold text-red-600 mb-2">Something went wrong</h2>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="text-blue-600 hover:underline"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Update the blog post rendering with safe checks
const BlogPostCard = ({ post }) => {
  if (!post) return null;

  return (
    <div className="mb-6 pb-6 border-b border-gray-200 last:border-0">
      {post.category?.image && (
        <img
          src={post.category.image}
          alt={post.english?.title || 'Blog post'}
          className="w-full h-full object-contain"
          onError={(e) => {
            e.target.src = '/fallback-image.jpg'; // Add a fallback image
            e.target.onerror = null;
          }}
        />
      )}
      <div className="text-sm text-gray-500 mb-2">
        {post.createdAt && new Date(post.createdAt).toLocaleDateString()} by {post.author || 'Anonymous'}
      </div>
      <h3 className="font-semibold mb-2">{post.english?.title || 'Untitled'}</h3>
      <p className="text-gray-600">{post.english?.excerpt || 'No excerpt available'}</p>
      <p className="text-gray-600 font-medium p-2">
        {post.english?.metaDescription || 'No description available'}
      </p>
    </div>
  );
};

// Update BlogLayout component with error boundary and safe rendering
const BlogLayout = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs", { limit: 10, page: 1 }],
    queryFn: () => fetchBlogs({ limit: 10, page: 1 }),
  });

  // ...existing loading and error states...

  return (
    <ErrorBoundary>
      <div className="bg-gray-100 min-h-screen">
        <BlogHeader />
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* ...existing BlogSlider section... */}
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 lg:space-y-8">
              <div className="bg-white rounded-lg shadow p-4">
                <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-rose-400 to-red-500 w-full p-4">
                  Nakshatra
                </h2>
                {data?.data?.map((post) => (
                  <BlogPostCard key={post._id || post.id} post={post} />
                )) || (
                  <p className="text-center text-gray-500 py-4">No posts available</p>
                )}
              </div>

              {/* Other sections with similar safe checks */}
              {/* ...existing code... */}
            </div>
            <div>
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default BlogLayout;
