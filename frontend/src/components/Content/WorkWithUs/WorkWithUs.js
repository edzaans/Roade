// Import CSSS
import "./WorkWithUs.css";
import video from "../../../assets/Images_Custom/Intro/RoadeIntroWebsite.mp4";
// Import Bootstrap components
import { Button, Col, Row } from "react-bootstrap";

// Import assets
const signup = require("../../../assets/images/usFooter1.png");
const login = require("../../../assets/Images_Custom/login.png");
const intro = require("../../../assets/Images_Custom/Intro/RoadeIntroWebsite.mp4");

function WorkWithUs() {
  return (
    <div className="container">
      <div className="mt-5 mr-auto text-center">
        <h1 className="mb-3">How it works</h1>
        <p className="px-3 py-3">
          If you are interested in finding highly skilled employee or a short
          term contractor, please register with us or log in!!! We dont have set
          pricing plan, insted we charge only for clicked ads, if there is no
          clicks on your add, there is no fee!!!
        </p>
      </div>

      <Row>
        <Col md={12}>
          <Row>
            <Col md={12} className="text-center mb-5">
              <h1>Roade journey</h1>
            </Col>
          </Row>{" "}
          <video
            /* className="video" */
            src={video}
            controls
            autoplay="true"
            muted
          ></video>
        </Col>
      </Row>
    </div>
  );
}

export default WorkWithUs;
