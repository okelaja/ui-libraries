import React from "react";
import Hero from "../component/Hero";
import NavbarComponent from "../component/Navbar";
import Footer from "../component/Footer";
import Products from "../component/Products";

const Home = () => {
  return (
    <div>
      <NavbarComponent />
      <Hero />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
