import React from "react";

const Features = () => {
   const featuresData = [
      {
        title: "High Performance",
        description: "Ultra-fast processing and seamless multitasking for demanding workloads.",
        icon: "⚡",
      },
      {
        title: "Scalability",
        description: "Scale from startups to enterprises without disruptions.",
        icon: "📈",
      },
      {
        title: "Cloud Integration",
        description: "Secure cloud syncing, backup, and global accessibility.",
        icon: "☁️",
      },
      {
        title: "AI-Powered Insights",
        description: "Predictive analytics and intelligent automation to boost efficiency.",
        icon: "🤖",
      },
      {
        title: "Advanced Security",
        description: "Multi-layer encryption and compliance with global standards.",
        icon: "🔒",
      },
      {
        title: "Cross-Platform Support",
        description: "Seamless experience across web, mobile, and desktop.",
        icon: "🌍",
      },
    ];
     return(
         <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
          <h1 className="text-4xl font-bold text-center mb-10">Prodect feature</h1>
            {featuresData.map((feature , index) => (
               <div key={index} 
               className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
               >
                     <div className="bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform" >{feature.icon}</div>
                     <h1 className="text-2xl font-semibold mb-2">{feature.title}</h1>
                     <p className="text-gray-300">{feature.description}</p>
               </div>
            ))}
         </div>
     )
}

export default Features;