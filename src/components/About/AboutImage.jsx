import React from "react";
import { myImages } from "./../../api/data";
import "./About.css";

const AboutImage = ({ counter }) => {
  return (
    <div className="about-image-div">
      <img alt="Aditya" src={myImages[counter]}></img>
    </div>
  );
};

export default AboutImage;
