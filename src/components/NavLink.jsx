import React from "react";

function NavLink({ image, alt, name, path }) {
  
  const ImageLink = () => (
    <a href={path}>
      <img src={image} alt={alt} className="w-full mb-2" />
    </a>
  );

  return (
    <div className="">
     <ImageLink />
      <a href={path}>
        {" "}
        <p className="uppercase text-base text-center">{name}</p>
      </a>
    </div>
  );
}

export default NavLink;
