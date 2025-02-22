import { useRef, useState } from "react";
import { FaRocket, FaShieldAlt, FaBolt } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import "./index.css";
function App() {
  const home = useRef(null);
  const feature = useRef(null);
  const testimonial = useRef(null);
  const contact = useRef(null);

  const scroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    if (window.innerWidth < 640) {
      setnavOpen(!navOpen);
    }
  };

  const [navOpen, setnavOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Regex Patterns
  const regexPatterns = {
    name: /^[A-Za-z\s]{3,30}$/, // sirf 3 se 30 character
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, // Valid Email
    phone: /^[0-9]{10}$/, // sirf 10 number wala mobile
    message: /^.{10,300}$/, // 10 se 300 character
  };

  // Handle Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Validate Input
    if (!regexPatterns[e.target.name].test(e.target.value)) {
      setErrors({
        ...errors,
        [e.target.name]: `Invalid ${e.target.name}`,
      });
    } else {
      let newErrors = { ...errors };
      delete newErrors[e.target.name];
      setErrors(newErrors);
    }
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!regexPatterns[field].test(formData[field])) {
        newErrors[field] = `Invalid ${field}`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    }
  };

  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      position: "Software Engineer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      feedback:
        "This service is fantastic! The support team is very responsive, and the experience was seamless. Highly recommend!",
    },
    {
      id: 2,
      name: "Priya Verma",
      position: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      feedback:
        "I loved the UI and user experience. Everything is smooth and easy to use. Will definitely use it again!",
    },
  ];

  const features = [
    {
      id: 1,
      icon: <FaRocket className="text-blue-400 text-5xl" />,
      title: "Fast Performance",
      description:
        "Experience blazing fast speed with our optimized solutions.",
    },
    {
      id: 2,
      icon: <FaShieldAlt className="text-green-400 text-5xl" />,
      title: "Secure & Reliable",
      description:
        "We prioritize security to keep your data safe and protected.",
    },
    {
      id: 3,
      icon: <FaBolt className="text-yellow-400 text-5xl" />,
      title: "Easy to Use",
      description: "Our interface is designed for simplicity and ease of use.",
    },
  ];

  return (
    <>
      <header className="sticky top-0 py-4 px-3 bg-purple-600 text-white">
        <div className="flex justify-between items-center">
          <div className="text-xl">Landing</div>

          <div className="block sm:hidden" onClick={() => setnavOpen(!navOpen)}>
            <div className="h-[30px] w-[30px] flex flex-col justify-around items-center">
              <div
                className={`w-full h-[5px] bg-white rounded-full transition-all duration-400 ${
                  navOpen ? "translate-y-[10px] rotate-45" : ""
                }`}
              ></div>
              <div
                className={`h-[5px] bg-white rounded-full transition-all duration-400 ${
                  navOpen ? "w-0" : "w-full"
                } `}
              ></div>
              <div
                className={`w-full h-[5px] bg-white rounded-full transition-all duration-400 ${
                  navOpen ? "-translate-y-[10px] -rotate-45" : ""
                }`}
              ></div>
            </div>
          </div>

          {/* navbar */}
          <div
            className={`sm:block absolute top-[3.8rem] left-0 px-3 bg-purple-600 transition-all duration-400 w-full sm:w-auto overflow-hidden sm:static
              ${navOpen ? "h-dvh " : "h-0 sm:h-auto"}`}
          >
            <div className=" mt-8 sm:mt-0">
              <ul className="sm:flex gap-8">
                <li className="py-2">
                  <button onClick={() => scroll(home)}>Home</button>
                </li>

                <li className="py-2">
                  <button onClick={() => scroll(feature)}>Features</button>
                </li>

                <li className="py-2">
                  <button onClick={() => scroll(testimonial)}>
                    Testimonials
                  </button>
                </li>

                <li className="py-2">
                  <button onClick={() => scroll(contact)}>Contact</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <section ref={home} className="section">
        <div className="text-center pt-20">
          <h1 className="h2">Welcome to my website </h1>
          <p className="mb-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            illum dolore eum blanditiis ut earum omnis sit laboriosam sequi
            numquam placeat! Consequuntur alias error consequatur laudantium aut
            vel iste libero.
          </p>
          <button className="bg-purple-600 text-white px-5 py-2 rounded-4xl hover:bg-purple-400">
            Get Started
          </button>
        </div>
      </section>

      <section ref={feature} className="section">
        <div className="max-w-6xl mx-auto">
          <h2 className="h2 text-center"> Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={testimonial} className="section">
        <div className="max-w-5xl mx-auto">
          <h2 className="h2 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex flex-col sm:flex-row  items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700 text-center sm:text-left">
                  {testimonial.feedback}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={contact} className="section mb-10">
        <h2 className="h2 text-center">Contact us</h2>
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* Name */}
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-400 text-sm">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-400 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="text-red-400 text-sm">{errors.phone}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Enter your message"
              />
              {errors.message && (
                <p className="text-red-400 text-sm">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} YourCompany. All rights reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
