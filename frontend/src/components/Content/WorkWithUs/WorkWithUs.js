import "./WorkWithUs.css";

import { Button } from "react-bootstrap";

function WorkWithUs() {
  return (
    <div className="container">
      <div className="my-5 mr-auto text-center">
        <h1>Work With Us</h1>
        <p>
          If you are interested in finding highly skilled employee or a short
          term contractor, please register with us or log in!!!
        </p>
        <a href="/login" className="">
          <Button className="btn btn-success mx-2">Log In</Button>
        </a>
        <a href="/register" className="">
          <Button className="btn btn-info mx-2">Sign Up</Button>
        </a>
      </div>
    </div>
  );
}

export default WorkWithUs;
