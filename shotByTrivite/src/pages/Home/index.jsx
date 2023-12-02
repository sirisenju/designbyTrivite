import React from "react";
import expList from "../../lib/expList";
import images from "../../lib/sliderImg";
import wrokProj from "../../lib/projects";
import { FaEye } from "react-icons/fa";
import Ratings from "../../lib/ratings";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function Home() {
  const [mail, setMail] = useState({
    fullname: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState({
    fullname: "",
    subject: "",
    message: "",
  });

  //handle user input from form
  const handleInput = (event) => {
    const { name, value } = event.target;
    setMail({
      ...mail,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      //clear form field
      setMail({
        fullname: "",
        subject: "",
        message: "",
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (mail.fullname.trim() === "") {
      errors.fullname = "full name is required";
      isValid = false;
    }

    if (mail.subject.trim() === "") {
      errors.subject = "subject is required";
      isValid = false;
    }

    if (mail.message.trim() === "") {
      errors.message = "message is required";
      isValid = false;
    }

    setError(errors);
    return isValid;
  };
  return (
    <main>
      {/**first section. Hero section............................................................ */}
      <section className="h-full w-full bg-[#131212]" id="hero">
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out-sine"
          className="w-full sm:w-[80%] mx-auto p-2 xl:max-w-5xl"
        >
          <div className="block sm:flex sm:justify-center sm:pt-[5%]">
            <div className="self-start lg:self-center text-white">
              <h1 className="text-[30px] sm:text-[50px] font-semibold font-head">
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
                <AnchorLink href="/contact-me" className=" hover:underline">
                  <li>Send a message</li>
                </AnchorLink>
                <a href="primer-pro.pdf" download={"primer-pro.pdf"}>
                  <li className=" pl-2">Resume</li>
                </a>
              </ul>
            </div>
            <div className="w-full sm:max-w-md sm:ml-14 pt-2 sm:pt-0">
              <img
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-sine"
                src="/assets/hero-image.png"
                loading="lazy"
                alt=""
              />
              <div className="">
                <ul className="flex justify-between pt-1 underline font-primaryfont text-white">
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
                    className="flex justify-center items-start w-[20rem] text-white"
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
                    className="flex justify-center items-start w-[20rem] text-white"
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
      <section className="h-full w-full bg-[#131212]" id="about-me">
        <div className="w-full sm:w-[80%] mx-auto p-2 xl:max-w-5xl">
          <div
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-sine"
            className="text-white"
          >
            <p className="text-4xl sm:text-6xl font-medium font-primaryfont pt-5 pb-5">
              <span className="text-stroke">01.</span>
              About me
            </p>
            <div className="border-t-2 border-white">
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
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-sine"
            className="text-white"
          >
            <p className="text-4xl sm:text-6xl font-medium font-primaryfont pt-5 pb-5 text-start sm:text-end">
              <span className="text-stroke">02.</span>
              <br />
              Experience
            </p>
            <div className="border-b-2 border-white">
              {expList.map((item) => (
                <div
                  key={item.id}
                  className="text-lg block sm:flex sm:justify-between text-center p-7 w-full border-t-2 border-white"
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
              <a href="primer-pro.pdf" download={"primer-pro.pdf"}>
                <button className="bg-[#264BD0] rounded-lg px-20 sm:px-36 py-3 sm:py-6 text-lg text-white font-primaryfont">
                  Download Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/**second section. About me section............................................................. */}

      {/**third section my work section. Experience............................................................. */}
      <section className="h-full w-full bg-[#131212]" id="my-work">
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out-sine"
          className="w-full sm:w-[80%] mx-auto p-2 xl:max-w-5xl"
        >
          <p className="text-4xl sm:text-6xl font-semibold pt-5 pb-5 sm:text-end text-start text-white">
            <span className="text-stroke">04.</span>
            My work
          </p>
          <div className="border-t-2 border-white">
            {wrokProj.map((item) => (
              <div
                key={item.id}
                className="max-h-fit block lg:flex mb-2 sm:pt-5"
              >
                <img
                  src={item.images}
                  className=" sm:h-[320px] w-full object-cover"
                  alt=""
                />
                <div className="w-full bg-white p-2 sm:p-10 text-black">
                  <img src={item.company} alt="" />
                  <p className="pb-3 pt-3 font-primaryfont text-lg sm:text-base">
                    {item.message}
                  </p>
                  <a href="">
                    <p className=" flex text-lg hover:underline">
                      <span className=" flex items-center pr-2">
                        <FaEye size={20} />
                      </span>
                      {item.views}
                    </p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/**fourth section contact us section. Experience............................................................. */}
      <section className="h-full w-full bg-[#131212]" id="contact-me">
        <div
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out-sine"
          className="w-full sm:w-[80%] mx-auto p-2 xl:max-w-5xl text-white"
        >
          <p className="text-4xl sm:text-6xl font-semibold pt-5 pb-5 text-start">
            <span className="text-stroke">
              05. <br />
            </span>
            Endorsements
          </p>
          <div className="border-t-2 border-white block sm:flex sm:justify-between sm:gap-x-2 pt-[10%] pb-[10%]">
            {Ratings.map((item) => (
              <div
                key={item.id}
                className="w-full sm:max-w-sm p-4 bg-[#264BD0] mb-2 grid"
              >
                <p>{item.remark}</p>
                <div className="flex justify-between items-end pt-2">
                  <p>
                    {item.name} <br />
                    {item.role}
                  </p>
                  <img
                    src={item.iconUrl}
                    className=" h-8 w-9 object-contain"
                    loading="lazy"
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-sine"
            className="text-center text-lg max-w-xl mx-auto font-primaryfont"
          >
            <p className=" text-lg font-semibold text-white">
              Let's create experiences that inspire and empower
            </p>
            <p className=" text-white">
              Got a question, proposal or project or want to work together on
              something? Feel free to reach out."
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-sine"
            className="w-full pt-14"
          >
            <form action="">
              <div className=" sm:flex text-white">
                <div className="w-full sm:w-[50%]">
                  <div className=" sm:p-8 font-primaryfont">
                    <label htmlFor="">Full Name</label>
                    <br />
                    <input
                      type="text"
                      name="fullname"
                      onChange={handleInput}
                      value={mail.fullname}
                      id="fullname"
                      placeholder="enter your full name"
                      className="w-[100%] h-[40px] pt-5 outline-none border-b-2 border-white bg-transparent"
                    />
                    <span style={{ color: "red" }}>{error.fullname}</span>
                  </div>
                  <div className=" pt-4 sm:p-8 font-primaryfont">
                    <label htmlFor="">Subject</label>
                    <br />
                    <input
                      type="text"
                      name="subject"
                      onChange={handleInput}
                      value={mail.subject}
                      id="subject"
                      placeholder="enter email subject"
                      className="w-[100%] h-[40px] pt-5 outline-none border-b-2 border-white bg-transparent"
                    />
                    <span style={{ color: "red" }}>{error.subject}</span>
                  </div>
                </div>
                <div className="w-full sm:w-[50%] sm:p-8 pt-4 sm:pt-10 font-primaryfont">
                  <label htmlFor="">Message</label>
                  <br />
                  <textarea
                    name="message"
                    onChange={handleInput}
                    value={mail.message}
                    id="message"
                    placeholder="enter message"
                    className="w-full h-[80px] sm:h-[154px] outline-none border-b-2 border-white bg-transparent"
                  ></textarea>
                  <span style={{ color: "red" }}>{error.message}</span>
                </div>
              </div>
              <div className=" sm:p-8">
                <button
                  onClick={handleSubmit}
                  className="py-4 w-[170px] bg-blue-500 rounded-lg font-primaryfont"
                >
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
