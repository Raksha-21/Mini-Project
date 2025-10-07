import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Tip {
  id: number;
  title: string;
  description: string;
}

export default function Tips() {
  const [tips, setTips] = useState<Tip[]>([
    { id: 1, title: "Watering", description: "Water your plants early in the morning." },
    { id: 2, title: "Sunlight", description: "Most indoor plants need indirect sunlight." },
    { id: 3, title: "Fertilizer", description: "Use organic fertilizers once a month." },
  ]);

  const [newTipTitle, setNewTipTitle] = useState("");
  const [newTipDesc, setNewTipDesc] = useState("");

  const handleAddTip = () => {
    if (!newTipTitle || !newTipDesc) return;
    const newTip: Tip = { id: Date.now(), title: newTipTitle, description: newTipDesc };
    setTips([newTip, ...tips]);
    setNewTipTitle("");
    setNewTipDesc("");
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-green-800">🌿 Home Gardening Tips</h1>

        {/* Add New Tip */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Add a Tip</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Input
              placeholder="Tip Title"
              value={newTipTitle}
              onChange={(e) => setNewTipTitle(e.target.value)}
            />
            <Input
              placeholder="Tip Description"
              value={newTipDesc}
              onChange={(e) => setNewTipDesc(e.target.value)}
            />
            <Button
              onClick={handleAddTip}
              className="bg-green-700 hover:bg-green-800 text-white w-full"
            >
              Add Tip
            </Button>
          </CardContent>
        </Card>

        {/* Display Tips */}
        <div className="space-y-3">
          {tips.map((tip) => (
            <Card key={tip.id} className="bg-white">
              <CardHeader>
                <CardTitle>{tip.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{tip.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
