import "./UsFooter.css";

// Image assets
const us1 = require("../../../assets/Images_Custom/contact.png");
const us2 = require("../../../assets/images/usFooter2.png");

function UsFooter() {
  return (
    <div>
      <section class="py-5 ">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1>Engage Your Service </h1>
              <p>
                Roadie is the only job search engine dedicated to Transport and
                Logistics industry. Roadie is an innovative digital media
                software product developed by fourth year Computing and Digital
                media students at GMIT as part of the Final year Project. Roade
                team consists of ambitious and committed people who derive joy
                and satisfaction from everyday work. Service is addressed to
                professional, skilled drivers and transport and logistic
                companies within the industry, people who need help finding
                employment or have work available. Service aims at people
                actively looking for work opportunities as well as companies
                that are either straggling to fill in available vacancies or
                need additional, temporary drivers.{" "}
              </p>
              <ul>
                <li> Quality</li>
                <li> Low Price</li>
                <li> User Friendly</li>
                <li> Easy To Use</li>
              </ul>
            </div>
            <div class="col-md-6">
              <img
                className="hand-img rounded mx-auto d-block w-75"
                src={us1}
              />
            </div>
          </div>
        </div>
      </section>
      <section class="py-5 bg-2">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <img
                className="hand-img rounded mx-auto d-block w-75"
                src={us2}
              />
            </div>
            <div class="col-md-6">
              <h1>How Does This App Works</h1>
              <b>Create Account</b>
              <p>
                Creating account is quick and easy. Just follow our tutorial.
              </p>
              <b>Add Your Job Post</b>
              <p>
                Fill in the form with all the relavant information. You can edit
                or delete your post anytime.
              </p>
              <b>Finding Employess Made Easy</b>
              <p>
                Using Roade is easy. Website is fast and convenient to use. We
                provide sophisticated company profiling and maintain an
                effective direct link between candidates and companies.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UsFooter;
