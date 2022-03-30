import React from "react";

// import Headers styles
import "./Header.css";
// Import all Bootstrap classes
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Container,
} from "react-bootstrap";

// Import Icons
import { RiLoginBoxLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogin } from "react-icons/md";

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
      <Navbar className="navbar-header" expand="md">
        <Container fluid className="navbar-header">
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
                <Link to="/job_list" className="nav-links">
                  Jobs
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/rsa" className="nav-links">
                  RSA
                </Link>
              </Nav.Link>
              {/*        <Nav.Link>
                <Link to="/testPosts" style={{ textDecoration: "none" }}>
                  Test Posts
                </Link>
              </Nav.Link> */}
              <Nav.Link>
                <Link to="/contact" className="nav-links">
                  Contact Us
                </Link>
              </Nav.Link>
            </Nav>
            {/* Check if user is logged in , display POSTS and User info */}
            {userInfo ? (
              <Nav>
                <Nav.Link>
                  <Link to="/posts" className="nav-links">
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
                  <Link to="/login" className="nav-links">
                    <span>
                      {/* <CgProfile className="login-icon mx-1" /> */}
                      Log In
                    </span>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/register" className="nav-links">
                    <span>
                      {/* <MdOutlineLogin className="login-icon mx-1" /> */}
                      Register
                    </span>
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
