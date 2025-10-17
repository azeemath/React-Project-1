import React from "react";
import { Link } from "react-router-dom";
import ProductItems from "./productItem";

const ProductCard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-10">Technology Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ProductItems.map((product) => (
          <div
            key={product.id}
            className="border-none shadow-xl rounded-lg p-4 relative"
          >
            {product.images && product.images.length > 0 ? (
              <div className="relative">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.images[0]} // show first image
                    alt={product.name}
                    className="w-full h-48 object-cover rounded"
                  />
                </Link>
              </div>
            ) : (
              <p>No images available</p>
            )}

            <h2 className="text-lg font-semibold mt-3">{product.name}</h2>
            <p className="text-sm text-gray-600">Brand: {product.brand}</p>
            <p className="text-sm text-gray-600">Category: {product.category}</p>
            <p className="text-sm font-bold">
              Price: {product.price} {product.currency}
            </p>
            <p className="text-sm">⭐ {product.rating}</p>
            <p className="text-sm">
              Available: {product.availability ? "Yes" : "No"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
