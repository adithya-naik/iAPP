const Sidebar = ({selectedTab,setSelectedTab}) => {

  const handleClick = (tabName)=>{
      setSelectedTab(tabName);
  }
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar"
      style={{ width: "25dvw" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">iAPP</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" onClick={()=>{handleClick("Home")}}>
          <a href="#" className={`nav-link text-white ${selectedTab==="Home" && "active"}`} aria-current="page">
            Home
          </a>
        </li>

        <li onClick={()=>{handleClick("Create Post")}}>
          <a href="#" className={`nav-link text-white ${selectedTab==="Create Post" && "active"}`}>
            Create Post
          </a>
        </li>
       
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
        <ul
          className="dropdown-menu dropdown-menu-dark text-small shadow"
          aria-labelledby="dropdownUser1"
        >
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
