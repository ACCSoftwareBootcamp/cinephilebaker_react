import React from "react";
import MainHeader from "../components/MainHeader";
import Navbar from "../components/Navbar";
import Bio from "../components/Bio";
import ContactInfo from "../components/ContactInfo";
import bannerImg from "../assets/Banner.png";
import Line from "../components/Line";
function HomePage() {
  return (
    <div>
      {/* hidden main header */}
      <div className="px-5 col-span-12 lg:hidden">
        <MainHeader />
        <Line />
      </div>
      <Navbar />
      <main className="flex gap-5">
        {/* side bar */}
        <aside className="lg:w-1/3">
          <div className="hidden w-full lg:block">
          <MainHeader />
          </div>
          <div className="px-5 pb-5">
          <Line />
          <Bio />
          <ContactInfo />
          </div>
        </aside>

        {/* banner image */}
        <div className="hidden lg:block flex-grow max-w-5xl ml-auto">
          <img
            alt="Woman in shallow water"
            src={bannerImg}
            className="w-full"
          />
        </div>
      </main>
    </div>
  );
}

export default HomePage;
