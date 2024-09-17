import { allProducts } from "../../services/ProductsDummyJSONServices";
import Banner from "./Home Components/Banner";
import Products from "../Shared/Products";

function Home() {
  return (
    <>
      <Banner />
      <Products products={allProducts}>
        <h2 className="py-4 text-center" id="newArrivals">
          NEW ARRIVALS
        </h2>
      </Products>
    </>
  );
}

export default Home;
