import {  FaUsers , FaRocket, FaHeart, FaShareAlt, FaBell } from 'react-icons/fa';
import { BsFire } from "react-icons/bs";


const Features = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 mb-3"><span className="fs-3 d-flex align-items-center justify-content-center">
          <span className="my">my</span> iAPP Features
        </span></h1>
        <p className="lead text-muted">Your go-to platform for meaningful connections</p>
        <div className="badge bg-primary px-3 py-2">Version 2.0.0</div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card h-100 shadow-sm hover-effect">
            <div className="card-body text-center">
              <FaUsers className="text-primary mb-3" size={40} />
              <h4 className="card-title">Smart Networking</h4>
              <p className="card-text">AI-powered friend suggestions and community building features to expand your network organically.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm hover-effect">
            <div className="card-body text-center">
              <FaShareAlt className="text-primary mb-3" size={40} />
              <h4 className="card-title">Enhanced Sharing</h4>
              <p className="card-text">Share stories, moments, and achievements with customizable privacy settings for each post.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm hover-effect">
            <div className="card-body text-center">
              
            <BsFire  className="text-primary mb-3" size={40} />
              <h4 className="card-title">Trending Topics</h4>
              <p className="card-text">Stay updated with personalized trending topics and hashtags in your network.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="card shadow-sm mb-5 bg-light">
            <div className="card-body">
              <h3 className="card-title mb-4">What's New - Platform</h3>
              <div className="timeline">
                <div className="mb-4 p-3 bg-white rounded">
                  <h5><FaRocket className="text-primary me-2" />Version 2.0.0 - Major Update</h5>
                  <p className="text-muted mb-2">Released on September 1, 2023</p>
                  <ul className="list-unstyled ps-4">
                    <li>• Introduced AI-powered feed customization</li>
                    <li>• Added story highlights feature</li>
                    <li>• Launched group video calls</li>
                    <li>• Enhanced privacy controls</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm mb-5 bg-light">
            <div className="card-body">
              <h3 className="card-title mb-4">What's New - Features</h3>
              <div className="timeline">
                <div className="mb-4 p-3 bg-white rounded">
                  <h5><FaBell className="text-primary me-2" />Version 1.5.0 - Feature Update</h5>
                  <p className="text-muted mb-2">Released on August 15, 2023</p>
                  <ul className="list-unstyled ps-4">
                    <li>• Added dark mode support</li>
                    <li>• Improved notification system</li>
                    <li>• Enhanced mobile experience</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow-sm bg-gradient">
        <div className="card-body text-center">
          <h3 className="card-title mb-4 text-dark">Meet the Creator</h3>
          <img 
            src="https://api.dicebear.com/6.x/avataaars/svg?seed=Adithya" 
            alt="Developer Avatar"
            className="rounded-circle mb-3 border border-4 border-white"
            style={{ width: "120px", height: "120px" }}
          />
          <h4 className="text-dark">ADITHYA</h4>
          <p className="text-dark"> Passionate Full Stack Developer</p>
          <div className="mb-4">
            <span className="badge bg-primary me-2">HTML | CSS | JS</span>
            <span className="badge bg-secondary me-2">Bootstrap | Tailwind</span>
            <span className="badge bg-success">ReactJS</span>
          </div>
          <div className="d-flex justify-content-center gap-3 align-items-center">
            <FaHeart className="text-danger" size={24} />
            <span className="text-dark">Crafted with passion in Hyderabad, India</span>
          </div>
        </div>
      </div>

      
      <style jsx>{`
        .hover-effect:hover {
          transform: translateY(-5px);
          transition: transform 0.3s ease;
        }
        .bg-gradient {
          background: linear-gradient(to right, #6366f1, #8b5cf6);
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Features;
