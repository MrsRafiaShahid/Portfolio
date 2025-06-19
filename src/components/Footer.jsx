import React from "react";

const Footer = () => {
  return (
    <>
    <div className="w-full h-full text-white px-8 py-6">

      <div className=" grid md:grid-cols-3 grid-cols-1 gap-5">
        <a href="http://terms&policy" target="_blank" rel="noopener noreferrer">
          Terms & Policy
        </a>
        <a href="http://privacy" target="_blank" rel="noopener noreferrer">
          Privacy
        </a>
        <a href="/contact" target="_blank" rel="noopener noreferrer">
          Contact ME
        </a>
      </div>
        <div className=" px-8 py-6 ">
          <h4 className="text-2xl">Get in Touch</h4>
          <div className=" grid md:grid-cols-3 grid-cols-2 gap-5 px-8 py-6">

          <p>Linkedln</p>
          <p>Git</p>
          <p>Instagram</p>
          <p>Twitter</p>
          </div>
        </div>
    </div>
    </>
  );
};

export default Footer;
