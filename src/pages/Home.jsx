import HomeTopBanner from "../components/HomeTopBanner";
import { Link } from "react-router-dom";
import WhyVoltbull from "../components/WhyVoltbull";
import HomePageFeatures from "../components/HomePageFeatures";
import { BikeIcon } from "lucide-react";
import HomePageCounts from "../components/HomePageCounts";
import HomePageDistributer from "../components/HomePageDistributer";
import PreLoader from "../components/PreLoader";

const Home = () => {
  return (
    <div>
      <PreLoader />
      <HomeTopBanner
        backgroundImage="/images/home-bike.jpg"
        staticText="Electrifying Voltbull Batteries"
        words={[
          "Certified",
          "Maintenance Free",
          "Quick Recharge",
          "Longest Warranty",
        ]}
      />

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full py-16 px-2 md:px-28">
          <div className="flex flex-col gap-y-6">
            <h1 className="text-red-600 text-5xl font-bold">
              Unstoppable Power for Every Ride...
            </h1>
            <div className="bg-black h-2 w-1/4 p" />
            <p className="text-black font-normal">
              VOLTBULL ENERGY PRIVATE LIMITED is a forward-thinking energy
              solutions company committed to delivering world-class power
              products for the modern rider. With a focus on innovation,
              quality, and customer satisfaction, we specialize in offering
              premium imported bike batteries designed to meet the evolving
              needs of the two-wheeler market. Our strategic partnerships with
              global technology leaders enable us to bring advanced, reliable,
              and performance-driven products to India, backed by strong
              after-sales service and customer care.
            </p>
            <p className="text-black font-normal">
              <strong>VOLTBULL BATTERY</strong> is a high-performance imported
              bike battery crafted with advanced Korean technology, engineered
              to deliver unmatched power, reliability and long-lasting
              performance for two-wheelers. Designed for Indian roads and
              weather conditions, VOLTBULL offers consistent starting power,
              exceptional durability and superior safety features — making it
              the perfect choice for bikers who demand more from their ride.
            </p>
            <button className="w-44 rounded-sm bg-gray-800 text-white text-base">
              <Link
                to="/contact"
                className="relative z-10 flex items-center gap-2 py-3 px-6"
              >
                Explore More <BikeIcon className="w-4 h-4" />
              </Link>
            </button>
          </div>
          <div className="flex items-center justify-center">
            <div
              style={{
                clipPath:
                  "polygon(13% 0, 100% 0, 100% 50%, 87% 100%, 0 100%, 0 50%)",
                borderRadius: "0.5rem",
                overflow: "hidden",
              }}
            >
              <img
                src="/images/home-page-image.jpg"
                alt="Home Page Image"
                className="w-80 md:w-[600px] h-80 md:h-[400px] lg:h-[600px] object-cover"
              />
            </div>
          </div>
        </div>

        <div
          className="relative w-full flex flex-col items-center justify-center gap-4 py-12 px-6 text-white bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/images/why-Voltbull.jpg')" }}
        >
          {/* Smoke Layer */}
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-center">
              Excellence in Every Element
            </h1>
            <p>
              Power – Passion – Performance – Precision – Persistence –
              Protection – Prestige
            </p>
            <div className="bg-red-600 h-[1px] w-40 mt-4" />
          </div>
        </div>
        <div className="flex items-center justify-center py-4 lg:py-24 lg:px-16">
          <img
            src="/images/Voltbullbattires-prod.png"
            alt="Home Battery"
            className="max-w-full h-auto lg:h-[450px]"
          />
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] items-center justify-center bg-blue-700 text-white w-full py-6 px-2 xl:px-28 gap-4">
          <div className="w-full">
            <img
              src="/images/tcs.png"
              alt="Home Battery"
              className="max-w-full h-auto"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl font-bold">Engineering Power Together</h1>
            <p className="text-base text-justify">
              We at Voltbull believe in a future fueled by advanced technology.
              That’s why we’ve entered into a{" "}
              <strong>deep technological association</strong> with
              <strong> TCS Songli Group of Company, China</strong>, a pioneer in
              battery manufacturing and innovation. This collaboration unites
              our shared vision, allowing us to leverage TCS Songli’s vast
              expertise and proprietary technology. The result? Batteries that
              are a testament to superior engineering, providing you with a
              powerful, reliable, and technologically advanced product.
            </p>
          </div>
        </div>
        <HomePageFeatures />

        <WhyVoltbull />

        <HomePageCounts />

        <HomePageDistributer />


      </div>
    </div>
  );
};

export default Home;
