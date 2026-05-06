import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full max-w-xl rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
        Welcome
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-black sm:text-4xl">
        Auth Demo App
      </h1>
      <p className="mt-4 text-sm leading-6 text-gray-600">
        A simple starter app for login, registration, and profile views.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          to="/login"
          className="inline-flex flex-1 items-center justify-center rounded-full bg-black px-4 py-3 text-sm font-medium text-white hover:bg-gray-800"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="inline-flex flex-1 items-center justify-center rounded-full border border-black px-4 py-3 text-sm font-medium text-black hover:bg-black hover:text-white"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;
