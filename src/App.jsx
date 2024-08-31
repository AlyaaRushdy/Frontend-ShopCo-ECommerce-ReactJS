import { useReducer } from "react";
import { Route, Routes } from "react-router-dom";

// import { productsArray } from "./services/productsArray";
import reducer from "./services/reducerFunction";

import SignUpNav from "./components/Shared/SignUpNav";
import Navbar from "./components/Shared/Navbar";
import Home from "./components/Pages/Home";
import Cart from "./components/Pages/Cart";
import Login from "./components/Pages/Login";
import SignUp from "./components/Pages/SignUp";
import Products from "./components/Shared/Products";

import {
  accessories,
  menProducts,
  womenProducts,
} from "./services/ProductsDummyJSONServices";
import ProductDetails from "./components/Pages/ProductDetails";
import Footer from "./components/Shared/Footer";
import SearchResults from "./components/Pages/SearchResults";

function App() {
  const [products, dispatch] = useReducer(reducer, []);

  return (
    <>
      <SignUpNav />
      <Navbar
        itemsCount={products.reduce((prev, curr) => {
          prev += curr.count;
          return prev;
        }, 0)}
      />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<SearchResults />} path="/search" />
        <Route
          element={<Cart dispatch={dispatch} products={products} />}
          path="/cart"
        />
        <Route element={<Login />} path="/login" />
        <Route element={<SignUp />} path="/signup" />
        <Route
          element={
            <Products products={menProducts}>
              <div className="row">
                <img
                  src="./src/assets/men.png"
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
                  src="./src/assets/women.png"
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
                  src="./src/assets/accessories.png"
                  alt="Women"
                  className="pb-4 col-12 col-lg-8 mx-auto"
                />
              </div>
            </Products>
          }
          path="/accessories"
        />

        <Route
          element={
            <ProductDetails
              dispatch={dispatch}
              cartItemsIds={products.reduce((prev, curr) => {
                prev.push(curr.id);
                return prev;
              }, [])}
            />
          }
          path="/product/:id"
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
