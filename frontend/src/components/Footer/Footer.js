// Import Icon name to be used ( use as a component in code )
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

import { FaTwitterSquare } from "react-icons/fa";

// Import stylesheet
import("./Footer.css");

function Footer() {
  return (
    <div className="text-center">
      <hr></hr>
      {/*  */}
      {/*       <Container className="footer">
        <Row>
          <Column sm={12} md={4}>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>

          <Column sm={12} md={4}>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">roade@support.ie</FooterLink>
            <FooterLink href="#">+353 9100000</FooterLink>
            <FooterLink href="#">www.roade.ie</FooterLink>
          </Column>

          <Column sm={12} md={4}>
            <Heading>Social Media</Heading>
            <Row>
              <Column>
                {" "}
                <FooterLink href="#">
                  <span>
                    <AiFillFacebook className="icon icon_fb" />
                  </span>
                </FooterLink>
              </Column>
              <Column>
                {" "}
                <FooterLink href="#">
                  <span>
                    <AiFillInstagram className="icon icon_insta" />
                  </span>
                </FooterLink>
              </Column>
              <Column>
                {" "}
                <FooterLink href="#">
                  <span>
                    <FaTwitterSquare className="icon icon_twitter" />
                  </span>
                </FooterLink>
              </Column>
            </Row>
          </Column>
        </Row>
      </Container> */}

      <div class=" container-fluid">
        <footer class="text-center text-white footer">
          <section class="mt-5">
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

          <section className="mb-3">
            <div class="row d-flex justify-content-center">
              <div class="col-lg-8">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  distinctio earum repellat quaerat voluptatibus placeat nam,
                  commodi optio pariatur est quia magnam eum harum corrupti
                  dicta, aliquam sequi voluptate quas.
                </p>
              </div>
            </div>
          </section>

          <section class="text-center mb-5">
            <span>
              <h3 className="mb-5 links">Connect with US</h3>
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
          </section>

          <div className="copyright pb-5">Copyright &copy; ROADE 2022</div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
