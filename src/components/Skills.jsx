function Skills() {
  const mainSkills = [
    {
      title: "Frontend Development",
      tech: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      tech: ["Python", "Flask", "Node.js"],
    },
    {
      title: "Mobile Development",
      tech: ["Flutter"],
    },
    {
      title: "Databases",
      tech: ["MySQL", "MongoDB"],
    },
    {
      title: "Programming Languages",
      tech: ["Python", "Java"],
    },
    {
      title: "Shopify Development",
      tech: [
        "Shopify",
        "Store Setup",
        "Theme Customization",
        "Liquid",
      ],
    },
  ];

  const tools = {
    title: "Tools & Platforms",
    tech: [
      "GitHub",
      "VS Code",
      "Google Colab",
      "Jupyter Notebook",
      "Render",
      "Railway",
    ],
  };

  return (
    <section
      id="skills"
      className="
      py-32
      bg-[#F9FBF8]
      relative
      overflow-hidden
      "
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8FA684]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">

        {/* Heading */}
        <h2
          className="
          text-5xl
          md:text-7xl
          font-bold
          text-gray-900
          mb-20
          "
        >
          What I <span className="text-[#8FA684]">Work</span> With
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">

          {mainSkills.map((skill, index) => (
            <div
              key={index}
              className="
              bg-white
              rounded-[28px]
              border
              border-[#E8ECE4]
              p-6
              md:p-8
              hover:-translate-y-1
              hover:shadow-lg
              transition-all
              duration-300
              "
            >
              <h3
                className="
                text-lg
                md:text-xl
                font-semibold
                text-gray-900
                mb-5
                "
              >
                {skill.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skill.tech.map((item, i) => (
                  <span
                    key={i}
                    className="
                    px-3
                    py-2
                    rounded-full
                    bg-[#F4F7F1]
                    border
                    border-[#E8ECE4]
                    text-gray-700
                    text-sm
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>

        {/* Tools & Platforms */}
        <div
          className="
          mt-6
          bg-white
          rounded-[28px]
          border
          border-[#E8ECE4]
          p-6
          md:p-8
          hover:shadow-lg
          transition-all
          duration-300
          "
        >
          <h3
            className="
            text-lg
            md:text-xl
            font-semibold
            text-gray-900
            mb-5
            "
          >
            {tools.title}
          </h3>

          <div className="flex flex-wrap gap-2">
            {tools.tech.map((item, i) => (
              <span
                key={i}
                className="
                px-3
                py-2
                rounded-full
                bg-[#F4F7F1]
                border
                border-[#E8ECE4]
                text-gray-700
                text-sm
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;