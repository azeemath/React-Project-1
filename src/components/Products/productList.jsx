import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border shadow-xl rounded-lg p-4 relative"
        >
          <Link to={`/product/${product.id}`}>
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-64 object-cover rounded"
            />
            <h2 className="text-lg font-semibold mt-3">{product.name}</h2>
          </Link>
          <p className="text-sm font-bold">
            Price: {product.price} {product.currency}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
