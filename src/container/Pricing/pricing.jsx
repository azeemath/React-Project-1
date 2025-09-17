import React from "react";
const plans = [
   {
     name: "Basic",
     price: "$9/mo",
     features: [
       "10 GB Cloud Storage",
       "Basic AI Insights",
       "Email Support",
       "Single Device Access",
     ],
   },
   {
     name: "Pro",
     price: "$29/mo",
     features: [
       "100 GB Cloud Storage",
       "Advanced AI Analytics",
       "Priority Email + Chat Support",
       "Multi-Device Access",
       "Customizable Dashboard",
     ],
     
   },
   {
     name: "Enterprise",
     price: "$99/mo",
     features: [
       "Unlimited Storage",
       "Full AI Automation Tools",
       "24/7 Dedicated Support",
       "Team Collaboration (50+ Users)",
       "Security & Compliance Features",
       "Custom Integrations",
     ],
   },
 ];

const Pricing = () => {
     return(
        <div className="min-h-screen bg-gray-800 text-white px-6 py-6">
           <h1 className="font-semibold text-4xl text-center mb-10">Pricing Plans</h1>
           <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
               {plans.map((plan , index) => (
                 <div key={index}
                      className=" hover:bg-indigo-500 shadow-lg  rounded-2xl p-8 hover:scale-105 transition-transform" 
                 >
                    <h2 className="text-2xl font-semibold mb-4 text-center">{plan.name}</h2>
                    <p className="text-3xl font-bold mb-6 text-center">{plan.price}</p>
                    <ul>
                      {plan.features.map((feature , idx) => (
                          <li key={idx} className="flex items-center">
                             <span className="ml-2">{feature}</span>
                          </li>
                      ))}
                    </ul>
                    <button className="w-full mt-5 bg-white text-gray-900 font-bold py-2 rounded-lg hover:bg-gray-200">Choose {plan.name}</button>
                 </div>
               ))}
           </div>
        </div>
     )
}

export default Pricing;