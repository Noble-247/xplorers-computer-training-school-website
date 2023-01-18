import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Container className='d-flex flex-column align-items-center justify-content-center py-5'>
      <h1 className='display-1 text-secondary'>Oops!</h1>
      <h3>404 - PAGE NOT FOUND</h3>
      <p className='text-center'>
        The page you are looking for might have been removed or had its name
        changed, or is temporarily unavailable
      </p>
      <div>
        <Link className='btn btn-secondary' to='/'>
          GO TO HOME PAGE
        </Link>
      </div>
    </Container>
  );
}

export default NotFound;
