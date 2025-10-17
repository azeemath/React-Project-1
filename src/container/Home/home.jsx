import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-900 text-white p-1">
      
      <section className="text-center px-6 py-20">
        <h1 className="text-5xl font-bold mb-4">
          Build Smarter with Our Technology Product
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
          An AI-powered platform designed to make your work faster, safer, and more efficient. 
          Trusted by businesses worldwide.
        </p>
        <div>
          <Link to="/productCard">
             <button className="bg-indigo-600 px-6 py-3 rounded-lg mr-4 hover:bg-indigo-700">
               Get Started
             </button>
          </Link>
          <Link to="/Learnmore">
             <button className="border border-gray-400 px-6 py-3 rounded-lg hover:bg-gray-800">
               Learn More
             </button>
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8 px-6 py-16 max-w-6xl mx-auto mb-20">
        <div className="p-6 bg-gray-800 rounded-xl">
          <h3 className="text-xl font-semibold mb-2"> ⏰ 24/7 Accessibility</h3>
          <p className="text-gray-400">Customers can access your product information anytime, anywhere.<br/>
                      Helps global reach, not limited by time zones.
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">💻📱 Showcase of Product Features</h3>
          <p className="text-gray-400">Top-level encryption and privacy-first architecture.<br/>
                      Can use images, videos, or interactive previews.
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">🛡️✔️ Customer Trust & Branding</h3>
          <p className="text-gray-400">A professional website builds credibility and trust.
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">📈 Scalability</h3>
          <p className="text-gray-400">You can keep adding new features, sections, or integrations without limits.<br/>
                      Works for both small startups and big enterprises.
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">👥 Community Building</h3>
          <p className="text-gray-400">Can integrate reviews, testimonials, or forums.<br/>
                     Creates engagement and trust among users.
          </p>
        </div>

      </section>

      <section className="text-center py-20 mb-20 mt-8 bg-[url(./src/assets/technology.jpg)] bg-cover bg-center lg:w-250 lg:h-150 relative lg:left-33 border-20 rounded-2xl">
         <div className="relative lg:top-40">
           <h2 className="lg:text-4xl font-extrabold lg:mb-4">Ready to get started?</h2>
           <p className="lg:mb-6 lg:text-lg ">Join thousands of professionals using our product today.</p>
           <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200">
              Start Free Trial
           </button>
         </div>
      </section>

    </div>
  );
};

export default Home;
