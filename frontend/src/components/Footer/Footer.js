// Import useRef
import React, { useRef } from "react";
// Import EMAILJS dependancy
import emailjs from "emailjs-com";

// Import Icon name to be used ( use as a component in code )
import { Form, FormControl } from "react-bootstrap";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutubeSquare } from "react-icons/fa";

import { FaTwitterSquare } from "react-icons/fa";

import { Button, Row, Col } from "react-bootstrap";
import { ChatBot } from "../ChatBot/ChatBot";

// Import stylesheet
import("./Footer.css");

function Footer() {
  const form = useRef();
  // Form for email Handling
  const sendEmail = () => {
    alert("Email sent");
    emailjs
      .sendForm(
        "service_iszz07n",
        "template_jzt8af3",
        form.current,
        "user_oKRxSUTydfndsFHxJ4yXk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="text-center">
      <hr></hr>

      <div class=" container-fluid">
        <footer class="text-center text-white footer">
          <section class="mt-3">
            <div class="row text-center d-flex justify-content-center pt-5">
              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <a href="/about-us" className="links">
                    About us
                  </a>
                </h6>
              </div>

              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <a href="/contact" className="links">
                    Contact
                  </a>
                </h6>
              </div>

              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <a
                    href="https://www.rsa.ie/"
                    target="_blank"
                    className="links"
                  >
                    Links
                  </a>
                </h6>
              </div>

              {/*   <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <a href="#!" className="links test">
                    FAQ
                  </a>
                </h6>
              </div> */}
            </div>
          </section>
          <Row>
            <Col md={4} className="text-center mx-auto my-4">
              {/* Chatbot here!!! */}
              <div className="chatBot">
                <ChatBot></ChatBot>
              </div>
              {/* End of chatbot */}
            </Col>
          </Row>

          <hr className="my-3" />

          <Row className="text-center subscribe_container">
            <Col sm={12} md={6}>
              <section className="text-center">
                <span>
                  <h3 className="">Connect with Us</h3>
                </span>
                <span>
                  <a href="https://www.facebook.com/Roade-100692772440719">
                    <AiFillFacebook className="icon icon_fb" />
                  </a>
                </span>
                <span>
                  <AiFillInstagram className="icon icon_insta" />
                </span>
                <span>
                  <FaTwitterSquare className="icon icon_twitter" />
                </span>
                <span>
                  <FaYoutubeSquare className="icon icon_yt" />
                </span>
              </section>
            </Col>
            <Col sm={12} md={6}>
              <section className="">
                <span>
                  <h3>Subscribe to newsletter</h3>
                </span>
                <div>
                  {" "}
                  <form ref={form} onSubmit={sendEmail}>
                    <div class="row d-flex justify-content-center">
                      <div class="col-md-6 col-sm-6 ">
                        <div>
                          <label for="email" class="">
                            Your email
                          </label>
                          <input
                            type="email"
                            name="user_email"
                            class="form-control"
                            required
                          />{" "}
                        </div>
                      </div>
                      <div className="col-md-2  mt-4">
                        <Button type="submit">Subscribe</Button>
                      </div>
                    </div>
                  </form>
                </div>
              </section>
            </Col>
          </Row>

          <div className="copyright py-5">Copyright &copy; ROADE 2022</div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
