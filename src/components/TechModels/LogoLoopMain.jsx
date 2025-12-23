import LogoLoop from "./LogoLoop";
import { memo, useMemo } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiTailwindcss,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiFigma,
  SiPostman,
  SiGit,
} from "react-icons/si";

const techLogos = [
  { icon: SiHtml5, color: "#E34F26", title: "HTML5" },
  { icon: SiCss3, color: "#1572B6", title: "CSS3" },
  { icon: SiJavascript, color: "#F7DF1E", title: "JavaScript" },
  { icon: SiReact, color: "#61DAFB", title: "React" },
  { icon: SiBootstrap, color: "#7952B3", title: "Bootstrap" },
  { icon: SiTailwindcss, color: "#38BDF8", title: "Tailwind CSS" },
  { icon: SiPython, color: "#3776AB", title: "Python" },
  { icon: SiPostgresql, color: "#4169E1", title: "PostgreSQL" },
  { icon: SiMongodb, color: "#47A248", title: "MongoDB" },
  { icon: SiFigma, color: "#F24E1E", title: "Figma" },
  { icon: SiPostman, color: "#FF6C37", title: "Postman" },
  { icon: SiGit, color: "#F05032", title: "Git" },
];

function LogoLoopMain() {
  const logos = useMemo(
    () =>
      techLogos.map(({ icon: Icon, color, title }) => ({
        title,
        node: (
          <div
            className="logo-pill"
            title={title}
            style={{ "--glow-color": color }}
          >
            <Icon style={{ color }} />
          </div>
        ),
      })),
    []
  );

  return (
    <div className="w-full max-w-6xl mx-auto py-10 overflow-hidden relative">
      <LogoLoop
        logos={logos}
        speed={24}
        direction="left"
        logoHeight={64}
        gap={72}
        pauseOnHover
        scaleOnHover={true}
        ariaLabel="Tools and technologies I use"
      />
    </div>
  );
}

export default memo(LogoLoopMain);
