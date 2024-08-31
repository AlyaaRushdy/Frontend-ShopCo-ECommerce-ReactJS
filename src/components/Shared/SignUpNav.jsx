import { useState } from "react";
import { Link } from "react-router-dom";

function SignUpNav() {
  const [visible, setVisible] = useState(true);
  return (
    <>
      {visible && (
        <div className="bg-black">
          <div className="container d-flex justify-content-center align-items-center position-relative">
            <small className=" text-white py-2 ">
              Sign up and get 20% off to your first order.
              <Link to={"/signup"} className="link-light fw-bold ps-1">
                Sign Up Now
              </Link>
            </small>
            <button
              className="btn text-white position-absolute end-0"
              onClick={() => {
                setVisible(false);
              }}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default SignUpNav;
