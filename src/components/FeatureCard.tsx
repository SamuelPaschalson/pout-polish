import React from "react";

interface propTypes {
  img: React.ReactNode;
  title: string;
  desc: string;
}
const FeatureCard = ({ img, title, desc }: propTypes) => {
  return (
    <div className="flex items-center gap-8">
      <div className="flex-shrink-0 p-3 bg-accent/10 rounded-full">{img}</div>

      <div className="space-y-1">
        <h2 className="font-medium text-xl uppercase">{title}</h2>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
