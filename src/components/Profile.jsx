import { useState } from "react";
import { FaUserCircle, FaEnvelope, FaPhone, FaMapMarkerAlt, FaUsers, FaComments, FaCalendarAlt } from "react-icons/fa";

const Profile = () => {
  const [showAllChats, setShowAllChats] = useState(false);

  const [userData] = useState({
    name: "John Doe",
    userId: "JD123",
    username: "@johndoe",
    email: "john.doe@example.com", 
    mobile: "+1 234-567-8900",
    address: "123 Main St, New York, NY 10001",
    followers: 1234,
    following: 567,
    bio: "Software Developer | Tech Enthusiast | Coffee Lover",
    accountCreated: "2022-03-15T08:30:00",
    lastLogin: "2024-01-20T09:15:30", // Current session login time
    activeTime: "4h 23m", // Time since last login
    onlineStatus: "Active",
    recentChats: [
      { 
        id: 1, 
        name: "Jane Smith", 
        message: "Hey, how are you?", 
        time: "2 mins ago",
        avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Jane"
      },
      { 
        id: 2, 
        name: "Mike Johnson", 
        message: "Did you see the new post?", 
        time: "1 hour ago",
        avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Mike"
      },
      { 
        id: 3, 
        name: "Sarah Wilson", 
        message: "Let's catch up soon!", 
        time: "3 hours ago",
        avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Sarah"
      }
    ],
    allChats: [
      { 
        id: 4, 
        name: "Alex Thompson", 
        message: "Great meeting yesterday!", 
        time: "1 day ago",
        avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Alex"
      },
      { 
        id: 5, 
        name: "Emily Davis", 
        message: "Thanks for the help!", 
        time: "2 days ago",
        avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Emily"
      },
      { 
        id: 6, 
        name: "Chris Anderson", 
        message: "Looking forward to the project", 
        time: "3 days ago",
        avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Chris"
      },
      { 
        id: 7, 
        name: "Lisa Brown", 
        message: "Can we schedule a call?", 
        time: "4 days ago",
        avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Lisa"
      },
      { 
        id: 8, 
        name: "Tom Wilson", 
        message: "Check out this new feature", 
        time: "5 days ago",
        avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Tom"
      }
    ]
  });

  const displayedChats = showAllChats 
    ? [...userData.recentChats, ...userData.allChats]
    : userData.recentChats;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-body text-center">
              <div className="position-relative mb-4">
                <img
                  src="https://github.com/mdo.png"
                  alt="User Profile"
                  className="rounded-circle img-fluid"
                  style={{ width: "180px", height: "180px", objectFit: "cover" }}
                />
                <div className="position-absolute bottom-0 end-0 bg-success text-white px-2 py-1 rounded-pill border border-light">
                  <small>{userData.onlineStatus} • {userData.activeTime}</small>
                </div>
              </div>
              <h4 className="mb-2">{userData.name}</h4>
              <p className="text-muted mb-2">{userData.username}</p>
              <p className="text-muted mb-4">{userData.bio}</p>
              <div className="d-flex justify-content-center gap-2 mb-4">
                <button type="button" className="btn btn-primary px-4">
                  <FaUsers className="me-2" />
                  Follow
                </button>
                <button type="button" className="btn btn-outline-primary px-4">
                  <FaComments className="me-2" />
                  Message
                </button>
              </div>
              <div className="d-flex justify-content-center text-center mt-4">
                <div className="px-4 border-end">
                  <h5>{userData.followers}</h5>
                  <p className="text-muted mb-0">Followers</p>
                </div>
                <div className="px-4">
                  <h5>{userData.following}</h5>
                  <p className="text-muted mb-0">Following</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="card mb-4 shadow-sm">
            <div className="card-header bg-transparent">
              <h5 className="mb-0">Profile Information</h5>
            </div>
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-sm-3 d-flex align-items-center">
                  <FaUserCircle className="me-2 text-primary" />
                  <p className="mb-0">User ID</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{userData.userId}</p>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-3 d-flex align-items-center">
                  <FaCalendarAlt className="me-2 text-primary" />
                  <p className="mb-0">Member Since</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{formatDate(userData.accountCreated)}</p>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-3 d-flex align-items-center">
                  <FaCalendarAlt className="me-2 text-primary" />
                  <p className="mb-0">Last Login</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{formatDate(userData.lastLogin)}</p>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-3 d-flex align-items-center">
                  <FaEnvelope className="me-2 text-primary" />
                  <p className="mb-0">Email</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{userData.email}</p>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-3 d-flex align-items-center">
                  <FaPhone className="me-2 text-primary" />
                  <p className="mb-0">Mobile</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{userData.mobile}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3 d-flex align-items-center">
                  <FaMapMarkerAlt className="me-2 text-primary" />
                  <p className="mb-0">Address</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{userData.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="card-header bg-transparent d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Recent Chats</h5>
              <button 
                className="btn btn-sm btn-outline-primary"
                onClick={() => setShowAllChats(!showAllChats)}
              >
                {showAllChats ? 'Show Less' : 'View All'}
              </button>
            </div>
            <div className="card-body p-0">
              {displayedChats.map(chat => (
                <div key={chat.id} className="d-flex align-items-center p-3 border-bottom">
                  <img
                    src={chat.avatar}
                    alt={chat.name}
                    className="rounded-circle me-3"
                    style={{ width: "45px", height: "45px" }}
                  />
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="mb-0">{chat.name}</h6>
                      <small className="text-muted">{chat.time}</small>
                    </div>
                    <p className="text-muted mb-0 small">{chat.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;



