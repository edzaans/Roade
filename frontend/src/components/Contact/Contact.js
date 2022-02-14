import React, { useRef } from "react";
import emailjs from "emailjs-com";
// Import CSS
import "./Contact.css";
import { Button, Container, Image, Row } from "react-bootstrap";
// Import Icon name to be used ( use as a component in code )
import { FcViewDetails } from "react-icons/fc";
import { FcCallback } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";

// Contact Us header picture
const contact = require("../../assets/images/ContactUs.jpg");

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iszz07n",
        "template_ejx4e6a",
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
    <Container>
      <Row>
        <Image src={contact} alt="Roade header" className="img-fluid"></Image>
      </Row>
      <h1 className="text-center mx-auto mb-5">Contact Us</h1>

      <p class="text-center  mx-auto mb-5">
        Do you have any questions? Please do not hesitate to contact us
        directly. Our team will come back to you within a matter of hours to
        help you.
      </p>

      <div class="row">
        <div class="col-md-8 mb-md-0 mb-5 mx-3">
          <form ref={form} onSubmit={sendEmail}>
            <div class="row">
              <div class="col-md-6">
                <div class="md-form mb-0">
                  <label>Name</label>
                  <input
                    type="text"
                    name="user_name"
                    class="form-control"
                    required
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="md-form mb-0">
                  <label for="email" class="">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    class="form-control"
                    required
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="md-form mb-0">
                  <label for="subject" class="">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    class="form-control"
                    required
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="md-form">
                  <label for="message">Your message</label>
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    rows="2"
                    class="form-control md-textarea"
                    required
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-md-12">
                <div class="md-form text-center">
                  <Button type="submit" className="success mb-5">
                    Send
                  </Button>
                </div>
              </div>
            </div>
          </form>
          <div class="status"></div>
        </div>

        <div class="col-md-3 col-sm-12 text-center">
          <ul class="list-unstyled mb-0">
            <li>
              <span>
                <FcViewDetails className="icon" />
              </span>

              <p>Galway, IE</p>
            </li>

            <li>
              <span>
                <FcCallback className="icon" />
              </span>
              <p>0123456789</p>
            </li>

            <li>
              <span>
                <FcContacts className="icon" />
              </span>

              <p>contact@roade.com</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Email_JS working form  */}
      {/*    <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form> */}
    </Container>
  );
};
