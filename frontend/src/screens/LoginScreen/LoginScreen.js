import React, { useEffect, useState } from "react";
import "./LoginScreen.css";
import MainScreen from "../../components/MainScreen";

// Import React icons
import { BiUserCircle } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";
// Assign Company logo to variable
const logo = require("../../assets/images/Logo_Icon.png");

// Main Login Screen function
const LoginScreen = ({ history }) => {
  // Create state to store email
  const [email, setEmail] = useState("");
  // Create state to store password
  const [password, setPassword] = useState("");

  // Get data from Dispatch
  const dispatch = useDispatch();
  // useSelector to access the state
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  // Route if user has been logged in
  useEffect(() => {
    if (userInfo) {
      history.push("/posts");
    }
  }, [history, userInfo]);

  // Function to run on FORM SUBMIT event
  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch(login(email, password));
  };

  return (
    <MainScreen title="LOGIN">
      <div class="container h-100 mt-5">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        <div class="d-flex justify-content-center h-100">
          <div class="user_card">
            <div class="d-flex justify-content-center">
              <div class="brand_logo_container">
                <img src={logo} className="brand_logo" alt="Logo" />
              </div>
            </div>
            <div className="d-flex justify-content-center form_container">
              <form onSubmit={submitHandler}>
                <div className="input-group mb-3">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i>
                        <BiUserCircle />
                      </i>
                    </span>
                  </div>
                  <input
                    type="email"
                    name=""
                    class="form-control input_user"
                    value={email}
                    placeholder="Email"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div class="input-group mb-2">
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <i>
                        <RiLockPasswordLine />
                      </i>
                    </span>
                  </div>
                  <input
                    type="password"
                    name=""
                    class="form-control input_pass"
                    value={password}
                    placeholder="password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customControlInline"
                    />
                    <label className="custom-control-label">Remember me</label>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-3 login_container">
                  <button type="submit" name="button" className="btn login_btn">
                    Login
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-4">
              <div className="d-flex justify-content-center links">
                Don't have an account?{" "}
                <a href="/register" classname="ml-2">
                  Sign Up
                </a>
              </div>
              <div className="d-flex justify-content-center links">
                <a href="#">Forgot your password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainScreen>
  );
};

export default LoginScreen;
