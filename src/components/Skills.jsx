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
      title: "AI & Automation",
      tech: [
        "Prompt Engineering",
        "NLP",
        "Automation",
        "Relay",
      ],
    },
    {
      title: "Shopify Development",
      tech: [
        "Shopify",
        "Liquid",
        "Theme Customization",
        "Payment Integration",
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
      pt-12
      pb-8
      md:py-24
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
          text-4xl
          md:text-6xl
          lg:text-7xl
          font-bold
          text-gray-900
          mb-10
          md:mb-16
          "
        >
          What I <span className="text-[#8FA684]">Work</span> With
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

          {mainSkills.map((skill, index) => (
            <div
              key={index}
              className="
              bg-white
              rounded-[24px]
              md:rounded-[28px]
              border
              border-[#E8ECE4]
              p-4
              md:p-8
              hover:-translate-y-1
              hover:shadow-lg
              transition-all
              duration-300
              "
            >
              <h3
                className="
                text-base
                md:text-xl
                font-semibold
                text-gray-900
                mb-3
                md:mb-5
                "
              >
                {skill.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skill.tech.map((item, i) => (
                  <span
                    key={i}
                    className="
                    px-2.5
                    py-1
                    rounded-full
                    bg-[#F4F7F1]
                    border
                    border-[#E8ECE4]
                    text-gray-700
                    text-xs
                    md:text-sm
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
          mt-4
          md:mt-6
          bg-white
          rounded-[24px]
          md:rounded-[28px]
          border
          border-[#E8ECE4]
          p-4
          md:p-8
          hover:shadow-lg
          transition-all
          duration-300
          "
        >
          <h3
            className="
            text-base
            md:text-xl
            font-semibold
            text-gray-900
            mb-3
            md:mb-5
            "
          >
            {tools.title}
          </h3>

          <div className="flex flex-wrap gap-2">
            {tools.tech.map((item, i) => (
              <span
                key={i}
                className="
                px-2.5
                py-1
                rounded-full
                bg-[#F4F7F1]
                border
                border-[#E8ECE4]
                text-gray-700
                text-xs
                md:text-sm
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