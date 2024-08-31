/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

function CartItem(props) {
  return (
    <>
      <div className="d-flex flex-row flex-nowrap align-items-center gap-2">
        <div className="rounded-3 overflow-hidden">
          <Link to={`/product/${props.productObject.id}`}>
            <img
              src={props.productObject.thumbnail}
              className="w-100 bg-body-secondary cart-img"
              alt="product image"
            />
          </Link>
        </div>
        <div className="d-flex flex-column flex-grow-1 justify-content-between align-self-stretch">
          {/* title and delete button */}
          <div className="d-flex flex-row flex-nowrap justify-content-between align-items-start">
            <Link
              to={`/product/${props.productObject.id}`}
              className="link-dark text-decoration-none"
            >
              <span className="fw-bold">{props.productObject.title}</span>
            </Link>
            <button
              className="btn text-danger p-0 m-0 "
              onClick={props.onDelete}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>

          {props.productObject.brand && (
            <small className="mt-2">
              Brand:
              <span className="text-body-secondary ms-1">
                {props.productObject.brand}
              </span>
            </small>
          )}

          <small className="mb-2">
            Size:
            <span className="text-body-secondary ms-1">
              {props.productObject.size}
            </span>
          </small>

          {/* price and count */}
          <div className="d-flex flex-row justify-content-between align-items-center">
            <span className="fw-bold">${props.productObject.price}</span>
            <div className="bg-secondary-subtle rounded-5 d-flex align-items-center gap-1 ">
              <button
                className={
                  props.productObject.count == 1
                    ? "btn disabled border-0"
                    : "btn border-0"
                }
                onClick={props.onDecrement}
              >
                <i className="fa-solid fa-minus"></i>
              </button>
              <span>{props.productObject.count}</span>
              <button className="btn border-0" onClick={props.onIncrement}>
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      {!props.isLast && <hr className="hr" />}
    </>
  );
}

export default CartItem;
