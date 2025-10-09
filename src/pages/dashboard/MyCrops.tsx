import React, { useState } from "react";
import { FiTrash2, FiEdit } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import backgroundImage from "@/assets/background.png"; // your background image path

interface Crop {
  name: string;
  type: string;
  soilType: string;
  status: "Newly Grown" | "Needs Attention" | "Healthy";
  health: number;
  growth: string;
  icon: string;
}

const MyCrops: React.FC<{onBack: () => void}> = ({ onBack }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [crops, setCrops] = useState<Crop[]>([]);
  const [newCrop, setNewCrop] = useState<Crop>({
    name: "",
    type: "",
    soilType: "Red",
    status: "Newly Grown",
    health: 0,
    growth: "",
    icon: "🌱",
  });

  const handleAddCrop = () => {
    setCrops([...crops, newCrop]);
    setIsFormVisible(false);
    setNewCrop({
      name: "",
      type: "",
      soilType: "Red",
      status: "Newly Grown",
      health: 0,
      growth: "",
      icon: "🌱",
    });
  };

  const handleDeleteCrop = (index: number) => {
    setCrops(crops.filter((_, i) => i !== index));
  };

  return (
    <div
      className="min-h-screen p-6 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Light overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 space-y-6">
        <Button
          variant="outline"
          className="bg-white/70 text-green-800 hover:bg-white"
          onClick={onBack}
        >
          ← Back to Dashboard
        </Button>

        <h2 className="text-3xl font-extrabold text-center text-green-800">
          My Crops
        </h2>

        <Button
          className="bg-green-600 hover:bg-green-700 text-white"
          onClick={() => setIsFormVisible(true)}
        >
          Add New Crop
        </Button>

        {/* Crop Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {crops.map((crop, index) => (
            <div
              key={index}
              className="relative bg-white/80 rounded-xl shadow-md p-4 flex flex-col justify-between"
            >
              {/* Edit/Delete */}
              <div className="absolute top-2 right-2 flex gap-2 text-gray-500">
                <FiEdit className="cursor-pointer" />
                <FiTrash2
                  className="cursor-pointer"
                  onClick={() => handleDeleteCrop(index)}
                />
              </div>

              {/* Crop Info */}
              <div className="text-center space-y-2">
                <div className="text-4xl">{crop.icon}</div>
                <h4 className="font-bold text-green-800">{crop.name}</h4>
                <p>Type: {crop.type}</p>
                <p>Soil: {crop.soilType}</p>
                <p>
                  Status:{" "}
                  <span
                    className={`font-bold ${
                      crop.status === "Healthy"
                        ? "text-green-600"
                        : crop.status === "Needs Attention"
                        ? "text-yellow-600"
                        : "text-blue-600"
                    }`}
                  >
                    {crop.status}
                  </span>
                </p>
                <p>Health: {crop.health}%</p>
                <p>Growth: {crop.growth}</p>
              </div>

              {/* Status Indicator */}
              <div className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-green-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Add Crop Form Modal */}
      {isFormVisible && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative space-y-4">
            <h3 className="text-xl font-bold text-green-800">Add New Crop</h3>

            <Select
              value={newCrop.icon}
              onChange={(e) => setNewCrop({ ...newCrop, icon: e.target.value })}
            >
              <option value="🍌">Banana</option>
              <option value="🥥">Coconut</option>
              <option value="🌰">Cashew</option>
              <option value="🌿">Arecanut</option>
              <option value="🌶️">Black Pepper</option>
            </Select>

            <Input
              placeholder="Crop Name"
              value={newCrop.name}
              onChange={(e) => setNewCrop({ ...newCrop, name: e.target.value })}
            />

            <Select
              value={newCrop.type}
              onChange={(e) => setNewCrop({ ...newCrop, type: e.target.value })}
            >
              <option value="">Select Type</option>
              <option value="Fruit">Fruit</option>
              <option value="Vegetable">Vegetable</option>
              <option value="Grain">Grain</option>
              <option value="Plantation">Plantation</option>
            </Select>

            <Select
              value={newCrop.soilType}
              onChange={(e) =>
                setNewCrop({ ...newCrop, soilType: e.target.value })
              }
            >
              <option value="Red">Red</option>
              <option value="Alluvial">Alluvial</option>
              <option value="Loamy">Loamy</option>
              <option value="Sandy">Sandy</option>
            </Select>

            <Select
              value={newCrop.status}
              onChange={(e) =>
                setNewCrop({ ...newCrop, status: e.target.value as Crop["status"] })
              }
            >
              <option value="Newly Grown">Newly Grown</option>
              <option value="Needs Attention">Needs Attention</option>
              <option value="Healthy">Healthy</option>
            </Select>

            <Input
              placeholder="Health (%)"
              type="number"
              min={0}
              max={100}
              value={newCrop.health}
              onChange={(e) =>
                setNewCrop({ ...newCrop, health: Number(e.target.value) })
              }
            />

            <Input
              placeholder="Growth (e.g., 3 months)"
              value={newCrop.growth}
              onChange={(e) =>
                setNewCrop({ ...newCrop, growth: e.target.value })
              }
            />

            <div className="flex gap-4 justify-end mt-4">
              <Button
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={handleAddCrop}
              >
                Submit Crop
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsFormVisible(false)}
                className="text-green-600 border-green-600"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCrops;
