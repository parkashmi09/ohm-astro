// NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-red-600">404</h1>
        <p className="mt-2 text-xl">Page Not Found</p>
        <Link
          to="/"
          className="mt-4 inline-block px-6 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded-md"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
