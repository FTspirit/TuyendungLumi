// Import lib
import React from "react";
import { HashRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";

// Import Route Component
import RoutePage from "./Route/Route";
function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tuyển dụng LUMI</title>
        <meta name="Tuyển dụng LUMI" content="Tuyển dụng LUMI" />
      </Helmet>

      <Router>
        <RoutePage />
      </Router>
    </>
  );
}
export default App;
