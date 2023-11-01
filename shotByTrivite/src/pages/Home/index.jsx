import React from "react";
import expList from "../../lib/expList";
import images from "../../lib/sliderImg";
import wrokProj from "../../lib/projects";

function Home() {
  return (
    <main>
      {/**first section. Hero section............................................................ */}
      <section className="h-full w-full bg-[#FFFDFD]" id="hero">
        <div className="w-full sm:w-[80%] mx-auto p-4 xl:max-w-5xl">
          <div className="block sm:flex sm:justify-center sm:pt-[5%]">
            <div className="self-start lg:self-center">
              <h1 className="text-[50px] font-semibold font-secfont">
                Product
                <br /> Designer
              </h1>
              <p className=" pt-2 font-primaryfont text-lg">
                Hello! I’m Precious Rukevwe Oghenerohro
              </p>
              <p className=" pt-2 font-primaryfont text-lg text-[#264BD0]">
                Currently working for{" "}
                <span className=" font-semibold">Eastalliontech</span>
              </p>
              <ul className="flex pt-2 font-primaryfont text-lg underline">
                <li>Send a message</li>
                <li className=" pl-2">Resume</li>
              </ul>
            </div>
            <div className="w-full sm:max-w-md sm:ml-14 ">
              <img src="/assets/hero-image.png" alt="" />
              <div className="">
                <ul className="flex justify-between pt-1 underline font-primaryfont">
                  <li>TW</li>
                  <li>LN</li>
                  <li>YT</li>
                  <li>IG</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-5 w-full mx-auto">
            <div className="w-[100%] h-20  overflow-hidden relative">
              <div className="w-[100%] flex items-center h-20 justify-around absolute left-0 animate gap-20 animate">
                {images.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-center items-start w-[20rem]"
                  >
                    <img src={item.logo} className="h-12 w-10" />
                    <span className="self-center pl-3 text-3xl font-semibold font-primaryfont">
                      {item.text}
                    </span>
                  </div>
                ))}
                {images.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-center items-start w-[20rem]"
                  >
                    <img src={item.logo} className="h-12 w-10" />
                    <span className="self-center pl-3 text-3xl font-semibold font-primaryfont">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/**second section. About me section............................................................. */}

      {/**second section. About me section............................................................. */}
      <section className="h-full w-full" id="about-me">
        <div className="w-full sm:w-[80%] mx-auto p-2 xl:max-w-5xl">
          <div className="">
            <p className="text-4xl sm:text-6xl font-medium font-primaryfont pt-5 pb-5">
              <span className="text-stroke">01.</span>
              About me
            </p>
            <div className="border-t-2 border-black">
              <p className="pt-4 sm:pt-16 pb-4 sm:pb-16 font-primaryfont">
                Product designer with a blend of creativity and technical
                prowess, I'm dedicated to bringing ideas to life, one pixel at a
                time. I believe in the power of user-centered design. Every
                project I undertake is guided by a commitment to understanding
                user needs, empathizing with their pain points, and translating
                these insights into well-crafted, intuitive designs. <br />
                <span className="font-semibold pr-2">Core:</span>
                Figma, UX/UI Design, Photoshop, Usability testing, Web flow, Web
                design, Prototyping, HTML, CSS, Javascript, Reactjs.
              </p>
            </div>
          </div>
          <div className="">
            <p className="text-4xl sm:text-6xl font-medium font-primaryfont pt-5 pb-5 text-start sm:text-end">
              <span className="text-stroke">02.</span>
              <br />
              Experience
            </p>
            <div className="border-b-2 border-black">
              {expList.map((item) => (
                <div
                  key={item.id}
                  className="text-lg block sm:flex sm:justify-between text-center p-7 w-full border-t-2 border-black"
                >
                  <p className="self-center font-primaryfont font-semibold text-lg">
                    {item.company}
                  </p>
                  <div className="pt-5 sm:pt-0 font-primaryfont text-center sm:text-start">
                    {item.position}
                    <br />
                    {item.date}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center p-[2%] sm:p-[5%]">
              <button className="bg-[#264BD0] rounded-lg px-20 sm:px-36 py-3 sm:py-6 text-lg text-white font-primaryfont">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>
      {/**second section. About me section............................................................. */}

      {/**third section my work section. Experience............................................................. */}
      <section className="h-full w-full" id="my-work">
        <div className="w-full sm:w-[80%] mx-auto p-2 xl:max-w-5xl">
          <p className="text-4xl sm:text-6xl font-semibold pt-5 pb-5 sm:text-end text-start">
            <span className="text-stroke">04.</span>
            My work
          </p>
          <div className="border-t-2 border-black">
            {wrokProj.map((item) => (
              <div
                key={item.id}
                className="max-h-fit block lg:flex mb-2 sm:pt-5"
              >
                <img
                  src={item.images}
                  className="h-[320px] w-full object-cover"
                  alt=""
                />
                <div className="w-full bg-black p-2 sm:p-10 text-white">
                  <h2 className="text-2xl pb-3">{item.company}</h2>
                  <p className=" pb-3 font-primaryfont">{item.message}</p>
                  <p>{item.views}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/**fourth section contact us section. Experience............................................................. */}
      <section className="h-full w-full" id="contact-me">
        <div className="w-full sm:w-[80%] mx-auto p-2 xl:max-w-5xl">
          <p className="text-4xl sm:text-6xl font-semibold pt-5 pb-5 text-start">
            <span className="text-stroke">
              05. <br />
            </span>
            Endorsements
          </p>
          <div className="border-t-2 border-black block sm:flex sm:justify-between sm:gap-x-2 pt-[10%] pb-[10%]">
            <div className="w-full sm:max-w-sm p-4 bg-[#E4E8F4] mb-2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                accusantium id facere minima assumenda, quaerat sit, pariatur ad
                praesentium illum ex nostrum totam dicta facilis nulla incidunt
                quam rem quas officiis quidem quisquam?
              </p>
              <div className="flex justify-between pt-4">
                <p>
                  Tony Stark <br />
                  Ironman
                </p>
                <img
                  src="/assets/facebook.png"
                  className=" h-8 w-9 object-contain"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full sm:max-w-sm p-4 bg-[#E4E8F4] mb-2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                accusantium id facere minima assumenda, quaerat sit, pariatur ad
                praesentium illum ex nostrum totam dicta facilis nulla incidunt
                quam rem quas officiis quidem quisquam?
              </p>
              <div className="flex justify-between pt-4">
                <p>
                  Tony Stark <br />
                  Ironman
                </p>
                <img
                  src="/assets/facebook.png"
                  className=" h-8 w-9 object-contain"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full sm:max-w-sm p-4 bg-[#E4E8F4] mb-2 font-primaryfont">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                accusantium id facere minima assumenda, quaerat sit, pariatur ad
                praesentium illum ex nostrum totam dicta facilis nulla incidunt
                quam rem quas officiis quidem quisquam?
              </p>
              <div className="flex justify-between pt-4">
                <p>
                  Tony Stark <br />
                  Ironman
                </p>
                <img
                  src="/assets/facebook.png"
                  className=" h-8 w-9 object-contain"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="text-center text-lg max-w-xl mx-auto font-primaryfont">
            <p className=" text-lg font-semibold text-[#264BD0]">
              Let's create experiences that inspire and empower
            </p>
            <p className=" text-[#264BD0]">
              Got a question, proposal or project or want to work together on
              something? Feel free to reach out."
            </p>
          </div>
          <div className="w-full pt-14">
            <form action="">
              <div className=" sm:flex">
                <div className="w-full sm:w-[50%]">
                  <div className=" sm:p-8 font-primaryfont">
                    <label htmlFor="">Full Name</label>
                    <br />
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-[100%] h-[40px] pt-5 outline-none border-b-2 border-black bg-transparent"
                    />
                  </div>
                  <div className=" pt-4 sm:p-8 font-primaryfont">
                    <label htmlFor="">Full Name</label>
                    <br />
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-[100%] h-[40px] pt-5 outline-none border-b-2 border-black bg-transparent"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-[50%] sm:p-8 pt-8 font-primaryfont">
                  <label htmlFor="">Message</label>
                  <br />
                  <textarea
                    name=""
                    id=""
                    placeholder="enter message"
                    className="w-full h-[100px] sm:h-[154px] outline-none border-b-2 border-black bg-transparent"
                  ></textarea>
                </div>
              </div>
              <div className=" sm:p-8">
                <button className="py-4 w-[170px] bg-blue-500 rounded-lg font-primaryfont">
                  Send a message
                </button>
              </div>
            </form>
            <p className="text-center pb-10 pt-4 font-primaryfont text-lg">
              Connect with me{" "}
              <span className=" underline">Designbytrivite@gmail.com</span>
            </p>
          </div>
        </div>
      </section>
      {/**end section........................................................................ */}
    </main>
  );
}

export default Home;
