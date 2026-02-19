import { useState, useMemo, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import projects from "../data/projects";

const categories = ["All", "Full Stack", "Frontend", "Backend", "AI"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const cardRefs = useRef([]);
  const featuredRefs = useRef([]);

  const featuredProjects = useMemo(
    () => projects.filter((p) => p.featured),
    [],
  );

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const createMouseHandler = useCallback(
    (refs) => (index) => (e) => {
      const card = refs.current[index];
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;

      let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
      angle = (angle + 360) % 360;

      card.style.setProperty("--start", angle + 60);
    },
    [],
  );

  const handleMouseMove = createMouseHandler(cardRefs);
  const handleFeaturedMouseMove = createMouseHandler(featuredRefs);

  return (
    <>
      <Helmet>
        <title>All Projects | Saleem Bazhil</title>
        <meta
          name="description"
          content="Explore all projects by Saleem Bazhil — full-stack web applications built with React, Django, FastAPI, Node.js, and more."
        />
      </Helmet>

      <section className="relative min-h-screen pt-8 sm:pt-10 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 pb-16 sm:pb-20 mx-auto overflow-hidden">
        {/* ─── Ambient Gradient Orb ─── */}
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[300px] sm:w-[450px] md:w-[600px] h-[250px] sm:h-[350px] md:h-[400px] bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* ─── Back Button ─── */}
        <Link
          to="/"
          className="relative z-10 inter inline-flex items-center gap-2 text-blue-50 text-sm font-medium mb-6 sm:mb-8 no-underline transition-all duration-300 hover:text-white hover:-translate-x-1 group"
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-white/25 group-hover:bg-white/[0.06]">
            ←
          </span>
          Back
        </Link>

        {/* ─── Header ─── */}
        <div className="relative z-10 text-center mb-8 sm:mb-10 md:mb-14">
          <h1 className="general-sans text-[clamp(2.5rem,6vw,4rem)] font-extrabold text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-br from-white/90 via-white/70 to-white/50 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="inter text-blue-50 text-[0.9rem] sm:text-[1rem] md:text-[1.05rem] max-w-[560px] mx-auto leading-[1.6] sm:leading-[1.7] mb-4 sm:mb-5 px-2 sm:px-0">
            A collection of full-stack and frontend applications built using
            React, Django, and modern web technologies.
          </p>
          {/* ─── Project Counter ─── */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-white-50 text-xs font-medium inter">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {projects.length} Projects
          </span>
        </div>

        {/* ─── Filter Tabs ─── */}
        <div className="flex justify-center mb-8 sm:mb-10 md:mb-14">
          <div className="inline-flex flex-wrap justify-center gap-1.5 sm:gap-2 p-1 sm:p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`inter px-3 sm:px-5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium cursor-pointer transition-all duration-300 ${activeCategory === cat
                  ? "bg-white text-black border border-transparent scale-[1.02] shadow-[0_2px_12px_rgba(255,255,255,0.1)]"
                  : "bg-transparent text-blue-50 border border-transparent hover:bg-white/[0.04] hover:text-white-50"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ─── Featured Projects ─── */}
        {activeCategory === "All" && featuredProjects.length > 0 && (
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="flex items-center gap-3 mb-6 sm:mb-8 md:mb-10">
              <h2 className="general-sans text-xl sm:text-2xl font-bold text-white">
                Featured Projects
              </h2>
              <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-white-50 text-xs font-medium">
                {featuredProjects.length}
              </span>
            </div>

            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => (featuredRefs.current[index] = el)}
                onMouseMove={handleFeaturedMouseMove(index)}
                className={`card card-border grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 md:gap-10 items-center rounded-2xl sm:rounded-[20px] p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 transition-all duration-300 ${index % 2 !== 0
                  ? "md:[direction:rtl] [&>*]:md:[direction:ltr]"
                  : ""
                  }`}
              >
                <div className="glow"></div>

                {/* ─── Image ─── */}
                <div className="relative rounded-xl sm:rounded-[14px] overflow-hidden bg-black-200 group/img">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover block transition-transform duration-500 group-hover/img:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  {/* Featured Badge */}
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-[0.7rem] font-semibold border border-white/10">
                    ⭐ Featured
                  </span>
                </div>

                {/* ─── Content ─── */}
                <div className="flex flex-col gap-4">
                  {/* Category tag */}
                  <span className="inline-flex items-center w-fit px-3 py-1 rounded-full bg-white/[0.06] text-white-50 text-[0.7rem] font-medium border border-white/[0.08] uppercase tracking-wider">
                    {project.category}
                  </span>

                  <h3 className="general-sans text-xl sm:text-2xl md:text-[1.75rem] font-bold text-white leading-tight">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block px-3 py-1 rounded-full bg-white/8 text-white-50 text-xs font-medium border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.highlights && (
                    <ul className="inter flex flex-col gap-2.5 list-none p-0 m-0">
                      {project.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="relative pl-5 text-white-50 text-sm leading-[1.6] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:rounded-full before:bg-white/40"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2 sm:gap-2.5 mt-1">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[10px] text-xs font-semibold no-underline transition-all duration-300 cursor-pointer border-none bg-white text-black hover:bg-white/85 hover:-translate-y-px"
                      >
                        🔗 Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[10px] text-xs font-semibold no-underline transition-all duration-300 cursor-pointer bg-transparent text-white-50 border border-white/15 hover:bg-white/6 hover:border-white/30 hover:-translate-y-px"
                      >
                        ⌨️ View Code
                      </a>
                    )}
                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[10px] text-xs font-semibold no-underline transition-all duration-300 cursor-pointer bg-white/6 text-white-50 border border-white/10 hover:bg-white/10 hover:border-white/20"
                    >
                      📄 Case Study
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ─── Section Divider ─── */}
        {activeCategory === "All" && featuredProjects.length > 0 && (
          <div className="flex items-center gap-4 mb-8 sm:mb-10 md:mb-14">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <span className="text-white/20 text-xs inter tracking-[0.2em] uppercase">All Work</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        )}

        {/* ─── All Projects Grid ─── */}
        <div className="mt-4">
          <div className="flex items-center gap-3 mb-6 sm:mb-8 md:mb-10">
            <h2 className="general-sans text-xl sm:text-2xl font-bold text-white">
              {activeCategory === "All" ? "All Projects" : `${activeCategory} Projects`}
            </h2>
            <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-white-50 text-xs font-medium">
              {filteredProjects.length}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-7">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => (cardRefs.current[index] = el)}
                onMouseMove={handleMouseMove(index)}
                className="card card-border group rounded-2xl transition-all duration-400 flex flex-col"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="glow"></div>

                {/* ─── Image ─── */}
                <div className="relative z-10 p-3 pb-0">
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-black-200 rounded-xl">
                    {/* Project Number */}
                    <span className="absolute top-3 left-3 z-10 inline-flex items-center justify-center w-8 h-8 rounded-lg bg-black/50 backdrop-blur-md text-white text-xs font-bold border border-white/10">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {/* Category Tag */}
                    <span className="absolute top-3 right-3 z-10 inline-flex items-center px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-[0.65rem] font-medium border border-white/10 uppercase tracking-wider">
                      {project.category}
                    </span>

                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

                  </div>
                </div>

                {/* ─── Content ─── */}
                <div className="relative z-10 p-4 sm:p-5 flex flex-col gap-2.5 sm:gap-3 flex-1">
                  <h3 className="general-sans text-base sm:text-[1.15rem] font-bold text-white leading-snug">
                    {project.title}
                  </h3>
                  <p className="inter text-white/50 text-[0.8rem] sm:text-[0.85rem] leading-[1.6] sm:leading-[1.65] line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="inline-block px-2.5 py-0.5 rounded-full bg-white/8 text-white-50 text-[0.7rem] font-medium border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/8 text-white/40 text-[0.7rem] font-medium border border-white/10">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto pt-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[0.78rem] font-semibold no-underline transition-all duration-300 cursor-pointer border-none bg-white text-black hover:bg-white/85 hover:-translate-y-px"
                      >
                        🔗 Live
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[0.78rem] font-semibold no-underline transition-all duration-300 cursor-pointer bg-transparent text-white-50 border border-white/15 hover:bg-white/6 hover:border-white/30 hover:-translate-y-px"
                      >
                        ⌨️ GitHub
                      </a>
                    )}
                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[0.78rem] font-semibold no-underline transition-all duration-300 cursor-pointer bg-white/6 text-white-50 border border-white/10 hover:bg-white/10 hover:border-white/20"
                    >
                      📋 Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;