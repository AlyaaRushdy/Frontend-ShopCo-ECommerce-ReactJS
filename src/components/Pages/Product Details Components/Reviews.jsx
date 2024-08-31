/* eslint-disable react/prop-types */
function Reviews({ reviews }) {
  return (
    <>
      <h3 className="my-3 fw-bold">
        All Reviews{" "}
        <small className="text-secondary fs-6">({reviews.length})</small>
      </h3>
      <div className="row row-cols-1 row-cols-md-2">
        {reviews.map((review, index) => (
          <div className="p-2" key={index}>
            <div className="card">
              <div className="card-body">
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  <i className="fa-solid fa-star text-warning me-1"></i>
                  {review.rating}{" "}
                  <span className="text-body-tertiary"> / 5</span>
                </h6>
                <h5 className="card-title fw-bold">{review.reviewerName}</h5>

                <p className="card-text my-3">&quot;{review.comment}&quot;</p>
                <h6 className="card-subtitle mb-2 pt-3 text-body-secondary">
                  Posted on {new Date(review.date).toDateString().slice(3)}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Reviews;
