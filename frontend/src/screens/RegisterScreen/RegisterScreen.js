import { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Button } from "react-bootstrap";
import "./RegisterScreen.css";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/userActions";

const logo = require("../../assets/images/Logo3.png");

const RegisterScreen = ({ history }) => {
  // Set states for all inputstate
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [picture, setPicture] = useState(
    "https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png"
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  // UseEffect function to push to "/posts" screen
  useEffect(() => {
    if (userInfo) {
      history.push("/posts");
    }
  }, [history, userInfo]);
  // Submit handler function
  const submitHandler = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords don't match");
    } else dispatch(register(name, email, number, password, picture));
  };

  return (
    <MainScreen title="REGISTER">
      {" "}
      <div class="container h-100 mt-5">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
        {loading && <Loading />}
        <div class="d-flex justify-content-center h-100">
          <div class="user_card">
            <div class="d-flex justify-content-center">
              <div class="brand_logo_container">
                <img src={logo} class="brand_logo" alt="Logo" />
              </div>
            </div>
            <div class="d-flex justify-content-center form_container">
              <form onSubmit={submitHandler}>
                {/* Company name */}
                <div class="input-group mb-3">
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    name=""
                    class="form-control input_user"
                    value={name}
                    placeholder="Company name"
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>

                {/* Company reg number */}
                <div class="input-group mb-3">
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    name=""
                    class="form-control input_user"
                    value={number}
                    placeholder="Registration number"
                    onChange={(event) => setNumber(event.target.value)}
                  />
                </div>
                {/* Company email */}
                <div class="input-group mb-3">
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="email"
                    name=""
                    class="form-control input_user"
                    value={email}
                    placeholder="Company email"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                {/* Company password */}
                <div class="input-group mb-2">
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <i class="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    name=""
                    class="form-control input_pass"
                    value={password}
                    placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                {/* Confirm password */}
                <div class="input-group mb-2">
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <i class="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    name=""
                    class="form-control input_pass"
                    value={confirmPassword}
                    placeholder="Confirm password"
                    onChange={(event) => setConfirmPassword(event.target.value)}
                  />
                </div>
                {/* Remember checkbox */}
                <div class="form-group">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customControlInline"
                    />
                    <label
                      class="custom-control-label"
                      for="customControlInline"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <div class="d-flex justify-content-center mt-3 login_container">
                  <Button type="submit" className="login_btn">
                    Register
                  </Button>
                </div>
              </form>
            </div>

            <div class="mt-4">
              <div class="d-flex justify-content-center links">
                Already registered?
                <a href="/login" class="ml-2">
                  Log in
                </a>
              </div>
              <div class="d-flex justify-content-center links">
                <a href="#">Forgot your password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainScreen>
  );
};

export default RegisterScreen;
