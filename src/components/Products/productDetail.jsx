import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { ImCancelCircle } from "react-icons/im";

const ProductDetail = ({ products }) => {
  const { id } = useParams(); 
  const navigate = useNavigate(); // To navigate back
  const product = products.find((p) => p.id.toString() === id);

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!product) {
    return <p className="p-6">Product not found</p>;
  }

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleClose = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="p-6 max-w-3xl mx-auto relative">
      
      <ImCancelCircle
        fontSize={30}
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 cursor-pointer"
        onClick={handleClose}
      />

      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

      {product.images && product.images.length > 0 ? (
        <div className="relative">
          <img
            src={product.images[currentIndex]}
            alt={product.name}
            className="w-full h-100 object-cover rounded-lg mb-4"
          />
          <button
             onClick={() =>
               handlePrev(product.id, product.images.length)
             }
             className="absolute left-2 top-1/2 -translate-y-1/2  text-black p-2 rounded"
          >
             <IoMdArrowDropleft fontSize={40} className="border-1 border-black"/>
          </button>
         
          <button
             onClick={() =>
               handleNext(product.id, product.images.length)
             }
             className="absolute right-2 top-1/2 -translate-y-1/2  text-black "
          >
             <IoMdArrowDropright  fontSize={40} className="border-1 border-black" />
          </button>
        </div>
      ) : (
        <p>No images available</p>
      )}

      <p className="text-lg text-gray-700 mb-2">
        Brand: <span className="font-semibold">{product.brand}</span>
      </p>
      <p className="text-lg text-gray-700 mb-2">
        Category: {product.category}
      </p>
      <p className="text-xl font-bold mb-2">
        Price: {product.price} {product.currency}
      </p>
      <p className="text-lg mb-2">⭐ {product.rating}</p>
      <p className="text-lg">
        Available: {product.availability ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
};

export default ProductDetail;
