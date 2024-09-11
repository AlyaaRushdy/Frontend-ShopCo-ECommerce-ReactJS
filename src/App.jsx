// hooks and libs
import { Route, Routes } from "react-router-dom";

// components
import SignUpNav from "./components/Shared/SignUpNav";
import Navbar from "./components/Shared/Navbar";
import Home from "./components/Pages/Home";
import Cart from "./components/Pages/Cart";
import Login from "./components/Pages/Login";
import SignUp from "./components/Pages/SignUp";
import Products from "./components/Shared/Products";
import ProductDetails from "./components/Pages/ProductDetails";
import Footer from "./components/Shared/Footer";
import SearchResults from "./components/Pages/SearchResults";

// images
import menImg from "./assets/men.png";
import womenImg from "./assets/women.png";
import accessoriesImg from "./assets/accessories.png";

// products arrays
import {
  accessories,
  menProducts,
  womenProducts,
} from "./services/ProductsDummyJSONServices";

function App() {
  return (
    <>
      <SignUpNav />
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<SearchResults />} path="/search" />
        <Route element={<Cart />} path="/cart" />
        <Route element={<Login />} path="/login" />
        <Route element={<SignUp />} path="/signup" />
        <Route
          element={
            <Products products={menProducts}>
              <div className="row">
                <img
                  src={menImg}
                  alt="Men"
                  className="pb-4 col-12 col-lg-8 mx-auto"
                />
              </div>
            </Products>
          }
          path="/men"
        />
        <Route
          element={
            <Products products={womenProducts}>
              <div className="row">
                <img
                  src={womenImg}
                  alt="Women"
                  className="pb-4 col-12 col-lg-8 mx-auto"
                />
              </div>
            </Products>
          }
          path="/women"
        />

        <Route
          element={
            <Products products={accessories}>
              <div className="row">
                <img
                  src={accessoriesImg}
                  alt="Women"
                  className="pb-4 col-12 col-lg-8 mx-auto"
                />
              </div>
            </Products>
          }
          path="/accessories"
        />

        <Route element={<ProductDetails />} path="/product/:id" />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
