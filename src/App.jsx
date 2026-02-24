import { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import NavBar from "./sections/NavBar";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectFDetail = lazy(() => import("./pages/ProjectFDetail"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Footer = lazy(() => import("./sections/Footer"));

function App() {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith("/projects");

  return (
    <>
      <ScrollToTop />
      {!isProjectPage && <NavBar />}
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectFDetail />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
