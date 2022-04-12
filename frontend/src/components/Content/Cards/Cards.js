import { Container, Button, Modal } from "react-bootstrap";

import { useRef, useState } from "react";

// Import stylesheet
import "./Cards.css";

// Import assets

const technology = require("../../../assets/Images_Custom/img2.jpg");
const redesigned = require("../../../assets/Images_Custom/img1.png");
const favorited = require("../../../assets/Images_Custom/img12.jpg");

function Cards() {
  // Create Modal states for switching between them...important!!!!!!
  const [modalState, setModalState] = useState(
    "modal-one" | "modal-two" | "modal-three" | "close"
  );
  const handleShowModalOne = () => {
    setModalState("modal-one");
  };

  const handleShowModalTwo = () => {
    setModalState("modal-two");
  };

  const handleShowModalThree = () => {
    setModalState("modal-three");
  };
  const handleClose = () => {
    setModalState("close");
  };

  return (
    <div>
      <div>
        <Container className="quote-container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-4 text-center">
              <h1 className="mb-5">What we offer</h1>
            </div>
          </div>

          {/* Responsive content */}
          <div className="row my-3 ">
            <div className="col-md-6 order-md-2 order-sm-2  card-text shadow-lg">
              {" "}
              <div className="py-3 px-3">
                <h4>Technology that delivers</h4>

                <p>
                  Roade is here to provide professional services that will
                  support the activities of customers at every step and will
                  enable more efficient management and control of transport,
                  which will also affect the sustainable development and success
                  of a given enterprise.
                </p>
                <div className="text-center mt-4">
                  <Button onClick={handleShowModalOne}>Read more ...</Button>
                </div>

                <Modal show={modalState === "modal-one"}>
                  <Modal.Body>
                    <h3>Technology</h3>
                  </Modal.Body>
                  <Modal.Footer>
                    <p>
                      {" "}
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
                    </p>
                    <Button onClick={handleClose}>Close</Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
            <div className="col-md-6 order-md-1 order-sm-1  d-flex ">
              <img src={technology} alt="" className="img-fluid img-style " />
            </div>
          </div>
          <div className="row my-3">
            <div className="col-md-6 order-md-2 order-sm-2 card-text">
              {" "}
              <div className="py-3">
                <h4>Redesigned</h4>

                <p>
                  Transport and logistics industry is essential part of everyday
                  life. Since industry is under lots of pressure meeting
                  deadlines due to drivers’ shortage all over Ireland and EU
                  (European Union).
                </p>
                <div className="text-center mt-3">
                  <Button onClick={handleShowModalTwo}>Read more ...</Button>
                </div>

                <Modal show={modalState === "modal-two"}>
                  <Modal.Body>
                    <h3>Redesigned</h3>
                  </Modal.Body>
                  <Modal.Footer>
                    <p>
                      {" "}
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
                    </p>
                    <Button onClick={handleClose}>Close</Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
            <div className="col-md-6 order-md-2 order-sm-1 d-flex ">
              <img src={redesigned} alt="" className="img-fluid img-style" />
            </div>
          </div>
          <div className="row my-3 ">
            <div className="col-md-6 order-md-2 order-sm-2 card-text">
              {" "}
              <div className="py-3">
                <h4>Favorited</h4>

                <p>
                  We implement our mission using modern technologies, employee
                  involvement and creating a work environment based on values.
                  Roade team consists of ambitious and committed people who
                  derive joy and satisfaction from everyday work. We create a
                  friendly workplace.
                </p>
                <div className="text-center mt-3">
                  <Button onClick={handleShowModalThree}>Read more ...</Button>
                </div>

                <Modal show={modalState === "modal-three"}>
                  <Modal.Body>
                    <h3>Favorited</h3>
                  </Modal.Body>
                  <Modal.Footer>
                    <p>
                      {" "}
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
                    </p>
                    <Button onClick={handleClose}>Close</Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
            <div className="col-md-6 order-md-1 order-sm-1  d-flex ">
              <img src={favorited} alt="" className="img-fluid img-style" />
            </div>
          </div>
        </Container>
        {/* test rows */}
      </div>
    </div>
  );
}

export default Cards;
