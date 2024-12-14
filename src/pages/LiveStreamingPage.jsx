
import { useLocation } from "react-router-dom";

const LiveStreamingPage = () => {
  const { state } = useLocation();
  const { name, topic, time, image } = state || {};

  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto px-4 py-6 gap-4">
      {/* Left Video Section */}
      <div className="flex-1 bg-gray-100 p-4 rounded-xl">
        <div className="relative mb-4">
          <img
            src={image}
            alt={`${name}'s session`}
            className="w-full h-96 object-cover rounded-lg"
          />
          <span className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full">
            ₹100/min
          </span>
        </div>
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-500">{topic}</p>
        <p className="text-gray-400 text-sm">{time}</p>
      </div>

      {/* Right Chat Section */}
      <div className="flex-1 bg-gray-50 p-4 rounded-xl">
        <h3 className="text-lg font-semibold mb-2">Chat Room</h3>
        <div className="flex flex-col space-y-2 overflow-y-scroll h-72 border rounded-lg p-2">
          {/* Sample Messages */}
          <div className="bg-gray-200 p-2 rounded">Hello, how can I help you?</div>
          <div className="bg-gray-300 p-2 rounded self-end">I want to know about my future.</div>
        </div>
        <div className="flex items-center mt-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-grow p-2 border rounded-lg"
          />
          <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg">Send</button>
        </div>
      </div>
    </div>
  );
};

export default LiveStreamingPage;
