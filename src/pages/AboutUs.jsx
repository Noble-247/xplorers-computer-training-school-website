import Container from "react-bootstrap/Container";
import useTitle from "../customHooks/useTitle";
import Filter from "../test-projects/Filter";
import UseReducer from "../test-projects/UseReducer";

function AboutUs() {
  useTitle("About Us | Xplorers Computer Training School");
  return (
    <Container>
      <h2>AboutUs</h2>
      <Filter />
      <UseReducer />
    </Container>
  );
}

export default AboutUs;
