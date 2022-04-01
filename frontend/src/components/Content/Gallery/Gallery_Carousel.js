import React from "react";
import Gallery from "react-grid-gallery";

// Import all assets needed for gallery
const truck1 = require("../../../assets/images/tr1.jpg");
const truck2 = require("../../../assets/images/tr25.jpg");
const truck3 = require("../../../assets/images/tr11.jpg");
const truck4 = require("../../../assets/images/tr1.jpg");
const truck5 = require("../../../assets/images/tr35.jpg");
const truck6 = require("../../../assets/images/tr36.jpg");
const truck7 = require("../../../assets/images/tr40.jpg");
const truck8 = require("../../../assets/images/tr26.jpg");
const truck9 = require("../../../assets/images/tr1.jpg");
const truck10 = require("../../../assets/images/tr27.jpg");
const truck11 = require("../../../assets/images/tr1.jpg");
//const truck12 = require("../../../assets/images/tr1.jpg");

// For Sarah ......... read below and populate gallery .....its fixed now!!!
// Import variables as a src / thumbnail without { } braces, its not an OBJECT!!!!!!
const IMAGES = [
  {
    src: truck1,
    thumbnail: truck1,
    thumbnailWidth: 340,
    thumbnailHeight: 212,
  },

  {
    src: truck2,
    thumbnail: truck2,
    thumbnailWidth: 340,
    thumbnailHeight: 212,
  },
  {
    src: truck3,
    thumbnail: truck3,
    thumbnailWidth: 340,
    thumbnailHeight: 212,
  },
  {
    src: truck4,
    thumbnail: truck4,
    thumbnailWidth: 340,
    thumbnailHeight: 174,
  },
  {
    src: truck5,
    thumbnail: truck5,
    thumbnailWidth: 450,
    thumbnailHeight: 212,
  },
  {
    src: truck6,
    thumbnail: truck6,
    thumbnailWidth: 450,
    thumbnailHeight: 212,
  },
  {
    src: truck7,
    thumbnail: truck7,
    thumbnailWidth: 450,
    thumbnailHeight: 174,
  },
  {
    src: truck8,
    thumbnail: truck8,
    thumbnailWidth: 340,
    thumbnailHeight: 212,
  },
  {
    src: truck9,
    thumbnail: truck9,
    thumbnailWidth: 340,
    thumbnailHeight: 212,
  },
  {
    src: truck10,
    thumbnail: truck10,
    thumbnailWidth: 340,
    thumbnailHeight: 174,
  },
  {
    src: truck11,
    thumbnail: truck11,
    thumbnailWidth: 340,
    thumbnailHeight: 212,
  },
  /*   {
    src: truck12,
    thumbnail: truck12,
    thumbnailWidth: 720,
    thumbnailHeight: 212,
  },  */
];

function Gallery_Carousel() {
  return (
    <div>
      <h1 className="text-center my-5">Our recent clients</h1>
      <Gallery images={IMAGES} />
    </div>
  );
}

export default Gallery_Carousel;
