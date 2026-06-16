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
      overflow-y-auto
      bg-gradient-to-br
      from-[#EEF4EA]
      via-[#F9FBF8]
      to-[#E4ECDF]
      "
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="
        fixed
        top-5
        right-5
        z-50
        w-12
        h-12
        rounded-full
        bg-white/70
        backdrop-blur-lg
        border
        border-white/30
        shadow-lg
        flex
        items-center
        justify-center
        hover:scale-105
        transition
        "
      >
        <X size={22} />
      </button>

      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20">

        {/* Hero Card */}
        <div
          className="
          bg-white/60
          backdrop-blur-xl
          border
          border-white/30
          rounded-[32px]
          shadow-xl
          p-8
          md:p-12
          "
        >
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
            mt-3
            text-lg
            md:text-xl
            text-[#8FA684]
            font-medium
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
              font-medium
              hover:opacity-90
              transition
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
        </div>

        {/* Overview + What I Did */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">

          {/* Overview */}
          <div
            className="
            bg-white/60
            backdrop-blur-xl
            border
            border-white/30
            rounded-[28px]
            shadow-lg
            p-6
            "
          >
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
          <div
            className="
            bg-white/60
            backdrop-blur-xl
            border
            border-white/30
            rounded-[28px]
            shadow-lg
            p-6
            "
          >
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
              {project.contributions.map((item, index) => (
                <li
                  key={index}
                  className="
                  text-gray-600
                  flex
                  items-start
                  gap-3
                  "
                >
                  <span className="text-[#8FA684]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Project Gallery */}
        <div className="mt-10">

          <h2
            className="
            text-3xl
            font-bold
            text-gray-900
            mb-6
            "
          >
            Project Gallery
          </h2>

          <div className="space-y-8">

            {project.screenshots.map((shot, index) => (
              <div
                key={index}
                className="
                bg-white
                rounded-[28px]
                overflow-hidden
                shadow-lg
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

                <div className="p-5">

                  <span
                    className="
                    inline-block
                    px-4
                    py-2
                    rounded-full
                    bg-[#EEF4EA]
                    text-[#8FA684]
                    text-sm
                    font-medium
                    "
                  >
                    {shot.title}
                  </span>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}

export default ProjectModal;