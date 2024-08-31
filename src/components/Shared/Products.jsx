/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products({ products, children }) {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   setProducts(props.products);
  // }, [props.products]);

  return (
    <>
      {products.length != 0 && (
        <section className="container my-5">
          {children}
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-gap-3">
            {products.map((product) => (
              <div className="col" key={product.id}>
                <div className="d-flex flex-column gap-2">
                  <Link
                    to={`/product/${product.id}`}
                    className="bg-body-secondary rounded-4 overflow-hidden"
                  >
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-100"
                      loading="lazy"
                    />
                  </Link>
                  <Link
                    to={`/product/${product.id}`}
                    className="fw-bold link-dark text-decoration-none mt-2"
                  >
                    {product.title}
                  </Link>
                  <p className="m-0">
                    <i className="fa-solid fa-star text-warning me-1"></i>
                    {product.rating} <span className="text-secondary">/ 5</span>
                  </p>
                  {product.discountPercentage ? (
                    <>
                      <div className="d-flex align-items-center">
                        <span className="m-0 fw-bold ">
                          $
                          {(
                            product.price -
                            (product.discountPercentage * product.price) / 100
                          ).toFixed(2)}
                        </span>
                        <span className="m-0 fw-bold text-secondary text-decoration-line-through mx-2">
                          ${product.price}
                        </span>
                        <span className="badge bg-danger-subtle text-danger rounded-5">
                          -{product.discountPercentage}%
                        </span>
                      </div>
                    </>
                  ) : (
                    <p className="m-0 fw-medium">${product.price}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default Products;
