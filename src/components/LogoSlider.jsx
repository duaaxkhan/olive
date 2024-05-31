import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from "/Users/duaashahid/Desktop/olive/src/pictures-olive/KAFCO.png"
import img2 from "/Users/duaashahid/Desktop/olive/src/pictures-olive/LIFECO.png"
import img3 from "/Users/duaashahid/Desktop/olive/src/pictures-olive/Mitsubishi_Heavy_Industries 1.png"
import img4 from "/Users/duaashahid/Desktop/olive/src/pictures-olive/Haldor_Topsoe.png"
// import img5 from "/Users/duaashahid/Desktop/olive/src/pictures-olive/BHP-1.png"
// import img6 from "/Users/duaashahid/Desktop/olive/src/pictures-olive/ICI.png"
// import img7 from "/Users/duaashahid/Desktop/olive/src/pictures-olive/OMV.png"
const logos = [
  img1,
  img2,
  img3,
  img4


  // Add more logo images here
];

const LogoSlider = () => {
  const settings = {
    infinite: true,
    speed: 4000,
    slidesToShow: logos.length-1, // Adjust the number of visible logos
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Adjust the autoplay speed (milliseconds)
    centerMode: true,
    centerPadding: '0',
    swipeToSlide: false, // Allow swiping to slide

  };

  return (
    <div className="py-4">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="text-center">
            <img src={logo} alt={`Logo ${index}`} className=" w-[50] h-auto " />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoSlider;