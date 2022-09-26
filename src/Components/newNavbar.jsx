import React from "react";
import { Link, useNavigate } from "react-router-dom";
function NewNavbar() {
  let navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">My Space</span>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        {/* <div clasNames="collapse navbar-collapse" id="navbarNavAltMarkup">*/}
        <div className="navbar-nav">
          <Link className="nav-item nav-link " exect to="/searchProperty">
            Book
          </Link>
          <Link className="nav-item nav-link " exect to="/addProperty">
            AddProperty
          </Link>
          <Link className="nav-item nav-link " exect to="/myBookings">
            MyBookings
          </Link>
          <Link className="nav-item nav-link " exect to="/myProperty">
            MyProperty
          </Link>
          <button
            style={{ float: "left" }}
            class="btn btn-primary my-2 my-sm-0"
            onClick={() => {
              localStorage.removeItem("jwtToken");
              navigate("/");
            }}
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
}

export default NewNavbar;
