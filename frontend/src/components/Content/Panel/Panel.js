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
                  day-to-day operations are completely safe.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4" data-aos="zoom-in">
              <div class="box shadow">
                <div class="icon shadow"></div>
                <h4 class="title">
                  <a>Reliable services</a>
                </h4>
                <p class="description">
                  Innovative solutions, new technologies essentical for building
                  modern applications.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4" data-aos="zoom-in">
              <div class="box shadow">
                <div class="icon shadow"></div>
                <h4 class="title">
                  <a>Great support</a>
                </h4>
                <p class="description">
                  Team Roade consider the needs of users as well as the current
                  state of the labour market in the sector.
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
