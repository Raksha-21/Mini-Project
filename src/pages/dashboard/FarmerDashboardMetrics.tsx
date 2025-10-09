import { Card } from "@/components/ui/card";
import { Activity, ArrowUp, AlertTriangle, CheckCircle, CloudRain } from "lucide-react";

export default function CombinedMetricsWeather() {
  return (
    <section className="space-y-6">
      {/* 🌤 Metrics + Weather Row */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* --- Metrics Cards --- */}
        <Card className="p-6 rounded-2xl shadow-md bg-white border-none lg:col-span-3">
          <h3 className="font-semibold text-gray-800 mb-4">Farm Overview</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {/* Active Crops */}
            <div className="p-4 bg-green-50 rounded-xl flex flex-col items-center shadow-sm">
              <Activity className="text-green-600 mb-2" />
              <p className="text-2xl font-bold text-gray-800">12</p>
              <p className="text-sm text-gray-600">Active Crops</p>
            </div>

            {/* Healthy % */}
            <div className="p-4 bg-green-100 rounded-xl flex flex-col items-center shadow-sm">
              <CheckCircle className="text-green-500 mb-2" />
              <p className="text-2xl font-bold text-gray-800">85%</p>
              <p className="text-sm text-gray-600">Healthy</p>
            </div>

            {/* Need Attention */}
            <div className="p-4 bg-amber-50 rounded-xl flex flex-col items-center shadow-sm">
              <AlertTriangle className="text-orange-500 mb-2" />
              <p className="text-2xl font-bold text-gray-800">3</p>
              <p className="text-sm text-gray-600">Need Attention</p>
            </div>

            {/* Growth Rate */}
            <div className="p-4 bg-green-50 rounded-xl flex flex-col items-center shadow-sm">
              <ArrowUp className="text-green-600 mb-2" />
              <p className="text-2xl font-bold text-gray-800">+12%</p>
              <p className="text-sm text-gray-600">Growth Rate</p>
            </div>
          </div>
        </Card>

        {/* --- Weather Alert Card --- */}
        <Card className="p-6 rounded-2xl shadow-md bg-white border-none flex flex-col justify-between lg:col-span-2">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <CloudRain className="text-blue-400 w-5 h-5" />
              <h4 className="font-semibold text-gray-800">Weather Alert</h4>
            </div>
            <p className="text-gray-700 text-sm mb-4">
              🌧️ Rain predicted tomorrow — reduce watering schedule
            </p>
          </div>

          {/* Mini precipitation chart (simple bar style) */}
          <div className="flex items-end gap-1 h-14 mb-3">
            {[40, 60, 80, 50, 70, 90].map((h, i) => (
              <div
                key={i}
                className="bg-green-400 rounded w-2"
                style={{ height: `${h}%` }}
              ></div>
            ))}
          </div>

          <div className="text-xs text-gray-600">
            <p>🌡 Temperature: 28°C</p>
            <p>💧 Humidity: 75%</p>
            <p>🌬 Wind: 12 km/h</p>
            <p className="italic text-gray-500 mt-1">
              (Estimated 20% irrigation reduction)
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
