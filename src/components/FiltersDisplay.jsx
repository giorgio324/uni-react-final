import { useEffect, useState } from "react";

const FiltersDisplay = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:3000/categories");
        const result = await response.json();
        setCategories(result);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    getCategories();
  }, []);
  if (isLoading) {
    return (
      <div className="w-[230px] border p-4 flex flex-col gap-4">
        <p className="font-bold text-xl">Loading...</p>
      </div>
    );
  }
  return (
    <div className="w-[230px] border p-4 flex flex-col gap-4">
      <label>
        search
        <input type="text" className="border rounded-md pr-2 py-1" />
      </label>
      <div className="flex flex-col">
        {categories.map((categorie, index) => {
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
