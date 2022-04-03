import { Player } from "video-react";

import "./WorkWithUs.css";
import video from "../../../assets/Images_Custom/Intro/RoadeIntroWebsite.mp4";

import { Button } from "react-bootstrap";

const signup = require("../../../assets/images/usFooter1.png");
const login = require("../../../assets/images/LogIn.jpg");
const intro = require("../../../assets/Images_Custom/Intro/RoadeIntroWebsite.mp4");

function WorkWithUs() {
  return (
    <div className="container">
      <div className="mt-5 mr-auto text-center">
        <h1 className="mb-3">How it works</h1>
        <p className="px-3 py-3">
          If you are interested in finding highly skilled employee or a short
          term contractor, please register with us or log in!!! We dont have set
          pricing plan, insted we charge only for clicked ads, if there is no
          clicks on your add, there is no fee!!!
        </p>
        {/*         <a href="/login" className="">
          <Button className="btn btn-success mx-2">Log In</Button>
        </a>
        <a href="/register" className="">
          <Button className="btn btn-info mx-2">Sign Up</Button>
        </a> */}
      </div>
      <div className="container ">
        <div className="row ">
          {/* Hides video on smaller screens */}
          <div className="col-md-6 d-none d-sm-block">
            <video
              /* className="video" */
              src={video}
              width="680"
              height="500"
              controls
              autoplay="true"
            ></video>
          </div>
        </div>
      </div>

      <div class="row">
        <div className="col-lg-6 col-md-6 mb-4">
          <div className="card h-100 ">
            <div className="card-body">
              <div class="text-center">
                <span class="h2">Sign up</span>
                <img src={signup} alt="" className="img-fluid" />
              </div>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item test">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>{" "}
                Company name
              </li>
              <li className="list-group-item test">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>{" "}
                Personal details
              </li>
              <li className="list-group-item test">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>{" "}
                Contact details
              </li>
            </ul>
            <div class="card-body text-center">
              <a href="/register" className="">
                <Button className="btn btn-info mx-2">Sign Up</Button>
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 mb-4">
          <div className="card h-100 ">
            <div className="card-body">
              <div class="text-center">
                <span class="h2">Log in</span>
                <img src={signup} alt="" className="img-fluid" />
              </div>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item test">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>{" "}
                Your saved details
              </li>
              <li className="list-group-item test">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>{" "}
                Create job posts
              </li>
              <li className="list-group-item test">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>{" "}
                Edit your profile
              </li>
            </ul>
            <div class="card-body text-center">
              <a href="/login" className="">
                <Button className="btn btn-info mx-2">Log In</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkWithUs;
