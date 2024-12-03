import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column sticky-top flex-shrink-0 p-2 text-white bg-dark sidebar sidebar-width"
      style={{ height: "100vh" }} // Ensures full-height sidebar
    >
      <Link
        to="/"
        className="d-flex align-items-center mb-md-0 me-md-auto text-white text-decoration-none"
        aria-label="Go to Home"
      >
        <svg className="bi me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4 d-flex align-items-center justify-content-center">
          <span className="my">my</span> iAPP
        </span>
      </Link>

      <ul className="nav nav-pills mt-4 flex-column mb-auto">
        <li className="nav-item side">
          <Link to="/" className="nav-link text-white" aria-current="page">
            Home
          </Link>
        </li>
        <li className="side">
          <Link to="/create-post" className="nav-link text-white">
            Create Post
          </Link>
        </li>
      </ul>

      <div className="mt-auto d-flex flex-column align-items-center gap-2">
      <button type="button" className="btn btn-outline-light w-100" aria-label="Login">
         Login
        </button>
        <button type="button" className="btn btn-warning w-100" aria-label="Sign-up">
          Sign-Up
        </button>
      </div>

      <hr />

      <div className="dropdown">
        <button
          className="btn btn-dark d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt="User Profile"
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </button >
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow " aria-labelledby="dropdownUser1">
          <li>
            <Link className="dropdown-item " to="/profile">
              Profile
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/settings">
              Settings
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <button className="dropdown-item" onClick={() => alert('Logged out')}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
