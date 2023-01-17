import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";

function RootLayout() {
  return (
    <Fragment>
      <NavigationBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
}

export default RootLayout;
