

import { useState } from 'react';
import { X } from 'lucide-react';
import GemstoneShowcas from './GemstoneShowcas';
import GemstonesFAQ from './GemstonesFAQ';
import { useSelector } from 'react-redux';
import translations from '../../components/translations/translations';
import { useQuery,useMutation } from "@tanstack/react-query";
import { fetchGemstones,postGemstone } from "../../api/apiCalls";


const ProductInquiryModal = ({ isOpen, onClose, product, token }) => {
  const [formData, setFormData] = useState({
    message: ''
  });

  console.log(formData);

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    return newErrors;
  };

  const mutation = useMutation({
    mutationFn: postGemstone,
    onSuccess: () => {
      alert('Thank you for your inquiry. We will contact you shortly!');
      onClose();
    },
    onError: (error) => {
      console.error('Error submitting inquiry:', error);
      alert('Failed to submit the inquiry. Please try again later.');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      const payload = {
        gemstoneId: product._id,
        queryType: 'purchase',
        message: formData.message
      };

      mutation.mutate(payload);
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-xl relative max-h-[80vh] overflow-y-auto">
      <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          <X /> {/* Close Button using the X icon from lucide-react */}
        </button>

        <div className="p-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text  mb-6">Product Inquiry</h2>
          
          {/* Product Summary */}
          <div className="flex gap-4 mb-6 p-4 bg-gradient-to-r from-amber-200 to-yellow-500 rounded-lg">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-24 h-24 object-contain rounded-lg"
            />
            <div>
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.additionalInfo.origin}</p>
              <p className="text-sm text-gray-600">{product.additionalInfo.weightInGrams} Grames/ <span>{product.additionalInfo.weightInRatti} Ratti</span></p>
              <p className="text-sm text-gray-600">{product.additionalInfo.carat} carat</p>
              <p className="text-red-500 font-semibold">
                ₹ {Number(product.price).toLocaleString()}
              </p>
            </div>
          </div>

          {/* Inquiry Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your message"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};



// Updated Product Card Component

import { Heart, ShoppingCart, Star } from 'lucide-react';

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="relative bg-white w-[300px] rounded-2xl border mx-auto border-gray-200 shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl group"
      >
        {/* Wishlist Icon */}
       

        {/* Product Image */}
        <div 
          className="relative overflow-hidden"
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-64 object-contain rounded-2xl  transition-transform duration-300 group-hover:scale-105 p-2"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>

        {/* Product Details */}
        <div 
          className="p-5 space-y-2 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-gray-900 truncate max-w-[70%]">
              {product.name}
            </h3>
            <div className="flex items-center text-yellow-500">
            <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsWishlisted(!isWishlisted);
          }}
          className=" top-4 right-4 z-10 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
        >
          <Heart 
            className={`w-6 h-6 ${
              isWishlisted 
                ? 'fill-red-500 text-red-500' 
                : 'text-gray-500 hover:text-red-500'
            }`}
          />
        </button>
            </div>
          </div>

          <div className="text-sm text-gray-600 space-y-1">
            <p>Origin: {product.additionalInfo.origin}</p>
            <div className="flex justify-between">
              <span>{product.additionalInfo.weightInGrams} Grams</span>
              <span>{product.additionalInfo.weightInRatti} Ratti</span>
            </div>
            <p>{product.additionalInfo.carat} Carat</p>
          </div>

          <div className="flex justify-between items-center mt-4">
            <p className="text-2xl font-bold text-red-600">
              ₹ {Number(product.price).toLocaleString()}
            </p>
            {/* <button 
              className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center hover:bg-blue-700 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                // Add to cart logic
              }}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </button> */}
          </div>
        </div>
      </div>

      <ProductInquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
      />
    </>
  );
};


// Hero Banner Component
const HeroBanner = () => {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];
  return (
    <div className="relative w-full h-[300px] bg-[url('/api/placeholder/1920/300')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-transparent">
        <div className="max-w-6xl mx-auto px-4 h-full flex flex-col justify-center">
          <p className="text-yellow-400 font-semibold mb-2">
            {t.GenuineProducts}
          </p>
          <h1 className="text-white text-4xl font-bold max-w-md leading-tight">
            {t.GemstonesShop}
          </h1>
          <button className="mt-6 bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors w-fit">
            {t.ShopNow}
          </button>
        </div>
      </div>
    </div>
  );
};

// Best Sellers Section Component
const BestSellers = () => {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];
 
  const { data, isLoading, error } = useQuery({
    queryKey: ["fetchGemstones"], // Query key
    queryFn: fetchGemstones, // Fetch function
  });

  console.log("Fetched gemstones data:", data);

  if (isLoading) return <p>Loading gemstones...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text  text-center mb-12">
        {t.OurBestSellers}
        <div className="w-16 h-1 bg-red-500 mx-auto mt-2"></div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 "> 
        {data?.gemstones.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

// Main Component
const GemstoneShowcase = () => {
  return (
    <div>
      <HeroBanner />
      <BestSellers />
      <GemstoneShowcas/>
      <GemstonesFAQ/>
    </div>
  );
};

export default GemstoneShowcase;