// import  { useState } from "react";
// import { ChevronDown } from "lucide-react";
// //import { useLanguage } from "../../components/context/LanguageContext";

// const AstrologySection = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { language } = useLanguage();

//   const content = {
//     ENG: {
//       title: "What Is Astrology?",
//       subtitle: "Astrology Is The Language Of The Universe",
//       introduction:
//         "Astrology predictions are based on the position and movements of planets and celestial bodies in the Universe that impact our life quality. This can be studied by creating an offline or online horoscope of individuals. This affects not only the people but also controls the occurrence of certain events happening in the sublunar world.",
//       moreInfo:
//         "Some may call it pseudo-science, and others call it predictive science. The science that is Astrology inspires people to know the various aspects of their life and take it in the right direction. From making life predictions on the basis of a detailed Kundali or telling you about the near future through daily, weekly and monthly horoscopes, Astrology is the medium through which you can get a glimpse of what the future will bring for you.",
//       planetaryInfluencesTitle: "Understanding Planetary Influences",
//       planetaryInfo:
//         "There is one aspect of offline and online Astrology prediction where the impacts of planetary transition can be seen. And when it is related to the Zodiacs, it happens as various planets cross the sectors of each zodiac in the sky. It impacts the natives of different zodiacs differently. And one more way is by analyzing the planetary position in various houses of one's Kundli.",
//       benefitsTitle: "Astrology Predictions And Its Benefits",
//       benefitsInfo:
//         "Offline and online Astrology predictions have the power to forecast the future by analyzing the positions of the planets as they move and studying their impact on your life. An online horoscope is essentially a blueprint of your life that can help you gain clarity about the different aspects of your life, your personality and your future.",
//       onlineServicesTitle: "Online Astrology Services",
//       onlineServicesInfo:
//         "Keeping the convenience, comfort and flexibility in mind, online Astrology consultation services have become increasingly popular. The benefits include:",
//       onlineServicesList: [
//         "It is the most hassle-free way to connect with the best Astrologers.",
//         "Online Astrology services are the most time-saving and affordable way to connect with top Astrologers.",
//         "It makes it convenient for people to talk to an Astrologer openly as your privacy and confidentiality is strictly maintained.",
//         "You can choose the best Astrologer online among nearly 100+ Astrologers that matches your requirements perfectly.",
//       ],
//       astrologyCategoriesTitle: "Online Astrology Predictions Categories",
//       categories: [
//         {
//           title: "Love and Relationships",
//           description:
//             "Here, you can ask an Astrologer any question related to your relationship, whether past, present, or future. It also answers the question about your ex's feelings or maybe issues related to cheating, etc.",
//         },
//         {
//           title: "Marriage and Family",
//           description:
//             "Ask questions related to your married life. It taps the issues related to infidelity, general future, or even second marriage.",
//         },
//         {
//           title: "Career and Job",
//           description:
//             "Under this category, all the questions related to your work will be placed. It can be anything from workplace conflicts to promotions to being confused between two options.",
//         },
//         {
//           title: "Money and Finance",
//           description:
//             "This category will have questions that concern money. It may be related to your current financial position or the future, or maybe the reasons affecting it or how you can improve.",
//         },
//       ],
//       conclusion:
//         "These are the primary and basic categories under which almost every question can be put. Then it will be convenient for you to choose the expert Astrologers who will answer your question. It will be done through Vedic Astrology predictions, tarot reading, numerology, and palmistry to give you the best insights.",
//     },
//     HIN: {
//       title: "ज्योतिष क्या है?",
//       subtitle: "ज्योतिष ब्रह्मांड की भाषा है",
//       introduction:
//         "ज्योतिष की भविष्यवाणियाँ ग्रहों और आकाशीय पिंडों की स्थिति और गति पर आधारित होती हैं जो हमारे जीवन की गुणवत्ता को प्रभावित करती हैं। इसे व्यक्तियों का ऑफलाइन या ऑनलाइन कुंडली बनाकर अध्ययन किया जा सकता है। यह न केवल लोगों को प्रभावित करता है बल्कि उपचन्द्रमणीय दुनिया में होने वाली घटनाओं को भी नियंत्रित करता है।",
//       moreInfo:
//         "कुछ लोग इसे अर्धविज्ञान कहते हैं, और कुछ इसे भविष्यवाणी विज्ञान मानते हैं। जो विज्ञान ज्योतिष है, वह लोगों को उनके जीवन के विभिन्न पहलुओं को जानने और इसे सही दिशा में ले जाने के लिए प्रेरित करता है। यह जीवन के बारे में भविष्यवाणियाँ करने का एक माध्यम है जो आपको भविष्य में क्या होने वाला है, इसका एक झलक देता है।",
//       planetaryInfluencesTitle: "ग्रहों के प्रभाव को समझना",
//       planetaryInfo:
//         "ऑफलाइन और ऑनलाइन ज्योतिष भविष्यवाणी का एक पहलू है जहाँ ग्रहों के संक्रमण के प्रभाव देखे जा सकते हैं। जब यह राशियों से संबंधित होता है, तो यह विभिन्न ग्रहों द्वारा प्रत्येक राशि के क्षेत्रों को पार करते समय होता है। यह विभिन्न राशियों के निवासियों को अलग-अलग तरीके से प्रभावित करता है। और एक और तरीका यह है कि किसी के कुंडली में ग्रहों की स्थिति का विश्लेषण किया जाता है।",
//       benefitsTitle: "ज्योतिष भविष्यवाणियाँ और इसके लाभ",
//       benefitsInfo:
//         "ऑफलाइन और ऑनलाइन ज्योतिष भविष्यवाणियाँ भविष्य को पूर्वानुमान करने की शक्ति रखती हैं, ग्रहों की स्थिति का विश्लेषण करके और उनके आपके जीवन पर प्रभाव को समझकर। एक ऑनलाइन कुंडली आपके जीवन का ब्लूप्रिंट होती है जो आपके जीवन के विभिन्न पहलुओं, आपके व्यक्तित्व और आपके भविष्य के बारे में स्पष्टता प्रदान कर सकती है।",
//       onlineServicesTitle: "ऑनलाइन ज्योतिष सेवाएँ",
//       onlineServicesInfo:
//         "सुविधा, आराम और लचीलापन को ध्यान में रखते हुए, ऑनलाइन ज्योतिष परामर्श सेवाएँ दिन-ब-दिन लोकप्रिय हो रही हैं। इसके लाभों में शामिल हैं:",
//       onlineServicesList: [
//         "यह सबसे सरल तरीका है सबसे अच्छे ज्योतिषियों से जुड़ने का।",
//         "ऑनलाइन ज्योतिष सेवाएँ सबसे समय-संवेदनशील और किफायती तरीका हैं शीर्ष ज्योतिषियों से जुड़ने का।",
//         "यह लोगों को खुले तौर पर ज्योतिषी से बात करने में सहायक होता है क्योंकि आपकी गोपनीयता और सुरक्षा पूरी तरह से संरक्षित रहती है।",
//         "आप 100+ ज्योतिषियों में से सबसे अच्छा ज्योतिषी चुन सकते हैं जो आपके आवश्यकताओं के अनुसार उपयुक्त हो।",
//       ],
//       astrologyCategoriesTitle: "ऑनलाइन ज्योतिष भविष्यवाणियों की श्रेणियाँ",
//       categories: [
//         {
//           title: "प्रेम और रिश्ते",
//           description:
//             "यहाँ आप किसी भी ज्योतिषी से अपने रिश्ते से संबंधित सवाल पूछ सकते हैं, चाहे वह अतीत, वर्तमान या भविष्य से संबंधित हो। यह आपके एक्स के भावनाओं या धोखाधड़ी से संबंधित मुद्दों के बारे में भी जवाब देता है।",
//         },
//         {
//           title: "विवाह और परिवार",
//           description:
//             "अपने विवाहित जीवन से संबंधित सवाल पूछें। यह विश्वासघात, सामान्य भविष्य, या यहां तक कि दूसरा विवाह से संबंधित मुद्दों को टाप करता है।",
//         },
//         {
//           title: "करियर और नौकरी",
//           description:
//             "इस श्रेणी के तहत आपके कार्य से संबंधित सभी सवालों को रखा जाएगा। यह कार्यस्थल संघर्षों से लेकर पदोन्नति या दो विकल्पों के बीच भ्रमित होने तक हो सकता है।",
//         },
//         {
//           title: "धन और वित्त",
//           description:
//             "यह श्रेणी उन सवालों से संबंधित होगी जो धन से संबंधित हैं। यह आपके वर्तमान वित्तीय स्थिति या भविष्य से संबंधित हो सकता है, या उन कारणों से हो सकता है जो इसे प्रभावित करते हैं या आप इसे कैसे सुधार सकते हैं।",
//         },
//       ],
//       conclusion:
//         "यह वे प्राथमिक और मूल श्रेणियाँ हैं जिनके तहत लगभग हर सवाल पूछा जा सकता है। फिर आपके लिए यह सुविधाजनक होगा कि आप विशेषज्ञ ज्योतिषियों को चुनें जो आपके सवाल का उत्तर देंगे। यह वेदिक ज्योतिष भविष्यवाणियों, टैरो रीडिंग, अंकज्योतिष और हस्तरेखा विज्ञान के माध्यम से किया जाएगा, ताकि आपको सबसे अच्छे आंतरिक जानकारी मिल सकें।",
//     },
//   };

