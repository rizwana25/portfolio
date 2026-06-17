import { useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";

import "swiper/css";

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

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="
              inline-flex
              items-center
              gap-2
              mt-6
              px-4
              py-2.5
              rounded-full
              bg-[#8FA684]
              text-white
              text-sm
              font-medium
              hover:scale-105
              transition-all
              duration-300
              "
            >
              <FaGithub />
              GitHub
            </a>
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

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">

          {/* Overview */}
          <div
            className="
            bg-white
            rounded-[28px]
            border
            border-[#E8ECE4]
            shadow-sm
            p-7
            hover:shadow-md
            transition-all
            duration-300
            "
          >
            <h2
              className="
              text-2xl
              font-bold
              text-gray-900
              mb-4
              "
            >
              Project Overview
            </h2>

            <p
              className="
              text-gray-600
              leading-relaxed
              "
            >
              {project.overview}
            </p>
          </div>

          {/* Contributions */}
          <div
            className="
            bg-white
            rounded-[28px]
            border
            border-[#E8ECE4]
            shadow-sm
            p-7
            hover:shadow-md
            transition-all
            duration-300
            "
          >
            <h2
              className="
              text-2xl
              font-bold
              text-gray-900
              mb-4
              "
            >
              What I Did
            </h2>

            <ul className="space-y-4">
              {project.contributions.map((item, index) => (
                <li
                  key={index}
                  className="
                  flex
                  gap-3
                  text-gray-600
                  leading-relaxed
                  "
                >
                  <span className="text-[#8FA684] font-bold">
                    •
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}

export default ProjectModal;
