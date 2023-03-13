import { Fragment, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";
import { Button, Container } from "react-bootstrap";
import TypeWriterAnimation from "../utilities/TypeWriterAnimation";

function RootLayout() {
  const [mainContent, setMainContent] = useState(false);
  const [isUnderConstruction, setIsUnderConstruction] = useState(true);

  useEffect(() => {
    setIsUnderConstruction(true);
    setMainContent(false);
  }, []);

  function showMainContent() {
    setMainContent(true);
    setIsUnderConstruction(false);
  }

  return (
    <Fragment>
      <section>
        {isUnderConstruction && (
          <div className='site-under-maintenance'>
            <Container>
              <TypeWriterAnimation />
              <p>
                Since 2003, Xplorers Computer Training School has grown to
                become one of the largest independent IT training company
                inNigeria. Businesses and individuals can choose from hundreds
                of course offerings, delivered by experts. For many small,
                medium and large organizations, Xplorers is the single source
                for all their IT training needs.
              </p>
              <Button
                className='btn btn-secondary'
                onClick={() => showMainContent()}
              >
                Explore Our Work{" "}
              </Button>
            </Container>
          </div>
        )}
      </section>
      {mainContent && (
        <section>
          <NavigationBar />
          <main>
            <Outlet />
          </main>
          <footer>
            <Footer />
          </footer>
        </section>
      )}
    </Fragment>
  );
}

export default RootLayout;
