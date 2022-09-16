import React from "react";
import styles from "../../styles/main.module.css";
const Hero = () => {
  return (
    <div className="flex w-full tracking-wide">
      <div id="left" className="w-3/6 ">
        <div className="relative text-5xl font-extrabold md:text-8xl">
          <h1 className="relative z-20 left-2 top-2">LETS ROCK THIS SHIT UP</h1>
          <span className={`absolute top-0 left-0 z-10 ${styles.backtext}`}>
            LETS ROCK THIS SHIT UP
          </span>
        </div>
        <div id="hero image " className="relative w-full mt-6 mb-6">
          <div className="absolute w-48 overflow-hidden top-3 left-3 md:h-52 md:w-96 h-28">
            <img
              src="/heroImage.jpg"
              className="object-cover"
            />
          </div>
          <div className="w-48 md:h-52 md:w-96 h-28 bg-gradient-to-br from-black to-green"></div>
        </div>
      </div>
      <div id="right" className="w-3/6">
        <canvas className="w-full h-full bg-white">
          
        </canvas>
      </div>
    </div>
  );
};

export default Hero;
