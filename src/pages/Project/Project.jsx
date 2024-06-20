import  { useState } from "react";
import "./Project.css";

const Project = () => {
  const projects = [
    { id: 1, title: "Project 1", category: "Web Design" },
    { id: 2, title: "Project 2", category: "Frontend" },
    { id: 3, title: "Project 3", category: "Fullstack" },
    { id: 4, title: "Project 4", category: "Client" },
    { id: 5, title: "Project 5", category: "Web Design" },
    { id: 6, title: "Project 6", category: "Frontend" },
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
        <div className="grid grid-cols-2 justify-center">
          {/* Display filtered projects */}
          {filteredProjects.map((project) => (
            <div key={project.id} className="p-4">
              <div className="bg-gray-200 p-4 rounded shadow">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;

