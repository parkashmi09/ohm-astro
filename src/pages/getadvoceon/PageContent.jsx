

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Phone, MessageCircle,  Info, ChevronRight } from "lucide-react";
import contentData from "../../components/content/pageContent";
import AstroServices from "./../Home/AstroServices";
import AstrologerCarousel from "../Home/AstrologerCarousel";
import { useSelector } from 'react-redux';
import translations from '../../components/translations/translations';

const getIcon = (iconName) => {
  const icons = {
    Phone: Phone,
    MessageCircle: MessageCircle,
  };
  return icons[iconName] || Phone;
};

const GetAdviceOn = () => {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];
  const { category } = useParams();
  const navigate = useNavigate();
  const [currentContent, setCurrentContent] = useState(null);

  useEffect(() => {
    const content = category
      ? contentData[category] || contentData.psychicReading
      : contentData.psychicReading;

    if (!contentData[category] && category) {
      navigate("/get-advice/psychicReading");
    }

    setCurrentContent(content);
  }, [category, navigate]);

  if (!currentContent)
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      <AstroServices />

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Main Content Card */}
        <div>
          {/* Title Section */}
          <h1 className="text-3xl font-bold text-center text-gray-800">
            {currentContent.title.main}{" "}
           
          </h1>
        </div>
        <div className=" overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-[700px]  flex flex-col justify-between mx-auto space-y-6 ">
              {/* Description */}
              <p className="  text-gray-600">
                {currentContent.description}
              </p>

              {/* Action Buttons */}
              <div className="flex justify-center space-x-4">
                {currentContent.buttons.map((button, index) => {
                  const Icon = getIcon(button.icon);
                  return (
                    <button
                      key={index}
                      className="flex items-center gap-2 bg-red-500 text-white 
                    px-6 py-3 rounded-full hover:bg-red-600 transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                      {button.text}
                    </button>
                  );
                })}
              </div>

              {/* Main Content */}
              <p className=" text-gray-700">
                {currentContent.mainContent}
              </p>

              {/* Image Section */}
            </div>
            <div className="flex justify-center">
              <img
                src={currentContent.image}
                alt={`${currentContent.title.main} ${currentContent.title.highlight}`}
                className="rounded-2xl max-h-[300px] w-full object-cover "
              />
            </div>
          </div>
        </div>

        {/* Astrologer Carousel */}
        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <AstrologerCarousel />
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Info className="mr-3 text-red-500" />
            {currentContent.faq.title}
          </h2>
          <p className="text-gray-600 mb-6">{currentContent.faq.subtitle}</p>

          <div className="space-y-4">
            {currentContent.faq.questions.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-xl">
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <ChevronRight className="mr-2 text-red-400 w-5 h-5" />
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAdviceOn;
