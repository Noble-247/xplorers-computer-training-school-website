import { Container } from "react-bootstrap";
import useTitle from "../customHooks/useTitle";

function ContactUs() {
  useTitle("Contact Us | Xplorers Computer Training School");
  return (
    <Container>
      <h2>ContactUs</h2>
    </Container>
  );
}

export default ContactUs;
