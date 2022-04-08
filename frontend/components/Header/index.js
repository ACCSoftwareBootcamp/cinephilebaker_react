import React from "react";
import Logo from "../Logo";
import Navbar from "./Navbar";

function Header() {
  return (
    <header>
      <div className="px-5 col-span-12 lg:hidden">
        <Logo />
        <hr style={{ borderTop: ".25rem solid white" }} />
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
