import React from "react";

function ContactInfo() {
  return (
    <address className="text-center lg:text-left flex flex-row justify-around lg:flex-col">
      <div className="mb-2">
        <h2>Email</h2>
        <a href="mailto:stevenraymartinez496@gmail.com">
          stevenraymartinez496@gmail.com{" "}
        </a>
      </div>
      <div className="mb-2">
        <h2>Instagram</h2>
        <a href="https://www.instagram.com/cinephilebaker/">cinephilebaker</a>
      </div>
    </address>
  );
}

export default ContactInfo;
