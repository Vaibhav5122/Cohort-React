import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Register from "./components/Register.tsx";
import Login from "./components/Login.tsx";
import Profile from "./components/Profile.tsx";
import Home from "./components/Home.tsx";
import Logout from "./components/Logout.tsx";

function App() {
  return (
    <Router>
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="text-sm font-semibold tracking-[0.2em] text-black"
          >
            AUTH DEMO
          </Link>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link
              className="rounded-full px-3 py-2 hover:bg-gray-100 hover:text-black"
              to="/"
            >
              Home
            </Link>
            <Link
              className="rounded-full px-3 py-2 hover:bg-gray-100 hover:text-black"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="rounded-full px-3 py-2 hover:bg-gray-100 hover:text-black"
              to="/register"
            >
              Register
            </Link>
            <Link
              className="rounded-full px-3 py-2 hover:bg-gray-100 hover:text-black"
              to="/profile"
            >
              Profile
            </Link>
            <Logout />
          </div>
        </div>
      </nav>

      <div className="mx-auto flex min-h-[calc(100vh-73px)] max-w-6xl items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
