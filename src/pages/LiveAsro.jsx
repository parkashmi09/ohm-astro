
import React from "react";
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";
import FAQ from "./FAQ/LiveFAQ";

// LiveIndicator Component
const LiveIndicator = () => (
  <div className="absolute top-2 right-2 flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded-full z-10">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
    </span>
    <span className="text-sm font-medium">LIVE</span>
  </div>
);

// ScheduledIndicator Component
const ScheduledIndicator = () => (
  <div className="absolute top-2 right-2 flex items-center gap-2 bg-gray-600 text-white px-3 py-1 rounded-full z-10">
    <span className="relative flex h-2 w-2">
      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
    </span>
    <span className="text-sm font-medium">SCHEDULED</span>
  </div>
);

// SessionCard Component
const SessionCard = ({ id, name, topic, time, status, image }) => {
  const navigate = useNavigate();
  const isLive = status === "live";

  const handleJoinSession = () => {
    if (isLive) {
      navigate(`/live/${id}`, { state: { name, topic, time, image } });
    }
  };

  return (
    <div className="relative flex flex-row flex-auto overflow-hidden shadow-md hover:shadow-lg transition-all bg-red-50/80 rounded-2xl p-4 gap-4">
      {/* Image Container */}
      <div className="relative w-64 h-48 flex-shrink-0">
        <img
          src={image}
          alt={`${name}'s session`}
          className="w-full h-full object-cover rounded-xl"
        />
        {isLive ? <LiveIndicator /> : <ScheduledIndicator />}
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow justify-between py-2">
        <div>
          {/* Time Badge */}
          <div
            className={`inline-block mb-3 px-3 py-1 rounded text-xs ${
              isLive ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-600"
            }`}
          >
            {time}
          </div>

          {/* Session Details */}
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <p className="text-gray-500 mb-4">{topic}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleJoinSession}
            className={`py-2 px-6 rounded-full ${
              isLive ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            {isLive ? "Join Live Session" : "Notify Me"}
          </button>
          <span className="text-2xl border rounded-full p-2 hover:bg-gray-100 cursor-pointer">💬</span>
        </div>
      </div>
    </div>
  );
};

export const LiveAsro = () => {
  const sessions = [
    {
      id: 1,
      name: "PoojaD",
      topic: "Love Relationship",
      time: "22 Nov, 09:00 AM IST",
      status: "live",
      image: "https://cdn.anytimeastro.com/anytimeastro/lives_exp/live/2723789/3da519f2-f512-4521-ad13-ce49260c8f63.png",
    },
    {
      id: 2,
      name: "Akshayk",
      topic: "Daily Predictions",
      time: "22 Nov, 09:00 PM IST",
      status: "scheduled",
      image: "https://cdn.anytimeastro.com/anytimeastro/lives_exp/live/3301733/a3bee38a-fbed-4d44-a805-2218ddbcfb68.png",
    },
    {
      id: 3,
      name: "Ram",
      topic: "Love Relationship",
      time: "22 Nov, 09:00 AM IST",
      status: "live",
      image: "https://cdn.anytimeastro.com/anytimeastro/lives_exp/live/2723789/3da519f2-f512-4521-ad13-ce49260c8f63.png",
    },
    {
      id: 4,
      name: "Sita",
      topic: "Daily Predictions",
      time: "22 Nov, 09:00 PM IST",
      status: "live",
      image: "https://cdn.anytimeastro.com/anytimeastro/lives_exp/live/3301733/a3bee38a-fbed-4d44-a805-2218ddbcfb68.png",
    },
    {
      id: 5,
      name: "Priya",
      topic: "Career Guidance",
      time: "23 Nov, 10:00 AM IST",
      status: "scheduled",
      image: "https://cdn.anytimeastro.com/anytimeastro/lives_exp/live/2723789/3da519f2-f512-4521-ad13-ce49260c8f63.png",
    },
    {
      id: 6,
      name: "Rahul",
      topic: "Business Success",
      time: "23 Nov, 11:30 AM IST",
      status: "live",
      image: "https://cdn.anytimeastro.com/anytimeastro/lives_exp/live/3301733/a3bee38a-fbed-4d44-a805-2218ddbcfb68.png",
    },
    {
      id: 7,
      name: "Meera",
      topic: "Marriage Predictions",
      time: "23 Nov, 02:00 PM IST",
      status: "scheduled",
      image: "https://cdn.anytimeastro.com/anytimeastro/lives_exp/live/2723789/3da519f2-f512-4521-ad13-ce49260c8f63.png",
    },
    {
      id: 8,
      name: "Arjun",
      topic: "Health & Wellness",
      time: "23 Nov, 03:30 PM IST",
      status: "live",
      image: "https://cdn.anytimeastro.com/anytimeastro/lives_exp/live/3301733/a3bee38a-fbed-4d44-a805-2218ddbcfb68.png",
    },
    {
      id: 9,
      name: "Lakshmi",
      topic: "Financial Success",
      time: "23 Nov, 05:00 PM IST",
      status: "scheduled",
      image: "https://cdn.anytimeastro.com/anytimeastro/lives_exp/live/2723789/3da519f2-f512-4521-ad13-ce49260c8f63.png",
    },
    {
      id: 10,
      name: "Krishna",
      topic: "Spiritual Guidance",
      time: "24 Nov, 09:00 AM IST",
      status: "live",
      image: "https://cdn.anytimeastro.com/anytimeastro/lives_exp/live/3301733/a3bee38a-fbed-4d44-a805-2218ddbcfb68.png",
    },
    {
      id: 11,
      name: "Radha",
      topic: "Personal Growth",
      time: "24 Nov, 10:30 AM IST",
      status: "scheduled",
      image: "https://cdn.anytimeastro.com/anytimeastro/lives_exp/live/2723789/3da519f2-f512-4521-ad13-ce49260c8f63.png",
    },
    {
      id: 12,
      name: "Vishnu",
      topic: "Life Purpose",
      time: "24 Nov, 12:00 PM IST",
      status: "live",
      image: "https://cdn.anytimeastro.com/anytimeastro/lives_exp/live/3301733/a3bee38a-fbed-4d44-a805-2218ddbcfb68.png",
    }
  ];

  return (
    <div>
      <nav className="bg-rose-500 text-white p-4">
        <div className="container mx-auto flex items-center gap-2">
          <Home className="w-5 h-5" />
          <span className="font-medium">Live</span>
        </div>
      </nav>

      <div className="bg-rose-50 py-8 p-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-800">
            INTERACTIVE LIVE SESSIONS
          </h1>
          <p className="text-gray-600 mt-2">
            Talk to premium Astrologers through Free Live Sessions
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-2xl text-center font-bold mb-6">
          Live & Upcoming Sessions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {sessions.map((session) => (
            <SessionCard key={session.id} {...session} />
          ))}
        </div>
      </div>

      <FAQ/>
    </div>
  );
};