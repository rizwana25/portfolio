function Experience() {
  const experiences = [
    {
      title: "Artificial Intelligence Intern",
      company: "Infosys Springboard",
      period: "Nov 2025 – Jan 2026",
      description:
        "Developed TraceFinder, a project designed to identify source scanners from digital documents using image processing and machine learning techniques.",
    },
    {
      title: "Artificial Intelligence Virtual Intern",
      company: "AICTE, Shell India & Edunet Foundation",
      period: "Aug 2025 – Sep 2025",
      description:
        "Worked on AI applications focused on sustainability and green technology while gaining practical experience in solving environmental challenges with AI.",
    },
    {
      title: "Web Development Intern",
      company: "SkillCraft Technology",
      period: "Jun 2025 – Jul 2025",
      description:
        "Built responsive web interfaces and collaborated on improving user experience, functionality, and cross-browser compatibility.",
    },
  ];

  return (
    <section
      id="experience"
      className="
      py-14
      md:py-20
      relative
      overflow-hidden
      bg-gradient-to-br
      from-[#EEF4EA]
      via-[#F9FBF8]
      to-[#E4ECDF]
      "
    >
      {/* Decorative Background */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#8FA684]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">

        {/* Heading */}
        <h2
          className="
          text-4xl
          md:text-6xl
          lg:text-7xl
          font-bold
          text-gray-900
          mb-12
          md:mb-16
          "
        >
          Work{" "}
          <span className="text-[#8FA684]">
            Experience
          </span>
        </h2>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="
              flex
              gap-5
              md:gap-8
              pb-12
              md:pb-16
              "
            >
              {/* Timeline */}
              <div className="flex flex-col items-center">

                <div
                  className="
                  w-3
                  h-3
                  md:w-4
                  md:h-4
                  rounded-full
                  bg-[#8FA684]
                  shadow-md
                  "
                />

                {index !== experiences.length - 1 && (
                  <div
                    className="
                    w-[2px]
                    flex-1
                    bg-[#C9D7C4]
                    mt-3
                    "
                  />
                )}

              </div>

              {/* Content */}
              <div className="flex-1">

                <p
                  className="
                  uppercase
                  tracking-wider
                  text-xs
                  md:text-sm
                  font-medium
                  text-[#8FA684]
                  mb-2
                  "
                >
                  {exp.period}
                </p>

                <h3
                  className="
                  text-xl
                  md:text-2xl
                  font-bold
                  text-gray-900
                  "
                >
                  {exp.title}
                </h3>

                <p
                  className="
                  text-[#8FA684]
                  text-base
                  md:text-lg
                  font-semibold
                  mt-2
                  "
                >
                  {exp.company}
                </p>

                <p
                  className="
                  text-gray-600
                  leading-relaxed
                  text-sm
                  md:text-base
                  mt-3
                  max-w-3xl
                  "
                >
                  {exp.description}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;