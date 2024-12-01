import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const {User, signOutUser} = useContext(AuthContext)
    const navLinks = (
        <>
        <NavLink
      to="/"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-green-600" : ""
      }
    >
      Home
    </NavLink>
    
        <NavLink
      to="/about-us"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-green-600" : ""
      }
    >
      About Us
    </NavLink>
        </>
      )
// console.log(User);
    return (
        <div>
            <div className="navbar bg-base-100">
          {/* mobile  */}
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl text-green-600 font-semibold">Shining Car</a>
          </div>
          {/* larg device  */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-5">
              {navLinks}
            </ul>
          </div>
          <div className="navbar-end">
            {
              User ? <Link onClick={signOutUser}  className="btn">Log Out</Link>  : <>
              <Link to={'/login'} className="btn">Login</Link> <Link to={'/register'} className="btn">Register</Link>
            
              </>
}
            
            
          </div>
        </div>
        </div>
    );
};

export default Navbar;