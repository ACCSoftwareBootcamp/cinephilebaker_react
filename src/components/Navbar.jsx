import React from "react";
import links from "./links"
import NavLink from "./NavLink";



function Navbar() {
  return (
    <nav className="col-span-12 flex flex-col align-center lg:flex-row lg:justify-between py-5 gap-5">
      {links.map((link) => (
        <NavLink
          image={link.image}
          alt={link.alt}
          name={link.name}
          path={link.path}
        />
      ))}
    </nav>
  );
}

export default Navbar;
