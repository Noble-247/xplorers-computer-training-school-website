import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  const thisYear = new Date().getFullYear();

  return (
    <Container fluid className='footer-background-style text-white pt-5 px-0'>
      <small>
        <Container className='pb-5'>
          <Row className='justify-content-between'>
            <Col md={6} lg={3}>
              <section className='mt-3'>
                <h2
                  className='mb-0 font-weight-bolder'
                  style={{ letterSpacing: "8px" }}
                >
                  XPLORERS
                </h2>
                <small className='d-block font-weight-bold'>
                  Computer Training School
                </small>
                <p className='mt-2'>
                  The best way is to develop and follow a plan. Start with your
                  goals in mind and then work backward to develop the plan.
                </p>
                <h3>Follow Us</h3>
                <div className='d-flex justify-content-start'>
                  <a
                    href='/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-secondary d-block mr-3'
                  >
                    <i className='bi bi-facebook text-white'></i>
                  </a>

                  <a
                    href='/'
                    target='_blank'
                    className='btn btn-secondary d-block mr-3'
                  >
                    <i className='bi bi-twitter text-white'></i>
                  </a>
                  <a
                    href='/'
                    target='_blank'
                    className='btn btn-secondary d-block mr-3'
                  >
                    <i className='bi bi-linkedin text-white'></i>
                  </a>
                  <a
                    href='/'
                    target='_blank'
                    className='btn btn-secondary d-block mr-3'
                  >
                    <i className='bi bi-instagram text-white'></i>
                  </a>
                </div>
              </section>
            </Col>
            <Col md={6} lg={3}>
              <section className='mt-3'>
                <h3>Featured Courses</h3>
                <Nav className='flex-column'>
                  <Nav.Link className='px-0'>
                    <Link to='/' className='text-white'>
                      ICT Fundamentals
                    </Link>
                  </Nav.Link>
                  <Nav.Link className='px-0'>
                    <Link to='/' className='text-white'>
                      Database Management
                    </Link>
                  </Nav.Link>
                  <Nav.Link className='px-0'>
                    <Link to='/' className='text-white'>
                      Web Development
                    </Link>
                  </Nav.Link>
                  <Nav.Link className='px-0'>
                    <Link to='/' className='text-white'>
                      Computer Repairs & Maintenance
                    </Link>
                  </Nav.Link>
                  <Nav.Link className='px-0'>
                    <Link to='/' className='text-white'>
                      Graphics & Design
                    </Link>
                  </Nav.Link>
                  <Nav.Link className='px-0'>
                    <Link to='/' className='text-white'>
                      Computer Networking
                    </Link>
                  </Nav.Link>
                </Nav>
              </section>
            </Col>
            <Col md={6} lg={3}>
              <section className='mt-3'>
                <h3>Useful Links</h3>
                <Nav className='flex-column'>
                  <Nav.Link className='px-0'>
                    <Link to='/' className='text-white'>
                      Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link className='px-0'>
                    <Link to='about-us' className='text-white'>
                      About Us
                    </Link>
                  </Nav.Link>
                  <Nav.Link className='px-0'>
                    <Link to='training-services' className='text-white'>
                      Training Services
                    </Link>
                  </Nav.Link>
                  <Nav.Link className='px-0'>
                    <Link to='contact-us' className='text-white'>
                      Contact Us
                    </Link>
                  </Nav.Link>
                  <Nav.Link className='px-0'>
                    <Link to='faq' className='text-white'>
                      FAQ
                    </Link>
                  </Nav.Link>
                  <Nav.Link className='px-0'>
                    <Link to='pricing' className='text-white'>
                      Pricing
                    </Link>
                  </Nav.Link>
                </Nav>
              </section>
            </Col>
            <Col md={6} lg={3}>
              <section className='mt-3'>
                <h3>Contact Us</h3>
                <div className='d-flex'>
                  <p className='text-secondary font-weight-bold'>
                    <i className='bi bi-geo-alt-fill'></i>
                  </p>
                  <p className='ml-2'>
                    Suite 208 Cosy Plaza, Ada-George Road, Near Location
                    Bus-Stop, Mgbuoba Port Harcourt, Rivers State, Nigeria
                  </p>
                </div>
                <div className='d-flex'>
                  <p className='text-secondary font-weight-bold'>
                    <i className='bi bi-telephone-inbound-fill'></i>
                  </p>{" "}
                  <p className='ml-2'>+2348039356492, +2348037804027</p>
                </div>
                <div className='d-flex'>
                  <p className='text-secondary font-weight-bold'>
                    <i className='bi bi-envelope-at-fill'></i>
                  </p>
                  <p className='ml-2'>info@xplorerstrainingschool.com</p>
                </div>
              </section>
            </Col>
          </Row>
        </Container>
        <div className='bg-primary py-3'>
          <p className='text-center m-0'>
            &copy; Copyright {thisYear} Xplorers Computer Training School. All
            Rights Reserved.
          </p>
        </div>
      </small>
    </Container>
  );
}

export default Footer;
