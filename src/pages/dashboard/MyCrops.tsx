import React from "react";
import DashboardLayout from "@/components/DashboardLayout";

interface Crop {
  name: string;
  description: string;
  image: string;
  soilType: string;
  season: string;
}

const crops: Crop[] = [
  {
    name: "Arecanut",
    description:
      "Arecanut, also known as betel nut, is a tropical crop mainly grown in coastal Karnataka. It thrives in humid conditions with well-drained soil.",
    image: `${import.meta.env.BASE_URL}crops/arecanut.jpg`,
    soilType: "Laterite or red loamy soil",
    season: "June – December",
  },
  {
    name: "Pepper",
    description:
      "Black pepper is a popular spice crop that prefers partial shade and humid tropical climate. It’s often intercropped with arecanut or coconut.",
    image: `${import.meta.env.BASE_URL}crops/pepper.jpg`,
    soilType: "Fertile, well-drained loamy soil",
    season: "June – February",
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
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={crop.image}
                alt={crop.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{crop.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {crop.description}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <strong>Soil Type:</strong> {crop.soilType}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <strong>Season:</strong> {crop.season}
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
