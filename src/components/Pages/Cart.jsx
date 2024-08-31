/* eslint-disable react/prop-types */
import EmptyCart from "./Cart Components/EmptyCart";
import CartItem from "./Cart Components/CartItem";

function Cart({ products, dispatch }) {
  const total = products.reduce((total, curr) => {
    total += curr.price * curr.count;
    return Number(total.toFixed(2));
  }, 0);

  const handleApplyButton = (e) => {
    e.preventDefault();
  };
  console.log(products);
  return (
    <>
      {!products.length && <EmptyCart />}
      <div className="container">
        {products.length !== 0 && (
          <>
            <h1 className="my-3">YOUR CART</h1>
            <section className="d-flex flex-column flex-lg-row row-gap-3 mb-5">
              <div className="col col-lg-7 pe-lg-4">
                <div className="border border-secondary-subtle rounded-3 px-2 py-3">
                  {products.map((product, index) => (
                    <CartItem
                      key={product.id}
                      productObject={product}
                      onDelete={() => {
                        dispatch({ type: "DELETE", product });
                      }}
                      onIncrement={() => {
                        dispatch({ type: "INCREMENT", product });
                      }}
                      onDecrement={() => {
                        dispatch({ type: "DECREMENT", product });
                      }}
                      isLast={index + 1 === products.length}
                    />
                  ))}
                </div>
              </div>
              <div className="col col-lg-5">
                <div className="border border-secondary-subtle rounded-3 p-3 pb-4">
                  <h2 className="normal-font h3 mb-3">Order Summary</h2>
                  <p className="d-flex justify-content-between">
                    <span className="text-secondary">Subtotal</span>
                    <span className="fw-bold">${total}</span>
                  </p>
                  <p className="d-flex justify-content-between">
                    <span className="text-secondary">Add. Discount</span>
                    <span className="fw-bold text-danger">0</span>
                  </p>
                  <p className="d-flex justify-content-between">
                    <span className="text-secondary">Delivery Fees</span>
                    <span className="fw-bold">Free</span>
                  </p>
                  <hr className="hr" />
                  <p className="d-flex justify-content-between">
                    <span>Total</span>
                    <span className="fw-bold">${total}</span>
                  </p>
                  <form className="d-flex flex-row mb-3">
                    <div className="input-group rounded-5 pe-3">
                      <span className="input-group-text rounded-start-5 border-end-0 ps-3 bg-body-secondary">
                        <i className="fa-solid fa-tag text-body-tertiary"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control rounded-end-5 border-start-0 ps-1 bg-body-secondary"
                        placeholder="Add promo code"
                      />
                    </div>
                    <button
                      className="btn btn-dark px-4 py-2 rounded-5"
                      onClick={(e) => {
                        handleApplyButton(e);
                      }}
                    >
                      Apply
                    </button>
                  </form>
                  <button className="btn btn-dark px-5 py-2 rounded-5 w-100">
                    Go to Checkout
                    <i className="fa-solid fa-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;
