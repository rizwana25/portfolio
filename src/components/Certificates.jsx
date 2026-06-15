function Certificates() {
  const certificates = [
    {
      title: "Artificial Intelligence Internship",
      issuer: "Infosys Springboard",
      image: "/cert1.jpg",
    },
    {
      title: "Web Development Internship",
      issuer: "SkillCraft Technology",
      image: "/cert2.jpg",
    },
    {
      title: "AI Virtual Internship",
      issuer: "AICTE & Shell",
      image: "/cert/aicte.jpeg",
    },
    {
      title: "Python Programming",
      issuer: "Placeholder Academy",
      image: "/cert4.jpg",
    },
    {
      title: "Machine Learning",
      issuer: "Placeholder Academy",
      image: "/cert5.jpg",
    },
    {
      title: "Flutter Development",
      issuer: "Placeholder Academy",
      image: "/cert6.jpg",
    },
    {
      title: "Frontend Development",
      issuer: "Placeholder Academy",
      image: "/cert7.jpg",
    },
    {
      title: "Database Management",
      issuer: "Placeholder Academy",
      image: "/cert8.jpg",
    },
    {
      title: "UI/UX Fundamentals",
      issuer: "Placeholder Academy",
      image: "/cert9.jpg",
    },
    {
      title: "Advanced JavaScript",
      issuer: "Placeholder Academy",
      image: "/cert10.jpg",
    },
  ];

  return (
    <section
      id="certificates"
      className="
      py-32
      bg-white
      overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <h2
          className="
          text-5xl
          md:text-7xl
          font-bold
          text-gray-900
          "
        >
          Professional{" "}
          <span className="text-[#8FA684]">
            Credentials
          </span>
        </h2>

        <p
          className="
          mt-6
          text-lg
          text-gray-600
          max-w-2xl
          leading-relaxed
          "
        >
          A curated collection of certifications,
          internships, and learning experiences
          that have contributed to my growth in
          web development, artificial intelligence,
          and digital solutions.
        </p>

      </div>

      {/* Scrolling Certificates */}
      <div className="mt-16 relative">

        <div className="flex animate-scroll gap-6 w-max">

          {[...certificates, ...certificates].map(
            (cert, index) => (
              <div
                key={index}
                className="
                w-[320px]
                bg-white
                border
                border-[#E8ECE4]
                rounded-3xl
                overflow-hidden
                shadow-sm
                hover:shadow-xl
                transition-all
                duration-300
                "
              >

<div className="h-72 overflow-hidden">
  <img
    src={cert.image}
    alt={cert.title}
    className="
      w-full
      h-full
      object-cover
      transition-transform
      duration-500
      hover:scale-105
    "
  />
</div>

                <div className="p-6">

                  <p
                    className="
                    text-xs
                    uppercase
                    tracking-[3px]
                    text-[#8FA684]
                    mb-2
                    "
                  >
                    {cert.issuer}
                  </p>

                  <h3
                    className="
                    text-xl
                    font-semibold
                    text-gray-900
                    leading-snug
                    "
                  >
                    {cert.title}
                  </h3>

                </div>

              </div>
            )
          )}

        </div>

      </div>
    </section>
  );
}

export default Certificates;