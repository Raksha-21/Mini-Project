import React, { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Edit, Trash2, Camera, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Plant {
  id: number;
  name: string;
  category: string;
  temperature: string;
  water: string;
  sunlight: string;
  soil: string;
  planted: string;
  status: "Healthy" | "Needs Attention";
}

export default function PlantInventoryPage() {
  const navigate = useNavigate();

  const [plants, setPlants] = useState<Plant[]>([
    {
      id: 1,
      name: "Tomato",
      category: "Vegetable",
      temperature: "20°C - 30°C",
      water: "Medium",
      sunlight: "Full Sun",
      soil: "Loamy, pH 6.0 - 6.8",
      planted: "12 Jun 2025",
      status: "Healthy",
    },
    {
      id: 2,
      name: "Rose",
      category: "Flower",
      temperature: "18°C - 28°C",
      water: "High",
      sunlight: "Partial / Full Sun",
      soil: "Well-drained, pH 6.0 - 7.0",
      planted: "20 May 2025",
      status: "Needs Attention",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newPlant, setNewPlant] = useState<Omit<Plant, "id">>({
    name: "",
    category: "",
    temperature: "",
    water: "",
    sunlight: "",
    soil: "",
    planted: "",
    status: "Healthy",
  });

  const handleAddPlant = () => {
    if (!newPlant.name) return;
    setPlants([...plants, { ...newPlant, id: plants.length + 1 }]);
    setNewPlant({
      name: "",
      category: "",
      temperature: "",
      water: "",
      sunlight: "",
      soil: "",
      planted: "",
      status: "Healthy",
    });
    setShowForm(false);
  };

  const handleDeletePlant = (id: number) => {
    setPlants(plants.filter((p) => p.id !== id));
  };

  const handleEditPlant = (plant: Plant) => {
    setNewPlant({ ...plant });
    setShowForm(true);
  };

  const handleScanPlant = (plant: Plant) => {
    alert(`Scan plant: ${plant.name} (UI only)`); // placeholder
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white p-6 flex flex-col items-center">
      
      {/* Back button */}
      <div className="w-full max-w-6xl mb-4">
        <Button
          variant="outline"
          className="flex items-center gap-2 text-emerald-700"
          onClick={() => navigate("/dashboard")}
        >
          <ArrowLeft className="h-4 w-4" /> Back to Dashboard
        </Button>
      </div>

      <Card className="w-full max-w-6xl shadow-md">
        <CardHeader className="flex justify-between items-center border-b">
          <h2 className="text-2xl font-semibold text-emerald-700">
            🌿 Plant Inventory
          </h2>
          <Button
            className="bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-2"
            onClick={() => setShowForm(!showForm)}
          >
            <Plus className="h-4 w-4" /> {showForm ? "Close Form" : "Add Plant"}
          </Button>
        </CardHeader>

        {/* Add Plant Form */}
        {showForm && (
          <CardContent className="border-b border-emerald-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                placeholder="Plant Name"
                value={newPlant.name}
                onChange={(e) => setNewPlant({ ...newPlant, name: e.target.value })}
              />
              <Input
                placeholder="Category"
                value={newPlant.category}
                onChange={(e) => setNewPlant({ ...newPlant, category: e.target.value })}
              />
              <Input
                placeholder="Temperature"
                value={newPlant.temperature}
                onChange={(e) => setNewPlant({ ...newPlant, temperature: e.target.value })}
              />
              <Input
                placeholder="Water Requirement"
                value={newPlant.water}
                onChange={(e) => setNewPlant({ ...newPlant, water: e.target.value })}
              />
              <Input
                placeholder="Sunlight Requirement"
                value={newPlant.sunlight}
                onChange={(e) => setNewPlant({ ...newPlant, sunlight: e.target.value })}
              />
              <Input
                placeholder="Soil / pH"
                value={newPlant.soil}
                onChange={(e) => setNewPlant({ ...newPlant, soil: e.target.value })}
              />
              <Input
                placeholder="Planted Date"
                value={newPlant.planted}
                onChange={(e) => setNewPlant({ ...newPlant, planted: e.target.value })}
              />
              <select
                className="border rounded p-2 text-emerald-700"
                value={newPlant.status}
                onChange={(e) =>
                  setNewPlant({ ...newPlant, status: e.target.value as Plant["status"] })
                }
              >
                <option value="Healthy">Healthy</option>
                <option value="Needs Attention">Needs Attention</option>
              </select>
            </div>
            <Button
              className="mt-4 bg-emerald-700 hover:bg-emerald-800 text-white"
              onClick={handleAddPlant}
            >
              {newPlant.id ? "Update Plant" : "Add Plant"}
            </Button>
          </CardContent>
        )}

        <CardContent className="overflow-x-auto">
          <table className="w-full text-left border-collapse mt-4">
            <thead className="bg-emerald-100 text-emerald-800">
              <tr>
                <th className="p-3">Plant Name</th>
                <th className="p-3">Category</th>
                <th className="p-3">Temperature</th>
                <th className="p-3">Water</th>
                <th className="p-3">Sunlight</th>
                <th className="p-3">Soil / pH</th>
                <th className="p-3">Planted</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {plants.map((plant) => (
                <tr
                  key={plant.id}
                  className="border-b hover:bg-emerald-50 transition"
                >
                  <td className="p-3 font-medium">{plant.name}</td>
                  <td className="p-3">{plant.category}</td>
                  <td className="p-3">{plant.temperature}</td>
                  <td className="p-3">{plant.water}</td>
                  <td className="p-3">{plant.sunlight}</td>
                  <td className="p-3">{plant.soil}</td>
                  <td className="p-3">{plant.planted}</td>
                  <td
                    className={`p-3 font-semibold ${
                      plant.status === "Healthy"
                        ? "text-emerald-600"
                        : "text-amber-600"
                    }`}
                  >
                    {plant.status}
                  </td>
                  <td className="p-3 text-center space-x-2 flex justify-center">
                    <Button
                      size="sm"
                      className="bg-emerald-500 hover:bg-emerald-600 text-white"
                      onClick={() => handleScanPlant(plant)}
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-emerald-400 text-emerald-700"
                      onClick={() => handleEditPlant(plant)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-red-400 text-red-600"
                      onClick={() => handleDeletePlant(plant.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
