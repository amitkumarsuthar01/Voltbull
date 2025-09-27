import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <div
    className={`group flex flex-col items-center rounded-lg shadow-md gap-4 overflow-hidden w-64 sm:w-[250px] md:w-[300px] lg:w-[320px] p-4 transition-all duration-300 bg-white hover:bg-red-600 text-black`}
  >
    <img
      src={product.img}
      alt={product.name}
      className="h-40 sm:h-48 md:h-60 lg:h-72 object-contain transition-transform duration-300 group-hover:scale-105"
    />
    <h3 className="font-bold text-center mt-4 mb-2 transition-colors duration-300 group-hover:text-white">
      {product.name}
    </h3>

    <div className="grid grid-cols-2 gap-2 lg:gap-4 text-sm text-gray-700 mt-2 w-full">
      {["Capacity", "Size", "Color", "M.R.P."].map((label, idx) => (
        <div
          key={idx}
          className="bg-gray-100 p-2 rounded text-center transition-colors duration-300 group-hover:bg-white group-hover:text-red-600"
        >
          <p className="font-semibold text-red-600 group-hover:text-red-600">{label}</p>
          <p>
            {label === "Capacity" && `@C10(AH) : ${product.capacity}`}
            {label === "Size" && product.size}
            {label === "Color" && product.color}
            {label === "M.R.P." && product.price}
          </p>
        </div>
      ))}
    </div>

    <Link
      to="/contact"
      className="mt-4 w-full text-center py-2 rounded bg-red-600 text-white border border-transparent transition-all duration-300 group-hover:border-white"
    >
      Explore More
    </Link>
  </div>
);

export default ProductCard;
