import { BikeIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopBanner = ({ backgroundImage, staticText, words }) => {
  const [index, setIndex] = useState(0);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipping(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
      }, 300); // middle of the flip
      setTimeout(() => {
        setFlipping(false);
      }, 600); // end of flip
    }, 2500);

    return () => clearInterval(interval);
  }, [words.length]);

  // Split staticText into all words except last, and the last word
  const wordsArray = staticText.split(" ");
  const lastWord = wordsArray.pop(); // removes last word
  const firstPart = wordsArray.join(" ");

  return (
    <div className="relative w-screen flex justify-center">
      {/* Image */}
      <img
        src={backgroundImage}
        alt="Banner"
        className="w-screen object-cover lg:h-screen h-auto"
      />

      {/* Content */}
      <div className="absolute px-2 md:px-16 left-0 top-1/2 transform -translate-y-1/2 text-white">
        <div className="lg:px-20 xl:px-40">
          {" "}
          {/* 40px padding for large screens */}
          {/* Static sentence first part */}
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold leading-tight">
            {firstPart}
          </h1>
          {/* Last word + flipping word */}
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight md:mt-2 flex items-center gap-2">
            {lastWord}{" "}
            <span className="flip-container">
              <span
                className={`inline-block ${
                  flipping ? "animate-flipXReverse" : ""
                }`}
                style={{
                  display: "inline-block",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                {words[index]}
              </span>
            </span>
          </h1>
          <div className="mt-2 md:mt-8 w-72 md:w-2/3 pr-6">
            <p className="text-xs sm:text-sm lg:text-base">
              Designed for Indian roads and weather conditions, our batteries
              deliver unmatched starting power,long life, and reliability—so you
              can ride with confidence, anywhere, anytime.
            </p>
          </div>
          <button className="group relative mt-2 md:mt-8 overflow-hidden rounded-sm bg-slate-900 text-white text-base">
            <Link
              to="/contact"
              className="relative z-10 flex items-center gap-2 md:py-3 md:px-6"
            >
              Learn More <BikeIcon className="w-4 h-4" />
            </Link>

            {/* Circular expanding background */}
            <span className="absolute bottom-0 left-0 w-4 h-4 bg-red-600 rounded-full transform scale-0 group-hover:scale-[25] transition-transform duration-700 ease-out"></span>
          </button>
        </div>
      </div>
      <style jsx>{`
        .flip-container {
          display: inline-block;
          perspective: 600px; /* gives depth to the flip */
        }

        @keyframes flipXReverse {
          0% {
            transform: rotateX(-90deg); /* start from bottom edge */
            opacity: 0;
          }
          20% {
            transform: rotateX(10deg); /* overshoot slightly backward */
            opacity: 1;
          }
          50% {
            transform: rotateX(-90deg); /* flip forward */
            opacity: 0; /* hide text during swap */
          }
          100% {
            transform: rotateX(0deg); /* back to normal */
            opacity: 1;
          }
        }

        .animate-flipXReverse {
          transform-origin: bottom center; /* flip from bottom */
          display: inline-block;
          animation: flipXReverse 2s ease-in-out backwards;
        }
      `}</style>
    </div>
  );
};

export default TopBanner;
