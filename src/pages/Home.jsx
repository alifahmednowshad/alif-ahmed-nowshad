import { Element } from "react-scroll";
import Hero from "../components/Home/Hero";
import About from "./About/About";
import Blog from "./Blog/Blog";
import Project from "./Project/Project";
import Skill from "./Skill/Skill";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <Element name="about" className="element">
        <About />
      </Element>
      <Element name="skill" className="element">
        <Skill />
      </Element>
      <Element name="project" className="element">
        <Project />
      </Element>
      <Element name="blog" className="element">
        <Blog />
      </Element>
      <Element name="contact" className="element">
        <Contact />
      </Element>
    </div>
  );
};

export default Home;
