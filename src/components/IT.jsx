import React from "react";
import Newsletter from "./Newsletter";
import Navbar from "./Navbar";
import FK from "./../pictures-olive/FK.jpg";
import ReactRoundedImage from "react-rounded-image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mobile from "./../pictures-olive/mobile.png";
import web from "./../pictures-olive/web.png";
import sap from "./../pictures-olive/icons8-sap-256.png";
import dash from "./../pictures-olive/dashboard.png";
import cloud from "./../pictures-olive/infrastructure.png";
import security from "./../pictures-olive/cyber-security.png";
// import testing from "./../pictures-olive/quality-assurance.png";
import consult from "./../pictures-olive/interview.png";
import training from "./../pictures-olive/training.png";
import human from "./../pictures-olive/hand.png";
import sd from "./../pictures-olive/moving-truck.png";
import handle from "./../pictures-olive/material-handling.png";
import report from "./../pictures-olive/report.png";
// import analytics from "./../pictures-olive/analytics.png";
import plant from "./../pictures-olive/factory.png";
import analysis from "./../pictures-olive/analysis.png";
// import quality from "./../pictures-olive/quality-assurance.png";
import website from "./../pictures-olive/website.png";
import setting from "./../pictures-olive/settings.png";
// import lines from "./../pictures-olive/setting-lines.png";
import bars from "./../pictures-olive/bars.png";
import tech from "./../pictures-olive/technology.png";
import ass from "./../pictures-olive/assurance.png";
import test from "./../pictures-olive/testing.png";

const logos = [
  consult,
  security,
  test,
  sap,
  cloud,
  web,
  training,

  // Add more logo images here
];
const textBelowImages = [
  "SAP Consulting Services",
  "Information Security",
  "Software Testing and QA Sevices",
  "SAP S/4 HANA",
  "Cloud Infrastructure Services",
  "Software Development Services",
  "Trainings",
  // Add more descriptions here
];

