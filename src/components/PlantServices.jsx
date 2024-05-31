import React from "react";
import Newsletter from "./Newsletter";
import Navbar from "./Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import click from "/Users/duaashahid/Desktop/olive/src/pictures-olive/tap.png";
import maint from "/Users/duaashahid/Desktop/olive/src/pictures-olive/maintainance.png";
import energy from "/Users/duaashahid/Desktop/olive/src/pictures-olive/solar-energy.png";
import eng from "/Users/duaashahid/Desktop/olive/src/pictures-olive/idea.png";
// import img1 from "/Users/duaashahid/Desktop/olive/src/pictures-olive/Rectangle 55.png"
// import img2  from "/Users/duaashahid/Desktop/olive/src/pictures-olive/Rectangle 57.png"
// import img3 from "/Users/duaashahid/Desktop/olive/src/pictures-olive/Rectangle 60.png"
import video from "/Users/duaashahid/Desktop/olive/src/pictures-olive/video (2160p).mp4";

const logos = [
  click,
  maint,
  energy,
  eng,

  // Add more logo images here
];
const textBelowImages = [
  "Operation and Commisioning",
  "Maintainence Inspection and Machining",
  "Engineering",
  "Wind Power and Renewable",
  // Add more descriptions here
];

// const text1 = [
//   "Operating three plants round the year with minimum outage we have 40 years of experience in turnaround planning & executionincluding maintenance and inspection.",
//   "We take pride in commissioning fertilizer projects worldwide in North Africa, Middle East and Far East Asia with well-known EPC Groups (Saipem, Mitsubishi and Techint).",
//   "FFC group is the pioneer of wind power in Pakistan through our sister concern FFCEL we manage in house O&M of our 49.5 MW facility in compliance with DNVGL-SE-0448"
// ];

function PlantServices() {
  const settings = {
    infinite: true,
    speed: 6000,
    slidesToShow: logos.length - 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    centerPadding: "0",
    swipeToSlide: false,
  };

  const divStyle = {
    position: "relative", // Make the div relative
    // Add other CSS styles as needed
  };

  return (
    <div>
      <Navbar />
      <div className="relative w-full h-[1000px]" style={divStyle}>
        <video
          autoPlay
          loop
          muted
          id="video"
          className="w-full h-full object-cover blur-video"
        >
          <source src={video} type="video/mp4" />
        </video>

        <div className="absolute top-0 left-0 w-full h-full">
          <div className="overlay"></div>
          <div className="content text-white text-center absolute inset-0 flex items-center justify-center">
            <div className="text-background bg-white bg-opacity-50 p-4">
              <h1 className="text-4xl font-bold">
                Plant Maintainence Services
              </h1>
              <h2 className="text-2xl text-black background:white text-justify pt-10 mx-40">
                Operating three plants round the year with minimum outage, we
                have 40 years of experience in turnaround planning & execution
                including maintenance and inspection.
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <h1 className="text-center text-2xl pt-10">Key Offerings</h1>
        <Slider {...settings} className="pt-10 pb-10">
          {logos.map((logo, index) => (
            <div key={index} className="text-center">
              <img src={logo} alt={`Logo ${index}`} className="mx-auto w-20" />
              <p className="mt-2">{textBelowImages[index]}</p>
            </div>
          ))}
        </Slider>
      </div>

      <div className=" w-full md:h-[400px]  bg-[#F1F8FF] justify-center  ">
        <h1 className="text-2xl  items-center text-center pt-10">
          Technical Services
        </h1>
        <div className="container  pt-10 ">
          <div className="row">
            <div className="col-sm-1">
              <img src={click} alt="" className="w-[80px] pt-10" />
            </div>
            <div className="col pt-10">
              <h2 className="font-bold">Operation and Commisioning</h2>
              <h2 className="pt-2">
                We take pride in commissioning fertilizer projects worldwide in
                North Africa, Middle East and Far East Asia with well-known EPC
                Groups (Saipem, Mitsubishi and Techint).
              </h2>
            </div>
            <div className="col-sm-1">
              <img src={energy} alt="" className="w-[80px] pt-10" />
            </div>

            <div className="col pt-10">
              <h2 className="font-bold">Wind Power and Renewable</h2>
              <h2 className="pt-2">
                FFC group is the pioneer of wind power in Pakistan through our
                sister concern FFCEL we manage in house O&M of our 49.5 MW
                facility in compliance with DNVGL-SE-0448.
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1">
              <img src={maint} alt="" className="w-[80px] pt-10" />
            </div>

            <div className="col pt-10">
              <h2 className="font-bold">
                Maintainence Inspection and Machining
              </h2>
              <h2 className="pt-2">
                To ensure plant reliability, we have a highly skilled team for
                plant inspections who performed regular plant inspections to
                ensure that plant equipments are safe, reliable, and fit for
                plant operations.
              </h2>
            </div>

            <div className="col-sm-1">
              <img src={eng} alt="" className="w-[80px] pt-10" />
            </div>

            <div className="col pt-10">
              <h2 className="font-bold">Engineering</h2>
              <h2 className="pt-2">
                We have highly skilled team of process and project engineers who
                provide engineering services to our fertilizer plant
              </h2>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </div>
  );
}

export default PlantServices;
