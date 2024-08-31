import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getSearchResaults } from "../../services/ProductsDummyJSONServices";
import Products from "../Shared/Products";

function SearchResults() {
  const [products, setProduct] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getSearchResaults(location.state).then((res) => {
      setProduct(res);
    });
  }, [location.state]);

  return (
    <>
      {products.length === 0 ? (
        <section className="container">
          <h1 className="my-5">No results found for: {location.state}</h1>
        </section>
      ) : (
        <Products products={products}>
          <h1 className="mb-4">Search Results for: {location.state}</h1>
        </Products>
      )}
    </>
  );
}

export default SearchResults;
