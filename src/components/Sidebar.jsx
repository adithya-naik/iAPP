import { Link } from "react-router-dom";
import { FaPlus , FaHome} from "react-icons/fa";

import { FaUser, FaCog } from "react-icons/fa";


const Sidebar = () => {
  return (
    
    <div
      className="d-flex flex-column sticky-top flex-shrink-0   pt-2 p-1 text-white bg-dark sidebar sidebar-width"
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
             <FaHome className="me-2" /> Home
          </Link>
        </li>
        <li className="side">
          <Link to="/create-post" className="nav-link text-white">
             <FaPlus className="me-2" /> Post
          </Link>
        </li>
      </ul>
<div>



      <ul className="nav nav-pills flex-column mb-auto">
          <li className="side">
            <Link to="/profile" className="nav-link text-white">
              <FaUser className="me-2" /> Profile
            </Link>
          </li>
          <li className="side">
            <Link to="/settings" className="nav-link text-white">
              <FaCog className="me-2" /> Settings
            </Link>
          </li>
        </ul>
        


      <div className="mt-auto d-flex flex-column align-items-center gap-2">
      <button type="button" className="btn btn-outline-light w-100 m-2 mb-0" aria-label="Login">
         Login
        </button>
        <button type="button" className="btn btn-warning w-100 m-2 mt-0" aria-label="Sign-up">
          Sign-Up
        </button>
      </div>
      </div>
      {/* <hr /> */}

      <div className="dropdown">
        {/* <button
          className="btn btn-dark d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        > */}
          {/* <img
            src="https://github.com/mdo.png"
            alt="User Profile"
            width="32"
            height="32"
            className="rounded-circle me-2"
          /> */}
          {/* <strong>mdo</strong> */}
        {/* </button > */}

        
      </div>
    </div>
  );
};

export default Sidebar;

