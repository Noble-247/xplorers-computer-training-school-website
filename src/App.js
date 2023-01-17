import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Bootstrap
import { Container } from "react-bootstrap";

//Page Imports
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import TrainingServices from "./pages/TrainingServices";
import ContactUs from "./pages/ContactUs";

// Layout Imports
import RootLayout from "./layout/RootLayout";

function App() {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='about-us' element={<AboutUs />} />
        <Route path='training-services' element={<TrainingServices />} />
        <Route path='contact-us' element={<ContactUs />} />
      </Route>
    )
  );

  return (
    <Container fluid className='px-0'>
      <RouterProvider router={Router} />
    </Container>
  );
}

export default App;
