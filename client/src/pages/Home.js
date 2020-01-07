import React from "react";
import Head from "../components/Homepage/Head";
import HomeNav from "../components/Homepage/HomeNav";
import Services from "../components/Homepage/Services";
import Technologies from "../components/Homepage/Technologies";
import HomeContact from "../components/Homepage/HomeContact";

const Home = ({ onOpen }) => {
  return (
    <div className="home">
      <HomeNav onOpenMobileNav={onOpen} />
      <Head />
      <Services />
      <Technologies />
      <HomeContact />
    </div>
  );
};

export default Home;
