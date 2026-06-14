function Contact() {
  return (
    <section
      id="contact"
      className="
      py-32
      bg-white
      "
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <h2
          className="
          text-5xl
          md:text-7xl
          font-bold
          text-gray-900
          mb-6
          "
        >
          Let's <span className="text-[#8FA684]">Work Together</span>
        </h2>

        <p
          className="
          text-lg
          text-gray-600
          max-w-2xl
          mb-16
          "
        >
          Have a project in mind or looking for a developer?
          I'd love to hear about your ideas and explore how
          we can work together.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Details */}
          <div
            className="
            bg-[#F9FBF8]
            border
            border-[#E8ECE4]
            rounded-[32px]
            p-8
            "
          >

            <div className="mb-8">
              <p className="text-sm text-[#8FA684] uppercase tracking-[3px] mb-2">
                Email
              </p>

              <a
                href="mailto:fathimathrizwana761@gmail.com"
                className="text-xl font-semibold text-gray-900"
              >
                fathimathrizwana761@gmail.com
              </a>
            </div>

            <div className="mb-8">
              <p className="text-sm text-[#8FA684] uppercase tracking-[3px] mb-2">
                Phone
              </p>

              <a
                href="tel:+918139055063"
                className="text-xl font-semibold text-gray-900"
              >
                +91 81390 55063
              </a>
            </div>

            <div className="mb-8">
              <p className="text-sm text-[#8FA684] uppercase tracking-[3px] mb-2">
                LinkedIn
              </p>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-xl font-semibold text-gray-900"
              >
                Your LinkedIn Profile
              </a>
            </div>

            <div>
              <p className="text-sm text-[#8FA684] uppercase tracking-[3px] mb-2">
                GitHub
              </p>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-xl font-semibold text-gray-900"
              >
                Your GitHub Profile
              </a>
            </div>

          </div>

          {/* Contact Form */}
          <div
            className="
            bg-[#F9FBF8]
            border
            border-[#E8ECE4]
            rounded-[32px]
            p-8
            "
          >

            <div className="grid md:grid-cols-2 gap-4 mb-4">

              <input
                type="text"
                placeholder="Your Name"
                className="
                w-full
                p-4
                rounded-xl
                border
                border-[#E8ECE4]
                bg-white
                outline-none
                "
              />

              <input
                type="email"
                placeholder="Your Email"
                className="
                w-full
                p-4
                rounded-xl
                border
                border-[#E8ECE4]
                bg-white
                outline-none
                "
              />

            </div>

            <textarea
              rows="6"
              placeholder="Tell me about your project..."
              className="
              w-full
              p-4
              rounded-xl
              border
              border-[#E8ECE4]
              bg-white
              outline-none
              resize-none
              "
            />

            <button
              className="
              mt-6
              w-full
              bg-[#8FA684]
              text-white
              py-4
              rounded-xl
              font-medium
              hover:opacity-90
              transition
              "
            >
              Send Message
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;