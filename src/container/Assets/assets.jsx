import React from "react";

const Assets = () => {

  const assetsData = [
   {
      title: "Hardware Assets",
      description:
       "High-performance laptops, desktops, servers, and networking equipment for reliable operations.",
      icon: "💻",
   },
   {
      title: "Software Assets",
      description:
       "Operating systems, productivity tools, security software, and development frameworks.",
      icon: "🖥️",
    },
    {
      title: "Digital Assets",
      description:
       "Cloud platforms, databases, AI/ML models, and blockchain solutions for the future.",
      icon: "☁️",
    },
    {
      title: "Services & Support",
      description:
       "Consulting, implementation, maintenance, and training to maximize your technology investment.",
      icon: "🛠️",
     },
];
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
       <h1 className="text-4xl font-bold text-center mb-10">
         Technology Product Assets
       </h1>
       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {assetsData.map((asset, index) => (
              <div key={index}
                  className="bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform"
               >
                 <div className="text-5xl mb-4">{asset.icon}</div>
                 <h1 className="text-2xl font-semibold mb-2">{asset.title}</h1>
                 <p className="text-gray-300">{asset.description}</p>
              </div>
          ))}
       </div>
    </div>
  );
};

export default Assets;
