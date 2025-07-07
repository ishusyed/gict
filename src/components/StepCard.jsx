import React from "react";

function StepCard({ step, title, description }) {
  return (
    <div className="bg-blue-50 rounded-lg p-6 flex flex-col items-center text-center shadow-sm">
      <div className="w-12 h-12 flex items-center justify-center bg-blue-700 text-white rounded-full text-xl font-bold mb-4">{step}</div>
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default StepCard; 