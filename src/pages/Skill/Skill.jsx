import { FaHtml5 } from "react-icons/fa";
import "./Skill.css"

const Skill = () => {
  return (
    <div className="blog-section bg-[#0F0715] p-20">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="title">My Skills</h2>
          <p className="text-white w-1/2 mx-auto my-2">
            I transform your ideas and aspirations into a unique web project
            that not only inspires you but also captivates your customers.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 md:grid-cols-5">
          <div className="skill-item text-white">
            <div>
              <FaHtml5 size={60} />
            </div>
            <p>HTML</p>
          </div>
          <div className="skill-item text-white">
            <div>
              <FaHtml5 size={60} />
            </div>
            <p>HTML</p>
          </div>
          <div className="skill-item text-white">
            <div>
              <FaHtml5 size={60} />
            </div>
            <p>HTML</p>
          </div>
          <div className="skill-item text-white">
            <div>
              <FaHtml5 size={60} />
            </div>
            <p>HTML</p>
          </div>
          <div className="skill-item text-white">
            <div>
              <FaHtml5 size={60} />
            </div>
            <p>HTML</p>
          </div>
          <div className="skill-item text-white">
            <div>
              <FaHtml5 size={60} />
            </div>
            <p>HTML</p>
          </div>
          <div className="skill-item text-white">
            <div>
              <FaHtml5 size={60} />
            </div>
            <p>HTML</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
