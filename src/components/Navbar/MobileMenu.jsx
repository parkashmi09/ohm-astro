import { useState } from "react";
import {
    X,
    ChevronDown,
    ChevronUp, 
  } from "lucide-react";

  import { useSelector } from 'react-redux';
import translations from '../translations/translations';
const menuData = {
  AstrologyOnline: [
    { title: "Talk To Astrologer", link: "/AstrologerListing" },
    { title: "Chat With Astrologer", link: "/Astrologchat" },
    { title: "Marital Life", link: "/marital-life" },
    { title: "Love & Relationships", link: "/love-and-relationships" },
    { title: "Career & Job", link: "/career-job" },
    { title: "Cheating & Affairs", link: "/cheating-affairs" },
    { title: "Numerology", link: "/numerology" },
    { title: "Break-Up & Divorce", link: "/breakup-divorce" },
    { title: "Vedic Astrology", link: "/vedic-astrology" },
    { title: "Kids & Education", link: "/kids-education" },
    { title: "Tarot Reading", link: "/tarot-reading" },
    { title: "Relationship Counseling", link: "/relationship-counseling" },
  ],
  muhurat: [
    { title: "Choghadiya", link: "/choghadiya" },
    { title: "Rahu Kaal", link: "/rahukaal" },
    { title: "Shubha Hora", link: "/shubhahora" },
    { title: "Gowri Panchangam", link: "/gowri" },
  ],
  // onlinePuja: [
  //   { title: "Love and Break-up", link: "/love-breakup", isNew: true },
  //   { title: "Marriage and Divorce Issues", link: "/marriage-divorce" },
  //   { title: "Grah and Nakshatra Shanti Puja", link: "/grah-shanti" },
  //   { title: "Manokamna Poorti Pujas", link: "/manokamna-poorti" },
  //   { title: "Money and Debt", link: "/money-debt" },
  // ],
  horoscope: [
    { title: "Daily Horoscope", link: "/DailyHoroscope" },
    { title: "Monthly Horoscope", link: "/monthly-horoscope" },
    { title: "Yearly Horoscope", link: "/yearly-horoscope" },
    { title: "Today's Panchang", link: "/Panchangs" },
  ],
  freeServices: [
    {
      title: "Vrat and Upvaas",
      submenu: [
        { title: "Purnima Vrat", link: "/Purnima" },
        { title: "Amavasya Dates", link: "/amavasya" },
        { title: "Ekadashi Vrat", link: "/ekadashi" },
        { title: "Pradosh Vrat", link: "/pradoshvrat" },
        { title: "Sankashti Chaturthi", link: "/sankashti" },
        { title: "Vinayaka Chaturthi", link: "/vinayaka" },
        { title: "Sankranti Dates", link: "/sankranti" },
        { title: "Satyanarayan Puja", link: "/satyanarayan" },
      ],
    },
  ],
  store: [
    { title: "Blue Sapphire", link: "/blue-sapphire" },
    { title: "Blood Blue Sapphire", link: "/blood-blue-sapphire" },
    { title: "Yellow Sapphire", link: "/yellow-sapphire" },
    { title: "Emerald", link: "/emerald" },
    { title: "Ruby", link: "/ruby" },
    { title: "More Categories", link: "/more-categories" },
  ],
};


import { Link } from "react-router-dom"; // If using react-router-dom

const MobileMenu = ({ isOpen, onClose }) => {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];
  const [expandedCategories, setExpandedCategories] = useState([]);

  const toggleCategory = (category) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto top-20">
      <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
        {/* <h2 className="text-xl font-semibold">{t.menu || "Menu"}</h2> */}
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      <div className="p-4">
        {Object.entries(menuData).map(([category, items]) => (
          <div key={category} className="mb-4">
            <button
              onClick={() => toggleCategory(category)}
              className="w-full flex justify-between items-center p-3 bg-gray-50 text-black rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="font-semibold capitalize">
                {t[category] || category}
              </span>
              {expandedCategories.includes(category) ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>

            {expandedCategories.includes(category) && (
              <div className="pl-4 mt-2 space-y-1">
                {items.map((item) => (
                  <div key={item.title}>
                    <Link
                      to={item.link || "#"}
                      className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <span>
                        {t[item.title.toLowerCase().replace(/\s+/g, '')] ||
                          item.title}
                      </span>
                      {item.isNew && (
                        <span className="ml-2 text-xs bg-yellow-400 text-black px-2 py-0.5 rounded-full">
                          {t.New || "New"}
                        </span>
                      )}
                    </Link>
                    {item.submenu && (
                      <div className="pl-4 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={subItem.link || "#"}
                            className="p-3 hover:bg-gray-50 rounded-lg transition-colors"
                          >
                            {t[subItem.title.toLowerCase().replace(/\s+/g, '')] ||
                              subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Add Buttons Below */}
        <div className="mt-6 space-y-4 flex-wrap">
          <Link
            to="/AstrologerListing"
            className="block text-center p-4 bg-yellow-500 text-black rounded-full hover:bg-white  hover:border-2 hover:border-yellow-500 transition-colors"
          >
            {t['talktoastrologer'] || "Talk To Astrologer"}
          </Link>
          <Link
            to="/Astrologchat"
            className="block text-center p-4 bg-yellow-500 text-black rounded-full hover:bg-white hover:border-2 hover:border-yellow-500 transition-colors"
          >
            {t['chatwithastrologer'] || "Chat With Astrologer"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
