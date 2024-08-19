import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//BOOTSTRAP
import Container from "react-bootstrap/Container";

//PAGE IMPORTS

// LAYOUT
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";

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
