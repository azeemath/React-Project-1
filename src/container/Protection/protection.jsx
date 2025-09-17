import React from "react";
const protections = [
   {
     title: "Data Encryption",
     description:
       "We use industry-standard AES-256 encryption to secure your data in transit and at rest.",
   },
   {
     title: "Secure Authentication",
     description:
       "Protect your account with multi-factor authentication and passwordless login options.",
   },
   {
     title: "Regular Backups",
     description:
       "Automatic daily backups ensure your data is safe and easily recoverable.",
   },
   {
     title: "Threat Detection",
     description:
       "AI-powered monitoring prevents malware, phishing, and other cyber threats in real time.",
   },
   {
     title: "Compliance & Privacy",
     description:
       "Fully compliant with GDPR, HIPAA, and ISO27001 to meet global security standards.",
   },
   {
     title: "24/7 Security Monitoring",
     description:
       "Our team monitors systems around the clock and responds instantly to threats.",
   },
 ];

const Protection = () => {
     return(
      <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-10">
          Product Protection
        </h1>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {protections.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:bg-indigo-600 transition-colors"
            >
              <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
     )
}

export default Protection;