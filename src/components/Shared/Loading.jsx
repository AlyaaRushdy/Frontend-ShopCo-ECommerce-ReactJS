function Loading() {
  return (
    <>
      <div className="modal d-block bg-opacity-50 bg-secondary h-100">
        <div className="modal-dialog modal-dialog-centered justify-content-center">
          <div className="spinner-border " role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loading;
