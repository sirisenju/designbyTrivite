import React from "react";

function Footer() {
  return (
    <div
      data-aos="zoom-in"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out-sine"
      className="bg-[#131212] border-t-2 border-white h-full"
    >
      <div className="w-full p-2 sm:p-0 sm:w-[80%] mx-auto xl:max-w-5xl text-white">
        <div className="w-full block sm:flex justify-between pt-4 pb-4">
          <p className=" self-center font-primaryfont text-lg sm:text-start text-center">
            Made by Oghenerohro Precious - Copyright 2023
          </p>
          <div className="w-full sm:w-[20%]">
            <ul className="flex justify-between font-primaryfont pt-3 sm:pt-1 underline text-lg">
              <li>TW</li>
              <li>LN</li>
              <li>YT</li>
              <li>IG</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
