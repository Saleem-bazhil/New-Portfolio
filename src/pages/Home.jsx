import { Suspense, lazy } from "react";
import Hero from "../sections/Hero";
import { Helmet } from "react-helmet-async";

const ShowCaseSection = lazy(() => import("../sections/ShowCaseSection"));
const FeatureCards = lazy(() => import("../sections/FeatureCards"));
const ExperienceSection = lazy(() => import("../sections/ExperienceSection"));
const TechStack = lazy(() => import("../sections/TechStack"));
const Comments = lazy(() => import("../sections/Comments"));
const Contact = lazy(() => import("../sections/Contact"));

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Saleem Bazhil | Aspiring Full Stack Web & Mobile Developer
        </title>
        <meta
          name="description"
          content="Saleem Bazhil | Python Full Stack Web & Mobile Developer. Expert in React Native, Node.js, Express, Django & FastAPI. Building high-performance apps & solutions."
        />
      </Helmet>
      <Hero />
      <Suspense fallback={null}>
        <ShowCaseSection />
        <FeatureCards />
        <ExperienceSection />
        <TechStack />
        <Comments />
        <Contact />
      </Suspense>
    </>
  );
};

export default Home;