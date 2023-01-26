import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import firstCarouselImage from "../images/carousel-image-1.jpg";
import secondCarouselImage from "../images/carousel-image-2.jpg";
import thirdCarouselImage from "../images/carousel-image-3.jpg";
import fourthCarouselImage from "../images/carousel-image-4.jpg";

function Carousels() {
  return (
    <div className='d-none d-md-block p-0'>
      <Carousel fade>
        <Carousel.Item className='position-relative'>
          <img
            className='d-block w-100'
            src={firstCarouselImage}
            alt='First slide'
          />
          <Carousel.Caption>
            <div className='carousel-caption-style'>
              <h1 className='text-center font-weight-bold'>
                Exceptional ICT Education. <br /> Exceptional Value
              </h1>
              <p className='text-center px-5'>
                First thing to remember about success is that it is a process
                nothing more, nothing less. There is really no magic to it. it
                is not reserved for a selected few people{" "}
              </p>
              <div className='d-flex'>
                <Link to='/' className='btn btn-light d-block mr-3 btn-lg'>
                  Read More
                </Link>
                <Link to='/' className='btn btn-secondary d-block btn-lg'>
                  Learn More
                </Link>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={secondCarouselImage}
            alt='Second slide'
          />
          <Carousel.Caption>
            <div className='carousel-caption-style'>
              <h1 className='text-center font-weight-bold'>
                Exceptional ICT Education. <br /> Exceptional Value
              </h1>
              <p className='text-center px-5'>
                First thing to remember about success is that it is a process
                nothing more, nothing less. There is really no magic to it. it
                is not reserved for a selected few people{" "}
              </p>
              <div className='d-flex'>
                <Link to='/' className='btn btn-light d-block mr-3 btn-lg'>
                  Read More
                </Link>
                <Link to='/' className='btn btn-secondary d-block btn-lg'>
                  Learn More
                </Link>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={thirdCarouselImage}
            alt='Third slide'
          />
          <Carousel.Caption>
            <div className='carousel-caption-style'>
              <h1 className='text-center font-weight-bold'>
                Exceptional ICT Education. <br /> Exceptional Value
              </h1>
              <p className='text-center px-5'>
                First thing to remember about success is that it is a process
                nothing more, nothing less. There is really no magic to it. it
                is not reserved for a selected few people{" "}
              </p>
              <div className='d-flex'>
                <Link to='/' className='btn btn-light d-block mr-3 btn-lg'>
                  Read More
                </Link>
                <Link to='/' className='btn btn-secondary d-block btn-lg'>
                  Learn More
                </Link>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={fourthCarouselImage}
            alt='Third slide'
          />
          <Carousel.Caption>
            <div className='carousel-caption-style'>
              <h1 className='text-center font-weight-bold'>
                Exceptional ICT Education. <br /> Exceptional Value
              </h1>
              <p className='text-center px-5'>
                First thing to remember about success is that it is a process
                nothing more, nothing less. There is really no magic to it. it
                is not reserved for a selected few people{" "}
              </p>
              <div className='d-flex'>
                <Link to='/' className='btn btn-light d-block mr-3 btn-lg'>
                  Read More
                </Link>
                <Link to='/' className='btn btn-secondary d-block btn-lg'>
                  Learn More
                </Link>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousels;

/* 

<div style={carouselTextStyle}>
            <h1 className='text-center display-4 font-weight-bold'>
              Exceptional ICT Education. <br /> Exceptional Value
            </h1>
            <p className='text-center px-5'>
              First thing to remember about success is that it is a process
              nothing more, nothing less. There is really no magic to it. it is
              not reserved for a selected few people{" "}
            </p>
            <div className='d-flex'>
              <Link to='/' className='btn btn-light d-block mr-3 btn-lg'>
                Read More
              </Link>
              <Link to='/' className='btn btn-secondary d-block btn-lg'>
                Learn More
              </Link>
            </div>
          </div>

*/
