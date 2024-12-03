

// const Footer = ()=>{

//   return(
//   <div className="container text-white">
//   <footer className="py-3 my-4 ">
//     <ul className="nav justify-content-center border-bottom pb-3 mb-3">
//       <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
//       <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
//       <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
//       <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
//       <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
//     </ul>
//     <p className="text-center text-body-secondary">© 2024 Company, Inc</p>
//   </footer>
// </div>
// );
// }


// export default Footer;




import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark py-3 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-3 mb-lg-0">
            <h6 className="mb-2 text-secondary">
              <span className="fs-5 d-flex align-items-center">
                <span className="my">my</span> iAPP
              </span>
            </h6>
            <p className="text-secondary small mb-0">
              A modern social media platform focused on meaningful connections.
            </p>
          </div>
          <div className="col-lg-4 mb-3 mb-lg-0">
            <h6 className="mb-2 text-secondary">Quick Links</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-1">
                <Link to="/" className="text-secondary text-decoration-none small">Home</Link>
              </li>
              <li className="mb-1">
                <Link to="/features" className="text-secondary text-decoration-none small">Features</Link>
              </li>
              <li className="mb-1">
                <Link to="/about" className="text-secondary text-decoration-none small">About</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h6 className="mb-2 text-secondary">Connect With Us</h6>
            <div className="d-flex gap-3">
              <a href="#" className="text-secondary" aria-label="Facebook">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-secondary" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-secondary" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-secondary" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-secondary" aria-label="GitHub">
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-3 text-secondary" />
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 text-secondary small">
              &copy; {new Date().getFullYear()} myiAPP. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a href="#" className="text-secondary text-decoration-none small">Privacy</a>
              </li>
              <li className="list-inline-item mx-3">
                <a href="#" className="text-secondary text-decoration-none small">Terms</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


