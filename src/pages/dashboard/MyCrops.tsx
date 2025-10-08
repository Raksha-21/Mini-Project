import React from "react";
import DashboardLayout from "@/components/DashboardLayout";

interface Crop {
  name: string;
  image: string;
  soilType: string;
}

const crops: Crop[] = [
  {
    name: "Arecanut",
    image: "public/crops/arecanut.jpg",
    soilType: "Laterite or red loamy soil",
  },
  {
    name: "Pepper",

    image: "public/crops/pepper.jpg",
    soilType: "Fertile, well-drained loamy soil",
  },
];

const MyCrops: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-6 text-green-800 dark:text-green-300">
          My Crops
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {crops.map((crop, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden">
              <img
                src={crop.image}
                alt={crop.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{crop.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <strong>Soil Type:</strong> {crop.soilType}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MyCrops;
