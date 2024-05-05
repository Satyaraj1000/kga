import React from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="sticky top-0 z-50 w-full bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <img src="src/assets/react.svg" alt="" width={30} height={30} />
            <span className="font-bold lg:text-3xl">KAPOL GLOBAL ACADEMY</span>
          </div>
          <div className="hidden lg:block">
            <ul className="inline-flex space-x-8">
              <li>
                <NavLink
                  to="/"
                  className="text-lg font-semibold text-gray-800 hover:text-gray-900"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aboutus"
                  className="text-lg font-semibold text-gray-800 hover:text-gray-900"
                >
                  AboutUs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contactus"
                  className="text-lg font-semibold text-gray-800 hover:text-gray-900"
                >
                  ContactUs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/academics"
                  className="text-lg font-semibold text-gray-800 hover:text-gray-900"
                >
                  Academics
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="lg:hidden">
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2">
                      <span>
                        <img src="src/assets/react.svg" alt="" />
                      </span>
                      <span className="font-bold">KAPOL GLOBAL ACADEMY</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      <NavLink
                        to="/"
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          Home
                        </span>
                      </NavLink>
                      <NavLink
                        to="/aboutus"
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          AboutUs
                        </span>
                      </NavLink>
                      <NavLink
                        to="/contactus"
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          ContactUs
                        </span>
                      </NavLink>
                      <NavLink
                        to="/academics"
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          Academics
                        </span>
                      </NavLink>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
