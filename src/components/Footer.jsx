import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaPhone, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="text-white text-sm bg-gradient-to-t from-slate-950 to-black/95">
        {/* Top Content */}
        <div className="grid cols-1 md:grid-cols-3 justify-evenly items-center px-4 lg:px-20 flex-wrap md:flex-row md:justify-center md:items-center py-10 gap-20">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <a href="/">
              <img
                src="/images/Voltbull-whitelogo.png"
                alt="Logo"
                className="h-24 mb-2"
              />
            </a>
            <p>
              <strong className="font-bold text-lg">VOLTBULL BATTERY</strong>, is a high-performance imported
              bike battery crafted with advanced Korean technology, engineered
              to deliver unmatched power, reliability, and long-lasting
              performance for two-wheelers.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 justify-self-center items-start">
          <div className="flex flex-col items-start gap-3">
            <h3 className="text-base font-bold mb-2">Links</h3>
            <ul className="flex flex-col items-start gap-2">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/distributer">Become Distributor</a></li>
              <li><a href="/products">Our Products</a></li>
            </ul>
            {/* Social Icons */}
            <div className="flex flex-row items-center gap-4 mt-4">
              <a
                href="https://www.facebook.com/voltbullbatteries"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 border-2 border-red-600 rounded-full p-2"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="https://www.instagram.com/voltbullbatteries/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 border-2 border-red-600 rounded-full p-2"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="flex flex-col items-start gap-3">
            <h3 className="text-base font-bold mb-2">Support</h3>
            <ul className="flex flex-col items-start gap-2">
              <li><a href="/contact">Contact</a></li>
              <li><a href="/contact">Help Center</a></li>
              <li>
                <strong>Phone:</strong> <a href="tel:+919998500154">+91 99985 00154</a>
              </li>
              <li>
                <strong>Email:</strong><br/>
                <a href="mailto:info@voltbull.in">info@voltbull.in</a><br/>
                <a href="mailto:account@voltbull.in">account@voltbull.in</a>
              </li>
            </ul>
          </div>
          </div>

          {/* Contacts */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-base font-bold mb-2">Contacts</h3>
            <ul className="flex flex-col items-center md:items-start gap-2">
              <li><strong>Office Address:</strong> Shop No. 410, 4th Floor, HillTown Plaza, Ringroad Char Rasta, Nr. Amar Javan Circle, Nikol, Ahmedabad - 382350</li>
              <li><strong>Warehouse Address:</strong> VOLTBULL ENERGY PRIVATE LIMITED, Plot No 57, Narnarayan Ind Park 2, Daskroi, Kubadthal, Ahmedabad, Gujarat - 382430</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center bg-black py-6">
          &copy; {new Date().getFullYear()} Powered By{" "}
          <a href="https://empertek.com/" target="_self" rel="noopener noreferrer" className="text-gray-400">
            Empertek
          </a>
        </div>
      </footer>

      {/* Phone Button */}
      <div className="bg-red-600 rounded-full p-3 w-min h-min fixed bottom-20 right-4 z-50">
        <a href="tel:+919998500154"><FaPhone size={18} className="text-white"/></a>
      </div>

      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="border-red-600 border-2 text-2xl font-extrabold text-red-600 rounded-full px-3 py-1 fixed bottom-4 right-4 z-50 shadow-lg hover:bg-red-700 hover:text-white transition-colors"
        >
          {/* <FaArrowUp size={20} /> */}^
        </button>
      )}
    </>
  );
};

export default Footer;
