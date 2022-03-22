import "./LandingPage.css";
import { Button, Carousel } from "react-bootstrap";
import Slide from "../../components/Slide/Slide";
import Cards from "../../components/Content/Cards/Cards";
import About from "../../components/Content/About/About";
import WorkWithUs from "../../components/Content/WorkWithUs/WorkWithUs";

import { useEffect } from "react";

const test1 = require("../../assets/images/bg-showcase-1.jpg");
const test2 = require("../../assets/images/bg-showcase-2.jpg");
const test3 = require("../../assets/images/bg-showcase-3.jpg");

function LandingPage({ history }) {
  // UseEffect to check local storage for user info and push back to POSTS
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    // If data is stored (Application/localStorage) use history to push to POSTS page
    if (userInfo) {
      history.push("/posts");
    }
    //Whenever array changes, useEffect will be triggered
  }, [history]);

  return (
    <div>
      <Slide></Slide>
      <Cards></Cards>
      <About></About>
      <WorkWithUs></WorkWithUs>

      {/*   <div className="my-5 mr-auto text-center">
        <a href="/login" className="">
          <Button className="btn btn-success mx-2">Log In</Button>
        </a>
        <a href="/register" className="">
          <Button className="btn btn-info mx-2">Sign Up</Button>
        </a>
      </div> */}
    </div>
  );
}

export default LandingPage;
