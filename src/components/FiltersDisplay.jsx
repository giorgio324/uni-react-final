import { useFilterContext } from "../context/FilterContext";

const FiltersDisplay = () => {
  const { searchValue, setSearchValue, categoriesLoading, categories } =
    useFilterContext();
  if (categoriesLoading) {
    return (
      <div className="w-[230px] border p-4 flex flex-col gap-4">
        <h1 className="font-bold text-xl">Loading...</h1>
      </div>
    );
  }
  return (
    <div className="w-[230px] border p-4 flex flex-col gap-4">
      <label className="flex flex-col gap-2 text-xl font-semibold">
        Search
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="border rounded-md px-2 py-[2px]"
        />
      </label>
      <div className="flex flex-col">
        {categories?.categoryList.map((categorie, index) => {
          return (
            <label key={index}>
              <input type="checkbox" name="" value={categorie} />
              {categorie}
            </label>
          );
        })}
      </div>
    </div>
  );
};
export default FiltersDisplay;
