import React from "react";
import Link from "next/link";
function Logo() {
  return (
    <div className="text-center my-4">
      <p className="text-xl">Steven Ray Martinez</p>
      <p className="text-base">is</p>
      <Link href="/">
        <a>
          <h1 className="text-3xl uppercase">CINEPHILEBAKER</h1>
        </a>
      </Link>
    </div>
  );
}

export default Logo;
