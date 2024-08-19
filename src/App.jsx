import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//BOOTSTRAP
import Container from "react-bootstrap/Container";

// LAYOUT
import RootLayout from "./layout/RootLayout";

//PAGE IMPORTS
import Home from "./pages/Home";
// import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import TrainingServices from "./pages/TrainingServices";
import ContactUs from "./pages/ContactUs";

function App() {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
        <Route
          path="about-us"
          element={<AboutUs />}
        />
        <Route
          path="training-services"
          element={<TrainingServices />}
        />
        <Route
          path="contact-us"
          element={<ContactUs />}
        />
      </Route>
    )
  );
  return (
    <Container
      fluid
      className="px-0"
    >
      <RouterProvider router={Router} />
    </Container>
  );
}

export default App;
