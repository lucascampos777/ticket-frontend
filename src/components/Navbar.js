import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="/">
          <b>Ticket & Design System </b>(Lucas Campos)
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/ticket">
                Task 1 (Tickets)
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/design">
                Task 2 (Design)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
