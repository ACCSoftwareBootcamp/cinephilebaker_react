import React from "react";

function NavLink({ image, alt, name, path }) {
  return (
    <div className="">
      <a href={path}>
        <img src={image} alt={alt} className="w-full mb-2" />
      </a>
      <a href={path}>
        {" "}
        <p className="uppercase text-base text-center">{name}</p>
      </a>
    </div>
  );
}

export default NavLink;
