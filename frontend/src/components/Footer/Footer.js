// Import Icon name to be used ( use as a component in code )
import { Form, FormControl } from "react-bootstrap";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutubeSquare } from "react-icons/fa";

import { FaTwitterSquare } from "react-icons/fa";

import { Button, Row, Col } from "react-bootstrap";

// Import stylesheet
import("./Footer.css");

function Footer() {
  return (
    <div className="text-center">
      <hr></hr>

      <div class=" container-fluid">
        <footer class="text-center text-white footer">
          <section class="mt-3">
            <div class="row text-center d-flex justify-content-center pt-5">
              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <a href="#!" className="links">
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
                  <a href="#!" className="links">
                    Links
                  </a>
                </h6>
              </div>

              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <a href="#!" className="links">
                    FAQ
                  </a>
                </h6>
              </div>
            </div>
          </section>

          <hr class="my-5" />

          <Row className="text-center subscribe_container">
            <Col sm={12} md={6}>
              <section className="text-center">
                <span>
                  <h3 className="">Connect with Us</h3>
                </span>
                <span>
                  <AiFillFacebook className="icon icon_fb" />
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
                  <h3 className="text-white mb-5">Subscribe to newsletter</h3>
                </span>
                <Form className="d-flex justify-content-center my-3">
                  <FormControl
                    type="email"
                    placeholder="Your e-mail"
                    className="me-2 subscribe"
                    aria-label="subscribe"
                  />
                  <Button type="submit" className="">
                    Subscribe
                  </Button>
                </Form>
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
