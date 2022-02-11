import "./RSAinfo.css";
import { Carousel, Col, Row, Container } from "react-bootstrap";

// Image ../assets
const dt1 = require("../../assets/dt/driversHours1.jpg");
const dt2 = require("../../assets/dt/driversHours2.jpg");
const dt3 = require("../../assets/dt/driversHours3.jpg");
const dt4 = require("../../assets/dt/driversHours4.jpg");
const dt5 = require("../../assets/dt/driversHours5.jpg");
const dt6 = require("../../assets/dt/driversHours6.jpg");
const dt7 = require("../../assets/dt/driversHours7.jpg");
const dt8 = require("../../assets/dt/driversHours8.jpg");
const dt9 = require("../../assets/dt/driversHours9.jpg");
const dt10 = require("../../assets/dt/driversHours10.jpg");
const dt11 = require("../../assets/dt/driversHours11.jpg");
const dt12 = require("../../assets/dt/driversHours12.jpg");
const dt13 = require("../../assets/dt/driversHours13.jpg");
const dt14 = require("../../assets/dt/driversHours14.jpg");
const dt15 = require("../../assets/dt/driversHours15.jpg");
const dt16 = require("../../assets/dt/driversHours16.jpg");

// Image assets
const wt1 = require("../../assets/wt/workingTime.jpg");
const wt2 = require("../../assets/wt/workingTime-2.jpg");
const wt3 = require("../../assets/wt/workingTime-3.jpg");
const wt4 = require("../../assets/wt/workingTime-4.jpg");
const wt5 = require("../../assets/wt/workingTime-5.jpg");
const wt6 = require("../../assets/wt/workingTime-6.jpg");
const wt7 = require("../../assets/wt/workingTime-7.jpg");
const wt8 = require("../../assets/wt/workingTime-8.jpg");
const wt9 = require("../../assets/wt/workingTime-9.jpg");
const wt10 = require("../../assets/wt/workingTime-10.jpg");
const wt11 = require("../../assets/wt/workingTime-11.jpg");
const wt12 = require("../../assets/wt/workingTime-12.jpg");
const wt13 = require("../../assets/wt/workingTime-13.jpg");
const wt14 = require("../../assets/wt/workingTime-14.jpg");
const wt15 = require("../../assets/wt/workingTime-15.jpg");
const wt16 = require("../../assets/wt/workingTime-16.jpg");
const wt17 = require("../../assets/wt/workingTime-17.jpg");
const wt18 = require("../../assets/wt/workingTime-18.jpg");
const wt19 = require("../../assets/wt/workingTime-19.jpg");
const wt20 = require("../../assets/wt/workingTime-20.jpg");
const wt21 = require("../../assets/wt/workingTime-21.jpg");
const wt22 = require("../../assets/wt/workingTime-22.jpg");
const wt23 = require("../../assets/wt/workingTime-23.jpg");
const wt24 = require("../../assets/wt/workingTime-24.jpg");
const wt25 = require("../../assets/wt/workingTime-25.jpg");
const wt26 = require("../../assets/wt/workingTime-26.jpg");
const wt27 = require("../../assets/wt/workingTime-27.jpg");
const wt28 = require("../../assets/wt/workingTime-28.jpg");
const wt29 = require("../../assets/wt/workingTime-29.jpg");
const wt30 = require("../../assets/wt/workingTime-30.jpg");
const wt31 = require("../../assets/wt/workingTime-31.jpg");
const wt32 = require("../../assets/wt/workingTime-32.jpg");
const wt33 = require("../../assets/wt/workingTime-33.jpg");
const wt34 = require("../../assets/wt/workingTime-34.jpg");
const wt35 = require("../../assets/wt/workingTime-35.jpg");
const wt36 = require("../../assets/wt/workingTime-36.jpg");

function RSAinfo() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            {" "}
            <section className="rules">
              <h1 className="text-center mx-auto my-5">
                Rules and Regulations
              </h1>

              <p>
                Driver fatigue is a known risk factor in road collisions.
                Fatigue can cause loss of concentration or, worse, lead to a
                driver falling asleep at the wheel. Fatigue is a significant
                factor in heavy commercial vehicle crashes. EU law regulates the
                driving time of professional drivers using goods vehicles over
                3.5t (including trailers) and passenger vehicles with more than
                8 passenger seats.
                <dl>
                  <dt>The key requirements are that you must not drive:</dt>
                  <dd>
                    <b>Without a break for more than 4.5 hours.</b> After
                    driving for 4.5 hours, a break of at least 45 minutes is
                    mandatory. You can distribute that break over the 4.5 hours
                    by taking a 15 minute break followed by a 30 minute break.
                  </dd>
                  <dd>
                    <b>
                      For more than nine hours per day or 56 hours per week.{" "}
                    </b>
                    This may be extended to 10 hours no more than twice during a
                    week.
                  </dd>
                  <dd>
                    <b>For more than 90 hours in two consecutive weeks</b>
                  </dd>
                </dl>
                There are also strict regulations regarding the average working
                time and the amount of rest that must be taken daily and weekly.
                For more information visit{" "}
                <a href="https://rsa.ie">RSA website</a>
              </p>
            </section>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            <h4>Drivers' hours and tachographs directive</h4>
            <h6>
              Regulation (EC) No. 561/2006 and Regulation (EU) No. 165/2014
            </h6>
            <Carousel fade variant="dark" interval={null}>
              <Carousel.Item>
                <img className="d-block w-100" src={dt1} alt="Start slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={dt2} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={dt3} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={dt4} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={dt5} alt="Fourth slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={dt6} alt="Fifth slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={dt7} alt="Sixth slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={dt8} alt="Seventh slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={dt9} alt="Eight slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={dt10} alt="Ninht slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={dt11} alt="Tenth slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={dt12}
                  alt="Eleventh slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={dt13}
                  alt="Twelveth slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={dt14}
                  alt="Thirteenth slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={dt15}
                  alt="Fourteenth slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={dt16}
                  alt="Fifeenth slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <br />
          <Col xs={12} md={6} className="mb-5">
            <h4>Transport drivers working time directive </h4>
            <h6>
              Directive 2002/15/EC
              <br />
            </h6>
            <Carousel fade variant="dark" interval={null}>
              <Carousel.Item>
                <img className="d-block w-100" src={wt1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={wt2} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={wt3} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={wt4} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={wt5} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={wt6} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={wt7} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={wt8} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={wt9} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={wt10} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={wt11} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={wt12} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={wt13} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={wt14} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={wt15} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={wt16} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={wt17} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={wt18} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={wt19} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={wt20} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={wt21} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={wt22} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={wt23} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={wt24} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={wt25} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={wt26} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={wt27} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={wt28} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={wt29} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={wt30} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={wt31} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={wt32} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={wt33} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={wt34} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={wt35} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={wt36} alt="First slide" />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RSAinfo;
