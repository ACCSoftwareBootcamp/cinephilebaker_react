import React, { useState } from "react";
import Link from "next/link";
function NavLink({ image, alt, name, path }) {
  const [active, setActive] = useState(false);

  let activeClass = active ? "bg-red-200" : "";
  return (
    <div className="">
      <Link href={path} className="hidden md:block cursor-pointer">
        <a>
          <img src={image} alt={alt} className="w-full mb-2" />
        </a>
      </Link>
      <Link href={path}>
        <a>
          <p className={`uppercase text-base text-center ${activeClass}`}>
            {name}
          </p>
        </a>
      </Link>
    </div>
  );
}

export default NavLink;
