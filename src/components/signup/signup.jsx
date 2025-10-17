import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
const SignupForm = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    accepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.accepted) {
      alert("Please accept the terms and conditions");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match ❌");
      return;
    }

    alert("Signup Successful ✅");
  };

  return (
    <div>

        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
         <div className="bg-white p-6 rounded-lg shadow-lg w-80 ">
          <h2 className="text-xl text-center font-semibold mb-4">Signup Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              required
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Your Password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              required
            />

            <label>
              <input
                type="checkbox"
                name="accepted"
                checked={form.accepted}
                onChange={handleChange}
              />
              I accept the terms and conditions
            </label>

            <div className="flex justify-between">
               <button type="submit" className="bg-green-600 relative left-23 mt-8 text-white px-4 py-2 rounded">Signup</button>
               <ImCancelCircle 
                   onClick={onClose} 
                   size={22}
                   className="relative  bottom-75 cursor-pointer text-red-500 hover:text-red-700" />
            </div>
          </form>
         </div>
        </div>
   
    </div>
  );
};

export default SignupForm;
