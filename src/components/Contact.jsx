import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <h2
          className="
          text-4xl
          md:text-7xl
          font-bold
          text-gray-900
          mb-4
          "
        >
          Let's <span className="text-[#8FA684]">Work Together</span>
        </h2>

        <p
          className="
          text-base
          md:text-lg
          text-gray-600
          max-w-2xl
          mb-10
          md:mb-16
          leading-relaxed
          "
        >
          Have a project in mind or looking for a developer?
          I'd love to hear about your ideas and explore how
          we can work together.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">

          {/* Contact Details */}
          <div
            className="
            bg-[#F9FBF8]
            border
            border-[#E8ECE4]
            rounded-[28px]
            md:rounded-[32px]
            p-5
            md:p-8
            "
          >
            <div className="space-y-5">

              {/* Email */}
              <a
                href="mailto:fathimathrizwana761@gmail.com"
                className="
                flex
                items-center
                gap-4
                p-4
                rounded-2xl
                bg-white
                border
                border-transparent
                hover:border-[#8FA684]
                transition
                "
              >
                <FaEnvelope className="text-[#8FA684] text-xl shrink-0" />

                <div>
                  <p className="text-xs uppercase tracking-[2px] text-gray-500">
                    Email
                  </p>

                  <p className="font-semibold text-gray-900 break-all text-sm md:text-base">
                    fathimathrizwana761@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+918139055063"
                className="
                flex
                items-center
                gap-4
                p-4
                rounded-2xl
                bg-white
                border
                border-transparent
                hover:border-[#8FA684]
                transition
                "
              >
                <FaPhoneAlt className="text-[#8FA684] text-xl shrink-0" />

                <div>
                  <p className="text-xs uppercase tracking-[2px] text-gray-500">
                    Phone
                  </p>

                  <p className="font-semibold text-gray-900 text-sm md:text-base">
                    +91 81390 55063
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="YOUR_LINKEDIN_URL"
                target="_blank"
                rel="noreferrer"
                className="
                flex
                items-center
                gap-4
                p-4
                rounded-2xl
                bg-white
                border
                border-transparent
                hover:border-[#8FA684]
                transition
                "
              >
                <FaLinkedin className="text-[#8FA684] text-xl shrink-0" />

                <div>
                  <p className="text-xs uppercase tracking-[2px] text-gray-500">
                    LinkedIn
                  </p>

                  <p className="font-semibold text-gray-900 text-sm md:text-base">
                    View Profile
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/rizwana25"
                target="_blank"
                rel="noreferrer"
                className="
                flex
                items-center
                gap-4
                p-4
                rounded-2xl
                bg-white
                border
                border-transparent
                hover:border-[#8FA684]
                transition
                "
              >
                <FaGithub className="text-[#8FA684] text-xl shrink-0" />

                <div>
                  <p className="text-xs uppercase tracking-[2px] text-gray-500">
                    GitHub
                  </p>

                  <p className="font-semibold text-gray-900 text-sm md:text-base">
                    View Repository
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918139055063"
                target="_blank"
                rel="noreferrer"
                className="
                flex
                items-center
                gap-4
                p-4
                rounded-2xl
                bg-[#8FA684]
                text-white
                hover:opacity-90
                transition
                "
              >
                <FaWhatsapp className="text-xl shrink-0" />

                <div>
                  <p className="text-xs uppercase tracking-[2px] opacity-80">
                    WhatsApp
                  </p>

                  <p className="font-semibold">
                    Chat With Me
                  </p>
                </div>
              </a>

            </div>
          </div>

          {/* Contact Form */}
          <div
            className="
            bg-[#F9FBF8]
            border
            border-[#E8ECE4]
            rounded-[28px]
            md:rounded-[32px]
            p-5
            md:p-8
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
                focus:border-[#8FA684]
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
                focus:border-[#8FA684]
                "
              />

            </div>

            <textarea
              rows="5"
              placeholder="Tell me about your project..."
              className="
              w-full
              h-32
              md:h-auto
              p-4
              rounded-xl
              border
              border-[#E8ECE4]
              bg-white
              outline-none
              resize-none
              focus:border-[#8FA684]
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