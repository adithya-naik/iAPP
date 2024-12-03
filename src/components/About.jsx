import { FaCode, FaConnectdevelop, FaUserFriends, FaShieldAlt } from 'react-icons/fa';

const About = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 mb-3">
          <span className="fs-3 d-flex align-items-center justify-content-center">
            About <span className="my ms-2">my</span> iAPP
          </span>
        </h1>
        <p className="lead text-muted">A Modern Social Media Platform for Meaningful Connections</p>
      </div>

      <div className="row mb-5">
        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h3 className="card-title mb-4">Our Mission</h3>
              <p className="card-text">
                myiAPP aims to create a safe and engaging social media platform where users can connect, 
                share experiences, and build meaningful relationships. We focus on providing a clean, 
                user-friendly interface while maintaining robust privacy and security measures.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h3 className="card-title mb-4">App Flow</h3>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <FaUserFriends className="text-primary me-2" />
                  User registration and profile creation
                </li>
                <li className="mb-3">
                  <FaConnectdevelop className="text-primary me-2" />
                  Connect with friends and join communities
                </li>
                <li className="mb-3">
                  <FaCode className="text-primary me-2" />
                  Share posts, stories, and interact with content
                </li>
                <li className="mb-3">
                  <FaShieldAlt className="text-primary me-2" />
                  Secure messaging and privacy controls
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h4 className="card-title">Privacy First</h4>
              <p className="card-text">
                Your privacy is our top priority. Control who sees your content with 
                granular privacy settings.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h4 className="card-title">Community Driven</h4>
              <p className="card-text">
                Join interest-based communities and connect with like-minded individuals 
                from around the world.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h4 className="card-title">Modern Experience</h4>
              <p className="card-text">
                Enjoy a clean, responsive interface with real-time updates and 
                seamless navigation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <p className="text-muted">
          Join millions of users who trust myiAPP for their social networking needs.
        </p>
        <button className="btn btn-primary px-4">Join Now</button>
      </div>
    </div>
  );
};

export default About;
