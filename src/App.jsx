import React,{useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Assets from "./container/Assets/assets";
import Features from "./container/Features/features";
import Home from "./container/Home/home";
import Pricing from "./container/Pricing/pricing";
import Protection from "./container/Protection/protection";
import SignupForm from "./components/signup/signup";

function App() {
  const [showForm, setShowForm] = useState(false);
  return (
    <Router>
      <Navbar  onSignupClick={() => setShowForm(true)}/> 

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/assets" element={<Assets />} />
        <Route path="/features" element={<Features />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/protection" element={<Protection />} />
      </Routes>

      {showForm && <SignupForm onClose={() => setShowForm(false)} />}
    </Router>
  );
}

export default App;
