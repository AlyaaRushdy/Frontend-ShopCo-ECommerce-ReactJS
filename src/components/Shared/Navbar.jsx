import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import logo from "./../../assets/logo.png";
import { signOut } from "../../services/firebase.auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../features/userSlice";

function Navbar() {
  const { cart, user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const isAuth = Object.keys(user).length ? true : false;
  const navigate = useNavigate();

  const itemsCount = cart.reduce((prev, curr) => {
    prev += curr.count;
    return prev;
  }, 0);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery) {
      navigate("/search", { state: searchQuery });
      setSearchQuery("");
    }
  };

  const handleSignout = (e) => {
    e.preventDefault();
    signOut().then(dispatch(addUser({})));
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container py-2 d-flex justify-content-start  align-items-center gap-2 gap-sm-3">
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
            <img src={logo} alt="SHOP.CO" className="align-top" />
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
                {itemsCount}
              </span>
            </NavLink>
            <NavLink className="ms-3 ms-sm-4 btn-group" to={"/login"}>
              <i className="fa-solid fa-user fs-4 link-dark"></i>
              {isAuth && (
                <>
                  <button
                    type="button"
                    className="btn btn-sm dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></button>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-md-start">
                    {user.displayName && (
                      <li>
                        <span className="dropdown-item-text disabled">
                          Hi, {user.displayName}
                        </span>
                      </li>
                    )}
                    <li>
                      <button
                        className="dropdown-item text-danger"
                        onClick={handleSignout}
                      >
                        log out
                      </button>
                    </li>
                  </ul>
                </>
              )}
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
