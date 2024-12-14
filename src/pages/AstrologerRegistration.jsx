import React from "react";
import { Link } from "react-router-dom";

const AstrologerRegistration = () => {
  return (
    <div>
      <nav className="bg-red-500 text-white p-4">
        <div className="container mx-auto">
          <div className="flex items-center text-sm">
            <a href="/" className="hover:underline">
              Home
            </a>
            <span className="mx-2">›</span>
            <Link to="/vrat-and-upvaas" className="hover:underline">
              Astrologer Registration
            </Link>
          </div>
        </div>
      </nav>
      <div className="min-h-screen bg-red-500 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h1 className="text-3xl font-bold mb-4">
                BECOME "OHM Astro VERIFIED" ASTROLOGER:
                <span className="text-yellow-300"> JOIN NOW!</span>
              </h1>

              <p className="mb-8">
                Anytime Astro, one of the best online astrology portals gives
                you a chance to be a part of its community of best and top-notch
                Astrologers. Become a part of the team of 1500+ Astrologers and
                offer your consultations to clients from all across the globe, &
                create an online, personalized brand presence.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 text-center text-gray-800">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold">Verified Expert</h3>
                  <p className="text-sm">Astrologers</p>
                </div>

                <div className="bg-white rounded-lg p-4 text-center text-gray-800">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold">1500+ Trusted</h3>
                  <p className="text-sm">Astrologers</p>
                </div>

                <div className="bg-white rounded-lg p-4 text-center text-gray-800">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold">24/7</h3>
                  <p className="text-sm">Availability</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Astrologer Sign Up
              </h2>

              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name*"
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name*"
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address*"
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                  <div className="flex">
                    <select className="px-2 py-2 border rounded-l-lg bg-gray-50">
                      <option>🇮🇳 +91</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="Mobile*"
                      className="w-full px-4 py-2 border border-l-0 rounded-r-lg"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" id="terms" className="rounded" />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I Agree To OHM Astro Astrologers{" "}
                    <a href="#" className="text-pink-500">
                      Terms Of Use
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-pink-500">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-gray-900 font-semibold py-2 rounded-lg hover:bg-yellow-500 transition-colors"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <footer className="text-center text-black p-4">
        <p className="text-sm">
          Copyright © 2020-2024 Innovana Astro Services Ltd. All Rights Reserved
        </p>
      </footer> */}
    </div>
  );
};

export default AstrologerRegistration;
