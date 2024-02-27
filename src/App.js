

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import SignIn from './components/signin';
import SignUp from './components/signup';
import Technology from './components/technologies/Technology';
import ReactComponent from './components/technologies/React';
import AngularComponent from './components/technologies/Angular';
import VueComponent from './components/technologies/Vue';

const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            My App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="btn btn-outline-light me-2" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-outline-light me-2" to="/signin">
                  Sign In
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-outline-light me-2" to="/signup">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-outline-light" to="/technologies">
                  Technologies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/technologies" element={<Technology />} />
          <Route path="/technologies/react" element={<ReactComponent />} />
          <Route path="/technologies/angular" element={<AngularComponent />} />
          <Route path="/technologies/vue" element={<VueComponent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
