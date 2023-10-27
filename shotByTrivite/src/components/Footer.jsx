import React from "react";

function Footer() {
  return (
    <div className="bg-blue-200 h-full">
      <div className="w-[80%] mx-auto">
        <div className="w-full flex justify-between pt-6 pb-6">
          <p className=" self-center">Made by Oghenerohro Precious - Copyright 2023</p>
          <div className=" w-[20%]">
            <ul className="flex justify-between pt-1 underline">
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
