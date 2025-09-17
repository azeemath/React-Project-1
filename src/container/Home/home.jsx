import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      
      <section className="text-center px-6 py-20">
        <h1 className="text-5xl font-bold mb-4">
          Build Smarter with Our Technology Product
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
          An AI-powered platform designed to make your work faster, safer, and more efficient. 
          Trusted by businesses worldwide.
        </p>
        <div>
          <button className="bg-indigo-600 px-6 py-3 rounded-lg mr-4 hover:bg-indigo-700">
            Get Started
          </button>
          <button className="border border-gray-400 px-6 py-3 rounded-lg hover:bg-gray-800">
            Learn More
          </button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8 px-6 py-16 max-w-6xl mx-auto">
        <div className="p-6 bg-gray-800 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">⚡ Lightning Fast</h3>
          <p className="text-gray-400">Experience blazing-fast performance and smooth operations.</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">🔒 Secure by Design</h3>
          <p className="text-gray-400">Top-level encryption and privacy-first architecture.</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">🤖 AI-Powered</h3>
          <p className="text-gray-400">Smart automation to reduce effort and boost productivity.</p>
        </div>
      </section>

      <section className="text-center py-20 bg-indigo-700">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="mb-6">Join thousands of professionals using our product today.</p>
        <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200">
          Start Free Trial
        </button>
      </section>
    </div>
  );
};

export default Home;
