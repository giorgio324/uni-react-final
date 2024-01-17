import { Link } from "react-router-dom";
const Error = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-10 py-20 min-h-[600px] text-base lg:text-xl px-5 md:px-10">
      <h1 className="text-5xl md:text-8xl font-bold">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-center">
        Page not found. Go back to home page.
      </h2>
      <Link to="/">
        <button className="border p-2 font-bold bg-gray-100">
          Go Back To Home
        </button>
      </Link>
    </section>
  );
};
export default Error;
