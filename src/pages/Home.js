import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useTitle from "../customHooks/useTitle";
import Carousels from "../utilities/Carousels";
import firstHomePageImage from "../images/home-page-img/image-1.jpg";
import secondHomePageImage from "../images/home-page-img/image-2.jpg";
import thirdHomePageImage from "../images/home-page-img/image-3.jpg";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

// import TestComponent from "../utilities/TestComponent";

function Home() {
  useTitle("Home | Xplorers Computer Training School");

  const [counterOn, setCounterOn] = useState(false);

  return (
    <div>
      <Carousels />
      <Container>
        <Row>
          <Col md={6} className='py-5'>
            <div className='pt-md-5'>
              <h2>Personal Education, Extraordinary Success</h2>
              <p>
                Commitment is something that comes from understanding that
                everything has its price and then having the willingness to pay
                that price.
              </p>
              <small>
                The other virtues practice in succession by Franklin were
                silence, order, resolution, frugality, industry, sincerity,
                Justice, moderation, cleanliness, tranquility, chastity and
                humility. For the summary order he followed a little scheme of
                employing his time each day.
              </small>
              <div className='mt-4'>
                <Link
                  to={"/"}
                  className='btn btn-lg btn-secondary'
                  role='button'
                >
                  Read More
                </Link>
              </div>
            </div>
          </Col>
          <Col md={4} className='pt-md-4'>
            <div className='pt-md-5'>
              <img
                className='d-block w-100'
                src={firstHomePageImage}
                alt='lady operating a PC'
              />
            </div>
          </Col>
          <Col md={2} className='pt-md-5'>
            <div className='pt-md-5'>
              <img
                className='d-block w-100 mt-2 m-md-2'
                src={secondHomePageImage}
                alt='lady operating a PC'
              />
              <img
                className='d-block w-100 mt-2 m-md-2'
                src={thirdHomePageImage}
                alt='lady operating a PC'
              />
            </div>
          </Col>
        </Row>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <Row className='align-items-center justify-content-center my-5 shadow'>
            <Col md={6} lg={3}>
              <section className='d-flex align-items-center'>
                <div
                  className='text-secondary mr-1'
                  style={{ fontSize: "95px" }}
                >
                  <i className='bi bi-people-fill'></i>
                </div>
                <div>
                  <h1>
                    {counterOn && (
                      <CountUp start={0} end={1790} duration={2} delay={0} />
                    )}
                    +
                  </h1>
                  <h4>Satisfied Student</h4>
                </div>
              </section>
            </Col>
            <Col md={6} lg={3}>
              <section className='d-flex align-items-center'>
                <div
                  className='text-secondary mr-1'
                  style={{ fontSize: "95px" }}
                >
                  <i class='bi bi-mortarboard-fill'></i>
                </div>
                <div>
                  <h1>
                    {counterOn && (
                      <CountUp start={0} end={245} duration={2} delay={0} />
                    )}
                    +
                  </h1>
                  <h4>Courses Completed</h4>
                </div>
              </section>
            </Col>
            <Col md={6} lg={3}>
              <section className='d-flex align-items-center'>
                <div
                  className='text-secondary mr-1'
                  style={{ fontSize: "95px" }}
                >
                  <i class='bi bi-person-check-fill'></i>
                </div>
                <div>
                  <h1>
                    {counterOn && (
                      <CountUp start={0} end={491} duration={2} delay={0} />
                    )}
                    +
                  </h1>
                  <h4>Expert Advisors</h4>
                </div>
              </section>
            </Col>
            <Col md={6} lg={3}>
              <section className='d-flex align-items-center'>
                <div
                  className='text-secondary mr-1'
                  style={{ fontSize: "95px" }}
                >
                  <i class='bi bi-trophy-fill'></i>
                </div>
                <div>
                  <h1>
                    {counterOn && (
                      <CountUp start={0} end={1090} duration={2} delay={0} />
                    )}
                    +
                  </h1>
                  <h4>Award Winning</h4>
                </div>
              </section>
            </Col>
          </Row>
        </ScrollTrigger>
      </Container>
    </div>
  );
}

export default Home;
