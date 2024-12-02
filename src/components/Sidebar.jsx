import { Link } from "react-router-dom";

const Sidebar = () => {

  return (
    <div
      className="d-flex flex-column sticky-top flex-shrink-0 p-2 text-white bg-dark sidebar"
      style={{ width: "150px" }}
    >
      <Link
        to="/"
        className="d-flex align-items-center  mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4 d-flex  align-items-center justify-content-cente"><span className="my">my</span> iAPP</span>
      </Link>
      <ul className="nav nav-pills mt-4 flex-column mb-auto  ">
        <li className="nav-item side" >
          <Link to="/" className={"nav-link text-white "} aria-current="page">
            Home
          </Link>
        </li>

        <li className="side">
          <Link to="/create-post" className={"nav-link text-white"}>
            Create Post
          </Link>
        </li>
       
      </ul>
      <hr />
      <div className="dropdown">
        <Link
          to="/"
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
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
