import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { getTranslation } from "@/lib/translations";

const COLORS = ["#4ade80", "#facc15", "#f87171"];

const plantHealthData = [
  { name: "Healthy", value: 70 },
  { name: "Needs Attention", value: 20 },
  { name: "Diseased", value: 10 },
];

const roadmapSteps = [
  { step: 1, title: "Enter Region & Soil Info" },
  { step: 2, title: "Get Crop Recommendations" },
  { step: 3, title: "Fertilization & Watering Schedule" },
  { step: 4, title: "Monitor Plant Health" },
  { step: 5, title: "Disease Alerts & Treatment" },
];

export default function AIRoadmap() {
  const navigate = useNavigate();
  const { language } = useAuth();

  useEffect(() => {
    const handlePopState = () => {
      navigate("/dashboard", { replace: true });
    };
    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [navigate]);

  return (
    <div className="min-h-screen p-6 bg-gray-50 flex flex-col items-center">
      <div className="w-full max-w-5xl mb-4">
        <Button
          onClick={() => navigate("/dashboard", { replace: true })}
          className="bg-gray-800 text-white hover:bg-gray-900"
        >
          ← {getTranslation("Back", language)}
        </Button>
      </div>

      <h1 className="text-2xl font-bold text-green-800 mb-6">
        🌿 {getTranslation("AIRoadmap", language)}
      </h1>

      {/* Roadmap Steps */}
      <div className="w-full max-w-5xl mb-6 flex flex-col space-y-4">
        {roadmapSteps.map((step) => (
          <div
            key={step.step}
            className="flex items-center p-4 bg-white rounded-2xl shadow hover:shadow-lg transition"
          >
            <div className="w-10 h-10 rounded-full bg-green-700 text-white flex items-center justify-center font-bold mr-4">
              {step.step}
            </div>
            <div className="text-lg font-semibold">{step.title}</div>
          </div>
        ))}
      </div>

      {/* Plant Health Pie Chart */}
      <div className="w-full max-w-5xl mb-6 bg-white p-4 rounded-2xl shadow">
        <h2 className="font-semibold mb-3">{getTranslation("plantHealthOverview", language)}</h2>
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
      </div>
    </div>
  );
}
