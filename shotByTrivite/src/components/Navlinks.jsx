import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navlinks() {
  return (
    <div className="bg-[#131212] h-16 w-full">
      <div
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out-sine"
        className="w-full md:w-[85%] mx-auto xl:max-w-5xl"
      >
        <div className="w-full block sm:flex justify-between p-2 text-white">
          <p className="flex">
            <img src="/assets/logo-white.png" className="h-12 w-10" alt="" />
            <span className="items-center flex text-base font-semibold font-primaryfont pl-2">
              DesignbyTrivite
            </span>
          </p>
          <ul className="hidden sm:flex w-[60%] lg:w-[35%] justify-between font-primaryfont text-base">
            <AnchorLink href="/hero" className=" hover:underline ">
              <li>
                <span className="float-right">01</span>
                <br /> Home
              </li>
            </AnchorLink>
            <AnchorLink href="/about-me" className=" hover:underline ">
              <li>
                <span className="float-right">02</span>
                <br /> About me
              </li>
            </AnchorLink>
            <AnchorLink href="/my-work" className=" hover:underline ">
              <li>
                <span className="float-right">03</span>
                <br /> My works
              </li>
            </AnchorLink>
            <AnchorLink href="/contact-me" className=" hover:underline">
              <li>
                <span className="float-right">04</span>
                <br /> Contact me
              </li>
            </AnchorLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navlinks;
