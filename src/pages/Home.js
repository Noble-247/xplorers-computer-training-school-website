import { Container } from "react-bootstrap";
import useTitle from "../customHooks/useTitle";
import Carousels from "../utilities/Carousels";
// import TestComponent from "../utilities/TestComponent";

function Home() {
  useTitle("Home | Xplorers Computer Training School");
  return (
    <div>
      <Carousels />
      <Container>
        <h2>Home - Welcome to Xplorers Computer Training School</h2>
      </Container>
    </div>
  );
}

export default Home;
