import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="p-2 bg-dark sticky-top text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
         

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/features" className="nav-link px-2 text-white">
                Features
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link px-2 text-white">
                About
              </Link>
            </li>
          </ul>

          
        </div>
      </div>
    </header>
  );
};

export default Header;
