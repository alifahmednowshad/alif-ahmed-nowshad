import "./Hero.css"
import { AiOutlineDownload } from "react-icons/ai";
import heroImage from "../../assets/images/My-photo.png";


const Hero = () => {
  return (
    <div>
      <section
        className="hero-section min-h-screen"
        id="intro"
      >
        <div className="container mx-auto py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div className="order-last md:order-none">
              <div className="hero-content-box">
                <p className="hero-sub-title">I am Alif</p>
                <h1 className="title">
                  Frontend Web <br /> Developer{" "}
                </h1>
                <p className="des">
                  I build easy-to-use and responsive websites that make browsing
                  enjoyable for millions of people.
                </p>
                <div className="button-box flex flex-wrap items-center gap-5">
                  <a
                    href="https://drive.google.com/uc?export=download&id=1Xumdt1lqrdl9vHhFv2xRqlClt-9LrHVG"
                    className="btn-resume flex gap-3"
                  >
                    <span>Resume</span>
                    <AiOutlineDownload aria-hidden="true" size="20px" />
                  </a>
                  <ul className="flex space-x-4 social-icons">
                    <li>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/alifahmednowshad/"
                      >
                        <i aria-hidden="true" className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/alifahmednowshad/"
                      >
                        <i
                          aria-hidden="true"
                          className="fab fa-linkedin-in"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://github.com/alifahmednowshad"
                      >
                        <i aria-hidden="true" className="fab fa-github"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="order-first md:order-none">
              <div className="text-center md:ms-20">
                <img className="hero-image-box" src={heroImage} alt="Photo" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
