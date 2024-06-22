import "./Project.css";
import tortorkari from "../../assets/images/toritorkari.png";
import dreamfly from "../../assets/images/Dream-Fly.png";
import bicycle from "../../assets/images/Buy-Bicycle.png";
import { useState } from "react";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Toritorkari",
      category: "Fullstack",
      description: "<strong>Toritorkari</strong> - Online Vegetable Marketplace <br/><strong>Front-end Technology:</strong> HTML5, CSS3, Tailwind CSS, React.js, React-Router-Dom.<br/> <strong>Back-end Technology:</strong> Node JS, Express JS, Mongo DB<br/> <strong>Tools:</strong> VS Code, Chrome-Dev tool, Github, Firebase Authentication, Vercel.",
      img: tortorkari,
      live_link: "https://toritorkari.vercel.app/",
      client_code: "https://toritorkari.vercel.app/",
      server_code: "https://toritorkari.vercel.app/",
    },
    {
      id: 2,
      title: "Dream Fly",
      category: "Frontend",
      description:
        "<strong>Dream Fly</strong> is a ticket booking web application.<br/><strong>Front-end Technology:</strong> HTML5, CSS3, Material UI, React.js, React-Router, React Animation.<br/><strong>Back-end Technology:</strong> Node JS, Express JS, Mongo DB, Firebase.",
      img: dreamfly,
      live_link: "https://wedreamfly.web.app/",
      client_code: "https://github.com/SyedHasibRahman/DreamFly",
      server_code: "https://github.com/SyedHasibRahman/dreamfly-server",
    },
    {
      id: 2,
      title: "Buy Bicycle",
      category: "Web Design",
      description: "You can sell your products online to customers. It is also user-friendly. This website is made by HTML, CSS, Javascript, React JS, MongoDB, Node JS, and Firebase.",
      img: bicycle,
      live_link: "https://buy-bicycle.web.app/",
      client_code:"https://github.com/alifahmednowshad/mo74-assignment12-buy-bicycle-client-site",
      server_code: null,
    },
  ];

  const [filter, setFilter] = useState("All");

  const handleButtonClick = (filter) => {
    // Update the filter state
    setFilter(filter);
  };

  // Filter projects based on the current filter
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="project-section py-20">
      <div className="container mx-auto">
        <h2 className="title text-center">My Recent Works</h2>
        <div className="my-5 flex justify-center items-center">
          <div className="button-group text-white">
            <button
              className="filter-button"
              onClick={() => handleButtonClick("All")}
            >
              All
            </button>
            <button
              className="filter-button"
              onClick={() => handleButtonClick("Web Design")}
            >
              Web Design
            </button>
            <button
              className="filter-button"
              onClick={() => handleButtonClick("Frontend")}
            >
              Frontend
            </button>
            <button
              className="filter-button"
              onClick={() => handleButtonClick("Fullstack")}
            >
              Fullstack
            </button>
            <button
              className="filter-button"
              onClick={() => handleButtonClick("Client")}
            >
              Client
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center">
          {/* Display filtered projects */}
          {filteredProjects.map((project) => (
            <div key={project.id} className="p-4">
              <div className="bg-gray-200 p-4 rounded shadow">
                <img src={project.img} alt="img" />
                <h4 className="my-4">
                  {project.title}{" "}
                  <span className="text-sm font-light">{project.category}</span>
                </h4>
                <div className="flex flex-wrap gap-2 mb-4 justify-between sm:gap-5">
                  <a
                    className="block project-btn text-primary"
                    role="button"
                    href={project.live_link}
                    target="_blank"
                  >
                    Live Link
                  </a>
                  <a
                    className="block project-btn text-primary"
                    role="button"
                    href={project.live_link}
                    target="_blank"
                  >
                    Github Client Code
                  </a>
                  <a
                    className="block project-btn text-primary"
                    role="button"
                    href={project.l_link}
                    target="_blank"
                  >
                    Github Server Code
                  </a>
                </div>
                <p
                  className="leading-7 text-sm"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
