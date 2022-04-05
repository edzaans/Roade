import { Button, Container } from "react-bootstrap";
// Import stylesheet
import "./Panel.css";
// Import assets
const signup = require("../../../assets/images/usFooter1.png");
const login = require("../../../assets/Images_Custom/login.png");

function Panel() {
  return (
    <div>
      {/* Services start here */}
      <section id="services">
        <div class="container" data-aos="fade-up">
          <div class="row ">
            <div class="col-lg-4 col-md-4 " data-aos="zoom-in">
              <div class="box shadow">
                <div class="icon shadow"></div>
                <h4 class="title ">
                  <a>Technology</a>
                </h4>
                <p class="description">
                  By using our services, each client can be convinced that the
                  day-to-day operations are completely safe, and the processes
                  planned by specialists.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4" data-aos="zoom-in">
              <div class="box shadow">
                <div class="icon shadow"></div>
                <h4 class="title">
                  <a>Dolor Sitema</a>
                </h4>
                <p class="description">
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat tarad limino ata
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4" data-aos="zoom-in">
              <div class="box shadow">
                <div class="icon shadow"></div>
                <h4 class="title">
                  <a>Sed ut perspiciatis</a>
                </h4>
                <p class="description">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Panel;
