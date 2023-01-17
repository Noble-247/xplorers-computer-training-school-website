import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import Logo from "../images/xplorers-logo.png";

function NavigationBar() {
  return (
    <Fragment>
      <div className='bg-primary text-white p-2 d-none d-md-block'>
        <Container className='d-flex justify-content-between'>
          <div>
            <small className='d-inline-block'>
              <i className='bi bi-envelope'></i> Email:
              info@xplorerstrainingschool.com
            </small>
            <small className='d-inline-block ml-3'>
              <i class='bi bi-telephone'></i> Call +2348039356492
            </small>
          </div>
          <div>
            <small className='ml-3'>
              <i class='bi bi-clock'></i> Opening: 9:00am - 5:00pm
            </small>
            <small className='ml-3'>
              <i class='bi bi-facebook'></i>
            </small>
            <small className='ml-3'>
              <i class='bi bi-twitter'></i>
            </small>
            <small className='ml-3'>
              <i class='bi bi-linkedin'></i>
            </small>
            <small className='ml-3'>
              <i class='bi bi-instagram'></i>
            </small>
          </div>
        </Container>
      </div>
      <Navbar expand='lg' bg='white' variant='light' className='container'>
        <Navbar.Brand>
          <div className='d-flex align-items-center'>
            <div>
              <Image src={Logo} fluid />
            </div>
            <small style={{ lineHeight: "1" }}>
              <span
                className='text-secondary font-weight-bolder h5'
                style={{ letterSpacing: "4.5px" }}
              >
                XPLORERS
              </span>
              <br />{" "}
              <span className='d-block' style={{ fontSize: "13px" }}>
                Training School
              </span>
            </small>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <NavLink to='/' end className='nav-link mr-4 font-weight-bold'>
              Home
            </NavLink>
            <NavLink to='about-us' className='nav-link mr-4 font-weight-bold'>
              About
            </NavLink>
            <NavLink
              to='training-services'
              className='nav-link mr-4 font-weight-bold'
            >
              Training Services
            </NavLink>
            <NavLink to='contact-us' className='nav-link mr-4 font-weight-bold'>
              Contact Us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
}

export default NavigationBar;
