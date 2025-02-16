import React from "react";
import Marquee from "react-fast-marquee";
import Image1 from "../assets/flutter-1.png";
import Image2 from "../assets/html.png";
import Image3 from "../assets/java-1024x277.png";
import Image4 from "../assets/express-js-1024x301.png";
import Image5 from "../assets/capcut-1024x264.png";
import Image6 from "../assets/cinema-4d.png";
import Image7 from "../assets/adobe-animate-1024x263.png";
import Image8 from "../assets/adobe-xd.png";
import Image9 from "../assets/app-development.png";
import Image10 from "../assets/artifical-intelligence-1-1.png";
import Image11 from "../assets/flutter-1.png";
import Image12 from "../assets/flutter-1.png";
import Image13 from "../assets/flutter-1.png";
import Image14 from "../assets/flutter-1.png";
import Image15 from "../assets/flutter-1.png";
import Image16 from "../assets/flutter-1.png";
import Image17 from "../assets/flutter-1.png";
import Image18 from "../assets/flutter-1.png";
import Image19 from "../assets/flutter-1.png";
import Image20 from "../assets/flutter-1.png";
import Image21 from "../assets/flutter-1.png";
import Image22 from "../assets/flutter-1.png";
import Image23 from "../assets/flutter-1.png";

const images = [
    Image1, Image2, Image3, Image4, Image5, Image6,
    Image1, Image2, Image3, Image4, Image5, Image6, 
    Image1, Image2, Image3, Image4, Image5, Image6,
    Image7, Image7, Image8, Image9, Image10, Image11,
    Image12, Image13, Image14, Image15, Image16, Image17,
    Image18, Image19, Image20, Image21, Image22, Image23
  ];
  
  const Scroll = () => {
    return (
      <Marquee speed={60} className="overflow-hidden py-9">
        <div className="flex gap-16">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`img-${index}`} className="mr-0 w-25 h-12" />
          ))}
        </div>
      </Marquee>
    );
  };
  
  export default Scroll;