function IT() {
  const settings = {
    infinite: true,
    speed: 4000,
    slidesToShow: logos.length - 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    centerPadding: "0",
    swipeToSlide: false,
  };
  return (
    <div>
      <Navbar />
      <div className="w-full md:h-[600px]  bg-[#F1F8FF] justify-center  items-center sm:h-[800px] pt-20 ">
        <h1 className=" text-3xl   justify-center text-center">
          "OLIVE cloud Platform (OCP) will provide reliable, responsive and
          transparent cloud services to the market"
        </h1>
        <h1 className=" text-2xl  justify-center pt-4 text-center">
          Fakhar ul Hasan Mahmood
        </h1>
        <h1 className=" text-2xl pt-4 text-center">CIO</h1>
        <div className="w-[250px] mx-auto pt-20 first-letter:justify-center items-center ">
          <ReactRoundedImage
            roundedColor=""
            imageWidth="250"
            imageHeight="250"
            image={FK}
          />
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
      <div className="w-full md:h-[300px]  bg-[#F1F8FF] justify-center  items-center text-center sm:h-[800px] pt-10 ">
        <h1 className="text-xl items-center text-center pt-5 mx-60">
          {" "}
          Because with us, you'll experience a journey marked by excellence,
          unwavering reliability, top-quality service, rock-solid stability, and
          speedy responsiveness, all designed to elevate your business to new
          heights.
        </h1>
        <div className="pt-10">
          <button className=" justify-center items-center bg-[#1D5ADE] w-[200px]  rounded-full font-medium py-4 px-4  text-white md:mx-60 hover:scale-110">
            Download Brochure
          </button>
        </div>
      </div>
      <h1 className="text-2xl items-center text-center pt-10">
        Software Development Services
      </h1>
      {/* <div className=" flex items-center justify-center w-full md:h-[200px]  text-center sm:h-[800px] pt-10  ">
        <img src={img1} alt="" className="w-[150px] pl-2 " />
        <img src={img1} alt="" className="w-[150px] pl-2" />
        <img src={img1} alt="" className="w-[150px] pl-2" />
        <img src={img1} alt="" className="w-[150px] pl-2" />
      </div> */}

      <div className=" grid grid-cols-4 justify-center mx-80 pl-40 md:h-[300px] pt-10">
        <img src={mobile} alt="" className="w-[100px] pt-10" />
        <img src={web} alt="" className="w-[80px] pt-10" />
        <img src={sap} alt="" className="w-[100px] pt-10" />
        <img src={dash} alt="" className="w-[80px] pt-10" />
        <p className="pb-50">Mobile Apps </p>
        <p>Wev Apps</p>
        <p> SAP Applications</p>
        <p> Dashboards</p>
      </div>

      <div className=" w-full md:h-[1000px]  bg-[#F1F8FF] justify-center  ">
        <h1 className="text-2xl  items-center text-center pt-10">
          SAP Consulting Services
        </h1>
        <div class="container  pt-10 ">
          <div class="row">
            <div class="col-sm-1">
              <img src={human} alt="" className="w-[80px] pt-10" />
            </div>
            <div class="col pt-10">
              <h2 className="font-bold">Human Capital Management (HCM)</h2>
              <h2 className="pt-2">
                Increase the efficiency and effectiveness of your organization’s
                HR processes such as personnel administration, org management,
                benefits administration, time management and payroll etc.
              </h2>
            </div>
            <div class="col-sm-1">
              <img src={handle} alt="" className="w-[80px] pt-10" />
            </div>

            <div class="col pt-10">
              <h2 className="font-bold">Material Management (MM)</h2>
              <h2 className="pt-2">
                MM module facilitates the procurement process and handles
                approvals starting from requisition till goods receipt. Provides
                inventory management, valuation of material, goods movement and
                material requirement planning.
              </h2>
            </div>

            <div class="col-sm-1">
              <img src={sd} alt="" className="w-[80px] pt-10" />
            </div>

            <div class="col pt-10">
              <h2 className="font-bold">Sales & Distribution (SD)</h2>
              <h2 className="pt-2">
                Effective management of sales’ documents in a unified system.
                Facilitates your sales team from orders all the way to billing.
              </h2>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-1">
              <img src={report} alt="" className="w-[80px] pt-10" />
            </div>
            <div class="col pt-10">
              <h2 className="font-bold">Financial Accounting (FI)</h2>
              <h2 className="pt-2">
                FI module meets all the accounting and financial needs of an
                organization. Financial Managers are able to review the
                financial position of the company in real time for better
                decision making.
              </h2>
            </div>
            <div class="col-sm-1">
              <img src={bars} alt="" className="w-[80px] pt-10" />
            </div>

            <div class="col pt-10">
              <h2 className="font-bold">BI / BO</h2>
              <h2 className="pt-2">
                Enveloping an infrastructure for a business data warehouse, SAP
                BI / BO provides landscape for development of BI reports, BO
                dashboards and enterprise level analytics enabling management to
                review organizational KPIs and make effective decision making.
              </h2>
            </div>

            <div class="col-sm-1">
              <img src={plant} alt="" className="w-[80px] pt-10" />
            </div>

            <div class="col pt-10">
              <h2 className="font-bold">Plant Maintenance (PM)</h2>
              <h2 className="pt-2">
                This module covers all the functions of plant maintenance like
                corrective and preventive maintenance, repairs, inspection and
                the measures taken during the maintenance organization.
              </h2>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-1">
              <img src={website} alt="" className="w-[80px] pt-10" />
            </div>
            <div class="col pt-10">
              <h2 className="font-bold">
                CO & Business Planning Consolidation (BPC)
              </h2>
              <h2 className="pt-2">
                A management instrument for organizational decisions; this
                module organizes company’s flow of cost & revenue and provides
                support information needed by management for financial planning,
                reporting and decision making.
              </h2>
            </div>
            <div class="col-sm-1">
              <img src={ass} alt="" className="w-[80px] pt-10" />
            </div>

            <div class="col pt-10">
              <h2 className="font-bold">Quality Module (QM)</h2>
              <h2 className="pt-2">
                Through better monitoring and controls, it assures that final
                product and processes are as per organization’s quality
                standards through monitoring and control.
              </h2>
            </div>

            <div class="col-sm-1">
              <img src={analysis} alt="" className="w-[80px] pt-10" />
            </div>

            <div class="col pt-10">
              <h2 className="font-bold">Production Planning (PP)</h2>
              <h2 className="pt-2">
                Production planning module is useful in the industry where there
                is a production process. In any manufacturing company, it would
                be a driving module. It automates production related tasks such
                as bill of material, routing, plan order, production order,
                confirmation order and material requirement planning.
              </h2>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-1">
              <img src={website} alt="" className="w-[80px] pt-10" />
            </div>
            <div class="col pt-10">
              <h2 className="font-bold">SAP Net Weaver Portal</h2>
              <h2 className="pt-2">
                A rich web based interface for interaction with SAP, provides
                custom level implementation / configuration of business
                workflows along with knowledge management and collaboration.
                Further, this encompass content configuration & development,
                integration, single sign on with sap and non-sap systems /
                applications, business packages configuration and
                implementation, etc.
              </h2>
            </div>
            <div class="col-sm-1">
              <img src={tech} alt="" className="w-[80px] pt-10" />
            </div>

            <div class="col pt-10">
              <h2 className="font-bold">ABAP</h2>
              <h2 className="pt-2">
                ABAP module provides capability to enhance SAP system
                functionality as per your organization’s requirements.
                Customized reports, workflows and other modifications can be
                handled professionally through ABAPing.
              </h2>
            </div>

            <div class="col-sm-1">
              <img src={setting} alt="" className="w-[80px] pt-10" />
            </div>

            <div class="col pt-10">
              <h2 className="font-bold">BASIS</h2>
              <h2 className="pt-2">
                Core backend module for SAP landscape implementation and
                configuration; facilitates installation / upgrade of SAP
                components & systems, implementation of SAP security, handling
                of SAP licenses along with administration of users and oracle
                database.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
}

export default IT;
