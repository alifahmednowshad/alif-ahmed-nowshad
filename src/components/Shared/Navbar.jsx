import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">
          <RouterLink to="/">Alif Ahmed</RouterLink>
        </div>
        <div className="hidden md:flex space-x-10 text-lg">
          <RouterLink to="/" className="text-gray-300 hover:text-white">
            Home
          </RouterLink>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-300 hover:text-white"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="skill"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-300 hover:text-white"
          >
            Skill
          </ScrollLink>
          <ScrollLink
            to="project"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-300 hover:text-white"
          >
            Project
          </ScrollLink>
          <ScrollLink
            to="blog"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-300 hover:text-white"
          >
            Blog
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-300 hover:text-white"
          >
            Contact
          </ScrollLink>
        </div>
        <div className="hidden md:block">
          <button className="my-btn-primary">Hire Me</button>
        </div>
        <div className="hidden">
          <Menu as="div" className="relative">
            <MenuButton className="text-gray-300 hover:text-white">
              Menu
            </MenuButton>
            <MenuItems className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ">
              <MenuItem as="div">
                <RouterLink
                  to="/"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Home
                </RouterLink>
              </MenuItem>
              <MenuItem as="div">
                <ScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  About
                </ScrollLink>
              </MenuItem>
              <MenuItem as="div">
                <ScrollLink
                  to="skill"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Skill
                </ScrollLink>
              </MenuItem>
              <MenuItem as="div">
                <ScrollLink
                  to="project"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Project
                </ScrollLink>
              </MenuItem>
              <MenuItem as="div">
                <ScrollLink
                  to="blog"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Blog
                </ScrollLink>
              </MenuItem>
              <MenuItem as="div">
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="block px-4 py-2 text-white hover:bg-gray-100 cursor-pointer"
                >
                  Contact
                </ScrollLink>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
