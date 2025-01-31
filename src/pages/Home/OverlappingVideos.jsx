import React, { useState, useRef } from "react";
import { Star, Play, Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CelebrityTestimonialGallery = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef([]);

  const customers = [
    {
      size: "medium",
      name: "Sarah Chen",
      profession: "Bollywood Actress",
      rating: 4.8,
      video: "https://cdn.pixabay.com/video/2024/09/24/233024_tiny.mp4",
      poster: "https://cdn.anytimeastro.com/dashaspeaks/web/content/images/Testimonial/4cf4f814-6a5c-4b16-bde1-4582fe99cad7.png",
      description: "An incredible experience that transformed my perspective."
    },
    {
      size: "large",
      name: "Emma Wilson",
      profession: "International Model",
      rating: 4.9,
      video: "https://cdn.pixabay.com/video/2024/09/24/233024_tiny.mp4",
      poster: "https://cdn.anytimeastro.com/dashaspeaks/web/content/images/Testimonial/4cf4f814-6a5c-4b16-bde1-4582fe99cad7.png",
      description: "Guidance that truly changed my life's direction."
    },
    {
      size: "medium",
      name: "Maya Johnson",
      profession: "Tech Entrepreneur",
      rating: 5.0,
      video: "https://cdn.pixabay.com/video/2024/09/24/233024_tiny.mp4",
      poster: "https://cdn.anytimeastro.com/dashaspeaks/web/content/images/Testimonial/4cf4f814-6a5c-4b16-bde1-4582fe99cad7.png",
      description: "Precision and insight beyond expectations."
    }
  ];

  const handleVideoInteraction = (index) => {
    const videoElement = videoRefs.current[index];
    
    if (activeVideo === index) {
      videoElement.pause();
      setActiveVideo(null);
    } else {
      // Pause any previously playing video
      if (activeVideo !== null) {
        videoRefs.current[activeVideo].pause();
      }
      
      videoElement.play();
      setActiveVideo(index);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (activeVideo !== null) {
      videoRefs.current[activeVideo].muted = !isMuted;
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-pink-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text">
            Trusted by Celebrities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transformative insights that have guided stars to their true potential
          </p>
          <div className="h-1 w-24 bg-pink-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence>
            {customers.map((customer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2 
                }}
                className={`
                  relative group overflow-hidden 
                  rounded-2xl shadow-2xl 
                  ${activeVideo === index ? 'z-50' : 'z-10'}
                  transform transition-all duration-300
                  ${activeVideo === index ? 'scale-105' : 'hover:scale-105'}
                `}
              >
                <div className="relative">
                  <video
                    ref={(el) => videoRefs.current[index] = el}
                    className="w-full h-[400px] object-cover"
                    poster={customer.poster}
                    muted={isMuted}
                    playsInline
                  >
                    <source src={customer.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Overlay */}
                  <div 
                    className={`
                      absolute inset-0 
                      bg-black/40 
                      flex flex-col justify-between 
                      p-6 text-white 
                      transition-all duration-300
                      ${activeVideo === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                    `}
                  >
                    {/* Top Section */}
                    <div className="flex justify-between items-start">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium">{customer.rating}</span>
                      </div>
                      
                      {activeVideo === index && (
                        <button 
                          onClick={toggleMute}
                          className="bg-white/20 backdrop-blur-sm rounded-full p-2"
                        >
                          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                        </button>
                      )}
                    </div>

                    {/* Bottom Section */}
                    <div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                        <h3 className="text-xl font-bold mb-1">{customer.name}</h3>
                        <p className="text-sm text-gray-200">{customer.profession}</p>
                        <p className="text-sm mt-2 italic">{customer.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Play Button */}
                  <button
                    onClick={() => handleVideoInteraction(index)}
                    className={`
                      absolute top-1/2 left-1/2 
                      transform -translate-x-1/2 -translate-y-1/2
                      bg-white/30 hover:bg-white/50 
                      backdrop-blur-sm 
                      rounded-full p-4 
                      transition-all duration-300
                      ${activeVideo === index ? 'hidden' : 'block'}
                    `}
                  >
                    <Play className="w-8 h-8 text-white" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default CelebrityTestimonialGallery;