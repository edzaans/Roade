import { Container, Row, Col } from "react-bootstrap";
import "./Tutorial.css";

//video
const reg = require("../../assets/video/register.mp4");

function TutorialText() {

  return (
    <div>
     
        <section class="py-5 bg-2 ">
          <div class="container">
            <div class="row text-center">
              <div class="col-md-12">
                <p>REGISTRATION PROCESS</p>
                <h1>How Does The Registration Process Works</h1><br></br>
                   
              </div>
            </div>
            <div class="row mt-4 text-center">
              <br></br>
              <div class="col-md-4">
                <h4>REGISTER</h4>
                <p>Go To REGISTER Page</p>
                <p>Fill in the form with your details</p>
                <p> Click REGISTER to confirm</p>
              </div>
              <br></br>
              <div class="col-md-4">
                <h4>POST</h4>
                <p>Click CREATE POSTING button</p>
                <p>Fill in the form with your details</p>
                <p> Click CREATE POST to confirm</p>
              </div>
              <br></br>
              <div class="col-md-4">
                <h4>PROFILE</h4>
                <p>Click Your User Name In Navigation Bar</p>
                <p>Select MY PROFILE</p>
                <p>Edit Your Personal Details</p>
                <p>Click UPDATE to confirm</p>
              </div>
            </div>
          </div>
        </section>
  

    </div>
  );
}

export default TutorialText;
