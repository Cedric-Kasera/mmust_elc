import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

// Import images correctly in React
import studentDis from "../assets/studentDis.jpg";
import studeSit from "../assets/studeSit.jpg";
import twost from "../assets/twost.jpg";
import groupPeople from "../assets/group-people-with-laptops.jpg";
import group from "../assets/group.jpg";

const Home = () => {
  const images = [studentDis, studeSit, twost, groupPeople, group];

  return (
    <div className="font-sans bg-blue-500 py-10 min-h-screen flex flex-col justify-center">
      <section className="max-w-screen-xl mx-auto px-6 text-center flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative w-64 h-64 mx-auto rounded-full overflow-hidden shadow-lg transform transition-all hover:scale-105"
            >
              <img
                src={image}
                alt={`team-member-${index}`}
                className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300 animate-ding-dong"
              />
              {/* Hover effect */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center text-white mt-10">
        <h2 className="text-5xl font-bold mb-4">We Are A Team</h2>
        <p className="text-xl mb-6">Building something amazing together.</p>
        
        {/* Link the Get Started button to the About page */}
        <Link to="/about">
          <button className="bg-white text-blue-500 px-6 py-3 text-xl rounded-md hover:bg-blue-700 hover:text-white transition-all">
            Get Started
            <FaArrowRight className="inline ml-2" />
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
