import FiltersDisplay from "../components/FiltersDisplay";
import ProductsDisplay from "../components/ProductsDisplay";
import { FilterProvider } from "../context/FilterContext";
const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-5 md:px-10 py-10 flex items-start">
      <FilterProvider>
        <FiltersDisplay />
        <ProductsDisplay />
      </FilterProvider>
    </div>
  );
};
export default Home;
