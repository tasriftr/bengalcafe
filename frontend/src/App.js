import "./App.css";
import Header from "./component/layout/Header/header.jsx";
import Footer from "./component/layout/Footer/footer.jsx";
import React from "react";
import WebFont from "webfontloader";
import Home from "./component/layout/Home/Home.jsx";

import {
  Route,
  Routes,
  BrowserRouter as Router,
  Outlet,
} from "react-router-dom";

function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Open Sans", "Roboto"],
      },
    });
  }, []);
  return (
    <Router>
      <Header />
      <Outlet />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
