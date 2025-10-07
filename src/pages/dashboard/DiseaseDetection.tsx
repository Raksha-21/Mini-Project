import React, { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";

const DiseaseDetection: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [result, setResult] = useState<string>("");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const analyzeDisease = () => {
    // Placeholder for ML model integration
    setResult("✅ No visible disease detected. Crop looks healthy!");
  };

  return (
    <DashboardLayout>
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-6 text-green-800 dark:text-green-300">
          Disease Detection
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mb-4"
          />

          {image && (
            <div className="mb-4">
              <img
                src={image}
                alt="Uploaded crop"
                className="mx-auto w-64 h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          )}

          <button
            onClick={analyzeDisease}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Analyze Disease
          </button>

          {result && (
            <div className="mt-4 text-lg font-medium text-gray-700 dark:text-gray-200">
              {result}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DiseaseDetection;
