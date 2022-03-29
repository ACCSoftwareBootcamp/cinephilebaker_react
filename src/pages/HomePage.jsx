import React from "react";
import MainHeader from "../components/MainHeader";
import Navbar from "../components/Navbar";
import Bio from "../components/Bio";
import ContactInfo from "../components/ContactInfo";
import bannerImg from "../assets/Banner.png";
function HomePage() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 lg:hidden">
        <MainHeader />
        <div className="bg-white pb-1 "></div>
      </div>
      <Navbar />
      <main className="col-span-12 grid grid-cols-12 gap-6">
        {/* side bar */}
        <div className="col-span-12 lg:col-span-3">
          <div className="hidden w-full lg:block">
          <MainHeader />
          </div>
          <div className="px-5 pb-5">
          <div className="bg-white pb-1 mb-4"></div>
          <Bio />
          <ContactInfo />
          </div>
        </div>

        {/* banner image */}
        <div className="col-span-9 justify-self-center hidden lg:block">
          <img
            alt="Woman in shallow water"
            src={bannerImg}
            className="w-full h-auto max-w-5xl"
          />
        </div>
      </main>
    </div>
  );
}

export default HomePage;
