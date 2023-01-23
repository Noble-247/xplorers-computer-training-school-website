import { Carousel } from "react-bootstrap";
import firstCarouselImage from "../images/carousel-image-1.jpg";
import secondCarouselImage from "../images/carousel-image-2.jpg";
import thirdCarouselImage from "../images/carousel-image-3.jpg";
import fourthCarouselImage from "../images/carousel-image-4.jpg";

function Carousels() {
  const carouselCaptionBackground = {
    backgroundColor: "rgba(30, 43, 55, 0.8)",
  };

  return (
    <div className='d-none d-md-block p-0'>
      <Carousel fade>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={firstCarouselImage}
            alt='First slide'
          />
          <Carousel.Caption className='px-3' style={carouselCaptionBackground}>
            <h3>ACCELERATING DISCOVERY</h3>
            <p>
              Research Journals accelerates the dissemination of knowlege
              throuth the publication of high quality research articles using
              the open access model
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={secondCarouselImage}
            alt='Second slide'
          />

          <Carousel.Caption className='px-3' style={carouselCaptionBackground}>
            <h3>ACCELERATING DISCOVERY</h3>
            <p>
              Research Journals accelerates the dissemination of knowlege
              throuth the publication of high quality research articles using
              the open access model
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={thirdCarouselImage}
            alt='Third slide'
          />

          <Carousel.Caption className='px-3' style={carouselCaptionBackground}>
            <h3>ACCELERATING DISCOVERY</h3>
            <p>
              Research Journals accelerates the dissemination of knowlege
              throuth the publication of high quality research articles using
              the open access model
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={fourthCarouselImage}
            alt='Third slide'
          />

          <Carousel.Caption className='px-3' style={carouselCaptionBackground}>
            <h3>ACCELERATING DISCOVERY</h3>
            <p>
              Research Journals accelerates the dissemination of knowlege
              throuth the publication of high quality research articles using
              the open access model
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousels;
