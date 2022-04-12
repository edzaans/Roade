// Import styles
import "./LandingPage.css";
// Import Components
import Slide from "../../components/Slide/Slide";
import Cards from "../../components/Content/Cards/Cards";
import WorkWithUs from "../../components/Content/WorkWithUs/WorkWithUs";
import Panel from "../../components/Content/Panel/Panel";
import Gallery_Carousel from "../../components/Content/Gallery/Gallery_Carousel";
// Import useEffect
import { useEffect } from "react";

// Main function
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
      <Panel></Panel>
      <Cards></Cards>
      <WorkWithUs></WorkWithUs>
      <Gallery_Carousel></Gallery_Carousel>

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
