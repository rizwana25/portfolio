function Projects() {
  const projects = [
    {
      title: "Naura Jewels",
      category: "Shopify Store",
      description:
        "A Shopify-based e-commerce store built for a jewellery brand, focused on creating a smooth and responsive shopping experience.",
      image: "/public/cover/naura.jpeg",
      tech: ["Shopify", "Liquid"],
    },

    {
      title: "Outlinx",
      category: "Portfolio Website",
      description:
        "A portfolio website developed for a graphic design business to showcase services, creative work, and brand identity.",
      image: "/projects/outlinx.jpg",
      tech: ["HTML", "Tailwind CSS", "JavaScript"],
    },

    {
      title: "SafeSpace",
      category: "Mobile Application",
      description:
        "What if students could report safety concerns without revealing their identity? SafeSpace combines anonymous reporting, counseling support, and campus-wide incident tracking in a single platform.",
      image: "/public/cover/safespace.jpeg",
      tech: ["Flutter", "NLP", "Node.js", "MySQL"],
    },

    {
      title: "Carbon Footprint Tracker",
      category: "Web Application",
      description:
        "A web application that helps users understand their environmental impact by tracking daily carbon emissions, providing personalized insights, and encouraging sustainable habits through community-driven challenges.",
      image: "/projects/carbon.jpg",
      tech: ["Flask", "MySQL", "HTML", "CSS", "JavaScript"],
    },

    {
      title: "MyBook",
      category: "Mobile Application",
      description:
        "What if your life was a book? MyBook transforms daily journal entries into beautifully written weekly chapters and delivers them straight to your inbox.",
      image: "/projects/mybook.jpg",
      tech: ["Flutter", "MySQL", "Relay"],
    },

    {
      title: "TraceFinder",
      category: "AI-Powered Web Application",
      description:
        "A web application that analyzes scanned documents to identify the scanner used to create them through image processing techniques.",
      image: "/projects/tracefinder.jpg",
      tech: ["Python", "OpenCV", "Machine Learning", "Flask"],
    },
  ];

  return (
    <section
      id="projects"
      className="
        py-24
        bg-white
      "
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="
              text-4xl
              md:text-6xl
              lg:text-7xl
              font-black
              text-gray-900
            "
          >
            Selected{" "}
            <span className="text-[#8FA684]">
              Works
            </span>
          </h2>

          <p
            className="
              mt-5
              text-gray-600
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            A collection of web applications,
            mobile apps, Shopify stores, and
            AI-powered solutions.
          </p>
        </div>

        {/* Grid */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
          "
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-[28px]
                overflow-hidden
                border
                border-[#E8ECE4]
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
                flex
                flex-col
              "
            >
              {/* Image */}
              <div
                className="
                  h-69
                  bg-gradient-to-br
                  from-[#EEF4EA]
                  via-[#F9FBF8]
                  to-[#E4ECDF]
                "
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />
              </div>

              {/* Content */}
              <div
                className="
                  p-6
                  flex
                  flex-col
                  flex-1
                "
              >
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[3px]
                    font-semibold
                    text-[#8FA684]
                  "
                >
                  {project.category}
                </p>

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-gray-900
                    mt-3
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    text-gray-600
                    mt-4
                    leading-relaxed
                    flex-1
                  "
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div
                  className="
                    flex
                    flex-wrap
                    gap-2
                    mt-6
                  "
                >
                  {project.tech.map((item, techIndex) => (
                    <span
                      key={techIndex}
                      className="
                        px-3
                        py-1
                        text-xs
                        font-medium
                        rounded-full
                        bg-[#EEF4EA]
                        text-[#8FA684]
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <button
                  className="
                    mt-6
                    w-full
                    bg-[#8FA684]
                    text-white
                    py-3
                    rounded-xl
                    font-medium
                    hover:opacity-90
                    transition
                  "
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;