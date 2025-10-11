import React from "react";
import {
  CloudRain,
  Sun,
  Thermometer,
  Wind,
  Droplets,
  Cloud,
  Leaf,
} from "lucide-react";

interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
  rainfallChance: number;
  condition: string;
}

interface SoilData {
  moisture: number;
  pH: number;
  nutrients: string;
  soilType: string;
}

const WeatherSoil: React.FC = () => {
  const weather: WeatherData = {
    temperature: 28,
    humidity: 76,
    windSpeed: 12,
    rainfallChance: 68,
    condition: "Rain expected",
  };

  const soil: SoilData = {
    moisture: 82,
    pH: 6.5,
    nutrients: "High nitrogen & organic content",
    soilType: "Loamy soil",
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-6">🌤️ Weather & Soil Conditions</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Weather Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-transform hover:scale-[1.02]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-green-800 flex items-center gap-2">
              <CloudRain className="w-5 h-5 text-green-600" /> Weather Overview
            </h3>
            <span className="text-sm text-gray-500 italic">{weather.condition}</span>
          </div>

          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <div className="flex items-center gap-2">
              <Thermometer className="w-5 h-5 text-orange-500" />
              <span>Temperature: {weather.temperature}°C</span>
            </div>
            <div className="flex items-center gap-2">
              <Droplets className="w-5 h-5 text-blue-500" />
              <span>Humidity: {weather.humidity}%</span>
            </div>
            <div className="flex items-center gap-2">
              <Wind className="w-5 h-5 text-sky-600" />
              <span>Wind: {weather.windSpeed} km/h</span>
            </div>
            <div className="flex items-center gap-2">
              <Cloud className="w-5 h-5 text-indigo-500" />
              <span>Rainfall Chance: {weather.rainfallChance}%</span>
            </div>
          </div>

          <div className="mt-5 bg-gray-100 p-3 rounded-xl">
            <p className="text-sm text-gray-700">
              🌦️ <strong>Tip:</strong> Rain predicted tomorrow — consider reducing watering schedule to avoid overwatering.
            </p>
          </div>
        </div>

        {/* Soil Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-transform hover:scale-[1.02]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-green-800 flex items-center gap-2">
              <Leaf className="w-5 h-5 text-green-600" /> Soil Condition
            </h3>
            <span className="text-sm text-gray-500 italic">{soil.soilType}</span>
          </div>

          <div className="space-y-3 text-gray-700">
            <div>
              <p className="text-sm mb-1">Soil Moisture</p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-green-500 h-3 rounded-full"
                  style={{ width: `${soil.moisture}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">{soil.moisture}% optimal</p>
            </div>

            <div>
              <p className="text-sm mb-1">pH Level: {soil.pH}</p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-yellow-500 h-3 rounded-full"
                  style={{ width: `${(soil.pH / 14) * 100}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">Neutral to slightly acidic range</p>
            </div>

            <div className="mt-3 bg-green-50 border border-green-200 p-3 rounded-xl">
              <p className="text-sm">
                🌿 <strong>Soil Nutrients:</strong> {soil.nutrients}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Forecast Section */}
      <div className="mt-8 bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center gap-2">
          <Sun className="w-5 h-5 text-yellow-500" /> 3-Day Weather Forecast
        </h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          {[
            { day: "Saturday", temp: 29, rain: 40, icon: "☀️" },
            { day: "Sunday", temp: 27, rain: 70, icon: "🌧️" },
            { day: "Monday", temp: 26, rain: 65, icon: "🌦️" },
          ].map((f, i) => (
            <div
              key={i}
              className="p-4 bg-green-50 rounded-xl hover:bg-green-100 transition"
            >
              <p className="font-medium text-green-700">{f.day}</p>
              <p className="text-3xl my-1">{f.icon}</p>
              <p className="text-sm text-gray-600">{f.temp}°C • {f.rain}% rain</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherSoil;
