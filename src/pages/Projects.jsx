import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>All Projects | Saleem Bazhil</title>
        <meta
          name="description"
          content="Explore all projects by Saleem Bazhil — full-stack web applications built with React, Django, FastAPI, Node.js, and more."
        />
      </Helmet>

      <section className="min-h-screen pt-10 px-[5%] pb-20 max-w-[1200px] mx-auto">
        {/* ─── Back Button ─── */}
        <Link
          to="/"
          className="inter inline-flex items-center gap-2 text-slate-400 text-sm font-medium mb-8 no-underline transition-all duration-300 hover:text-indigo-400 hover:-translate-x-1 group"
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-slate-700 transition-all duration-300 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10">
            ←
          </span>
          Back
        </Link>

        {/* ─── Header ─── */}
        <div className="text-center mb-12">
          <h1 className="general-sans text-[clamp(2.5rem,6vw,4rem)] font-extrabold text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-br from-indigo-400 via-indigo-500 to-violet-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="inter text-slate-400 text-[1.05rem] max-w-[560px] mx-auto leading-[1.7]">
            A collection of full-stack and frontend applications built using
            React, Django, and modern web technologies.
          </p>
        </div>

        {/* Projects content will go here */}
      </section>
    </>
  );
};

export default Projects;