import { useState } from 'react';
import { FaCog, FaPalette, FaBell, FaLock, FaUserShield, FaLanguage } from 'react-icons/fa';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState({
    posts: true,
    messages: true,
    mentions: true
  });
  const [language, setLanguage] = useState('en');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // In a real app, you would persist this change and update global theme
  };

  const handleNotificationChange = (type) => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-3">
          <div className="card shadow-sm mb-4">
            <div className="list-group list-group-flush">
              <button className="list-group-item list-group-item-action active">
                <FaCog className="me-2" />
                General Settings
              </button>
              <button className="list-group-item list-group-item-action">
                <FaUserShield className="me-2" />
                Privacy & Security
              </button>
              <button className="list-group-item list-group-item-action">
                <FaBell className="me-2" />
                Notifications
              </button>
              <button className="list-group-item list-group-item-action">
                <FaLanguage className="me-2" />
                Language & Region
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-9">
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-transparent">
              <h5 className="mb-0">
                <FaPalette className="me-2" />
                Appearance
              </h5>
            </div>
            <div className="card-body">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="darkModeSwitch"
                  checked={darkMode}
                  onChange={toggleDarkMode}
                />
                <label className="form-check-label" htmlFor="darkModeSwitch">
                  Dark Mode
                </label>
              </div>
            </div>
          </div>

          <div className="card shadow-sm mb-4">
            <div className="card-header bg-transparent">
              <h5 className="mb-0">
                <FaBell className="me-2" />
                Notification Settings
              </h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="postsNotification"
                    checked={notifications.posts}
                    onChange={() => handleNotificationChange('posts')}
                  />
                  <label className="form-check-label" htmlFor="postsNotification">
                    New Post Notifications
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="messagesNotification"
                    checked={notifications.messages}
                    onChange={() => handleNotificationChange('messages')}
                  />
                  <label className="form-check-label" htmlFor="messagesNotification">
                    Message Notifications
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="mentionsNotification"
                    checked={notifications.mentions}
                    onChange={() => handleNotificationChange('mentions')}
                  />
                  <label className="form-check-label" htmlFor="mentionsNotification">
                    Mention Notifications
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="card-header bg-transparent">
              <h5 className="mb-0">
                <FaLanguage className="me-2" />
                Language Settings
              </h5>
            </div>
            <div className="card-body">
              <select 
                className="form-select"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
                <option value="it">Italiano</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
