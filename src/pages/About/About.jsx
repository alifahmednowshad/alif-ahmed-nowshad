
import { AiOutlineDownload } from "react-icons/ai";
import "./About.css"

const About = () => {
  return (
    <div id="about" className="about py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-8 px-4">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://preview.colorlib.com/theme/satner/img/about-us.png"
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="title">
            LET’S INTRODUCE <br /> ABOUT MYSELF
          </h2>
          <p className="my-6 text-white leading-relaxed">
            I am a passionate Frontend Developer with expertise in MERN Stack. I
            specialize in creating dynamic, responsive web applications using
            React.js, ensuring seamless user experiences.
            <br />
            My skills include building interactive interfaces, managing state,
            and optimizing performance. I strive for excellence and stay updated
            with the latest frontend trends.
          </p>
          <a
            href="https://drive.google.com/uc?export=download&id=1Xumdt1lqrdl9vHhFv2xRqlClt-9LrHVG"
            className="btn-resume inline-flex items-center gap-3"
          >
            <span>Resume</span>
            <AiOutlineDownload aria-hidden="true" size="20px" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
