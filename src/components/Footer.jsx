

import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark py-3 pb-8 mt-8 mb-0">
      <div className="container ">
        <div className="row align-items-center d-flex justify-content-between ">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 text-secondary small">
              &copy; {new Date().getFullYear()}  <span className="my">my</span> iAPP. All rights reserved.
            </p>
          </div>
          <div className="col-lg-4">
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
      </div>
    </footer>
  );
};

export default Footer;


