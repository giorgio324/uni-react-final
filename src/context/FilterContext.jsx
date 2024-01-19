import { createContext, useContext, useState } from "react";
import useFetch from "../hooks/useFetch";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const { data: products, isLoading: productsLoading } = useFetch("/products");
  const { data: categories, isLoading: categoriesLoading } =
    useFetch("/categories");
  const [searchValue, setSearchValue] = useState("");
  const filteredProducts = products?.filter((product) => {
    if (!searchValue) return true;
    if (product.title.toLowerCase().includes(searchValue.toLowerCase())) {
      return true;
    }
  });
  return (
    <FilterContext.Provider
      value={{
        products,
        categories,
        categoriesLoading,
        searchValue,
        setSearchValue,
        productsLoading,
        filteredProducts,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
