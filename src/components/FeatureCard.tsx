"use client";

import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const FeatureCard = ({ icon, title, desc }: FeatureCardProps) => {
  return (
    <div className="group flex items-start gap-5 p-6 rounded-2xl hover:bg-rose-50/50 transition-all duration-300">
      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-100 to-rose-50 flex items-center justify-center text-rose-500 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-stone-900 text-lg mb-1">{title}</h3>
        <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
