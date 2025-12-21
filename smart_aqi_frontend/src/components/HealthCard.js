import React from "react";
import { getHealthInfo } from "../utils/healthInfo"; // ✅ make sure this path is correct

const HealthCard = ({ aqi }) => {
  const health = getHealthInfo(aqi);

  // Determine background color based on AQI
  let color = "bg-green-100 text-green-800";
  if (aqi > 100 && aqi <= 150) {
    color = "bg-yellow-100 text-yellow-800";
  } else if (aqi > 150) {
    color = "bg-red-100 text-red-800";
  }

  return (
    <div className={`p-6 rounded-xl shadow ${color}`}>
      <h2 className="text-xl font-semibold mb-2">Health Recommendation</h2>
      <p className="mb-2">{health.recommendation}</p>
      <p className="text-sm font-medium">Precaution:</p>
      <p className="text-sm">{health.precaution}</p>
    </div>
  );
};

export default HealthCard;

