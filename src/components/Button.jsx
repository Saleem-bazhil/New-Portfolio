import { memo, useCallback } from "react";

const Button = memo(({ text, className, id }) => {
  const handleClick = useCallback(
    (e) => {
      e.preventDefault();

      if (!id) return;

      const target = document.getElementById(id);

      if (target) {
        const offset = window.innerHeight * 0.15;
        const top =
          target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    },
    [id],
  );

  return (
    <a onClick={handleClick} className={`${className ?? ""} cta-wrapper`}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" loading="lazy" />
        </div>
      </div>
    </a>
  );
});

Button.displayName = "Button";

export default Button;
