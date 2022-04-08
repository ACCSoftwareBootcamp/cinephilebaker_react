import React from "react";
import links from "./links"
import NavLink from "./NavLink";

function Navbar() {
  return (
    <nav className="col-span-12 flex flex-col align-center py-3 md:flex-row lg:justify-between lg:py-5 gap-5">
      {links.map((link,i) => (
        <NavLink
          image={link.image}
          alt={link.alt}
          name={link.name}
          path={`/${link.path}`}
          key={i}
        />
      ))}
    </nav>
  );
}

export default Navbar;