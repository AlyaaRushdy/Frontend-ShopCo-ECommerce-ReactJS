import { Link } from "react-router-dom";
import logo from "./../../assets/logo.png";

function Footer() {
  return (
    <>
      <footer>
        <section className="footer-newsletter">
          <div className="container">
            <div className="bg-black text-white px-4 py-5 px-lg-5 rounded-5 ">
              <div className="d-flex flex-wrap justify-content-between align-items-center row-gap-4">
                <div className="col-12 col-lg-6">
                  <p className="h2 m-0">
                    STAY UPTO DATE ABOUT OUR LATEST OFFERS
                  </p>
                </div>
                <div className="col-12 col-lg-4">
                  <form>
                    <div className="input-group mb-3 rounded-5">
                      <span className="input-group-text rounded-start-5 bg-body border-end-0 ps-3">
                        <i className="fa-solid fa-envelope text-body-tertiary"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control rounded-end-5 border-start-0 ps-1"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <button
                      className="form-control btn-light rounded-5 "
                      type="submit"
                    >
                      Subscribe to Newsletter
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-body-tertiary">
          <div className="container">
            <div className="py-5">
              <div className="d-flex flex-row justify-content-between align-items-center flex-wrap gap-3">
                <div>
                  <Link
                    to="/"
                    className="d-flex align-items-center link-body-emphasis"
                  >
                    <img src={logo} alt="SHOP.CO" />
                  </Link>
                </div>

                <div>
                  <ul className="navbar-nav flex-row gap-4 align-items-center">
                    <li className="nav-item fw-bold">
                      <Link to={"/men"} className="nav-link">
                        Men
                      </Link>
                    </li>
                    <li className="nav-item fw-bold">
                      <Link to={"/women"} className="nav-link">
                        Women
                      </Link>
                    </li>
                    <li className="nav-item fw-bold">
                      <Link to={"/accessories"} className="nav-link">
                        Accessories
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <hr className="hr my-4 bg-body-tertiary" />

              <p className="text-body-secondary">
                © 2024 Company, Inc. All rights reserved.
              </p>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
