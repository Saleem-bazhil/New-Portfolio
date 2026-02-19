import { useParams, Link } from "react-router-dom";
import { useRef, useCallback, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import projects from "../data/projects";

const ProjectFDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const cardRefs = useRef([]);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(false);
  }, [slug]);

  const handleMouseMove = useCallback(
    (index) => (e) => {
      const card = cardRefs.current[index];
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

  if (!project) {
    return (
      <section className="relative min-h-screen pt-10 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 pb-20 mx-auto overflow-hidden">
        <div className="text-center py-20 px-5">
          <h1 className="general-sans text-3xl font-bold text-white mb-4">
            Project Not Found
          </h1>
          <p className="inter text-white/50 mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Link
            to="/projects"
            className="inter inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold no-underline transition-all duration-300 hover:bg-white/85 hover:-translate-y-px"
          >
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  let cardIdx = 0;

  return (
    <>
      <Helmet>
        <title>{project.title} | Saleem Bazhil</title>
        <meta name="description" content={project.description} />
      </Helmet>

      {/* ═══════════════════════════════════════════════
          FULL-BLEED HERO WITH IMAGE BACKGROUND
      ═══════════════════════════════════════════════ */}
      <div className="relative w-full min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] overflow-hidden">
        {/* Background Image */}
        <img
          src={project.image}
          alt=""
          onLoad={() => setImageLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ${imageLoaded ? "opacity-100" : "opacity-0"
            }`}
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#010103]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

        {/* Back Link - Top Left */}
        <Link
          to="/projects"
          className="absolute top-6 sm:top-8 left-4 sm:left-6 md:left-10 lg:left-20 xl:left-28 z-20 inter inline-flex items-center gap-2 text-white/60 text-sm font-medium no-underline transition-all duration-300 hover:text-white hover:-translate-x-1 group"
        >
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/15 bg-black/30 backdrop-blur-md transition-all duration-300 group-hover:border-white/35 group-hover:bg-white/10">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </span>
          <span className="hidden sm:inline">Back to Projects</span>
        </Link>

        {/* Hero Content - Bottom */}
        <div className="relative z-10 flex flex-col justify-end h-full min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 pb-10 sm:pb-14">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white/80 text-[0.68rem] font-semibold border border-white/15 uppercase tracking-[0.15em]">
              {project.category}
            </span>
            <span className="text-white/30 text-xs inter">{project.role}</span>
            <span className="w-1 h-1 rounded-full bg-white/25"></span>
            <span className="text-white/30 text-xs inter">{project.duration}</span>
          </div>

          {/* Title */}
          <h1 className="general-sans text-[clamp(2rem,5.5vw,3.5rem)] font-extrabold text-white mb-3 leading-[1.08] tracking-tight max-w-4xl">
            {project.title}
          </h1>

          {/* Tagline */}
          <p className="inter text-[0.95rem] sm:text-[1.05rem] text-white/50 leading-[1.65] mb-6 max-w-2xl">
            {project.tagline}
          </p>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold no-underline transition-all duration-300 cursor-pointer border-none bg-white text-black hover:bg-white/90 hover:-translate-y-px hover:shadow-[0_8px_25px_rgba(255,255,255,0.15)]"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold no-underline transition-all duration-300 cursor-pointer bg-white/5 backdrop-blur-md text-white/70 border border-white/15 hover:bg-white/10 hover:border-white/30 hover:text-white hover:-translate-y-px"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View Code
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          TECH STACK BAR
      ═══════════════════════════════════════════════ */}
      <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 -mt-5">
        <div className="flex flex-wrap gap-2 py-4 px-5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06]">
          <span className="inter text-[0.65rem] font-semibold text-white/30 uppercase tracking-[0.2em] mr-2 self-center">
            Tech
          </span>
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.06] text-white/55 text-[0.72rem] font-medium border border-white/[0.08] tracking-wide transition-all duration-300 hover:bg-white/[0.1] hover:text-white/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          MAIN CONTENT
      ═══════════════════════════════════════════════ */}
      <section className="relative px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 pt-14 sm:pt-16 pb-16 sm:pb-20 overflow-hidden">
        {/* Ambient Orb */}
        <div className="absolute top-[200px] right-[-100px] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-gradient-to-bl from-indigo-500/[0.03] via-purple-500/[0.02] to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* ─── Highlights ─── */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-16 sm:mb-20">
            <h2 className="general-sans text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
              <span className="inline-block w-1 h-6 sm:h-7 bg-gradient-to-b from-white/60 to-white/15 rounded flex-shrink-0"></span>
              Project Highlights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {project.highlights.map((highlight, i) => {
                const idx = cardIdx++;
                return (
                  <div
                    key={i}
                    ref={(el) => (cardRefs.current[idx] = el)}
                    onMouseMove={handleMouseMove(idx)}
                    className="card card-border rounded-xl p-4 sm:p-5 flex items-start gap-3.5 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04] group"
                  >
                    <div className="glow"></div>
                    <div className="relative z-10 flex items-start gap-3.5 w-full">
                      <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-lg bg-white/[0.06] border border-white/[0.1] flex items-center justify-center transition-all duration-300 group-hover:bg-white/[0.12]">
                        <svg className="w-3.5 h-3.5 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="inter text-white/50 text-[0.82rem] sm:text-[0.875rem] leading-[1.6] group-hover:text-white/65 transition-colors duration-300">
                        {highlight}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ─── Overview ─── */}
        <div className="mb-16 sm:mb-20">
          <h2 className="general-sans text-xl sm:text-2xl font-bold text-white mb-5 sm:mb-6 flex items-center gap-3">
            <span className="inline-block w-1 h-6 sm:h-7 bg-gradient-to-b from-white/60 to-white/15 rounded flex-shrink-0"></span>
            Overview
          </h2>
          <p className="inter text-white/45 text-[0.9rem] sm:text-base leading-[1.85] max-w-4xl">
            {project.longDescription}
          </p>
        </div>

        {/* ─── The Problem ─── */}
        {project.problemStatement && (
          <div className="mb-16 sm:mb-20">
            <h2 className="general-sans text-xl sm:text-2xl font-bold text-white mb-5 sm:mb-6 flex items-center gap-3">
              <span className="inline-block w-1 h-6 sm:h-7 bg-gradient-to-b from-white/60 to-white/15 rounded flex-shrink-0"></span>
              The Problem
            </h2>
            <p className="inter text-white/45 text-[0.9rem] sm:text-base leading-[1.85] mb-7 max-w-4xl">
              {project.problemStatement.problem}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {[
                { label: "01", title: "Target Audience", text: project.problemStatement.targetAudience },
                { label: "02", title: "Market Gap", text: project.problemStatement.marketGap },
              ].map((item, i) => {
                const idx = cardIdx++;
                return (
                  <div
                    key={i}
                    ref={(el) => (cardRefs.current[idx] = el)}
                    onMouseMove={handleMouseMove(idx)}
                    className="card card-border rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04]"
                  >
                    <div className="glow"></div>
                    <div className="relative z-10">
                      <span className="inline-block text-[0.6rem] font-bold text-white/20 tracking-[0.2em] uppercase mb-3 font-mono">
                        {item.label}
                      </span>
                      <h4 className="general-sans text-[0.95rem] sm:text-base font-bold text-white mb-2.5">
                        {item.title}
                      </h4>
                      <p className="inter text-white/40 text-[0.82rem] sm:text-[0.875rem] leading-[1.7]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ─── My Approach ─── */}
        {project.solutionApproach && (
          <div className="mb-16 sm:mb-20">
            <h2 className="general-sans text-xl sm:text-2xl font-bold text-white mb-5 sm:mb-6 flex items-center gap-3">
              <span className="inline-block w-1 h-6 sm:h-7 bg-gradient-to-b from-white/60 to-white/15 rounded flex-shrink-0"></span>
              My Approach
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {[
                { label: "01", title: "Frontend Architecture", text: project.solutionApproach.frontend },
                { label: "02", title: "Backend & API", text: project.solutionApproach.backend },
                { label: "03", title: "Data Flow", text: project.solutionApproach.apiFlow },
                { label: "04", title: "Authentication", text: project.solutionApproach.authentication },
              ].map((item, i) => {
                const idx = cardIdx++;
                return (
                  <div
                    key={i}
                    ref={(el) => (cardRefs.current[idx] = el)}
                    onMouseMove={handleMouseMove(idx)}
                    className="card card-border rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04]"
                  >
                    <div className="glow"></div>
                    <div className="relative z-10">
                      <span className="inline-block text-[0.6rem] font-bold text-white/20 tracking-[0.2em] uppercase mb-3 font-mono">
                        {item.label}
                      </span>
                      <h4 className="general-sans text-[0.95rem] sm:text-base font-bold text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="inter text-white/40 text-[0.82rem] sm:text-[0.875rem] leading-[1.7]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ─── Key Features ─── */}
        {project.features && project.features.length > 0 && (
          <div className="mb-16 sm:mb-20">
            <h2 className="general-sans text-xl sm:text-2xl font-bold text-white mb-5 sm:mb-6 flex items-center gap-3">
              <span className="inline-block w-1 h-6 sm:h-7 bg-gradient-to-b from-white/60 to-white/15 rounded flex-shrink-0"></span>
              Key Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {project.features.map((feature, i) => {
                const idx = cardIdx++;
                return (
                  <div
                    key={i}
                    ref={(el) => (cardRefs.current[idx] = el)}
                    onMouseMove={handleMouseMove(idx)}
                    className="card card-border rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04] hover:-translate-y-[2px]"
                  >
                    <div className="glow"></div>
                    <div className="relative z-10">
                      <span className="inline-block text-[0.6rem] font-bold text-white/20 tracking-[0.2em] uppercase mb-3 font-mono">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h4 className="general-sans text-[0.9rem] sm:text-[0.95rem] font-bold text-white mb-2">
                        {feature.title}
                      </h4>
                      <p className="inter text-white/40 text-[0.8rem] sm:text-[0.825rem] leading-[1.65]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ─── Technical Deep Dive ─── */}
        {project.technicalDetails && (
          <div className="mb-16 sm:mb-20">
            <h2 className="general-sans text-xl sm:text-2xl font-bold text-white mb-5 sm:mb-6 flex items-center gap-3">
              <span className="inline-block w-1 h-6 sm:h-7 bg-gradient-to-b from-white/60 to-white/15 rounded flex-shrink-0"></span>
              Technical Deep Dive
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {[
                { label: "01", title: "Database", text: project.technicalDetails.database },
                { label: "02", title: "API Endpoints", text: project.technicalDetails.apiEndpoints },
                { label: "03", title: "Security", text: project.technicalDetails.security },
                { label: "04", title: "Performance", text: project.technicalDetails.performance },
              ].map((item, i) => {
                const idx = cardIdx++;
                return (
                  <div
                    key={i}
                    ref={(el) => (cardRefs.current[idx] = el)}
                    onMouseMove={handleMouseMove(idx)}
                    className="card card-border rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04]"
                  >
                    <div className="glow"></div>
                    <div className="relative z-10">
                      <span className="inline-block text-[0.6rem] font-bold text-white/20 tracking-[0.2em] uppercase mb-3 font-mono">
                        {item.label}
                      </span>
                      <h4 className="general-sans text-[0.95rem] font-bold text-white mb-2.5">
                        {item.title}
                      </h4>
                      <p className="inter text-white/40 text-[0.82rem] sm:text-[0.875rem] leading-[1.7]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
              {(() => {
                const idx = cardIdx++;
                return (
                  <div
                    ref={(el) => (cardRefs.current[idx] = el)}
                    onMouseMove={handleMouseMove(idx)}
                    className="card card-border rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04] col-span-full"
                  >
                    <div className="glow"></div>
                    <div className="relative z-10">
                      <span className="inline-block text-[0.6rem] font-bold text-white/20 tracking-[0.2em] uppercase mb-3 font-mono">
                        05
                      </span>
                      <h4 className="general-sans text-[0.95rem] font-bold text-white mb-2.5">
                        Challenges & Solutions
                      </h4>
                      <p className="inter text-white/40 text-[0.82rem] sm:text-[0.875rem] leading-[1.7]">
                        {project.technicalDetails.challenges}
                      </p>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* ─── Bottom Navigation ─── */}
        <div className="mt-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />
          <div className="flex justify-between items-center">
            <Link
              to="/projects"
              className="inter inline-flex items-center gap-2.5 text-white/45 text-sm font-medium no-underline transition-all duration-300 hover:text-white hover:-translate-x-1 group"
            >
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-white/25 group-hover:bg-white/[0.06]">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </span>
              All Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectFDetail;