import { useState } from "react";
import logo from "../assets/logo.svg";
import { navlinks } from "../constants";
import { Link, NavLink, useLocation } from "react-router-dom";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
export const NavItems = () => {
  const [activeLink, setActiveLink] = useState("");
  const handleActiveLink = (id) => {
    setActiveLink(id);
  };
const location = useLocation()
  return (
    <>
      <ul className="sm:flex gap-6 items-center justify-center text-lg  ">
        {navlinks.map(({ url, id, title, icon }) => {
          // Check if the current URL matches the link's URL
          const isActive = location.pathname === url;
          return(

          <li
            key={id}
            className="px-10 py-4 text-gray-200 transition-colors"
            onClick={() => handleActiveLink(id)}
          >
            <NavLink
              to={url}
              className={`${activeLink === id ? "flex items-center justify-center" : ""}`}
            >
              {isActive  ? (
                <img src={icon} alt={title} />
              ) : (
                <span>{title}</span>
              )}
            
            </NavLink>
          </li>
          )
        }
          
        )}
      </ul>
    </>
  );
};
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpenMenu = () => {
    setOpen(!open);
  };
  return (
    <>
      <header className="relative z-50 ">
        <div className="mx-auto flex items-center justify-around  ">
          <Link
            to="/"
            className="logo  mx-auto flex items-center justify-center"
            onClick={()=>{window.scrollTo(0,0)}}
          >
            <img
              src={logo}
              alt="logo"
              className="w-10 h-10  rounded-full"
            />
            &nbsp;
            <span className="flex items-center justify-center font-extrabold head-text">
              Rafia
            </span>
          </Link>

          <nav>
            <div className="sm:flex hidden space-x-6 z-100  ">
              <NavItems />
            </div>
          </nav>
          <div
            className={"sm:hidden flex items-center justify-center rounded-2xl"}
            onClick={handleOpenMenu}
          >
            <img src={open ? close : menu} alt="menuicon" />
          </div>
        </div>
        <div
          className={`sm:hidden flex items-start justify-center absolute top-15 right-0 min-w-2/6  transition-colors translate-x-0 ${
            open ? "h-screen" : "hidden"
          } bg-gradient-to-b to-slate-950  from-10% z-100`}
        >
          <ul className="flex flex-col gap-4  text-sm text-gray-700 ">
            <NavItems />
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
