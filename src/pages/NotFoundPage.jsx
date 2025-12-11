import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 text-center">
      <h1 className="text-5xl font-bold text-green-600 mb-4">Don't Try It 😎</h1>
      <p className="text-gray-600 mb-6 text-lg">
        The page you’re looking for doesn’t exist or you’re not allowed to access it.
      </p>
      <button
        onClick={() => navigate(-1)}
        className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        🔙 Go Back
      </button>
    </div>
  );
};

export default NotFoundPage;
