function Hero() {
  return (
    <section
      className="
      min-h-screen
      pt-20
      md:pt-32
      pb-14
      md:pb-0
      bg-gradient-to-br
      from-[#EEF4EA]
      via-[#F9FBF8]
      to-[#E4ECDF]
      "
    >
      {/* MOBILE */}
      <div className="md:hidden px-6 -mt-4">

        {/* Image */}
        <div className="relative flex justify-center">

          <div
            className="
            absolute
            w-56
            h-56
            bg-[#DDE8D7]
            opacity-80
            "
            style={{
              borderRadius: "60% 40% 50% 50%",
            }}
          />

          <img
            src="/profile2.png"
            alt="Fathimath Rizwana"
            className="
            relative
            w-64
            object-contain
            z-10
            "
          />
        </div>

        {/* Content */}
        <div className="text-center mt-4">

          <p
            className="
            uppercase
            tracking-[4px]
            text-[#CBB89A]
            font-semibold
            "
          >
            Hello, I'm
          </p>

          <h1
            className="
            text-5xl
            font-black
            text-gray-900
            mt-2
            "
          >
            Fathimath
          </h1>

          <h1
            className="
            text-5xl
            font-black
            text-[#8FA684]
            "
          >
            Rizwana
          </h1>

          {/* Roles */}
          <div
            className="
            flex
            flex-wrap
            justify-center
            items-center
            mt-6
            text-[16px]
            "
          >
            <span className="font-semibold text-gray-900">
              Web Developer
            </span>

            <span className="mx-3 text-[#CBB89A] text-lg">
              •
            </span>

            <span className="font-semibold text-gray-900">
              Mobile App Developer
            </span>

            <span className="mx-3 text-[#CBB89A] text-lg">
              •
            </span>

            <span className="font-semibold text-gray-900">
              Shopify Developer
            </span>
          </div>

          <h2
            className="
            text-3xl
            font-bold
            mt-8
            leading-tight
            "
          >
            Turning Ideas Into
            <span className="block text-[#8FA684]">
              Digital Experiences.
            </span>
          </h2>

          <p
            className="
            mt-6
            text-gray-500
            leading-relaxed
            "
          >
            A developer focused on web, mobile, and e-commerce
            solutions. I enjoy transforming ideas into digital
            products that are intuitive, reliable, and built for
            real-world use.
          </p>

          <div className="flex gap-3 mt-8 mb-4">

            <a
              href="#projects"
              className="
              flex-1
              bg-[#8FA684]
              text-white
              py-3
              rounded-xl
              font-medium
              text-center
              "
            >
              View My Work
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="
              flex-1
              bg-[#8FA684]
              text-white
              py-3
              rounded-xl
              font-medium
              text-center
              "
            >
              Download Resume
            </a>

          </div>

        </div>
      </div>

      {/* DESKTOP */}
      <div
        className="
        hidden
        md:flex
        max-w-7xl
        mx-auto
        items-center
        justify-between
        px-10
        gap-20
        "
      >

        {/* LEFT SIDE */}
        <div className="max-w-2xl">

          <p
            className="
            uppercase
            tracking-[4px]
            text-[#CBB89A]
            font-semibold
            mb-4
            "
          >
            Hello, I'm
          </p>

          <h1
            className="
            text-8xl
            font-black
            leading-none
            text-gray-900
            "
          >
            Fathimath
          </h1>

          <h1
            className="
            text-8xl
            font-black
            leading-none
            text-[#8FA684]
            "
          >
            Rizwana
          </h1>

          {/* Roles */}
          <div
            className="
            flex
            flex-wrap
            items-center
            mt-6
            mb-8
            text-[18px]
            "
          >
            <span className="font-semibold text-gray-900">
              Web Developer
            </span>

            <span className="mx-5 text-[#CBB89A] text-xl">
              •
            </span>

            <span className="font-semibold text-gray-900">
              Mobile App Developer
            </span>

            <span className="mx-5 text-[#CBB89A] text-xl">
              •
            </span>

            <span className="font-semibold text-gray-900">
              Shopify Developer
            </span>
          </div>

          <h2
            className="
            text-5xl
            font-bold
            leading-tight
            mb-6
            max-w-[550px]
            "
          >
            Turning Ideas Into
            <span className="block text-[#8FA684]">
              Digital Experiences.
            </span>
          </h2>

          <p
            className="
            text-lg
            text-gray-600
            leading-relaxed
            max-w-xl
            "
          >
            A developer focused on web, mobile, and e-commerce
            solutions. I enjoy transforming ideas into digital
            products that are intuitive, reliable, and built for
            real-world use.
          </p>

          <div className="flex gap-4 mt-10">

            <a
              href="#projects"
              className="
              bg-[#8FA684]
              text-white
              px-8
              py-4
              rounded-xl
              font-medium
              "
            >
              View My Work
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="
              bg-[#8FA684]
              text-white
              px-8
              py-4
              rounded-xl
              font-medium
              "
            >
              Download Resume
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex items-center justify-center">

          <div
            className="
            absolute
            w-[450px]
            h-[450px]
            bg-[#DDE8D7]
            opacity-80
            "
            style={{
              borderRadius: "60% 40% 50% 50%",
            }}
          />

          <img
            src="/profile2.png"
            alt="Fathimath Rizwana"
            className="
            relative
            w-[800px]
            object-contain
            z-10
            "
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;
