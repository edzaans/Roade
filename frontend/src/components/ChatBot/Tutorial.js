import { Container, Row, Col } from "react-bootstrap";

//video
const reg = require("../../assets/video/register.mp4");

function Tutorial() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="myVideo text-center mt-5">
              <video
                src={reg}
                width="500"
                height="400"
                controls
                autoplay="true"
                muted
              ></video>
            </div>
            <br></br>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Tutorial;
