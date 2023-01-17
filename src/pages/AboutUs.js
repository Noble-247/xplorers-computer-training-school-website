import { Container } from "react-bootstrap";
import useTitle from "../customHooks/useTitle";

function AboutUs() {
  useTitle("About Us | Xplorers Computer Training School");
  return (
    <Container>
      <h2>AboutUs</h2>
    </Container>
  );
}

export default AboutUs;
