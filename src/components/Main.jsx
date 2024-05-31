import React from "react";
import Typed from "react-typed";
import Navbar from "./Navbar.jsx";
import img1 from "./../pictures-olive/home-page-picture.png";
// import mits from "/Users/duaashahid/Desktop/olive/src/pictures-olive/Mitsubishi_Heavy_Industries 1.png";
// import haldor from "/Users/duaashahid/Desktop/olive/src/pictures-olive/Haldor_Topsoe.png";
// import kafco from "/Users/duaashahid/Desktop/olive/src/pictures-olive/KAFCO.png";
// import lifeco from "/Users/duaashahid/Desktop/olive/src/pictures-olive/LIFECO.png";
// import { AiFillStar } from "react-icons/ai";
import img2 from "./../pictures-olive/home-page-pic2.png";
import img3 from "./../pictures-olive/homepage-pic-3.png";
import img4 from "./../pictures-olive/homepage-pic4.png";
// import img5 from "/Users/duaashahid/Desktop/olive/src/pictures-olive/MAK.png";
// import img6 from "/Users/duaashahid/Desktop/olive/src/pictures-olive/AFK.png";
// import img7 from "/Users/duaashahid/Desktop/olive/src/pictures-olive/SAR.png";
// import img8 from "/Users/duaashahid/Desktop/olive/src/pictures-olive/SBK.png";
import Newsletter from "./Newsletter";
import SAR from "./../pictures-olive/SA.jpg";
import Anew from "./../pictures-olive/Anew.jpg";
import SB from "./../pictures-olive/SB.jpg";
import AK from "./../pictures-olive/AK.jpg";
import LogoSlider from "./LogoSlider";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-full justify-items-center ">
        <Navbar />

        <div
          className="w-full md:h-[500px] mx-auto  bg-[#F1F8FF] justify-center sm:h-[800px] "
          style={{
            textAlign: "center",
          }}
        >
          <div className="  text-left  justify-center mx-auto grid md:grid-cols-2">
            <div className="justify-left px-20 pt-10 ">
              <h1 className="text-black p-1 md:text-5xl sm:text-4xl text-3xl font-semibold py-1 my-5">
                Tech Experts for{" "}
              </h1>

              <Typed
                className="md:text-5xl sm:text-4xl text-3xl font-semibold  md:pl-4 pl-2"
                strings={["IT,", "SAP,", "Training."]}
                typeSpeed={120}
                backSpeed={140}
                loop
              />

              <p className="flex md:text-2xl sm:text-xl text-xl py-4 px-3 justify-left">
                Welcome to OLIVE Technical Services, the leading provider of
                comprehensive IT & SAP, plant services, and Trainings.
              </p>
              <button
                className="bg-[#1D5ADE] w-[200px] hover:scale-110 rounded-full font-medium  my-5 py-3 px-3  text-white  "
                onClick={() => navigate("/Services")}
              >
                View all Services
              </button>
            </div>

            <div className="w-[500px] mx-auto  flex-col  my-6 px-20 pt-10">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>

        {/* <div className="  w-full  py-10 after:text-left justify-center mx-auto grid md:grid-cols-5 sm:grid-cols-2">
          <p className="  mx-auto  flex-col py-4 text-[#9e8e8e] font-bold ">
            Overseas Clients
          </p>
          <img className="mx-auto  flex-col" src={mits} alt="" />
          <img className="mx-auto  flex-col" src={haldor} alt="" />
          <img className="mx-auto  flex-col" src={kafco} alt="" />
          <img className="mx-auto  flex-col" src={lifeco} alt="" />
        </div> */}
        <div className="w-full pt-5 ">
          <LogoSlider />
        </div>

        {/* <div className=" grid md:grid-cols-2  justify-center mx-40  py-4 font-semibold ">
          <div
            className="justify-centre  flex-row"
            style={{ alignItems: "center" }}
          >
            <h3 className="md:text-2xl sm:text-xl justify-center flex-row">
              {" "}
              4.8
            </h3>
            <div className=" md:text-2xl sm:text-xl  flex">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <h3 className="md:text-2xl sm:text-xl flex-col">2,934 Ratings </h3>
            <h3 className="md:text-2xl sm:text-xl flex-col">Google Reviews</h3>
          </div>
          

          <div className="py-7  ">
            <h1 className="md:text-2xl sm:text-xl">
              Trusted by numerous Businesses,Institutions,Individiuals
            </h1>
            <h2 className="text-[#1D5ADE]">Any Name</h2>
            <h3>
              This technology company exceeded my expectations with their
              diverse range of services and impressive portfolio, making them a
              reliable and efficient partner for all our technical needs.
            </h3>
          </div>
        </div> */}

        {/* <div className="w-full md:h-[300px]  justify-center  items-center text-center sm:h-[800px] pt-20 ">
          <h1 className="text-xl items-center text-center pt-5 mx-60">
            {" "}
            Because with us, you'll experience a journey marked by excellence,
            unwavering reliability, top-quality service, rock-solid stability,
            and speedy responsiveness, all designed to elevate your business to
            new heights.
          </h1>
          <div className="pt-10">
            <buthon className=" justify-center items-center bg-[#1D5ADE] w-[200px]  rounded-full font-medium py-5 px-5  text-white md:mx-60 hover:scale-110">
              Download Brochure
            </buthon>
          </div>
        </div> */}

        <div className="w-full  md:h-[740px]  bg-[#F1F8FF] sm:h-[800px] ">
          <div className="flex">
            <h1 className="text-4xl text-black font-semibold pt-10 md:mx-20 pb-10">
              Our Services
            </h1>
            {/* <div className="pl-80">
              <button
                className="bg-[#1D5ADE] w-[200px]  rounded-full font-medium   mt-10 py-4   text-white justify-left md:mx-60 hover:scale-110"
                onClick={() => navigate("/Services")}
              >
                View all Services
              </button>
            </div> */}
          </div>
          <div className="text-left justify-items-center  grid md:grid-cols-3 ">
            <div className="w-[500px] mx-auto justify-centerflex-col mx-500 my-6 px-20">
              <img src={img2} alt="" />
              <h1 className="py-6 text-xl">Plant Maintenance services </h1>
              <h3 className="py-7">
                Our Plant Maintenance service ensures the health and longevity
                of your plants through professional care and meticulous
                attention to detail.
              </h3>
              <button
                className=" font-medium  text-[#1D5ADE] justify-left hover:scale-110"
                onClick={() => navigate("/PlantServices")}
              >
                Read More
              </button>
            </div>

            <div className="w-[500px] mx-auto justify-center flex-col mx-500 my-6 px-20">
              <img src={img3} alt="" />
              <h1 className="py-6 text-xl">Training Services</h1>
              <h3 className="py-7">
                Our SAP Integration service seamlessly connects your SAP system
                with other applications to streamline processes and increase
                efficiency.
              </h3>
              <button
                className=" font-medium  text-[#1D5ADE] justify-left hover:scale-110"
                onClick={() => navigate("/TrainingServices")}
              >
                Read More
              </button>
            </div>
            <div className="w-[500px] mx-auto justify-center flex-col mx-500 my-6 px-20">
              <img src={img4} alt="" />
              <h1 className="py-6 text-xl">IT and SAP Services</h1>
              <h3 className="py-7">
                Our IT Solutions service offers comprehensive and reliable
                support for all your technology needs, ensuring optimal
                performance and security.
              </h3>
              <button
                className=" font-medium py-2  text-[#1D5ADE] justify-left hover:scale-110"
                onClick={() => navigate("/ITServices")}
              >
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className=" justify-items-center pb-10">
          <h1 className="text-4xl text-black font-semibold py-14 mx-20">
            Governance
          </h1>
          <div className="text-left grid md:grid-cols-4 ">
            <div className="flex-col ">
              <img
                src={Anew}
                alt=""
                className="hover:scale-110 pt-5 pl-20 w-[330px]"
              />
              <h1 className="py-4 text-xl pl-20">Muhammad Aleem Khan </h1>
              <h3 className=" text-[#695f5f] pl-20">CEO</h3>
            </div>

            <div className="flex-col">
              <img
                src={AK}
                alt=""
                className="hover:scale-110 pt-5 pl-20 w-[330px]"
              />
              <h1 className="py-4 text-xl pl-20">Akbar Fida Hussain </h1>
              <h3 className=" text-[#695f5f] pl-20">Director</h3>
            </div>

            <div className="   flex-col  ">
              <img
                src={SAR}
                alt=""
                className="hover:scale-110  pt-5 pl-20 w-[330px]"
              />
              <h1 className="py-4 pl-20 text-xl ">Sarfaraz Ahmed Rehman </h1>
              <h3 className=" text-[#695f5f] pl-20">Chairman</h3>
            </div>

            <div className=" flex-col   ">
              <img
                src={SB}
                alt=""
                className="hover:scale-110 pt-5 pl-20 w-[330px] "
              />
              <h1
                className=" py-4 text-xl  pl-20
              "
              >
                Syed Bakhtiyar Kazmi{" "}
              </h1>
              <h3 className="  text-[#695f5f]  pl-20">Director</h3>
            </div>
          </div>
        </div>

        <Newsletter />
      </div>
    </div>
  );
}

export default Main;
