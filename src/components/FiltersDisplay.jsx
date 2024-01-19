import { useFilterContext } from "../context/FilterContext";

const FiltersDisplay = () => {
  const {
    searchValue,
    setSearchValue,
    categoriesLoading,
    categories,
    setSelectedCategories,
  } = useFilterContext();
  const handleCategoryChange = (event) => {
    const category = event.target.value;
    if (event.target.checked) {
      setSelectedCategories((prev) => [...prev, category]);
    } else {
      setSelectedCategories((prev) => prev.filter((c) => c !== category));
    }
  };
  if (categoriesLoading) {
    return (
      <div className="w-[230px] border p-4 flex flex-col gap-4">
        <h1 className="font-bold text-xl">Loading...</h1>
      </div>
    );
  }
  return (
    <div className="w-[230px] border p-4 flex flex-col gap-4">
      <label className="flex flex-col gap-2 text-lg font-semibold">
        Search
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="border rounded-md px-2 py-[2px]"
        />
      </label>
      <div className="flex flex-col">
        <p className="text-lg font-semibold mb-2">Categories</p>
        {categories?.categoryList.map((categorie, index) => {
          return (
            <label key={index} className="flex gap-4 text-base font-semibold">
              <input
                type="checkbox"
                name=""
                value={categorie}
                onChange={handleCategoryChange}
              />
              <p className="capitalize">{categorie}</p>
            </label>
          );
        })}
      </div>
    </div>
  );
};
export default FiltersDisplay;
