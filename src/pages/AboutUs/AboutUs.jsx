import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import AboutUsComponent from "../../Components/AboutUs/AboutUsComponent";
import Footer from "../../Components/Footer/Footer";

function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="mt-32 lg:mt-44 xl:mt-72">
        <AboutUsComponent />
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
