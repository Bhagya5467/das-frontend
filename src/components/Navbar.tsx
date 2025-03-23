const Navbar = () => (
  <nav className="navbar navbar-expand-lg bg-info navbar-dark">
    <div className="container">
      <a className="navbar-brand text-white" href="/">
        Doctor Appointment
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link text-white" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/doctors">
              Doctors
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/login">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/signup">
              Signup
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
