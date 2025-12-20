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

function App() {
  return (
    <>
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
