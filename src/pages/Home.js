import { Container } from "react-bootstrap";
import useTitle from "../customHooks/useTitle";

function Home() {
  useTitle("Home | Xplorers Computer Training School");
  return (
    <Container>
      <h2>Home - Welcome to Xplorers Computer Training School</h2>
    </Container>
  );
}

export default Home;
