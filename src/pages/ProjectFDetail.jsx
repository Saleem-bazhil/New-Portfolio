import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ProjectFDetail = () => {
  const { slug } = useParams();

  return (
    <>
      <Helmet>
        <title>{slug} | Saleem Bazhil</title>
        <meta name="description" content={`Details for project: ${slug}`} />
      </Helmet>

      <section className="min-h-screen pt-10 px-[5%] pb-20 max-w-[900px] mx-auto max-sm:pt-8 max-sm:px-4 max-sm:pb-15">
        {/* ─── Back Link ─── */}
        <Link
          to="/projects"
          className="inter inline-flex items-center gap-2 text-slate-400 text-sm font-medium mb-8 no-underline transition-all duration-300 hover:text-indigo-400 hover:-translate-x-1 group"
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-slate-700 transition-all duration-300 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10">
            ←
          </span>
          Back to Projects
        </Link>

        {/* ─── Project Detail Content ─── */}
        <div className="text-center py-20">
          <h1 className="general-sans text-3xl font-bold text-white mb-4">
            Project: {slug}
          </h1>
          <p className="inter text-slate-400">
            Project details content will go here.
          </p>
        </div>
      </section>
    </>
  );
};

export default ProjectFDetail;