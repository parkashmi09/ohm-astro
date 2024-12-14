
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchastrologers } from "../api/apiCalls";
import { Star, Phone, X ,Home} from 'lucide-react';
import { Link } from "react-router-dom";

// Custom Modal Component
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="relative z-50 bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

// Call Modal Component
const CallIntakeForm = ({ isOpen, onClose, astrologer }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    timeOfBirth: "",
    placeOfBirth: "",
    maritalStatus: "",
    topicOfConcern: "",
    mobileNumber: "",
    includePartner: false,
    partnerDetails: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      timeOfBirth: "",
      placeOfBirth: "",
      gender: ""
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Call Intake Form</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        
        <div className="bg-yellow-100 p-4 rounded-lg mb-4">
          <p>Yay! You are eligible for first 3 min free session</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">First Name *</label>
              <input
                type="text"
                required
                className="w-full p-2 border rounded"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Gender *</label>
            <select 
              required
              className="w-full p-2 border rounded"
              value={formData.gender}
              onChange={(e) => setFormData({...formData, gender: e.target.value})}
            >
              <option value="">--Select--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Date of Birth *</label>
              <input
                type="date"
                required
                className="w-full p-2 border rounded"
                value={formData.dateOfBirth}
                onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Time of Birth *</label>
              <input
                type="time"
                required
                className="w-full p-2 border rounded"
                value={formData.timeOfBirth}
                onChange={(e) => setFormData({...formData, timeOfBirth: e.target.value})}
              />
              <div className="mt-1">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    checked={!formData.timeOfBirth}
                    onChange={(e) => setFormData({...formData, timeOfBirth: e.target.checked ? "" : formData.timeOfBirth})}
                  />
                  <span className="ml-2 text-sm">I Don't Know</span>
                </label>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Place of Birth *</label>
              <input
                type="text"
                required
                className="w-full p-2 border rounded"
                value={formData.placeOfBirth}
                onChange={(e) => setFormData({...formData, placeOfBirth: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Marital Status *</label>
              <select
                required
                className="w-full p-2 border rounded"
                value={formData.maritalStatus}
                onChange={(e) => setFormData({...formData, maritalStatus: e.target.value})}
              >
                <option value="">--Select--</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Topic of Concern</label>
            <select
              className="w-full p-2 border rounded"
              value={formData.topicOfConcern}
              onChange={(e) => setFormData({...formData, topicOfConcern: e.target.value})}
            >
              <option value="">Select your concern</option>
              <option value="career">Career & Job</option>
              <option value="love">Love & Relationship</option>
              <option value="marriage">Marriage</option>
              <option value="health">Health</option>
              <option value="finance">Finance</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Mobile Number *</label>
            <div className="flex">
              <select className="w-24 p-2 border rounded-l">
                <option value="+91">+91</option>
                <option value="+1">+1</option>
              </select>
              <input
                type="tel"
                required
                className="flex-1 p-2 border rounded-r"
                value={formData.mobileNumber}
                onChange={(e) => setFormData({...formData, mobileNumber: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={formData.includePartner}
                onChange={(e) => setFormData({...formData, includePartner: e.target.checked})}
              />
              <span className="ml-2">Enter Partner's Details</span>
            </label>
          </div>

          {formData.includePartner && (
            <div className="space-y-4 border-t pt-4 mt-4">
              <h3 className="font-medium">Partner's Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">First Name *</label>
                  <input
                    type="text"
                    required={formData.includePartner}
                    className="w-full p-2 border rounded"
                    value={formData.partnerDetails.firstName}
                    onChange={(e) => setFormData({
                      ...formData,
                      partnerDetails: {...formData.partnerDetails, firstName: e.target.value}
                    })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Last Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    value={formData.partnerDetails.lastName}
                    onChange={(e) => setFormData({
                      ...formData,
                      partnerDetails: {...formData.partnerDetails, lastName: e.target.value}
                    })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Date of Birth *</label>
                  <input
                    type="date"
                    required={formData.includePartner}
                    className="w-full p-2 border rounded"
                    value={formData.partnerDetails.dateOfBirth}
                    onChange={(e) => setFormData({
                      ...formData,
                      partnerDetails: {...formData.partnerDetails, dateOfBirth: e.target.value}
                    })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Gender *</label>
                  <select
                    required={formData.includePartner}
                    className="w-full p-2 border rounded"
                    value={formData.partnerDetails.gender}
                    onChange={(e) => setFormData({
                      ...formData,
                      partnerDetails: {...formData.partnerDetails, gender: e.target.value}
                    })}
                  >
                    <option value="">--Select--</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded"
          >
            Start Call with {astrologer?.name || 'Astrologer'}
          </button>
        </form>
      </div>
    </Modal>
  );
};

const AstrologerCard = ({ astrologer }) => {
  const [showCallModal, setShowCallModal] = useState(false);

  // Fallback for missing or undefined data
  const safeAstrologer = {
    name: astrologer?.name || 'Astrologer',
    profileImage: astrologer?.profileImage || '/api/placeholder/300/400',
    rating: astrologer?.rating || 'N/A',
    specialties: astrologer?.specialties || [],
    pricing: astrologer?.pricing || 0,
    experience: astrologer?.experience || 0,
  };

  return (
    <div className="flex w-full max-w-md bg-white  rounded-xl shadow-lg border border-red-600 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Profile Image Section */}
      <div className="w-2/5 relative">
        <img
          src={safeAstrologer.profileImage}
          alt={`${safeAstrologer.name} profile`}
          className="w-full h-full object-cover"
        />
        {/* Rating Badge */}
        <div className="absolute top-3 left-3 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded-full flex items-center">
          {safeAstrologer.rating} <Star className="ml-1 w-3 h-3" />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-3/5 p-4 flex flex-col justify-between">
        {/* Header and Name */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            {safeAstrologer.name}
          </h3>

          {/* Specialties */}
          <div className="mb-3">
            {/* <h4 className="text-xs font-medium text-gray-500 mb-1 uppercase">
              Specialties
            </h4> */}
            <div className="flex flex-wrap gap-1">
              {safeAstrologer.specialties.length > 0 ? (
                safeAstrologer.specialties.slice(0, 3).map((spec) => (
                  <span
                    key={spec._id || spec.name}
                    className="bg-gray-100 text-gray-700 text-[10px] px-2 py-0.5 rounded-full"
                  >
                    {spec.name}
                  </span>
                ))
              ) : (
                <span className="text-xs text-gray-400">No specialties listed</span>
              )}
              {safeAstrologer.specialties.length > 3 && (
                <span className="text-xs text-gray-500 ml-1">
                  +{safeAstrologer.specialties.length - 3} more
                </span>
              )}
            </div>
            <p className="text-sm mx-2 ">
            Exp: {safeAstrologer.experience} year
            </p>
            <p className="text-sm mx-2">
            Hindi
            </p>
          </div>

          {/* Pricing */}
          <div className="text-lg font-bold text-yellow-600 mb-3">
            ₹{safeAstrologer.pricing}/Min
          </div>
        </div>

        {/* Action Section */}
        <div className="flex items-center justify-between">
          {/* Online Status */}
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-600 font-medium">
              Online Now
            </span>
          </div>

          {/* Call Button */}
          <button
            onClick={() => setShowCallModal(true)}
            className="flex items-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold text-xs px-4 py-2 rounded-lg transition-colors duration-200"
          >
            <Phone className="w-3 h-3 mr-1" /> Call
          </button>
        </div>
      </div>

      {/* Call Modal */}
      <CallIntakeForm
        isOpen={showCallModal}
        onClose={() => setShowCallModal(false)}
        astrologer={astrologer}
      />
    </div>
  );
};




const AstrologerListing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [specializationFilter, setSpecializationFilter] = useState("All");
  const [sortBy, setSortBy] = useState("All");

  const { data: astrologerData, isLoading, error } = useQuery({
    queryKey: ["astrologers"],
    queryFn: fetchastrologers,
  });

  const specializations = [
    "All",
    "Marital Life",
    "Love & Relationship",
    "Career & Job",
    "Cheating & Affairs",
    "Finance & Business",
    "Break-Up & Divorce",
    "Vedic Astrology",
    "Kids & Education",
    "Tarot Reading",
    "Horary Astrology",
    "Psychic Reading",
    "Numerology",
    "Palm Reading",
    "Relationship Counseling",
  ];

  const sortOptions = [
    "Online",
    "Newest",
    "Oldest",
    "Lowest Price",
    "Highest Price",
    "Highest Rating",
    "Highest Review Count",
  ];

  const sortAstrologers = (astrologers) => {
    switch (sortBy) {
      case "Newest":
        return [...astrologers].sort(
          (a, b) => new Date(b.joinedDate) - new Date(a.joinedDate)
        );
      case "Oldest":
        return [...astrologers].sort(
          (a, b) => new Date(a.joinedDate) - new Date(b.joinedDate)
        );
      case "Lowest Price":
        return [...astrologers].sort(
          (a, b) => a.originalPrice - b.originalPrice
        );
      case "Highest Price":
        return [...astrologers].sort(
          (a, b) => b.originalPrice - a.originalPrice
        );
      case "Highest Rating":
        return [...astrologers].sort((a, b) => b.rating - a.rating);
      case "Highest Review Count":
        return [...astrologers].sort((a, b) => b.reviews - a.reviews);
      default:
        return astrologers;
    }
  };

  const filteredAstrologers = astrologerData?.data
  ? sortAstrologers(
      astrologerData.data.filter((astrologer) => {
        const matchesSearch =
          astrologer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          astrologer.specializations.some((spec) =>
            spec.toLowerCase().includes(searchTerm.toLowerCase())
          ) ||
          astrologer.language.some((lang) =>
            lang.toLowerCase().includes(searchTerm.toLowerCase())
          );

        const matchesSpecialization =
          specializationFilter === "All" ||
          astrologer.specializations.includes(specializationFilter);

        return matchesSearch && matchesSpecialization;
      })
    )
  : [];



console.log("specializations" , astrologerData)
  if (isLoading) return <p className="text-center w-full">Loading astrologers...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
       <nav className="bg-rose-500 text-white p-4">
        <div className="container mx-auto flex items-center gap-2">
          <span>
            {" "}
            <Link to="/"><Home className="w-5 h-5" /></Link> 
          </span>
          
          <span>
            <span className="font-medium">Call Astrologers </span>
          </span>
        </div>
      </nav>
      <div className="bg-yellow-400 p-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Need guidance for your life problems?</h1>
            <h2 className="text-2xl">Talk to the best Astrologers in India</h2>
            <div className="bg-white text-black px-4 py-2 rounded-full inline-block mt-4">
              First Session FREE
            </div>
          </div>
          <img
            src="https://cdn.anytimeastro.com/dashaspeaks/psychics/13ecd392-f1e7-4047-98ce-76600fe99498.png"
            alt="Astrologer"
            className="w-48 h-48 object-cover rounded-full"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="Search astrologers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
          <select
            value={specializationFilter}
            onChange={(e) => setSpecializationFilter(e.target.value)}
            className="border border-gray-300 p-2 rounded-md"
          >
            {specializations.map((spec) => (
              <option key={spec} value={spec}>
                {spec}
              </option>
            ))}
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 p-2 rounded-md"
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAstrologers.map((astrologer) => (
            <AstrologerCard key={astrologer._id
            } astrologer={astrologer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AstrologerListing;
