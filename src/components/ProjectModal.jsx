import { useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Mousewheel } from "swiper/modules";


import "swiper/css";
import "swiper/css/effect-fade";

/*
function LegacyProjectShowcase({ sections }) {
  const showcaseRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div
      className="
      mt-8
      bg-white
      rounded-[24px]
      md:rounded-[32px]
      border
      border-[#E8ECE4]
      shadow-sm
      p-4
      md:p-6
      "
    >
      <Swiper
        modules={[Autoplay, EffectFade, Mousewheel]}
        onSwiper={(swiper) => {
          showcaseRef.current = swiper;
        }}
        onSlideChange={(swiper) => setActiveSection(swiper.realIndex)}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 3600,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 0.8,
        }}
        loop={sections.length > 1}
        speed={550}
        slidesPerView={1}
      >
        {sections.map((section) => (
          <SwiperSlide key={section.title}>
            <div>
              <div
                className="
                overflow-hidden
                rounded-[18px]
                md:rounded-2xl
                bg-[#F8FAF7]
                border
                border-[#E8ECE4]
                aspect-[4/3]
                md:aspect-[16/9]
                "
              >
                <img
                  src={section.screenshots[0].image}
                  alt={section.screenshots[0].title || section.title}
                  className="
                  w-full
                  h-full
                  object-cover
                  "
                />
              </div>

              <div className="max-w-3xl mx-auto text-center mt-7 md:mt-8">
                <h2
                  className="
                  text-2xl
                  md:text-4xl
                  font-bold
                  text-gray-900
                  "
                >
                  {section.title}
                </h2>

                <ul
                  className="
                  mt-5
                  grid
                  gap-3
                  text-left
                  md:grid-cols-3
                  "
                >
                  {section.bullets.map((item, index) => (
                    <li
                      key={index}
                      className="
                      rounded-2xl
                      bg-[#F8FAF7]
                      border
                      border-[#E8ECE4]
                      px-4
                      py-3
                      text-sm
                      text-gray-600
                      leading-relaxed
                      "
                    >
                      <span className="text-[#8FA684] font-bold">• </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="
        mt-7
        flex
        flex-wrap
        items-center
        justify-center
        gap-2
        "
        aria-label="SafeSpace showcase pagination"
      >
        {sections.map((section, index) => (
          <button
            key={section.title}
            type="button"
            onClick={() => showcaseRef.current?.slideToLoop(index)}
            className={`
            h-2
            rounded-full
            transition-all
            ${
              activeSection === index
                ? "w-8 bg-[#8FA684]"
                : "w-2 bg-[#DDE6D8] hover:bg-[#B9C9B1]"
            }
            `}
            aria-label={`Show ${section.title}`}
          />
        ))}
      </div>
    </div>
  );
}

*/
function ProjectShowcase({ sections }) {
  const showcaseRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div
      className="
      mt-8
      bg-white
      rounded-[24px]
      md:rounded-[32px]
      border
      border-[#E8ECE4]
      shadow-sm
      p-4
      md:p-6
      "
    >
      <Swiper
        modules={[Autoplay, EffectFade, Mousewheel]}
        onSwiper={(swiper) => {
          showcaseRef.current = swiper;
        }}
        onSlideChange={(swiper) => setActiveSection(swiper.realIndex)}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 3600,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 0.8,
        }}
        loop={sections.length > 1}
        speed={550}
        slidesPerView={1}
      >
        {sections.map((section) => (
          <SwiperSlide key={section.title}>
            <div>
              <h2
                className="
                text-2xl
                md:text-4xl
                font-bold
                text-gray-900
                text-center
                mb-5
                "
              >
                {section.title}
              </h2>

              <div
                className="
                overflow-hidden
                rounded-[18px]
                md:rounded-2xl
                bg-[#F8FAF7]
                border
                border-[#E8ECE4]
                "
              >
                <img
                  src={section.screenshots[0].image}
                  alt={section.screenshots[0].title || section.title}
                  className="
                  w-full
                  max-h-[300px]
                  md:max-h-[620px]
                  object-contain
                  "
                />
              </div>

              <div className="mt-4 flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => showcaseRef.current?.slidePrev()}
                  className="
                  flex
                  w-8
                  h-8
                  md:w-9
                  md:h-9
                  rounded-full
                  bg-white
                  text-[#8FA684]
                  shadow-sm
                  border
                  border-[#E8ECE4]
                  items-center
                  justify-center
                  hover:bg-[#F8FAF7]
                  transition-all
                  "
                  aria-label="Previous SafeSpace module"
                >
                  <ChevronLeft size={17} />
                </button>

                <span
                  className="
                  px-3
                  py-1
                  md:py-1.5
                  rounded-full
                  bg-[#EEF4EA]/80
                  text-[#6F8767]
                  text-xs
                  md:text-sm
                  font-semibold
                  text-center
                  border
                  border-[#E8ECE4]
                  "
                >
                  {activeSection + 1} / {sections.length}
                </span>

                <button
                  type="button"
                  onClick={() => showcaseRef.current?.slideNext()}
                  className="
                  flex
                  w-8
                  h-8
                  md:w-9
                  md:h-9
                  rounded-full
                  bg-white
                  text-[#8FA684]
                  shadow-sm
                  border
                  border-[#E8ECE4]
                  items-center
                  justify-center
                  hover:bg-[#F8FAF7]
                  transition-all
                  "
                  aria-label="Next SafeSpace module"
                >
                  <ChevronRight size={17} />
                </button>
              </div>

              <div
                className="
                flex
                gap-2
                md:gap-3
                overflow-x-auto
                mt-5
                px-1
                pb-2
                "
                aria-label="SafeSpace module gallery"
              >
                {sections.map((thumb, index) => (
                  <button
                    key={thumb.title}
                    type="button"
                    onClick={() => showcaseRef.current?.slideToLoop(index)}
                    className={`
                    shrink-0
                    w-24
                    md:w-36
                    aspect-[4/3]
                    overflow-hidden
                    rounded-xl
                    border-2
                    bg-white
                    transition-all
                    ${
                      activeSection === index
                        ? "border-[#8FA684] shadow-md"
                        : "border-[#E8ECE4] opacity-70 hover:opacity-100"
                    }
                    `}
                    aria-label={`Show ${thumb.title}`}
                  >
                    <img
                      src={thumb.screenshots[0].image}
                      alt=""
                      className="
                      w-full
                      h-full
                      object-cover
                      "
                    />
                  </button>
                ))}
              </div>

              <div className="max-w-5xl mx-auto mt-6">
                <ul
                  className="
                  grid
                  gap-3
                  md:grid-cols-3
                  "
                >
                  {section.bullets.map((item, index) => (
                    <li
                      key={index}
                      className="
                      flex
                      items-start
                      gap-3
                      rounded-[22px]
                      bg-[#8FA684]
                      px-5
                      py-4
                      text-white
                      shadow-sm
                      hover:scale-[1.02]
                      transition-all
                      duration-300
                      text-[15px]
                      font-medium
                      leading-relaxed
                      "
                    >
                      <span
                        className="
                        mt-2
                        flex
                        h-1.5
                        w-1.5
                        shrink-0
                        rounded-full
                        bg-white
                        "
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  const swiperRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  if (!project) return null;

  return (
    <div
      className="
      fixed
      inset-0
      z-[9999]
      overflow-y-auto
      bg-gradient-to-br
      from-[#F8FAF7]
      via-[#FCFDFC]
      to-[#F4F7F2]
      "
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="
        fixed
        top-5
        right-4
        z-50
        w-10
        h-10
        md:w-12
        md:h-12
        rounded-full
        bg-white
        shadow-lg
        border
        border-[#E8ECE4]
        flex
        items-center
        justify-center
        hover:scale-105
        transition-all
        "
      >
        <X size={20} />
      </button>

      <div className="max-w-6xl mx-auto px-4 md:px-10 py-10 md:py-20">

        {/* HERO */}
        <div
          className="
          bg-white
          rounded-[24px]
          md:rounded-[32px]
          border
          border-[#E8ECE4]
          shadow-sm
          p-6
          md:p-12
          "
        >
          <h1
            className="
            text-4xl
            md:text-7xl
            font-black
            tracking-tight
            text-gray-900
            "
          >
            {project.title}
          </h1>

          <p
            className="
            mt-3
            text-base
            md:text-xl
            text-[#8FA684]
            font-medium
            "
          >
            {project.tagline}
          </p>

          {(project.live || project.github) && (
            <div className="flex flex-row flex-nowrap gap-3 mt-6">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2.5
                  rounded-full
                  bg-[#8FA684]
                  text-white
                  text-sm
                  font-medium
                  whitespace-nowrap
                  hover:scale-105
                  transition-all
                  duration-300
                  "
                >
                  Live Demo
                  <ExternalLink size={14} />
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2.5
                  rounded-full
                  bg-[#8FA684]
                  text-white
                  text-sm
                  font-medium
                  whitespace-nowrap
                  hover:scale-105
                  transition-all
                  duration-300
                  "
                >
                  <FaGithub />
                  GitHub
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          )}

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

        {project.sections ? (
          <>
            <div
              className="
              mt-8
              bg-[#8FA684]
              rounded-[24px]
              md:rounded-[32px]
              shadow-sm
              p-6
              md:p-8
              "
            >
              <h2
                className="
                text-2xl
                md:text-3xl
                font-bold
                text-white
                mb-4
                "
              >
                Project Overview
              </h2>

              <p
                className="
                text-white
                leading-relaxed
                md:text-lg
                font-medium
                "
              >
                {project.overview}
              </p>
            </div>

            <ProjectShowcase sections={project.sections} />
          </>
        ) : (
          <>
        {/* Overview */}
        <div
          className="
          mt-8
          bg-[#8FA684]
          rounded-[24px]
          md:rounded-[32px]
          shadow-sm
          p-6
          md:p-8
          "
        >
          <h2
            className="
            text-2xl
            md:text-3xl
            font-bold
            text-white
            mb-4
            "
          >
            Project Overview
          </h2>

          <p
            className="
            text-white
            leading-relaxed
            md:text-lg
            font-medium
            "
          >
            {project.overview}
          </p>
        </div>

        {/* SCREENSHOTS */}
        <div
          className="
          mt-8
          bg-white
          rounded-[24px]
          md:rounded-[32px]
          border
          border-[#E8ECE4]
          shadow-sm
          overflow-hidden
          p-3
          md:p-6
          "
        >
          <Swiper
            modules={[Autoplay, Mousewheel]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
            autoplay={{
              delay: 3200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            mousewheel={{
              forceToAxis: true,
              sensitivity: 0.8,
            }}
            loop={project.screenshots.length > 1}
            speed={450}
            slidesPerView={1}
            spaceBetween={20}
          >
            {project.screenshots.map((shot, index) => (
              <SwiperSlide key={index}>
                <div>
                  <div
                    className="
                    relative
                    overflow-hidden
                    rounded-[18px]
                    md:rounded-2xl
                    bg-white
                    "
                  >
                    <img
                      src={shot.image}
                      alt={shot.title}
                      className="
                      w-full
                      object-contain
                      max-h-[260px]
                      md:max-h-[650px]
                      "
                    />

                    <button
                      type="button"
                      onClick={() => swiperRef.current?.slidePrev()}
                      className="
                      hidden
                      md:flex
                      absolute
                      md:left-4
                      top-1/2
                      -translate-y-1/2
                      w-8
                      h-8
                      md:w-9
                      md:h-9
                      rounded-full
                      bg-white/85
                      text-[#8FA684]
                      shadow-md
                      border
                      border-white/70
                      backdrop-blur
                      items-center
                      justify-center
                      hover:bg-white
                      transition-all
                      "
                      aria-label="Previous screenshot"
                    >
                      <ChevronLeft size={17} />
                    </button>

                    <button
                      type="button"
                      onClick={() => swiperRef.current?.slideNext()}
                      className="
                      hidden
                      md:flex
                      absolute
                      md:right-4
                      top-1/2
                      -translate-y-1/2
                      w-8
                      h-8
                      md:w-9
                      md:h-9
                      rounded-full
                      bg-white/85
                      text-[#8FA684]
                      shadow-md
                      border
                      border-white/70
                      backdrop-blur
                      items-center
                      justify-center
                      hover:bg-white
                      transition-all
                      "
                      aria-label="Next screenshot"
                    >
                      <ChevronRight size={17} />
                    </button>
                  </div>

                  <div className="mt-3 md:mt-4 flex items-center justify-center gap-4">
                    <button
                      type="button"
                      onClick={() => swiperRef.current?.slidePrev()}
                      className="
                      flex
                      md:hidden
                      w-8
                      h-8
                      rounded-full
                      bg-white
                      text-[#8FA684]
                      shadow-sm
                      border
                      border-[#E8ECE4]
                      items-center
                      justify-center
                      "
                      aria-label="Previous screenshot"
                    >
                      <ChevronLeft size={17} />
                    </button>

                    <span
                      className="
                      px-3
                      py-1
                      md:py-1.5
                      rounded-full
                      bg-[#EEF4EA]/80
                      text-[#6F8767]
                      text-xs
                      md:text-sm
                      font-semibold
                      text-center
                      border
                      border-[#E8ECE4]
                      "
                    >
                      {activeSlide + 1} / {project.screenshots.length}
                    </span>

                    <button
                      type="button"
                      onClick={() => swiperRef.current?.slideNext()}
                      className="
                      flex
                      md:hidden
                      w-8
                      h-8
                      rounded-full
                      bg-white
                      text-[#8FA684]
                      shadow-sm
                      border
                      border-[#E8ECE4]
                      items-center
                      justify-center
                      "
                      aria-label="Next screenshot"
                    >
                      <ChevronRight size={17} />
                    </button>
                  </div>

                  <div className="mt-4 text-center px-2 md:px-4 pb-6 md:pb-8">
                    <p
                      className="
                      text-base
                      md:text-base
                      font-semibold
                      text-gray-900
                      "
                    >
                      {shot.title}
                    </p>

                    {shot.description && (
                      <p
                        className="
                        mt-1
                        text-sm
                        md:text-sm
                        text-gray-500
                        leading-relaxed
                        "
                      >
                        {shot.description}
                      </p>
                    )}
                  </div>

                  <div
                    className="
                    flex
                    gap-2
                    md:gap-3
                    overflow-x-auto
                    px-1
                    pb-2
                    "
                    aria-label="Screenshot gallery"
                  >
                    {project.screenshots.map((thumb, thumbIndex) => (
                      <button
                        key={thumb.image}
                        type="button"
                        onClick={() =>
                          swiperRef.current?.slideToLoop(thumbIndex)
                        }
                        className={`
                        shrink-0
                        w-20
                        md:w-32
                        aspect-[4/3]
                        overflow-hidden
                        rounded-xl
                        border-2
                        bg-white
                        transition-all
                        ${
                          activeSlide === thumbIndex
                            ? "border-[#8FA684] shadow-md"
                            : "border-[#E8ECE4] opacity-70 hover:opacity-100"
                        }
                        `}
                        aria-label={`Show screenshot ${thumbIndex + 1}`}
                      >
                        <img
                          src={thumb.image}
                          alt=""
                          className="
                          w-full
                          h-full
                          object-cover
                          "
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

          </>
        )}

      </div>
    </div>
  );
}

export default ProjectModal;
