import { useState, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Plant {
  name: string;
  category: string;
  sunlight: string;
  water: string;
}

export default function MyPlants() {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [sunlight, setSunlight] = useState("");
  const [water, setWater] = useState("");

  // Load plants from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("myPlants");
    if (saved) setPlants(JSON.parse(saved));
  }, []);

  // Save plants to localStorage whenever updated
  useEffect(() => {
    localStorage.setItem("myPlants", JSON.stringify(plants));
  }, [plants]);

  const handleAddPlant = () => {
    if (!name) return; // require plant name
    const newPlant: Plant = { name, category, sunlight, water };
    setPlants([...plants, newPlant]);
    setName("");
    setCategory("");
    setSunlight("");
    setWater("");
  };

  const handleDeletePlant = (index: number) => {
    setPlants(plants.filter((_, i) => i !== index));
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-green-800">🌿 My Plants</h1>

        {/* Add Plant Form */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Add a New Plant</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Input
              placeholder="Plant Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Category (e.g., Flower, Vegetable)"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <Input
              placeholder="Sunlight Requirement"
              value={sunlight}
              onChange={(e) => setSunlight(e.target.value)}
            />
            <Input
              placeholder="Water Requirement"
              value={water}
              onChange={(e) => setWater(e.target.value)}
            />
            <Button
              onClick={handleAddPlant}
              className="bg-green-700 hover:bg-green-800 text-white w-full"
            >
              Add Plant
            </Button>
          </CardContent>
        </Card>

        {/* Display Added Plants */}
        <div className="space-y-3">
          {plants.length === 0 && (
            <p className="text-center text-muted-foreground">No plants added yet.</p>
          )}
          {plants.map((plant, idx) => (
            <Card key={idx} className="bg-white">
              <CardContent>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{plant.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Category: {plant.category || "-"} | Sunlight: {plant.sunlight || "-"} | Water: {plant.water || "-"}
                    </p>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeletePlant(idx)}
                  >
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