//   return (
//     <div className="bg-red-50 h-auto">
//       <div className="max-w-7xl mx-auto px-4 py-16 bg-red-50">
//         {/* Header Section */}
//         <div
//           className="p-6 cursor-pointer mb-6 space-y-4"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <div className="flex items-center justify-center">
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
//               {content[language].title}
//             </h2>
//             <ChevronDown
//               className={`ml-4 transition-transform transform ${isOpen ? "rotate-180" : ""}`}
//               size={30}
//             />
//           </div>
//           <h3 className="text-xl font-semibold text-gray-600 text-center">
//             {content[language].subtitle}
//           </h3>
//         </div>

//         {/* Body Section */}
//         {isOpen && (
//           <div className="space-y-6 text-gray-800">
//             <p>{content[language].introduction}</p>
//             <p>{content[language].moreInfo}</p>

//             <h4 className="text-xl font-semibold mt-6">
//               {content[language].planetaryInfluencesTitle}
//             </h4>
//             <p>{content[language].planetaryInfo}</p>

//             <h4 className="text-xl font-semibold mt-6">
//               {content[language].benefitsTitle}
//             </h4>
//             <p>{content[language].benefitsInfo}</p>

//             <h4 className="text-xl font-semibold mt-6">
//               {content[language].onlineServicesTitle}
//             </h4>
//             <p>{content[language].onlineServicesInfo}</p>
//             <ul className="list-disc pl-5 space-y-2">
//               {content[language].onlineServicesList.map((item, index) => (
//                 <li key={index} className="text-gray-700">
//                   {item}
//                 </li>
//               ))}
//             </ul>

