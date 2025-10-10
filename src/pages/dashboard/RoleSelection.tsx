// src/pages/dashboard/RoleSelection.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const RoleSelection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-green-700 mb-4">Select Your Role</h1>
      <p className="text-gray-600 mb-8">Choose your role to get started</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          onClick={() => navigate("/home-gardener-questions")}
          className="cursor-pointer bg-white rounded-2xl p-6 shadow-md hover:shadow-lg border border-green-200 hover:scale-105 transition-all text-center"
        >
          <div className="text-4xl mb-3">🏡</div>
          <h2 className="text-lg font-semibold text-green-700">Home Gardener</h2>
          <p className="text-gray-500 mt-1 text-sm">
            Care for your plants and garden
          </p>
        </div>
        <div className="cursor-pointer bg-white rounded-2xl p-6 shadow-md border border-green-200 text-center">
          <div className="text-4xl mb-3">👨‍🌾</div>
          <h2 className="text-lg font-semibold text-green-700">Farmer</h2>
          <p className="text-gray-500 mt-1 text-sm">Manage crops, weather, and AI roadmap</p>
        </div>
        <div className="cursor-pointer bg-white rounded-2xl p-6 shadow-md border border-green-200 text-center">
          <div className="text-4xl mb-3">🧺</div>
          <h2 className="text-lg font-semibold text-green-700">Professional Gardener</h2>
          <p className="text-gray-500 mt-1 text-sm">Inventory, tasks, and reports</p>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
