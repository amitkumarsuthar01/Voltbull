import React, { useState } from "react";
import TopBanner from "../components/TopBanner";
import { Map, MapPin, PhoneCall } from "lucide-react";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    // Later: Send to backend
    // await fetch("/api/contact", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // });

    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <TopBanner
        backgroundImage="/images/vb-product.jpeg"
        staticText="We are Listening Always"
        words={["Get in touch", "Connect with us", "Stay updated", "Join us"]}
      />
      <div className="flex flex-col items-start justify-center py-16 px-4 lg:px-10 xl:px-40 gap-y-6">
        <h1 className="text-5xl text-left font-bold">
          For More Information Contact Us!
        </h1>
        <p className="text-slate-500">
          We’re here to help. Whether you’re a customer with a question or a
          business looking to partner with us, we look forward to hearing from
          you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 w-full">
          {/* Left side - Company Info */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold mb-4">
              VOLTBULL ENERGY PRIVATE LIMITED
            </h2>
            <div className="flex items-center gap-4 group transition-colors">
              <MapPin className="w-12 h-12 text-red-600" />
              <div>
                <h2 className="font-bold group-hover:text-red-600 transition-colors">
                  Office Address
                </h2>
                <p className="text-slate-500">
                  Shop No. 410, 4th Floor, HillTown Plaza, Ringroad Char Rasta,
                  Nr. Amar Javan Circle, Nikol, Ahmedabad - 382350, Gujarat.
                  INDIA
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 group transition-colors">
              <Map className="w-12 h-12 text-red-600" />
              <div>
                <h2 className="font-bold group-hover:text-red-600 transition-colors">
                  Warehouse Address
                </h2>
                <p className="text-slate-500">
                  PLOT NO 57, NARNARAYAN IND PARK 2, DASKROI, KUBADTHAL,
                  Ahmedabad, Gujarat, 382430
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 group transition-colors">
              <PhoneCall className="w-6 h-6 text-red-600" />
              <div className="mt-2">
                <a href="tel:+91 99985 00154">
                  <span className="font-bold">+91 99985 00154</span>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group transition-colors">
              <MdEmail className="w-8 h-8 text-red-600" />
              <div className="mt-2">
                <a href="mailto:Info@voltbull.in">
                  <span className="font-bold">Info@voltbull.in</span>
                </a>
                <br />
                <a href="mailto:account@voltbull.in">
                  <span className="font-bold">account@voltbull.in</span>
                </a>
              </div>
            </div>

            <div className="relative w-full h-40 sm:h-24 md:h-32 lg:h-[150px] xl:h-[200px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.784579838061!2d72.67499991542838!3d23.038368884845287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87003d924985%3A0x829c1fad541331d9!2sVoltBull%20Battery!5e0!3m2!1sen!2sin!4v1695543000000!5m2!1sen!2sin"
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right side - Form */}
          <div>
            {formSubmitted ? (
              <div className="flex flex-col text-green-500 justify-center items-center p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-2">
                  Form Submitted Successfully!
                </h2>
                <p>Thank you for contacting us. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm text-slate-500 font-medium mb-1">
                    Name <span className="text-red-600">*</span>
                  </label>
                  <div className="flex gap-4">
                    <div className="w-1/2">
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-1 focus:ring-red-600"
                      />
                      <p className="text-xs text-slate-500 font-semibold">
                        First
                      </p>
                    </div>
                    <div className="w-1/2">
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-1 focus:ring-red-600"
                      />
                      <p className="text-xs text-slate-500 font-semibold">
                        Last
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-slate-500 font-medium mb-1">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-1 focus:ring-red-600"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-500 font-medium mb-1">
                    Subject <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-1 focus:ring-red-600"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-500 font-medium mb-1">
                    Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-1 focus:ring-red-600"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
