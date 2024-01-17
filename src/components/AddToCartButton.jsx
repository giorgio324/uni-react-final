const AddToCartButton = ({ children, ...props }) => {
  return (
    <button
      className="text-gray-500 hover:text-gray-900 hover:bg-slate-200 transform transition-all py-3 duration-300 text-xs h-full w-full border"
      {...props}
    >
      {children}
    </button>
  );
};
export default AddToCartButton;
