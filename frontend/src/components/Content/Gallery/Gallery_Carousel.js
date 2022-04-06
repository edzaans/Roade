import React from "react";

import "./Gallery.css";

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
];

function Gallery_Carousel() {
  return (
    <div>
      <h1 className="text-center my-5">Our recent clients</h1>
      <div class="container">
        <div class="row ">
          <div class="col-4  mt-3 col-lg-4 ">
            <img src={truck1} class="img-fluid gallery_image" alt="image" />
          </div>
          <div class="col-4  mt-3 col-lg-4">
            <img src={truck2} class="img-fluid gallery_image" alt="image" />
          </div>
          <div class="col-4   mt-3 col-lg-4">
            <img src={truck3} class="img-fluid gallery_image" alt="image" />
          </div>
          <div class="col-4   mt-3 col-lg-6">
            <img src={truck9} class="img-fluid gallery_image" alt="image" />
          </div>
          <div class="col-4   mt-3 col-lg-6">
            <img src={truck6} class="img-fluid gallery_image" alt="image" />
          </div>
          <div class="col-4   mt-3 col-lg-3">
            <img src={truck7} class="img-fluid gallery_image" alt="image" />
          </div>
          <div class="col-4  mt-3 col-lg-3">
            <img src={truck8} class="img-fluid gallery_image" alt="image" />
          </div>
          <div class="col-4   mt-3 col-lg-3">
            <img src={truck10} class="img-fluid gallery_image" alt="image" />
          </div>
          <div class="col-4  mt-3 col-lg-3">
            <img src={truck11} class="img-fluid gallery_image" alt="image" />
          </div>
        </div>
      </div>
      {/* <h1>Another gallery</h1> */}
      {/* <Gallery images={IMAGES} /> */}
    </div>
  );
}

export default Gallery_Carousel;
