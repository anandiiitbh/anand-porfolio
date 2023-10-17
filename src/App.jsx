import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const HomeComp = lazy(() => import("./Home"));
const LoginComp = lazy(() => import("./Login.jsx"));

function App() {
  return (
    <Router>
      {/*TODO: add link to home and login
       <Link to="/">Home</Link>
      <br />
      <Link to="/login">Login</Link> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<HomeComp />} />
          <Route exacr path="/login" element={<LoginComp />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
