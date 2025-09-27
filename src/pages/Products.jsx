import React, { useState } from "react";
import TopBanner from "../components/TopBanner";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const allproducts = [
  {
    name: "VB 2.5 LB BIKE BATTERY",
    img: "/images/VB-2.5-LB-BIKE-BATTERY.png",
    capacity: "2.5",
    size: "L-80mm | W-77mm | H-105mm",
    color: "Black",
    price: "₹957.00",
  },
  {
    name: "VB 4 LB BIKE BATTERY",
    img: "/images/VB-4-LB-BIKE-BATTERY.png",
    capacity: "4",
    size: "L-113mm | W-69mm | H-85mm",
    color: "Black",
    price: "₹1340.00",
  },
  {
    name: "VB 5 LB BIKE BATTERY",
    img: "/images/VB-5-LB-BIKE-BATTERY.png",
    capacity: "5",
    size: "L-119mm | W-60mm | H-129mm",
    color: "Black",
    price: "₹1560.00",
  },
  {
    name: "VB YT5 LB BIKE BATTERY",
    img: "/images/VByt5lb.png",
    capacity: "5",
    size: "L-113mm | W-69mm | H-105mm",
    color: "Black",
    price: "₹1560.00",
  },
  {
    name: "VB 7 LB BIKE BATTERY",
    img: "/images/VB-7-LB-BIKE-BATTERY.png",
    capacity: "7",
    size: "L-147mm | W-59mm | H-130mm",
    color: "Black",
    price: "₹1710.00",
  },
  {
    name: "VB 9 LB BIKE BATTERY",
    img: "/images/VB-9-LB-BIKE-BATTERY.png",
    capacity: "9",
    size: "L-136mm | W-76mm | H-134mm",
    color: "Black",
    price: "₹2460.00",
  },
  {
    name: "VB YT9 LB BIKE BATTERY",
    img: "/images/VB-Yt9-LB-BIKE-BATTERY.png",
    capacity: "9",
    size: "L-150mm | W-98mm | H-107mm",
    color: "Black",
    price: "₹2460.00",
  },
  {
    name: "VB 14 LB BIKE BATTERY",
    img: "/images/VB-14-LB-BIKE-BATTERY.png",
    capacity: "14",
    size: "L-132mm | W-89mm | H-163mm",
    color: "Black",
    price: "₹3250.00",
  },
];

const Products = () => {
  const [formData, setFormData] = useState({
    name: "",
    product: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    setFormData({ name: "", product: "", email: "", phone: "" });
  };

  return (
    <div>
      <TopBanner
        backgroundImage="/images/vb-product.jpeg"
        staticText="Maximum Power. Maximum Ride"
        words={["Result!", "Power!", "Quality"]}
      />

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4">
          Our Range of Two-Wheeler Batteries
        </h1>
        <p className="text-center text-slate-600 max-w-6xl mx-auto mb-8">
          Engineered with unique expanded metal grid technology and AGM
          (Absorbent Glass Mat) separators, Voltbull batteries are factory
          charged and ready to deliver extreme performance from the moment of
          installation
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 justify-center items-start">
          {/* Product Cards */}
          {allproducts.map((product, index) => (
            <div
              key={index}
              className="w-full sm:w-[250px] md:w-[300px] lg:w-[320px] text-black rounded-lg"
            >
              <ProductCard product={product} />
            </div>
          ))}

          {/* Product Enquiry Card */}
          <div className="w-[200px] xs:w-[250px] md:w-[300px] lg:w-[320px] bg-white flex flex-col p-6 rounded-lg shadow-md gap-y-6">
            <FaUser className="text-red-600 text-6xl mx-auto mb-4 h-20 w-20" />
            <h1 className="text-xl md:text-2xl font-bold mb-2 text-center">
              Product Enquiry Form
            </h1>
            <hr className="border-t-2 border-red-600 mb-4" />
            <p className="text-slate-500 mb-4 text-center">
              Have a question about a product? Please fill out the form below.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-600 p-2 w-full"
                required
              />
              <input
                type="text"
                name="product"
                placeholder="Product Name"
                value={formData.product}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-600 p-2 w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-600 p-2 w-full"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-600 p-2 w-full"
              />
              <button
                type="submit"
                className="bg-red-600 text-white rounded-lg px-4 py-2 hover:bg-red-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="relative w-full flex flex-col items-center justify-center gap-4 py-16 px-6 text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{ backgroundImage: "url('/images/VBABOUT-1.png')" }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-center">
            Get In Touch!
          </h1>
          <div className="bg-red-600 h-[1px] w-40 mt-4" />
          <button className="bg-red-600 rounded-sm text-white p-3 text-base hover:bg-red-800 mt-4 mb-10">
            <Link to="/contact" className="flex items-center gap-2">
              Explore More
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
