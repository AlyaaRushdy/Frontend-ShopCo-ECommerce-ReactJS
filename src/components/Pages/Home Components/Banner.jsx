import { Link } from "react-router-dom";

import bannerImg from "../../../assets/banner.png";

function Banner() {
  return (
    <>
      <section className="bg-body-tertiary">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between">
            <div className="col-12 col-lg-6 mt-5">
              <h1 className="banner-h1">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="text-secondary my-4">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <Link
                className="btn btn-dark px-5 py-2 rounded-5 col-12 col-lg-auto"
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#newArrivals").offsetTop,
                    behavior: "smooth",
                  });
                }}
              >
                Shop Now
              </Link>
              <div className="my-4 row row-cols-3 g-0 align-items-center justify-content-center text-center row-gap-3 row-cols-md-5">
                <div className="flex-grow-1">
                  <p className="h3 fw-bold">200+</p>
                  <span className="text-secondary">International Brands</span>
                </div>
                <div className="vr mx-2"></div>
                <div className="flex-grow-1">
                  <p className="h3 fw-bold">2000+</p>
                  <span className="text-secondary">High-Quality Products</span>
                </div>
                <div className="vr mx-2 d-none d-md-block"></div>
                <div className="flex-grow-1">
                  <p className="h3 fw-bold">30,000+</p>
                  <span className="text-secondary">Happy Customers</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 align-content-end">
              <img src={bannerImg} className="w-100" alt="banner" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
