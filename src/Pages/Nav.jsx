import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
        </div>
        <a className="btn btn-ghost text-2xl font-extrabold">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border border-[#23BE0A]"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/listedbooks"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border border-[#23BE0A]"
                  : ""
              }
            >
              Listed Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pagetoread"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border border-[#23BE0A]"
                  : ""
              }
            >
              Pages To Read
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <a className="btn bg-[#23BE0A] text-white px-6 font-bold">Sign in</a>
        <a className="btn bg-[#59C6D2] text-white px-6 font-bold">Sign up</a>
      </div>
    </div>
  );
};

export default Nav;
