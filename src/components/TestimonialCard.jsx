import React from "react";

function TestimonialCard({ name, role, testimonial }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <p className="text-gray-700 italic mb-4">"{testimonial}"</p>
      <div className="font-bold text-blue-700">{name}</div>
      <div className="text-gray-500 text-sm">{role}</div>
    </div>
  );
}

export default TestimonialCard; 