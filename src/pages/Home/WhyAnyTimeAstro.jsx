// import React, { useState } from "react";
// import { ChevronUp, ChevronDown } from "lucide-react";
// //import { useLanguage } from "../../components/context/LanguageContext";

// const WhyAnyTimeAstro = () => {
//   const [openSection, setOpenSection] = useState("verified");
//   const { language } = useLanguage();

//   const sections = [
//     {
//       id: "verified",
//       title: {
//         ENG: "Verified Astrologers",
//         HIN: "प्रमाणित ज्योतिषी",
//       },
//       content: {
//         ENG: `Anytime Astro helps you connect with the best online Astrologers in India who will guide you through all the problems of your life and provide answers to all your queries through accurate Astrology predictions. Be it your love problems or money problems, our Astrologers can give you guidance on each and every aspect of your life.`,
//         HIN: `एनीटाइम एस्ट्रो आपको भारत के सर्वश्रेष्ठ ऑनलाइन ज्योतिषियों से जोड़ने में मदद करता है जो आपके जीवन की सभी समस्याओं में मार्गदर्शन करेंगे और सटीक ज्योतिषीय भविष्यवाणियों के माध्यम से आपके सभी प्रश्नों का उत्तर देंगे। चाहे वह प्रेम समस्या हो या धन समस्या, हमारे ज्योतिषी आपके जीवन के प्रत्येक पहलू पर मार्गदर्शन प्रदान कर सकते हैं।`,
//       },
//     },
//     // {
//       id: "multiple-ways",
//       title: {
//         ENG: "Ask An Astrologer Via Multiple Ways",
//         HIN: "ज्योतिषी से कई तरीकों से पूछें",
//       },
//       content: {
//         ENG: "Connect with our expert astrologers through chat, call, or video consultation. Get personalized guidance at your convenience.",
//         HIN: "चैट, कॉल, या वीडियो परामर्श के माध्यम से हमारे विशेषज्ञ ज्योतिषियों से जुड़ें। अपनी सुविधा के अनुसार व्यक्तिगत मार्गदर्शन प्राप्त करें।",
//       },
//     },
//     {
//       id: "privacy",
//       title: {
//         ENG: "100% Privacy Guaranteed",
//         HIN: "100% गोपनीयता की गारंटी",
//       },
//       content: {
//         ENG: "Your personal information and consultations are kept completely confidential. We ensure secure and private communication with our astrologers.",
//         HIN: "आपकी व्यक्तिगत जानकारी और परामर्श पूरी तरह से गोपनीय रखे जाते हैं। हम ज्योतिषियों के साथ सुरक्षित और निजी संचार सुनिश्चित करते हैं।",
//       },
//     },
//   ];

//   const toggleSection = (id) => {
//     setOpenSection(openSection === id ? "" : id);
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       {/* Main Header */}
//       <div className="text-center mb-12">
//         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//           {language === "ENG" ? "WHY ANYTIME ASTRO?" : "क्यों चुनें एनीटाइम एस्ट्रो?"}
//         </h1>
//         <div className="w-24 h-1 bg-pink-500 mx-auto mb-6"></div>
//         <p className="text-lg text-gray-700 max-w-3xl mx-auto">
//           {language === "ENG"
//             ? "One of the best online Astrology platforms to connect with experienced and verified Astrologers"
//             : "अनुभवी और प्रमाणित ज्योतिषियों से जुड़ने के लिए सर्वश्रेष्ठ ऑनलाइन ज्योतिष प्लेटफ़ॉर्म"}
//         </p>
//       </div>

//       {/* Accordion Sections */}
//       <div className="space-y-4 max-w-8xl mx-auto">
//         {sections.map((section) => (
//           <div
//             key={section.id}
//             className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
//           >
//             <button
//               onClick={() => toggleSection(section.id)}
//               className="w-full px-6 py-4 flex items-center justify-between focus:outline-none hover:bg-gray-50 transition-colors duration-200"
//             >
//               <h2 className="text-xl font-semibold text-gray-800">
//                 {section.title[language]}
//               </h2>
//               {openSection === section.id ? (
//                 <ChevronUp className="w-6 h-6 text-gray-600" />
//               ) : (
//                 <ChevronDown className="w-6 h-6 text-gray-600" />
//               )}
//             </button>

//             <div
//               className={`transition-all duration-300 ease-in-out ${
//                 openSection === section.id
//                   ? "max-h-[500px] opacity-100"
//                   : "max-h-0 opacity-0"
//               } overflow-hidden`}
//             >
//               <div className="px-6 pb-4">
//                 <p className="text-gray-600 leading-relaxed">
//                   {section.content[language]}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WhyAnyTimeAstro;


import  { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useSelector } from 'react-redux';
import translations from '../../components/translations/translations';
const WhyAnyTimeAstro = () => {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];
  const [openSection, setOpenSection] = useState("verified");

  const sections = [
    {
      id: "verified",
      title: t.faqtitile1,
      content: t.faqcontent1,
    },
    {
      id: "multiple-ways",
      title: t.faqtitile2,
      content: t.faqcontent2,
    },
    {
      id: "privacy",
      title: t.faqtitile3,
      content: t.faqcontent3,
    },
  ];

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? "" : id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Main Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          {t.whyAnytimeAstro}
        </h1>
        <div className="w-24 h-1 bg-pink-500 mx-auto mb-6"></div>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          {t.whyAnytimeAstroDesc1}
        </p>
      </div>

      {/* Accordion Sections */}
      <div className="space-y-4 max-w-8xl mx-auto">
        {sections.map((section) => (
          <div
            key={section.id}
            className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
          >
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full px-6 py-4 flex items-center justify-between focus:outline-none hover:bg-gray-50 transition-colors duration-200"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {section.title}
              </h2>
              {openSection === section.id ? (
                <ChevronUp className="w-6 h-6 text-gray-600" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-600" />
              )}
            </button>

            <div
              className={`transition-all duration-300 ease-in-out ${
                openSection === section.id
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <div className="px-6 pb-4">
                <p className="text-gray-600 leading-relaxed">
                  {section.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyAnyTimeAstro;

