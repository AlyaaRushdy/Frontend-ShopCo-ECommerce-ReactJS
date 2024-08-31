import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <>
      <div className="col-10 col-md-8 text-center mx-auto my-5">
        <p className="d-flex flex-column flex-nowrap gap-3 pt-5">
          <span>
            <i className="fa-solid fa-cart-shopping fa-10x text- dark"></i>
          </span>
          your cart is empty!
        </p>
        <Link className="btn btn-dark my-5 px-5 py-2 rounded-5" to={"/"}>
          Continue Shopping
        </Link>
      </div>
    </>
  );
}

export default EmptyCart;
