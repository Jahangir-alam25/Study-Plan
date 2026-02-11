// components/sections/AIFeatures.tsx
import React from "react";
import { Cpu, Lightbulb, TrendingUp, Shield } from "lucide-react";

const features = [
  {
    icon: <Cpu className="w-8 h-8 text-primary-500" />,
    title: "Smart AI Planner",
    description:
      "Our AI automatically suggests the best study plan based on your goals and schedule.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-primary-500" />,
    title: "AI Insights",
    description:
      "Get smart recommendations and tips to improve learning efficiency.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary-500" />,
    title: "Progress Analytics",
    description:
      "AI tracks your progress and highlights areas where you can improve.",
  },
  {
    icon: <Shield className="w-8 h-8 text-primary-500" />,
    title: "Secure & Private",
    description:
      "AI works on your data locally to ensure your privacy and security.",
  },
];

const AIFeatures = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          🧠 AI-Powered Features
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Enhance your productivity and learning with our intelligent AI tools.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-8 hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;
