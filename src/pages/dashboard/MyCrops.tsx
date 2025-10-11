import React from "react";

interface CropInfo {
  name: string;
  scientificName: string;
  image: string;
  climate: string;
  soil: string;
  watering: string;
  growth: string;
}

const crops: CropInfo[] = [
  {
    name: "Arecanut (Supari)",
    scientificName: "Areca catechu",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Arecanut_tree.jpg",
    climate: "Warm and humid tropical regions with 1500–2500 mm rainfall.",
    soil: "Deep, well-drained loamy soil rich in organic matter.",
    watering: "Regular watering, especially during dry spells.",
    growth: "Takes 5–8 years to mature; harvested twice a year.",
  },
  {
    name: "Black Pepper (Kali Mirch)",
    scientificName: "Piper nigrum",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Black_pepper_plant_with_fruits.jpg",
    climate: "Hot and humid climate; 10–40°C temperature range with good rainfall.",
    soil: "Fertile, well-drained soil with rich organic content.",
    watering: "Frequent light watering; avoid waterlogging.",
    growth: "Starts yielding after 2–3 years; peak production in 7–8 years.",
  },
];

const MyCrops: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-6">🌱 My Crops</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {crops.map((crop, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-transform transform hover:scale-[1.02]"
          >
            <img
              src={crop.image}
              alt={crop.name}
              className="h-56 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                {crop.name}
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Scientific Name:</strong> {crop.scientificName}
              </p>
              <p className="text-sm text-gray-700 mb-1">
                <strong>Ideal Climate:</strong> {crop.climate}
              </p>
              <p className="text-sm text-gray-700 mb-1">
                <strong>Soil Type:</strong> {crop.soil}
              </p>
              <p className="text-sm text-gray-700 mb-1">
                <strong>Watering:</strong> {crop.watering}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Growth Duration:</strong> {crop.growth}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCrops;
