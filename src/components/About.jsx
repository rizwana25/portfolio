function About() {
  return (
    <section
      id="about"
      className="
        py-32
        relative
        overflow-hidden
        bg-gradient-to-br from-[#F9FBF8] via-white to-[#F9FBF8]
      "
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#CBB89A]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#CBB89A]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Label with accent line */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-12 bg-[#CBB89A]"></div>
          <p className="uppercase tracking-[4px] text-[#CBB89A] font-semibold text-sm">
            About Me
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Main Heading */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.2] text-gray-900">
              Building digital
              <span className="block mt-2 bg-gradient-to-r from-gray-900 to-[#CBB89A] bg-clip-text text-transparent">
                solutions that feel
              </span>
              <span className="block mt-2">effortless to use.</span>
            </h2>
            
            {/* Decorative element */}
            <div className="flex gap-2 mt-8">
              <div className="w-2 h-2 rounded-full bg-[#CBB89A]"></div>
              <div className="w-2 h-2 rounded-full bg-[#CBB89A]/60"></div>
              <div className="w-2 h-2 rounded-full bg-[#CBB89A]/30"></div>
            </div>
          </div>

          {/* Right Column - Bio Content */}
          <div className="space-y-8">
            {/* First paragraph with quote style */}
            <div className="relative pl-6 border-l-4 border-[#CBB89A]">
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-medium">
                I'm a B.Tech graduate in Information Technology with a passion for 
                creating digital solutions that are both functional and user-friendly.
              </p>
            </div>

            {/* Second paragraph */}
            <p className="text-gray-600 leading-relaxed">
              My work spans <span className="font-semibold text-gray-800">web development</span>, 
              <span className="font-semibold text-gray-800"> mobile applications</span>, and 
              <span className="font-semibold text-gray-800"> e-commerce solutions</span>, 
              allowing me to approach challenges from both a technical and creative perspective.
            </p>

            {/* Third paragraph with subtle highlight */}
            <p className="text-gray-600 leading-relaxed">
              I enjoy transforming ideas into products that deliver real value, whether that's a 
              business website, mobile application, or custom solution built to solve a specific problem.
            </p>

            

            {/* CTA button */}
            <div className="pt-4">
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:gap-3 group"
              >
                <span>Let's connect</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;