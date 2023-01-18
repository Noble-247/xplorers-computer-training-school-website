import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  const thisYear = new Date().getFullYear();

  return (
    <Container fluid className='footer-background-style text-white pt-5 px-0'>
      <Container className='pb-5'>
        <Row>
          <Col md={4}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            similique iure libero iste sunt dignissimos voluptate at dicta
            obcaecati fugiat, aliquid in maxime, nostrum minima recusandae
            ducimus ipsa nisi ad?
          </Col>
          <Col md={4}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Asperiores, nam aperiam praesentium earum beatae voluptatum deserunt
            maxime numquam natus unde minus, velit similique quae accusamus vel
            neque sint illum quam.
          </Col>
          <Col md={4}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            libero numquam reiciendis aliquam dolores maiores quasi, nam omnis
            dolorum esse explicabo in exercitationem, quae ipsam porro, nobis
            saepe voluptates veniam?
          </Col>
        </Row>
      </Container>
      <div className='bg-primary py-3'>
        <small className=' d-block text-center'>
          &copy; Copyright {thisYear} Xplorers Computer Training School. All
          Rights Reserved
        </small>
      </div>
    </Container>
  );
}

export default Footer;
