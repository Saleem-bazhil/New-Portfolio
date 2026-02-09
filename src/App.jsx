import { Suspense, lazy } from "react";
import "./App.css";

import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";

const ShowCaseSection = lazy(() => import("./sections/ShowCaseSection"));
const FeatureCards = lazy(() => import("./sections/FeatureCards"));
const ExperienceSection = lazy(() => import("./sections/ExperienceSection"));
const TechStack = lazy(() => import("./sections/TechStack"));
const Comments = lazy(() => import("./sections/Comments"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <>
     <Helmet>
        <title>Saleem Bazhil | Aspiring full stack web & mobile developer </title>
        <meta
          name="description"
          content="Saleem Bazhil | Python Full Stack Web & Mobile Developer. Expert in React Native, Node.js, Express, Django & FastAPI. Building high-performance apps & solutions."
        />
      </Helmet>
      {/* Always visible */}
      <NavBar />
      <Hero />

      {/* Lazy sections */}
      <Suspense fallback={null}>
        <ShowCaseSection />
        <FeatureCards />
        <ExperienceSection />
        <TechStack />
        <Comments />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
