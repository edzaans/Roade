import "./WorkWithUs.css";

import { Button } from "react-bootstrap";

function WorkWithUs() {
  return (
    <div className="container">
      <div className="mt-5 mr-auto text-center">
        <h1>How it works</h1>
        <p>
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

      {/* Pricing table */}
      <div class="container-fluid">
        <div class="container p-5">
          <div class="row">
            <div className="col-lg-6 col-md-12 mb-4">
              <div className="card h-100 shadow-lg shadow-md">
                <div className="card-body">
                  <div class="text-center p-3">
                    <span class="h2">Register</span>
                  </div>
                  <p class="card-text text-center">
                    Please register to start creating your job postings
                  </p>
                </div>
                <ul className="list-group list-group-flush test">
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
                    You will need your company name
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
                    You will need your personal details
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
                    You will need your contact details
                  </li>
                </ul>
                <div class="card-body text-center">
                  <a href="/register" className="">
                    <Button className="btn btn-info mx-2">Sign Up</Button>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 mb-4">
              <div className="card h-100 shadow-lg">
                <div class="card-body">
                  <div class="text-center p-3">
                    <span class="h2">Log in</span>
                  </div>
                  <p class="card-text">
                    Log in with details you registered with to start creating
                    your job postsings and view your profile
                  </p>
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
                    Log in using your details
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
                    Create your job postings and edit them
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
                    View and update your profile
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
      </div>
      {/* Rotating cards*/}
      <div class="container p-5">
        <div class="row">
          <div className="col-lg-6 col-md-6  cardMargin">
            <div class="h-100 flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <span class="price">Reg</span>

                  <h2 class="card-title">Standard</h2>
                  <small>Small Business</small>
                </div>
                <div class="flip-card-back">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
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
                      Cras justo odio
                    </li>
                    <li class="list-group-item">
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
                      Dapibus ac facilisis in
                    </li>
                    <li class="list-group-item">
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
                      Vestibulum at eros
                    </li>
                  </ul>
                  <button class="my-5 btn btn-outline-success btn-lg">
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="col-lg-6 col-md-6 cardMargin">
            <div class="h-100 flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <span class="price">Log</span>

                  <h2 class="card-title">Standard</h2>
                  <small>Small Business</small>
                </div>
                <div class="flip-card-back">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
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
                      Cras justo odio
                    </li>
                    <li class="list-group-item">
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
                      Dapibus ac facilisis in
                    </li>
                    <li class="list-group-item">
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
                      Vestibulum at eros
                    </li>
                  </ul>
                  <button class="my-5 btn btn-outline-success btn-lg">
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkWithUs;
