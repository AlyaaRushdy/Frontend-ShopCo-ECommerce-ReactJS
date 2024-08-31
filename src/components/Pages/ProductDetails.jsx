/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getProduct,
  getProductsInCategory,
} from "../../services/ProductsDummyJSONServices";
import Loading from "../Shared/Loading";
import Products from "../Shared/Products";
import Reviews from "./Product Details Components/Reviews";
import Details from "./Product Details Components/Details";

function ProductDetails({ dispatch, cartItemsIds }) {
  const [product, setProduct] = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);
  const [selectedImage, setSelectedImg] = useState("");
  const [count, setCount] = useState(1);

  const { id } = useParams("id");

  const priceAfterDiscount =
    product.discountPercentage &&
    (
      product.price -
      (product.discountPercentage * product.price) / 100
    ).toFixed(2);

  // get product
  useEffect(() => {
    getProduct(id).then((res) => {
      setProduct(res);
      setSelectedImg(res.images[0]);
    });
  }, [id]);

  // similar products
  useEffect(() => {
    getProductsInCategory(product.category).then((res) =>
      setSimilarProducts(res.filter((p) => p.id !== product.id))
    );
  }, [product]);

  const handleImgClick = (e) => {
    setSelectedImg(e.target.src);
  };

  return (
    <>
      {Object.keys(product).length === 0 ? (
        <Loading />
      ) : (
        <>
          <section className="container">
            <div className="d-flex flex-column flex-lg-row gap-4 my-4">
              <div className="col-12 col-lg-5 ">
                <div className="d-flex flex-column-reverse flex-lg-row gap-3">
                  <div className="col-lg-3">
                    <div className="d-flex flex-row flex-lg-column gap-2">
                      {product.images.map((i, index) => (
                        <img
                          key={index}
                          src={i}
                          alt={`${product.title} image`}
                          className={
                            i === selectedImage
                              ? "w-100 bg-body-secondary rounded-4 border border-2 border-black "
                              : "w-100 bg-body-secondary rounded-4"
                          }
                          onClick={(e) => {
                            handleImgClick(e);
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="col-lg">
                    <img
                      src={selectedImage}
                      alt={`${product.title} image`}
                      className="w-100 bg-body-secondary rounded-4 border"
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                <h1>{product.title}</h1>
                <p className="fs-5">
                  <i className="fa-solid fa-star text-warning me-1"></i>
                  {product.rating} <span className="text-secondary">/ 5</span>
                </p>
                {product.discountPercentage ? (
                  <>
                    <div className="fs-4 d-flex align-items-center gap-3">
                      <span className="fw-bold ">${priceAfterDiscount}</span>
                      <del className="fw-bold text-secondary">
                        ${product.price}
                      </del>
                      <span className="badge bg-danger-subtle text-danger rounded-5 fw-normal fs-6">
                        -{product.discountPercentage}%
                      </span>
                    </div>
                  </>
                ) : (
                  <p className="fs-4 fw-medium">${product.price}</p>
                )}
                <p className="text-secondary my-3">{product.description}</p>
                <hr className="hr"></hr>
                {product.brand && (
                  <div>
                    <span className="text-secondary">Brand: </span>
                    <span className="fw-bold">{product.brand}</span>
                  </div>
                )}
                <p className="text-secondary my-2">Choose Size: </p>
                <button className="btn btn-dark px-5 py-2 rounded-5">
                  Free
                </button>

                <hr className="hr"></hr>
                <div className="d-flex flex-row gap-2 gap-sm-3">
                  <div className="bg-secondary-subtle rounded-5 d-flex align-items-center gap-1 gap-sm-3">
                    <button
                      className={
                        count == 1 ? "btn disabled border-0" : "btn border-0"
                      }
                      onClick={() => {
                        setCount(count - 1);
                      }}
                    >
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <span>{count}</span>
                    <button
                      className="btn border-0"
                      onClick={() => {
                        setCount(count + 1);
                      }}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>

                  <button
                    className={
                      cartItemsIds.includes(product.id)
                        ? "btn btn-dark px-5 py-2 rounded-5 col disabled"
                        : "btn btn-dark px-5 py-2 rounded-5 col"
                    }
                    onClick={(e) => {
                      dispatch({
                        type: "ADD",
                        product,
                        count,
                        priceAfterDiscount,
                        size: "Free",
                      });
                      e.target.className =
                        "btn btn-dark px-5 py-2 rounded-5 col disabled";
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <nav className="my-5">
              <div
                className="nav nav-tabs justify-content-center align-items-center"
                id="nav-tab"
                role="tablist"
              >
                <button
                  className="nav-link link-secondary col pb-2 border-0 active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  Details
                </button>
                <button
                  className="nav-link link-secondary col pb-2 border-0"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Reviews
                </button>
              </div>
            </nav>
            <div className="tab-content my-3" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-home">
                <Details product={product} />
              </div>
              <div className="tab-pane fade" id="nav-profile">
                <Reviews reviews={product.reviews} />
              </div>
            </div>
          </section>

          <Products products={similarProducts}>
            <h2 className="text-center mb-4">YOU MIGHT ALSO LIKE</h2>
          </Products>
        </>
      )}
    </>
  );
}

export default ProductDetails;
