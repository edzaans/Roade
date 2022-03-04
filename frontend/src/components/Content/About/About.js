import { Container, Row, Col } from "react-bootstrap";
//import truck from '../Assets/video/truck.mp4';
//import ai from "../../assets/video/ai.mp4";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faMobileAlt, faThumbsUp, faPencilAlt, faLaugh } from "@fortawesome/free-solid-svg-icons";
import "animate.css";
/* import "./About.css"; */
// Import custom carousel and controls
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// images
const img1 = require("../../../assets/images/tr19.jpg");
const img2 = require("../../../assets/images/tr6.jpg");
const img3 = require("../../../assets/images/tr12.jpg");
const img4 = require("../../../assets/images/tr39.jpg");
const img5 = require("../../../assets/images/tr27.jpg");
const img6 = require("../../../assets/images/tr3.jpg");
const img7 = require("../../../assets/images/tr7.jpg");
const ai = require("../../../assets/video/ai.mp4");

//const
//const phone = <FontAwesomeIcon icon={faMobileAlt} />;
//const thumbsUp = <FontAwesomeIcon icon={faThumbsUp} />;
//const pencil = <FontAwesomeIcon icon={faPencilAlt} />;
//const laugh = <FontAwesomeIcon icon={faLaugh} />;

function About() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="myVideo text-center">
              <video src={ai} width="500" height="400" controls></video>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="containerHome ">
        <div class="carousel-wrapper">
          <Carousel infiniteLoop useKeyboardArrows autoPlay>
            <div className="carousel_img">
              <img src={img1} alt="truck" />
            </div>
            <div>
              <img src={img2} alt="truck" />
            </div>
            <div>
              <img src={img3} alt="truck" />
            </div>
            <div>
              <img src={img4} alt="truck" />
            </div>
            <div>
              <img src={img5} alt="truck" />
            </div>
            <div>
              <img src={img6} alt="truck" />
            </div>
            <div>
              <img src={img7} alt="truck" />
            </div>
          </Carousel>
          {/*  */}
          {/*     <Carousel autoPlay>
            <div>
              <img alt="" src={img4} />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img alt="" src={img1} />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img alt="" src={img2} />
              <p className="legend">Legend 3</p>
            </div>
            <div>
              <img alt="" src={img3} />
              <p className="legend">Legend 4</p>
            </div>
          </Carousel> */}
          {/*  */}
        </div>
      </div>

      {/*   <Container>
        <Row>
          <div className="card__containers">
            <Col xs={12} md={6} className="card__content">
              <div className="card">
                <div className="card__content">
                  <h3 className="card__header">Driver</h3>
                  <p className="card__info">
                    Start your new career today! In just a few steps you can
                    change your career. It's simple, create profile and find
                    your idea job.
                  </p>
                  <button className="buttonHome">Continue</button>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} md="auto" className="card__content">
              <div className="crad">
                <div className="card__content">
                  <h3 className="card__header">Employer</h3>
                  <p className="card__info">
                    {" "}
                    With us you will find your perfect employee today! If you
                    are looking for new, skilled driver, create your profile and
                    post your job.
                  </p>
                  <button className="buttonHome">Continue</button>
                </div>
              </div>
            </Col>
          </div>
        </Row>
      </Container> */}
    </div>
  );
}

export default About;
