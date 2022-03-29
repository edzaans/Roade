import React from "react";

// Import all Bootstrap classes
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Container,
} from "react-bootstrap";

// Import dependancies
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../actions/userActions";

// Import ROADE logout
const logo = require("../../assets/images/Roade_logo2.png");

function Header({ setSearch }) {
  const history = useHistory();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };
  return (
    <div>
      <Navbar bg="info" expand="md">
        <Container fluid>
          {/* Brand with logo */}
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="100"
              height="50"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="m-auto">
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Form>
            </Nav>

            <Nav
              className=" my-2 my-lg-0"
              style={{ maxHeight: "200px" }}
              navbarScroll
            >
              <Nav.Link>
                <Link to="/job_list" style={{ textDecoration: "none" }}>
                  Jobs
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/rsa" style={{ textDecoration: "none" }}>
                  RSA
                </Link>
              </Nav.Link>
              {/*        <Nav.Link>
                <Link to="/testPosts" style={{ textDecoration: "none" }}>
                  Test Posts
                </Link>
              </Nav.Link> */}
              <Nav.Link>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  Contact Us
                </Link>
              </Nav.Link>
            </Nav>
            {/* Check if user is logged in , display POSTS and User info */}
            {userInfo ? (
              <Nav>
                <Nav.Link>
                  <Link to="/posts" style={{ textDecoration: "none" }}>
                    My Posts
                  </Link>
                </Nav.Link>

                <NavDropdown
                  title={userInfo?.name}
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="/profile">
                    My Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            ) : (
              /* If user not logged in, display Login Button and redirect user to login / register screen */
              <Nav>
                {" "}
                <Nav.Link>
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    Log In
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/register" style={{ textDecoration: "none" }}>
                    Register
                  </Link>
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
