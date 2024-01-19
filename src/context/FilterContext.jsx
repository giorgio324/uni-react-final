import { createContext, useContext, useState } from "react";
import useFetch from "../hooks/useFetch";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const { data: products, isLoading: productsLoading } = useFetch("/products");
  const { data: categories, isLoading: categoriesLoading } =
    useFetch("/categories");

  const [searchValue, setSearchValue] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const filteredProducts = products?.filter((product) => {
    // If search box is filled, check if product title includes search value
    if (searchValue) {
      if (!product.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return false;
      }
    }

    // If checkboxes are selected, check if product category contains the selected categories
    if (selectedCategories.length > 0) {
      if (!selectedCategories.includes(product.category)) {
        return false;
      }
    }

    // If none of the above conditions fail, the product passes the filters
    return true;
  });

  return (
    <FilterContext.Provider
      value={{
        products,
        setSelectedCategories,
        selectedCategories,
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
