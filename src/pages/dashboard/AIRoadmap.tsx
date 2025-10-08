import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

const plantHealthData = [
  { name: "Healthy", value: 60 },
  { name: "Needs Attention", value: 25 },
  { name: "Diseased", value: 15 },
];

const COLORS = ["#4ade80", "#facc15", "#f87171"];

const growthStages = [
  { stage: "Seed", status: 1 },
  { stage: "Germination", status: 1 },
  { stage: "Vegetative", status: 2 },
  { stage: "Flower/Fruit", status: 3 },
  { stage: "Harvest", status: 3 },
];

const taskProgress = [
  { task: "Watering", done: 4, pending: 1 },
  { task: "Fertilizing", done: 2, pending: 2 },
  { task: "Pest Check", done: 1, pending: 3 },
];

export default function AIRoadmapFarmers() {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-green-800">🌾 AI Roadmap for Farmers</h1>

        {/* Crop Health Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Crop Health Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={plantHealthData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {plantHealthData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Crop Growth Timeline */}
        <Card>
          <CardHeader>
            <CardTitle>Growth Stages</CardTitle>
          </CardHeader>
          <CardContent className="flex space-x-4 justify-between">
            {growthStages.map((stage, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold ${
                    stage.status === 1
                      ? "bg-green-600"
                      : stage.status === 2
                      ? "bg-yellow-500"
                      : "bg-gray-400"
                  }`}
                >
                  {stage.stage[0]}
                </div>
                <span className="text-sm mt-2">{stage.stage}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Task Progress Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Task Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={taskProgress} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="task" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="done" stackId="a" fill="#4ade80" />
                <Bar dataKey="pending" stackId="a" fill="#f87171" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
