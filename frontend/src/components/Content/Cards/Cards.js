import {
  Container,
  Row,
  Col,
  Button,
  Overlay,
  Offcanvas,
  Image,
} from "react-bootstrap";
import "./Cards.css";

// Import Icon name to be used ( use as a component in code )
import { FiPackage } from "react-icons/fi";
import { SiAntdesign } from "react-icons/si";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { GiRoad } from "react-icons/gi";
import { useRef, useState } from "react";

// Import ROADE logout
const van = require("../../../assets/images/van.jpg");
const favorited = require("../../../assets/images/Favorited.jpg");
const technology = require("../../../assets/images/Technology.jpg");
const redesigned = require("../../../assets/images/Redesigned.jpg");

function Cards() {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div>
        <Container fluid className="quote-container">
          {/*    <Row>
            <Col md={12} sm={12}>
              <h2 className="text-center mb-5">WHAT WE OFFER</h2>
              <Row className="my-5">
                <Col md={6} className="quote_col">
                  <hr />
                  <span>
                    <FiPackage className="quote_icon" />
                  </span>
                  <div className="text-center">
                    <h4>Technology that delivers</h4>

                    <p>
                      Roade is here to provide professional services that will
                      support the activities of customers at every step and will
                      enable more efficient management and control of transport,
                      which will also affect the sustainable development and
                      success of a given enterprise.
                    </p>

                    <Button
                      className="mb-5"
                      variant="primary"
                      onClick={handleShow}
                    >
                      Read more...
                    </Button>

                    <Offcanvas
                      placement="start"
                      show={show}
                      onHide={handleClose}
                    >
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title>
                          Technology that delivers
                        </Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        <div className="canvas">
                          By using our services, each client can be convinced
                          that the day-to-day operations are completely safe,
                          and the processes planned by specialists will save
                          both time and money, which will contribute to the
                          smooth operation of the company. Running your own
                          business requires a lot of knowledge and great skills.
                          Therefore, to improve the operation of certain
                          processes, it is worth using professional services. By
                          establishing cooperation with us, you will be able to
                          focus on developing your business and your career,
                          without having to worry about meeting your deadlines
                          or safety of your cargo. We build and develop
                          innovative tools that optimize the process of
                          searching for employees and work via the Internet. We
                          are committed to supporting employers in finding
                          competent employees and helping candidates find a good
                          job.
                        </div>
                      </Offcanvas.Body>
                    </Offcanvas>
                  </div>
                </Col>
                <Col md={6} className="quote_col">
                  <hr />
                  <span>
                    <SiAntdesign className="quote_icon" />
                  </span>
                  <div className="text-center">
                    <h4>Redesigned</h4>

                    <p>
                      Transport and logistics industry is essential part of
                      everyday life. Since industry is under lots of pressure
                      meeting deadlines due to drivers’ shortage all over
                      Ireland and EU (European Union), we belive our innovative
                      solution will be a solution that industry would welcome to
                      help achieve their targets and meet customers’
                      expectations.
                    </p>
                    <Button variant="primary" onClick={handleShow}>
                      Read more...
                    </Button>

                    <Offcanvas
                      placement="start"
                      show={show}
                      onHide={handleClose}
                    >
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title>
                          Technology that delivers
                        </Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        <div className="canvas">
                          Over the course of several years and recently since
                          the start of pandemic many drivers left the industry
                          and have no intention going back full time due to a
                          variety of reasons. New potential drivers were delayed
                          in obtaining the training and qualification needed for
                          professional HGV drivers due to test centres being
                          closed and training not being available because of
                          Covid-19 restrictions. Our mission is to help
                          employers and employees on the domestic market. The
                          app allows both Employer and Drivers to connect.
                        </div>
                      </Offcanvas.Body>
                    </Offcanvas>
                  </div>
                </Col>
              </Row>

              

              <Row className="my-5">
                <Col md={6} className="quote_col">
                  <hr />
                  <span>
                    <MdOutlineFavoriteBorder className="quote_icon" />
                  </span>
                  <div className="text-center">
                    <h4>Favorited</h4>

                    <p>
                      We implement our mission using modern technologies,
                      employee involvement and creating a work environment based
                      on values. Roade team consists of ambitious and committed
                      people who derive joy and satisfaction from everyday work.
                      We create a friendly workplace. We offer employment
                      stability.
                    </p>
                    <Button
                      className="mb-5"
                      variant="primary"
                      onClick={handleShow}
                    >
                      Read more...
                    </Button>

                    <Offcanvas
                      placement="start"
                      show={show}
                      onHide={handleClose}
                    >
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title>
                          Technology that delivers
                        </Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        <div className="canvas">
                          As an employer looking for an employee, you have great
                          opportunities. If you want to receive many
                          applications, all you must do is post an advertisement
                          on our portal. Unlike other portals, Roade is designed
                          with logistics and transportation industry in mind.
                          Why is it worth choosing ours? By using our service,
                          you will reach a wide group of skilled drivers . As we
                          know that the needs of employers are specialized, we
                          decided to create a portal specializing in the
                          selected industry.
                        </div>
                      </Offcanvas.Body>
                    </Offcanvas>
                  </div>
                </Col>
                <Col md={6} className="quote_col">
                  <hr />
                  <span>
                    <GiRoad className="quote_icon" />
                  </span>
                  <div className="text-center">
                    <h4>Favorited</h4>

                    <p>
                      We implement our mission using modern technologies,
                      employee involvement and creating a work environment based
                      on values. Roade team consists of ambitious and committed
                      people who derive joy and satisfaction from everyday work.
                      We create a friendly workplace. We offer employment
                      stability.
                    </p>
                    <Button
                      className="mb-5"
                      variant="primary"
                      onClick={handleShow}
                    >
                      Read more...
                    </Button>

                    <Offcanvas
                      placement="start"
                      show={show}
                      onHide={handleClose}
                    >
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Favorited</Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        <div className="canvas">
                          As an employer looking for an employee, you have great
                          opportunities. If you want to receive many
                          applications, all you must do is post an advertisement
                          on our portal. Unlike other portals, Roade is designed
                          with logistics and transportation industry in mind.
                          Why is it worth choosing ours? By using our service,
                          you will reach a wide group of skilled drivers . As we
                          know that the needs of employers are specialized, we
                          decided to create a portal specializing in the
                          selected industry.
                        </div>
                      </Offcanvas.Body>
                    </Offcanvas>
                  </div>
                </Col>
                <hr />
              </Row>
            </Col>
          </Row> */}

          {/* Responsive content */}
          <div className="row quote_container">
            <div className="col-md-6 order-md-2">
              {" "}
              <div>
                <h4>Technology that delivers</h4>

                <p>
                  Roade is here to provide professional services that will
                  support the activities of customers at every step and will
                  enable more efficient management and control of transport,
                  which will also affect the sustainable development and success
                  of a given enterprise.
                </p>
                <div className="text-center">
                  <Button
                    className="mb-5"
                    variant="primary"
                    onClick={handleShow}
                  >
                    Read more...
                  </Button>
                </div>

                <Offcanvas placement="start" show={show} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Technology that delivers</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <div className="canvas">
                      By using our services, each client can be convinced that
                      the day-to-day operations are completely safe, and the
                      processes planned by specialists will save both time and
                      money, which will contribute to the smooth operation of
                      the company. Running your own business requires a lot of
                      knowledge and great skills. Therefore, to improve the
                      operation of certain processes, it is worth using
                      professional services. By establishing cooperation with
                      us, you will be able to focus on developing your business
                      and your career, without having to worry about meeting
                      your deadlines or safety of your cargo. We build and
                      develop innovative tools that optimize the process of
                      searching for employees and work via the Internet. We are
                      committed to supporting employers in finding competent
                      employees and helping candidates find a good job.
                    </div>
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
            </div>
            <div className="col-md-6 order-md-1">
              <img src={technology} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="row quote_container">
            <div className="col-md-6 order-md-1">
              {" "}
              <div>
                <h4>Redesigned</h4>

                <p>
                  Transport and logistics industry is essential part of everyday
                  life. Since industry is under lots of pressure meeting
                  deadlines due to drivers’ shortage all over Ireland and EU
                  (European Union).
                </p>
                <div className="text-center">
                  <Button
                    className="mb-5"
                    variant="primary"
                    onClick={handleShow}
                  >
                    Read more...
                  </Button>
                </div>

                <Offcanvas placement="start" show={show} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Technology that delivers</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <div className="canvas">
                      We belive our innovative solution will be a solution that
                      industry would welcome to help achieve their targets and
                      meet customers’ expectations. Over the course of several
                      years and recently since the start of pandemic many
                      drivers left the industry and have no intention going back
                      full time due to a variety of reasons. New potential
                      drivers were delayed in obtaining the training and
                      qualification needed for professional HGV drivers due to
                      test centres being closed and training not being available
                      because of Covid-19 restrictions. Our mission is to help
                      employers and employees on the domestic market. The app
                      allows both Employer and Drivers to connect.
                    </div>
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
            </div>
            <div className="col-md-6 order-md-2">
              <img src={redesigned} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="row quote_container">
            <div className="col-md-6 order-md-2">
              {" "}
              <div>
                <h4>Favorited</h4>

                <p>
                  We implement our mission using modern technologies, employee
                  involvement and creating a work environment based on values.
                  Roade team consists of ambitious and committed people who
                  derive joy and satisfaction from everyday work. We create a
                  friendly workplace.
                </p>
                <div className="text-center">
                  <Button
                    className="mb-5"
                    variant="primary"
                    onClick={handleShow}
                  >
                    Read more...
                  </Button>
                </div>

                <Offcanvas placement="start" show={show} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Redesigned</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <div className="canvas">
                      Over the course of several years and recently since the
                      start of pandemic many drivers left the industry and have
                      no intention going back full time due to a variety of
                      reasons. New potential drivers were delayed in obtaining
                      the training and qualification needed for professional HGV
                      drivers due to test centres being closed and training not
                      being available because of Covid-19 restrictions. Our
                      mission is to help employers and employees on the domestic
                      market. The app allows both Employer and Drivers to
                      connect.
                    </div>
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
            </div>
            <div className="col-md-6 order-md-1">
              <img src={favorited} alt="" className="img-fluid" />
            </div>
          </div>
        </Container>
        {/* test rows */}
      </div>
    </div>
  );
}

export default Cards;
