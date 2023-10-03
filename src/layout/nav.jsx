import { useContext,  useState } from "react";
import { close, hamburger } from "../assets/icons";
import { logo } from "../assets/images";

import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import Modal from "../components/Model";
import { AuthContext } from "../context/AuthContext";

import { UserDetails } from "../utils";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);
  const [Nav, setNav] = useState(false);
  const { currentUser, dispatch } = useContext(AuthContext);


  const user=UserDetails()

  return (
    <header className="bg-white  padding-x py-2 font-Geologica drop-shadow-lg fixed w-full z-10">
      <nav className="flex items-center  justify-between max-lg:flex-row-reverse">
        <a href="/" className="max-lg:hidden">
          <img src={logo} alt="" width={90} />
        </a>

        <ul className="flex gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-6 items-center ">
          {currentUser ? (
            <div className="relative px-3">
              <div
                className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 hover:cursor-pointer z-20"
                onClick={() => setNav(!Nav)}
              >
                <img src={user.img}  className="absolute object-cover w-12 h-12 text-gray-400 -left-1" alt="" />
            
              </div>

              {Nav && (
                <div className="absolute bg-[#ffff] px-2 py-3 w-52  rounded-md mt-1 shadow-xl right-1">
                  <ul className="text-lg font-bold font-EB">
                    <Link to={"/profile"} onClick={() => setNav(!Nav)}>
                      <li className="m-2 ">Profile</li>
                    </Link>
                    <hr />
                    <Link to={"/booking"} onClick={() => setNav(!Nav)}>
                      <li className="m-2">My Booking</li>
                    </Link>
                    <hr className="mb-3" />
                    <li>
                      <button
                        className="bg-blue-600 px-9 py-2 rounded-lg text-white w-full"
                        onClick={() => dispatch({ type: "LOGOUT" })}
                      >
                        Logout
                      </button>{" "}
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Modal label="Sing In" />
          )}
        </div>

        <a href="/" className="hidden max-lg:block">
          <img src={logo} alt="" width={90} />
        </a>

        {/* Mobile View */}
        <div
          className="hidden max-lg:block hover:cursor-pointer  "
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <img src={close} alt="" width={30} />
          ) : (
            <img src={hamburger} alt="" width={30} />
          )}
        </div>
      </nav>

      {/* Mobile View */}
      {openNav ? (
        <nav className="py-10 hidden  max-lg:block  h-screen ">
          <ul className="flex  gap-5 flex-col items-center ">
            {navLinks.map((item) => (
              <li
                onClick={() => setOpenNav(!openNav)}
                className="hover:text-cyan-800 text-lg"
                key={item.label}
              >
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <></>
      )}
    </header>
  );
};

export default Nav;
