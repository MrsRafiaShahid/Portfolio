import React, { useRef } from "react";
import Typed from "typed.js";

export const TypedComponent = () => {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full Stack Developer | MERN Specialist",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      showCursor: true,
      cursorChar: "_",
      fadeOut: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
};
