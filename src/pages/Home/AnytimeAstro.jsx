
import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, Star, Moon, Sun, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import translations from '../../components/translations/translations';

const EnhancedAstrologyLanding = () => {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      id: 1,
      badge: t.badge1,
      title: t.title1,
      subtitle: t.subtitle1,
      description: t.description1,
      features: [
        { icon: <Phone className="w-6 h-6 text-yellow-400" />, text: t.phone1 },
        { icon: <MessageCircle className="w-6 h-6 text-yellow-400" />, text: t.message1 },
      ],
    },
    {
      id: 2,
      badge: t.badge2,
      title: t.title2,
      subtitle: t.subtitle2,
      description: t.description2,
      features: [
        { icon: <Phone className="w-6 h-6 text-yellow-400" />, text: t.phone2 },
        { icon: <MessageCircle className="w-6 h-6 text-yellow-400" />, text: t.message2 },
      ],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSlideChange = (index) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveSlide(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <div className=" bg-gradient-to-r from-amber-500 to-pink-500 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Zodiac Symbols */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${10 + Math.random() * 10}s infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            <Star className="w-6 h-6 text-white" fill="currentColor" />
            <Star className="w-6 h-6 text-white" fill="currentColor" />
            
          </div>
        ))}

        {/* Animated Moon */}
        <div className="absolute top-20 right-20 animate-pulse">
          <Moon className="w-16 h-16 text-black" fill="currentColor" />
          
        </div>

        {/* Animated Sun */}
        <div className="absolute bottom-20 left-20 animate-spin-slow">
          <Sun className="w-24 h-24 text-white" fill="currentColor" />
        </div>

        {/* Mystical Sparkles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${3 + Math.random() * 4}s infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            <Sparkles className="w-6 h-6 text-white" />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
    {/* Main Slider Container */}
    <div className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl p-8">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`transition-opacity duration-700 ${
            index === activeSlide ? "opacity-100" : "opacity-0 absolute inset-0"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-10">
            {/* Video Section */}
            <div className="bg-gray-900 rounded-2xl h-[300px] flex items-center justify-center overflow-hidden">
              <video
                className="w-full h-[300px] object-cover rounded-xl"
                autoPlay
                muted
                loop
                playsInline
              >
                <source
                  src="https://cdn.anytimeastro.com/dashaspeaks/web/content/anytimeastro/videos/live/astrologer-b.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Text Content Section */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <span className="px-4 py-2 bg-yellow-500/30 text-white rounded-full text-sm">
                  {slide.badge}
                </span>
                <h1 className="text-4xl font-bold text-white bg-clip-text bg-gradient-to-r from-yellow-300 to-red-400">
                  {slide.title}
                </h1>
                <p className="text-xl text-white/80">{slide.subtitle}</p>
                <p className="text-white/70">{slide.description}</p>
              </div>

              {/* Features Section */}
              <div className="grid grid-cols-2 gap-4">
                {slide.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-yellow-500/20 transition"
                  >
                    {feature.icon}
                    <span className="text-white">{feature.text}</span>
                  </div>
                ))}
              </div>

              <button className="py-3 px-6 bg-gradient-to-r from-yellow-400 to-red-500 text-white rounded-full hover:from-yellow-500 hover:to-red-600 transition-all">
                {t.StartConsultation}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Slider Indicators */}
    <div className="mt-8 flex justify-center space-x-4">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => handleSlideChange(index)}
          className={`h-3 w-3 rounded-full transition-all ${
            index === activeSlide
              ? "bg-yellow-500 scale-125"
              : "bg-white/30 hover:bg-white/50"
          }`}
        />
      ))}
    </div>

    {/* Call-to-Action Links */}
    <div className="grid md:grid-cols-2 gap-8 mt-12">
      <Link to="/AstrologerListing" className="flex items-center p-6 bg-white/10 backdrop-blur-lg rounded-xl hover:bg-yellow-500/20 transition">
        <Phone className="w-10 h-10 text-yellow-500" />
        <div className="ml-4">
          <h2 className="text-xl font-semibold text-white">{t.TalktoAstrologer}</h2>
        </div>
      </Link>

      <Link to="/Astrologchat" className="flex items-center p-6 bg-white/10 backdrop-blur-lg rounded-xl hover:bg-blue-500/20 transition">
        <MessageCircle className="w-10 h-10 text-blue-500" />
        <div className="ml-4">
          <h2 className="text-xl font-semibold text-white">{t.ChatwithAstrologer}</h2>
        </div>
      </Link>
    </div>
  </div>
</div>

  );
};

export default EnhancedAstrologyLanding;