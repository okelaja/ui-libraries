import React from "react";
import TableComponent from "../component/Table";
import Footer from "../component/Footer";
import NavbarComponent from "../component/Navbar";

const TopRated = () => {
  return (
    <div>
      <NavbarComponent />
      <h1>Top Rated</h1>
      <TableComponent />
      <Footer />
    </div>
  );
};

export default TopRated;
