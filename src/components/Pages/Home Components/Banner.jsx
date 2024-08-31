import { Link } from "react-router-dom";

function Banner() {
  return (
    <>
      <section className="bg-body-tertiary">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between">
            <div className="col-12 col-lg-6 my-5">
              <h1 className="banner-h1">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="text-secondary my-4">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <Link className="btn btn-dark px-5 py-2 rounded-5" to="/">
                Shop Now
              </Link>
              <div className="my-4 d-flex flex-wrap flex-md-nowrap justify-content-center justify-content-md-start align-items-center row-gap-2">
                <div>
                  <p className="fs-3 fw-bold m-0">200+</p>
                  <span className="text-secondary">International Brands</span>
                </div>

                <div className="vr mx-2"></div>

                <div>
                  <p className="fs-3 fw-bold m-0">2000+</p>
                  <span className="text-secondary">High-Quality Products</span>
                </div>

                <div className="vr mx-3 d-none d-md-block"></div>

                <div>
                  <p className="fs-3 fw-bold m-0">30,000+</p>
                  <span className="text-secondary">Happy Customers</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <img
                src="./src/assets/banner.png"
                className="w-100"
                alt="banner"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
