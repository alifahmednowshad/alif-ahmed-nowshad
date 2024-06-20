import { Menu } from "@headlessui/react";
import {Link} from "react-scroll";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">
          <Link to="/">Alif Ahmed</Link>
        </div>
        <div className="hidden md:flex space-x-10 text-lg">
          <a href="/" className="text-gray-300 hover:text-white">
            Home
          </a>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="text-gray-300 hover:text-white"
          >
            About
          </Link>
          <Link
            to="skill"
            spy={true}
            smooth={true}
            duration={500}
            className="text-gray-300 hover:text-white"
          >
            Skill
          </Link>
          <Link
            to="project"
            spy={true}
            smooth={true}
            duration={500}
            className="text-gray-300 hover:text-white"
          >
            Project
          </Link>
          <Link
            to="blog"
            spy={true}
            smooth={true}
            duration={500}
            className="text-gray-300 hover:text-white"
          >
            Blog
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="text-gray-300 hover:text-white"
          >
            Contact
          </Link>
        </div>
        <div className="hidden md:block">
          <button className="my-btn-primary">Hire Me</button>
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
                    to="about"
                    className={`block px-4 py-2 ${active ? "bg-gray-100" : ""}`}
                  >
                    About
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="skill"
                    className={`block px-4 py-2 ${active ? "bg-gray-100" : ""}`}
                  >
                    Skill
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="contact"
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
