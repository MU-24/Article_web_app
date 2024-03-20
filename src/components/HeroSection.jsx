import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/images/article.jpeg";

const HeroPage = () => (
  <div
    className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <h1 className="text-4xl font-bold text-orange-600 ml-11  mb-4">
      Collect Your Best Article easily
    </h1>
    <p className="text-xl text-white mb-8">
      Explore your favourite article
    </p>
    <Link
      className="btn-primary bg-slate-50 rounded-xl p-4 hover:bg-blue-600 hover:text-white items-center"
      to="/articles"
    >
      Explore Now <i className="fas fa-chevron-right ml-2"></i>
    </Link>
  </div>
);

export default HeroPage;
