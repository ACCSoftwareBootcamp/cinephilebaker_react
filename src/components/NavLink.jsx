import React,{useState} from "react";
import {Link} from "react-router-dom"
function NavLink({ image, alt, name, path }) {
  const [active, setActive] = useState(false)
 
  
  
  let activeClass = active ? "bg-red-200" : ""
  return (
    <div className="">
     <Link to={path} className="hidden md:block">
      <img src={image} alt={alt} className="w-full mb-2" />

    </Link>
      <Link to={path}>
        {" "}
        <p className={`uppercase text-base text-center ${activeClass}`}>{name}</p>
      </Link>
    </div>
  );
}

export default NavLink;
