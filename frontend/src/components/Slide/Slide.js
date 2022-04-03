import React from "react";
import { Carousel, Image, Container, Row } from "react-bootstrap";
import "./Slide.css";

// All assets have to be imported from folder
const truck = require("../../assets/images/truck.jpg");
const van = require("../../assets/images/van.jpg");
const warehouse = require("../../assets/images/warehouse.jpg");
const header = require("../../assets/images/Roade_header3.png");

function Slide() {
  return (
    <div>
      <Row>
        <Image src={header} alt="Roade header" className=" image-test"></Image>
      </Row>

      {/*    <Carousel fade fluid>
        <Carousel.Item>
          <Image className="photo" src={truck} alt="First slide" fluid />
          <Carousel.Caption>
            <div className="overlay">
              {" "}
              <h3>WE HELP YOU TO REALISE YOUR BUSINESS GOALS</h3>
              <p>
                Some text .....Some text .....Some text .....Some text .....Some
                text .....
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image className="photo" src={van} alt="First slide" fluid />

          <Carousel.Caption>
            <div className="overlay">
              {" "}
              <h3>WE HELP YOU TO REALISE YOUR BUSINESS GOALS</h3>
              <p>
                Some text .....Some text .....Some text .....Some text .....Some
                text .....
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image className="photo" src={warehouse} alt="First slide" fluid />

          <Carousel.Caption>
            <div className="overlay">
              {" "}
              <h3>WE HELP YOU TO REALISE YOUR BUSINESS GOALS</h3>
              <p>
                Some text .....Some text .....Some text .....Some text .....Some
                text .....
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
    </div>
  );
}

export default Slide;
