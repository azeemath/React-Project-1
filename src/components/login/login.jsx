import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";

const Login = ({ onClose }) => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!loginForm.email || !loginForm.password) {
      alert("Please fill in all fields ❌");
      return;
    }

    alert(`Logged in as ${loginForm.email} ✅`);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      {/* Background Blur Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      {/*  Login Card */}
      <div className="relative  bg-white p-6 rounded-lg shadow-lg w-80">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Login</h2>
          <ImCancelCircle
            onClick={onClose}
            className="text-red-500 cursor-pointer hover:text-red-700"
            size={22}
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            value={loginForm.email}
            placeholder="Enter Your Username"
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          />

          <input
            type="password"
            name="password"
            value={loginForm.password}
            placeholder="Enter Your Password"
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
