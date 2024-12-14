
import { login } from "../../redux/auth/authSlice";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../../redux/language/languageSlice.js";
import { logout } from "../../redux/auth/authSlice"; // Import logout action
import translations from "../translations/translations";
import { Link } from "react-router-dom";
import { Menu, X, User, Phone, MessageSquare } from "lucide-react";
import FullscreenMenu from "./FullscreenMenu";
import UserProfileDropdown from "./UserProfileDropdown";
import MobileMenu from "./MobileMenu";
import SignInPage from "../../pages/SignIn/SignInPage.jsx";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const language = useSelector((state) => state.language.language);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user); // Get user data from Redux

  const dispatch = useDispatch();
  const t = translations[language];

  // Callback to handle successful login
  const handleLoginSuccess = (userData) => {
    dispatch(login(userData)); // Dispatch login action with user data
    setIsSignInOpen(false); // Close the sign-in modal
  };

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
    setIsProfileOpen(false); // Close the profile dropdown
  };

  return (
    <nav className="w-full bg-white shadow-md px-4 py-2 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
            <Link to="/">
              <span className="text-white text-3xl">☀</span>
            </Link>
          </div>
          <div>
            <Link to="/">
              <h1 className="text-4xl font-semibold">OHM Astro</h1>
            </Link>
            <p className="text-md text-gray-600">{t.consultOnline}</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/AstrologerListing"
            className="flex items-center space-x-2 bg-yellow-400 hover:bg-white hover:border-amber-200 hover:border-2 text-black px-4 py-3 rounded-full transition-colors"
          >
            <Phone size={20} />
            <span className="font-semibold">{t.talkToAstrologer}</span>
          </Link>

          <Link
            to="/Astrologchat"
            className="flex items-center space-x-2 bg-yellow-400 hover:bg-white hover:border-amber-200 hover:border-2 text-black px-4 py-3 rounded-full transition-colors"
          >
            <MessageSquare size={20} />
            <span className="font-semibold">{t.chatWithAstrologer}</span>
          </Link>

          <select
            className="bg-transparent border border-gray-300 rounded px-2 py-1"
            value={language}
            onChange={(e) => dispatch(setLanguage(e.target.value))}
          >
            <option value="ENG">ENG</option>
            <option value="HIN">हिंदी</option>
          </select>

          <div className="relative">
            {isAuthenticated ? (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsProfileOpen(!isProfileOpen);
                  }}
                  className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <User size={20} />
                  <span className="font-semibold">{user?.name || "User"}</span>
                </button>

                {isProfileOpen && (
                  <UserProfileDropdown
                    isOpen={isProfileOpen}
                    onClose={() => setIsProfileOpen(false)}
                    language={language}
                    onLogout={handleLogout} // Pass logout callback
                  />
                )}
              </>
            ) : (
              <button
                onClick={() => setIsSignInOpen(true)}
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <User size={20} />
                <span className="font-semibold">{t.signIn}</span>
              </button>
            )}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <FullscreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Sign In Modal */}
      {isSignInOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <SignInPage onClose={() => setIsSignInOpen(false)} onLoginSuccess={handleLoginSuccess} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;


