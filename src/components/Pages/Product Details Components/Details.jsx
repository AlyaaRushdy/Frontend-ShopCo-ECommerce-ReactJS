/* eslint-disable react/prop-types */
function Details({ product }) {
  return (
    <>
      <div>
        <p>
          <span className="fw-bold"> Weight:</span>
          <span className="text-body-secondary ms-1">{product.weight}</span>
        </p>
        <p>
          <span className="fw-bold"> Width x Height x Depth:</span>
          <span className="text-body-secondary ms-1">
            {Object.values(product.dimensions).join(" x ")}
          </span>
        </p>
        <p>
          <span className="fw-bold"> Warranty Information :</span>
          <span className="text-body-secondary ms-1">
            {product.warrantyInformation}
          </span>
        </p>
        <p>
          <span className="fw-bold"> Shipping Information :</span>
          <span className="text-body-secondary ms-1">
            {product.shippingInformation}
          </span>
        </p>
        <p>
          <span className="fw-bold"> Return Policy:</span>
          <span className="text-body-secondary ms-1">
            {product.returnPolicy}
          </span>
        </p>
      </div>
    </>
  );
}

export default Details;
