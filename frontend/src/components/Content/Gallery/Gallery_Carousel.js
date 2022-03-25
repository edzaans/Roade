import React from "react";
import Gallery from "react-grid-gallery";

// Import all assets needed for gallery
const truck = require("../../../assets/images/truck.jpg");
const Favorited = require("../../../assets/images/Favorited.jpg");

// For Sarah ......... read below and populate gallery .....its fixed now!!!
// Import variables as a src / thumbnail without { } braces, its not an OBJECT!!!!!!
const IMAGES = [
  {
    src: Favorited,
    thumbnail: Favorited,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },

  {
    src: truck,
    thumbnail: truck,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },

      { value: "People", title: "People" },
    ],

    caption: "Boats (Jeshu John - designerspics.com)",
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",

    thumbnail:
      "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",

    thumbnailWidth: 320,

    thumbnailHeight: 212,
  },

  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",

    thumbnail:
      "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",

    thumbnailWidth: 320,

    thumbnailHeight: 174,

    caption: "After Rain (Jeshu John - designerspics.com)",
  },

  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",

    thumbnail:
      "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",

    thumbnailWidth: 320,

    thumbnailHeight: 212,

    tags: [
      { value: "Ocean", title: "Ocean" },

      { value: "People", title: "People" },
    ],

    caption: "Boats (Jeshu John - designerspics.com)",
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",

    thumbnail:
      "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",

    thumbnailWidth: 320,

    thumbnailHeight: 212,
  },

  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",

    thumbnail:
      "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",

    thumbnailWidth: 320,

    thumbnailHeight: 174,

    caption: "After Rain (Jeshu John - designerspics.com)",
  },

  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",

    thumbnail:
      "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",

    thumbnailWidth: 320,

    thumbnailHeight: 212,

    tags: [
      { value: "Ocean", title: "Ocean" },

      { value: "People", title: "People" },
    ],

    caption: "Boats (Jeshu John - designerspics.com)",
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",

    thumbnail:
      "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",

    thumbnailWidth: 320,

    thumbnailHeight: 212,
  },

  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",

    thumbnail:
      "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",

    thumbnailWidth: 320,

    thumbnailHeight: 174,

    caption: "After Rain (Jeshu John - designerspics.com)",
  },

  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",

    thumbnail:
      "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",

    thumbnailWidth: 320,

    thumbnailHeight: 212,

    tags: [
      { value: "Ocean", title: "Ocean" },

      { value: "People", title: "People" },
    ],

    caption: "Boats (Jeshu John - designerspics.com)",
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",

    thumbnail:
      "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",

    thumbnailWidth: 720,

    thumbnailHeight: 212,
  },
];

function Gallery_Carousel() {
  return (
    <div>
      <h1 className="text-center">Sarah's carousel here</h1>
      <Gallery images={IMAGES} />
    </div>
  );
}

export default Gallery_Carousel;