//             <h4 className="text-xl font-semibold mt-6">
//               {content[language].astrologyCategoriesTitle}
//             </h4>
//             <div className="space-y-4">
//               {content[language].categories.map((category, index) => (
//                 <div key={index}>
//                   <h5 className="font-semibold">{category.title}</h5>
//                   <p>{category.description}</p>
//                 </div>
//               ))}
//             </div>

//             <p className="mt-6">{content[language].conclusion}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AstrologySection;


import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useSelector } from 'react-redux';
import translations from '../../components/translations/translations';

const AstrologySection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const language = useSelector((state) => state.language.language);
  const t = translations[language];

  const content = {
    title: t.astrotitle1,
    subtitle: t.astrosubtitle1,
    introduction:t.astrointroduvtion1,
    moreInfo:t.astroMoreinfo,
    planetaryInfluencesTitle: t.astroplanetaryInfluencesTitle,
    planetaryInfo:
      t.astroplanetaryInfo,
    benefitsTitle: t.astrobenefitsTitle,
    benefitsInfo:
      t.astrobenefitsInfo,
    onlineServicesTitle: t.astroonlineServicesTitle,
    onlineServicesInfo:
      t.astroonlineServicesInfo,
    onlineServicesList: t.astroonlineServicesList,
    astrologyCategoriesTitle: t.cateastrologyCategoriesTitle,
    categories: [
      {
        title: t.catetitle1,
        description:
          t.catedescription1,
      },
      {
        title: t.catetitle2,
        description:
          t.catedescription2,
      },
      {
        title: t.catetitle3,
        description:
          t.catedescription3,
      },
      {
        title: t.catetitle4,
        description:
          t.catedescription4,
      },
    ],
    conclusion:
      t.conclusions,
  };

  return (
    <div className="bg-red-50 h-auto">
      <div className="max-w-7xl mx-auto px-4 py-16 bg-red-50">
        {/* Header Section */}
        <div
          className="p-6 cursor-pointer mb-6 space-y-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              {content.title}
            </h2>
            <ChevronDown
              className={`ml-4 transition-transform transform ${
                isOpen ? "rotate-180" : ""
              }`}
              size={30}
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-600 text-center">
            {content.subtitle}
          </h3>
        </div>

        {/* Body Section */}
        {isOpen && (
          <div className="space-y-6 text-gray-800">
            <p>{content.introduction}</p>
            <p>{content.moreInfo}</p>

            <h4 className="text-xl font-semibold mt-6">
              {content.planetaryInfluencesTitle}
            </h4>
            <p>{content.planetaryInfo}</p>

            <h4 className="text-xl font-semibold mt-6">
              {content.benefitsTitle}
            </h4>
            <p>{content.benefitsInfo}</p>

            <h4 className="text-xl font-semibold mt-6">
              {content.onlineServicesTitle}
            </h4>
            <p>{content.onlineServicesInfo}</p>
            <ul className="list-disc pl-5 space-y-2">
              {content.onlineServicesList.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>

            <h4 className="text-xl font-semibold mt-6">
              {content.astrologyCategoriesTitle}
            </h4>
            <div className="space-y-4">
              {content.categories.map((category, index) => (
                <div key={index}>
                  <h5 className="font-semibold">{category.title}</h5>
                  <p>{category.description}</p>
                </div>
              ))}
            </div>

            <p className="mt-6">{content.conclusion}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AstrologySection;

