import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import './styles/style.css';

// TopBar component
const TopBar = () => {
  return (
    <header className="container header">
      {/* <!-- ==== NAVBAR ==== --> */}
      <nav className="nav">
        <div className="logo">
          <h2>Shinkansen.</h2>
        </div>

        <div className="nav_menu" id="nav_menu">
          <button className="close_btn" id="close_btn">
            <i className="ri-close-fill"></i>
          </button>

          <ul className="nav_menu_list">
            <li className="nav_menu_item">
              <Link to="/account" className="nav_menu_link">
                account
              </Link>
            </li>
            <li className="nav_menu_item">
              <Link to="/about" className="nav_menu_link">
                about
              </Link>
            </li>
            <li className="nav_menu_item">
              <Link to="/service" className="nav_menu_link">
                service
              </Link>
            </li>
            <li className="nav_menu_item">
              <Link to="/contact" className="nav_menu_link">
                contact
              </Link>
            </li>
          </ul>
        </div>

        <button className="toggle_btn" id="toggle_btn">
          <i className="ri-menu-line"></i>
        </button>
      </nav>
    </header>
  );
};

// LoginForm component
const LoginForm = () => {
  return (
    <div>
      <h2>Login</h2>
      {/* Add your login form UI code here */}
    </div>
  );
};

// App component
const App = () => {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/account" element={<LoginForm />} />
      </Routes>
      <section className="wrapper">
        <div className="container">
          <div className="grid-cols-2">
            <div className="grid-item-1">
              <h1 className="main-heading">
                Welcome to <span>Train Ticket System.</span>
                <br />
                Ride Safe.
              </h1>
              <p className="info-text">
                Unlock Your Adventures. Get On Board with Effortless Train Ticketing
              </p>

              <div className="btn_wrapper">
                <Link to="/login" className="btn view_more_btn">
                  Book a ticket <i className="ri-arrow-right-line"></i>
                </Link>

                <button className="btn documentation_btn">See available Trip</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Router>
  );
};

export default App;
