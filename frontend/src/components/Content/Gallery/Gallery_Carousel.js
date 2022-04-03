import React from "react";
import Gallery from "react-grid-gallery";

import "./Gallery.css";

import { GrTechnology } from "react-icons/gr";

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
      <section id="services">
        <div class="container" data-aos="fade-up">
          <div class="section-header text-center">
            <h1 class="section-title mb-5">Services</h1>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6" data-aos="zoom-in">
              <div class="box">
                <div class="icon">
                  <a href="">
                    <i class="bi bi-briefcase">
                      <GrTechnology />
                    </i>
                  </a>
                </div>
                <h4 class="title">
                  <a href="">Technology</a>
                </h4>
                <p class="description">
                  By using our services, each client can be convinced that the
                  day-to-day operations are completely safe, and the processes
                  planned by specialists.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6" data-aos="zoom-in">
              <div class="box">
                <div class="icon">
                  <a href="">
                    <i class="bi bi-card-checklist"></i>
                  </a>
                </div>
                <h4 class="title">
                  <a href="">Dolor Sitema</a>
                </h4>
                <p class="description">
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat tarad limino ata
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6" data-aos="zoom-in">
              <div class="box">
                <div class="icon">
                  <a href="">
                    <i class="bi bi-bar-chart"></i>
                  </a>
                </div>
                <h4 class="title">
                  <a href="">Sed ut perspiciatis</a>
                </h4>
                <p class="description">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur
                </p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6" data-aos="zoom-in">
              <div class="box">
                <div class="icon">
                  <a href="">
                    <i class="bi bi-binoculars"></i>
                  </a>
                </div>
                <h4 class="title">
                  <a href="">Magni Dolores</a>
                </h4>
                <p class="description">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6" data-aos="zoom-in">
              <div class="box">
                <div class="icon">
                  <a href="">
                    <i class="bi bi-brightness-high"></i>
                  </a>
                </div>
                <h4 class="title">
                  <a href="">Nemo Enim</a>
                </h4>
                <p class="description">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6" data-aos="zoom-in">
              <div class="box">
                <div class="icon">
                  <a href="">
                    <i class="bi bi-calendar4-week"></i>
                  </a>
                </div>
                <h4 class="title">
                  <a href="">Eiusmod Tempor</a>
                </h4>
                <p class="description">
                  Et harum quidem rerum facilis est et expedita distinctio. Nam
                  libero tempore, cum soluta nobis est eligendi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
