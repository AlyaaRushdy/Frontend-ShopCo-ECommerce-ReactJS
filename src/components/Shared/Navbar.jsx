/* eslint-disable react/prop-types */
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar(props) {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery) {
      navigate("/search", { state: searchQuery });
      setSearchQuery("");
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container py-2 d-flex justify-content-start  align-items-center gap-3">
          <button
            className="navbar-toggler border-0 me-0 px-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target=".navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <NavLink className="navbar-brand p-0 m-0" to={"/"}>
            <img
              src="../src/assets/logo.png"
              alt="SHOP.CO"
              className="align-top"
            />
          </NavLink>

          <div className="collapse navbar-collapse navbarSupportedContent flex-grow-0">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item fw-bold">
                <NavLink to={"/men"} className="nav-link">
                  Men
                </NavLink>
              </li>
              <li className="nav-item fw-bold">
                <NavLink to={"/women"} className="nav-link">
                  Women
                </NavLink>
              </li>
              <li className="nav-item fw-bold">
                <NavLink to={"/accessories"} className="nav-link">
                  Accessories
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="collapse navbar-collapse navbarSupportedContent justify-content-center ">
            <form
              className="d-flex align-items-center position-relative w-100"
              role="search"
            >
              <input
                className="form-control rounded-5 bg-body-tertiary border-0"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => {
                  setSearchQuery(e.target.value.trim());
                  console.log(searchQuery);
                }}
                value={searchQuery}
              />
              <button
                className="btn position-absolute end-0 me-1 text-body-tertiary"
                type="submit"
                onClick={(e) => {
                  handleSearch(e);
                }}
              >
                <i className="fa-solid fa-magnifying-glass" />
              </button>
            </form>
          </div>

          <div className="ms-auto ms-lg-0 flex-grow-0">
            <NavLink className="position-relative" to={"/cart"}>
              <i className="fa-solid fa-cart-shopping fs-4 link-dark"></i>
              <span className="badge bg-primary position-absolute cart-count-badge">
                {props.itemsCount}
              </span>
            </NavLink>
            <NavLink className="ms-4" to={"/login"}>
              <i className="fa-solid fa-user fs-4 link-dark"></i>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
