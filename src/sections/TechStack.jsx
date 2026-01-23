import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Suspense, lazy } from "react";

import TitleHeader from "../components/TitleHeader";
import TechIcon from "../components/TechModels/TechIcon";
import { techStackIcons } from "../constants";
import { memo, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LogoLoopMain from "../components/TechModels/LogoLoopMain";

const LazyTechIcon = lazy(() => import("../components/TechModels/TechIcon"));

gsap.registerPlugin(ScrollTrigger);

const TechStack = memo(() => {
  const sectionRef = useRef(null);
  useGSAP(
    () => {
      gsap.fromTo(
        ".tech-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            once: true,
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <div id="skills" ref={sectionRef} className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />
        <div className="tech-grid">
          {techStackIcons.map((techStackIcon) => (
            <div
              key={techStackIcon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <Suspense
                    fallback={
                      <div className="w-full h-full bg-black-200 animate-pulse" />
                    }
                  >
                    <TechIcon model={techStackIcon} />
                  </Suspense>
                </div>
                <div className="padding-x w-full">
                  <p>{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-32 xl:mt-40 w-full flex flex-col items-center overflow-hidden">
          <h6 className="mb-12 text-white-50 text-xs tracking-[0.35em] inter font-bold">
            TOOLS & TECHNOLOGIES I USE
          </h6>
          <LogoLoopMain />
        </div>
      </div>
    </div>
  );
});

TechStack.displayName = "TechStack";

export default TechStack;
