import React from "react";
import { social } from "../constants";

const Footer = () => {
  return (
    <>
      <footer className="my-10 md:mt-20 mt-10 text-white px-5 md:px-20 xl:px-20 flex items-center justify-center">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 w-full py-5">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="flex items-center justify-center gap-5">
          {social.map((social, index) => (
            <div key={index} className="icon">
              <img src={social.imgPath} alt="social icon" />
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-center text-base md:text-end">
            © {new Date().getFullYear()} Rafia Shahid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
