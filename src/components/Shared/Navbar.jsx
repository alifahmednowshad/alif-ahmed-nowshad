
import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">
          <Link to="/">Logo</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link to="/services" className="text-gray-300 hover:text-white">
            Services
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
        </div>
        <div className="hidden md:block">
          <Link to="/login" className="text-gray-300 hover:text-white">
            Login
          </Link>
        </div>
        <div className="md:hidden">
          <Menu>
            <Menu.Button className="text-gray-300 hover:text-white">
              Menu
            </Menu.Button>
            <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/"
                    className={`block px-4 py-2 ${active ? "bg-gray-100" : ""}`}
                  >
                    Home
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/about"
                    className={`block px-4 py-2 ${active ? "bg-gray-100" : ""}`}
                  >
                    About
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/services"
                    className={`block px-4 py-2 ${active ? "bg-gray-100" : ""}`}
                  >
                    Services
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/contact"
                    className={`block px-4 py-2 ${active ? "bg-gray-100" : ""}`}
                  >
                    Contact
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/login"
                    className={`block px-4 py-2 ${active ? "bg-gray-100" : ""}`}
                  >
                    Login
                  </Link>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
