import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Logo from "../assets/logos/xplorers-logo.png";

function NavigationBar() {
  function mouseEnterEffectOnNavigationText(event) {
    event.target.style.color = "#f48a9d";
  }
  function mouseLeaveEffectOnNavigationText(event) {
    event.target.style.color = " #fff";
  }

  return (
    <Fragment>
      <div className="bg-primary text-white p-2 d-none d-md-block">
        <Container className="d-flex justify-content-between">
          <div>
            <small
              className="d-inline-block"
              onMouseEnter={(event) => mouseEnterEffectOnNavigationText(event)}
              onMouseLeave={(event) => mouseLeaveEffectOnNavigationText(event)}
            >
              <i className="bi bi-envelope"></i> Email:
              info@xplorerstrainingschool.com
            </small>
            <small
              className="d-inline-block ml-3"
              onMouseEnter={(event) => mouseEnterEffectOnNavigationText(event)}
              onMouseLeave={(event) => mouseLeaveEffectOnNavigationText(event)}
            >
              <i className="bi bi-telephone"></i> Call +2348039356492
            </small>
          </div>
          <div>
            <small
              className="ml-3"
              onMouseEnter={(event) => mouseEnterEffectOnNavigationText(event)}
              onMouseLeave={(event) => mouseLeaveEffectOnNavigationText(event)}
            >
              <i className="bi bi-clock"></i> Opening: 9:00am - 5:00pm, (Mondays
              - Fridays)
            </small>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={(event) => mouseEnterEffectOnNavigationText(event)}
              onMouseLeave={(event) => mouseLeaveEffectOnNavigationText(event)}
            >
              <small className="ml-3 text-white">
                <i className="bi bi-facebook"></i>
              </small>
            </a>

            <a
              href="/"
              target="_blank"
              onMouseEnter={(event) => mouseEnterEffectOnNavigationText(event)}
              onMouseLeave={(event) => mouseLeaveEffectOnNavigationText(event)}
            >
              <small className="ml-3 text-white">
                <i className="bi bi-twitter"></i>
              </small>
            </a>
            <a
              href="/"
              target="_blank"
              onMouseEnter={(event) => mouseEnterEffectOnNavigationText(event)}
              onMouseLeave={(event) => mouseLeaveEffectOnNavigationText(event)}
            >
              <small className="ml-3 text-white">
                <i className="bi bi-linkedin"></i>
              </small>
            </a>
            <a
              href="/"
              target="_blank"
              onMouseEnter={(event) => mouseEnterEffectOnNavigationText(event)}
              onMouseLeave={(event) => mouseLeaveEffectOnNavigationText(event)}
            >
              <small className="ml-3 text-white">
                <i className="bi bi-instagram"></i>
              </small>
            </a>
          </div>
        </Container>
      </div>
      <Navbar
        expand="lg"
        bg="white"
        variant="light"
        className="sticky-top shadow"
      >
        <Container>
          <Navbar.Brand>
            <div className="d-flex align-items-center">
              <div>
                <Image
                  src={Logo}
                  fluid
                />
              </div>
              <small style={{ lineHeight: "1" }}>
                <span
                  className="text-secondary font-weight-bolder h5"
                  style={{ letterSpacing: "4.5px" }}
                >
                  XPLORERS
                </span>
                <br />{" "}
                <span
                  className="d-block"
                  style={{ fontSize: "13px" }}
                >
                  Training School
                </span>
              </small>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLink
                to="/"
                end
                className="nav-link mr-4 font-weight-bold"
              >
                Home
              </NavLink>
              <NavLink
                to="about-us"
                className="nav-link mr-4 font-weight-bold"
              >
                About
              </NavLink>
              <NavLink
                to="training-services"
                className="nav-link mr-4 font-weight-bold"
              >
                Training Services
              </NavLink>
              <NavLink
                to="contact-us"
                className="nav-link mr-4 font-weight-bold"
              >
                Contact Us
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
}

export default NavigationBar;
