import React from "react";
import MainHeader from "../components/MainHeader";
import Bio from "../components/Bio";
import ContactInfo from "../components/ContactInfo";
import bannerImg from "../assets/Banner.png";

function HomePage() {
  return (
    <>
      
      <main className="flex flex-col-reverse lg:flex-row lg:items-center gap-5">
        {/* side bar */}
        <aside className="lg:w-3/4 xl:w-1/3">
          <div className="hidden w-full lg:block">
            <MainHeader />
          </div>
          <div className="px-5 pb-5">
            <hr style={{ borderTop: ".25rem solid white", margin: "1rem 0" }} />
            <Bio />
            <ContactInfo />
          </div>
        </aside>

        {/* banner image */}
        <div className="flex-grow max-w-5xl ml-auto">
          <img
            alt="Woman in shallow water"
            src={bannerImg}
            className="w-full"
          />
        </div>
      </main>
    </>
  );
}

export default HomePage;
