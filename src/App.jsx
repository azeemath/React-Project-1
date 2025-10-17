import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Assets from "./container/Assets/assets";
import Features from "./container/Features/features";
import Home from "./container/Home/home";
import Pricing from "./container/Pricing/pricing";
import Protection from "./container/Protection/protection";
import SignupForm from "./components/signup/signup";
import Contact from "./container/contact/contact";
import Login from "./components/login/login";
import ProductCard from "./components/Products/product";
import ProductDetail from "./components/Products/productDetail";
import ProductList from "./components/Products/productList";
import ProductItems from "./components/Products/productItem";
import LearnMore from "./components/LearnMore/LearnMore";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Router>
      <Navbar
        onSignupClick={() => setShowForm(true)}
        onLoginClick={() => setShowLogin(true)}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/features" element={<Features />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/protection" element={<Protection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/productCard" element={<ProductCard />} />
        <Route path="/products" element={<ProductList products={ProductItems} />} />
        <Route path="/product/:id" element={<ProductDetail products={ProductItems} />} />
        <Route path="/Learnmore" element={<LearnMore />} />
      </Routes>

      {showForm && <SignupForm onClose={() => setShowForm(false)} />}
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </Router>
  );
}

export default App;
