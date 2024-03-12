import React from "react";

interface CampaignProps {
  image: string;
  title: string;
  time: string;
}

const Campaign: React.FC<CampaignProps> = ({ image, title, time }) => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-md shadow-md mt-8">
      <div className="overflow-hidden h-64 rounded-md hover:scale-110 transition-transform">
        <img src={image} alt={title} className="object-cover" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{time}</p>
    </div>
  );
};

export default Campaign;
