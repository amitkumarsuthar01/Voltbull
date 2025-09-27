import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => (
  <div>
    {products.map((product, idx) => (
      <ProductCard key={idx} product={product} />
    ))}
  </div>
);

export default ProductGrid;


const allproducts = [
  {
    name: "VB 2.5 LB BIKE BATTERY",
    img: "/images/VB-2.5-LB-BIKE-BATTERY.png",
    capacity: "2.5",
    size: "L-80mm | W-77mm | H-105mm",
    color: "Black",
    price: "₹957.00",
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    name: "VB 4 LB BIKE BATTERY",
    img: "/images/VB-4-LB-BIKE-BATTERY.png",
    capacity: "4",
    size: "L-113mm | W-69mm | H-85mm",
    color: "Black",
    price: "₹1340.00",
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    name: "VB 5 LB BIKE BATTERY",
    img: "/images/VB-5-LB-BIKE-BATTERY.png",
    capacity: "5",
    size: "L-119mm | W-60mm | H-129mm",
    color: "Black",
    price: "₹1560.00",
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    name: "VB YT5 LB BIKE BATTERY",
    img: "/images/VByt5lb.png",
    capacity: "5",
    size: "L-113mm | W-69mm | H-105mm",
    color: "Black",
    price: "₹1560.00",
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    name: "VB 7 LB BIKE BATTERY",
    img: "/images/VB-7-LB-BIKE-BATTERY.png",
    capacity: "7",
    size: "L-147mm | W-59mm | H-130mm",
    color: "Black",
    price: "₹1710.00",
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    name: "VB 9 LB BIKE BATTERY",
    img: "/images/VB-9-LB-BIKE-BATTERY.png",
    capacity: "9",
    size: "L-136mm | W-76mm | H-134mm",
    color: "Black",
    price: "₹2460.00",
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    name: "VB YT9 LB BIKE BATTERY",
    img: "/images/VB-Yt9-LB-BIKE-BATTERY.png",
    capacity: "9",
    size: "L-150mm | W-98mm | H-107mm",
    color: "Black",
    price: "₹2460.00",
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    name: "VB 14 LB BIKE BATTERY",
    img: "/images/VB-14-LB-BIKE-BATTERY.png",
    capacity: "14",
    size: "L-132mm | W-89mm | H-163mm",
    color: "Black",
    price: "₹3250.00",
    bgColor: "bg-white",
    textColor: "text-black",
  },
];
