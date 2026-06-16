import { FaGithub } from "react-icons/fa";
import { X } from "lucide-react";

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="
      fixed
      inset-0
      z-[9999]
      bg-white
      overflow-y-auto
      "
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="
        fixed
        top-6
        right-6
        w-12
        h-12
        rounded-full
        bg-white
        border
        border-[#E8ECE4]
        shadow-md
        flex
        items-center
        justify-center
        hover:bg-[#F9FBF8]
        "
      >
        <X size={24} />
      </button>

      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* Hero */}
        <div className="mb-16">

          <h1
            className="
            text-5xl
            md:text-7xl
            font-black
            text-gray-900
            "
          >
            {project.title}
          </h1>

          <p
            className="
            text-xl
            text-[#8FA684]
            mt-3
            "
          >
            {project.tagline}
          </p>

          {/* Github */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="
              inline-flex
              items-center
              gap-2
              mt-6
              px-5
              py-3
              rounded-xl
              bg-[#8FA684]
              text-white
              "
            >
              <FaGithub />
              GitHub Repository
            </a>
          )}

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-8">
            {project.tech.map((item, index) => (
              <span
                key={index}
                className="
                px-4
                py-2
                rounded-full
                bg-[#EEF4EA]
                text-[#8FA684]
                text-sm
                font-medium
                "
              >
                {item}
              </span>
            ))}
          </div>

          {/* Overview */}
          <div className="mt-10">
            <h2
              className="
              text-2xl
              font-bold
              text-gray-900
              mb-4
              "
            >
              Overview
            </h2>

            <p
              className="
              text-gray-600
              leading-relaxed
              "
            >
              {project.overview}
            </p>
          </div>

          {/* What I Did */}
          <div className="mt-12">
            <h2
              className="
              text-2xl
              font-bold
              text-gray-900
              mb-4
              "
            >
              What I Did
            </h2>

            <ul className="space-y-3">
              {project.contributions.map(
                (item, index) => (
                  <li
                    key={index}
                    className="text-gray-600"
                  >
                    • {item}
                  </li>
                )
              )}
            </ul>
          </div>

        </div>

        {/* Screenshots */}
        <div className="space-y-10">

          {project.screenshots.map(
            (shot, index) => (
              <div
                key={index}
                className="
                bg-[#F9FBF8]
                border
                border-[#E8ECE4]
                rounded-[28px]
                overflow-hidden
                "
              >
                <img
                  src={shot.image}
                  alt={shot.title}
                  className="
                  w-full
                  object-cover
                  "
                />

                <div className="p-6">

                  <h3
                    className="
                    text-xl
                    font-semibold
                    text-gray-900
                    "
                  >
                    {shot.title}
                  </h3>

                  <p
                    className="
                    mt-2
                    text-gray-600
                    "
                  >
                    {shot.description}
                  </p>

                </div>
              </div>
            )
          )}

        </div>

      </div>
    </div>
  );
}

export default ProjectModal;