import React, { useState, useEffect } from "react";
import { ArrowUp } from "react-bootstrap-icons"; // Optional: Bootstrap icon

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="btn btn-secondary position-fixed bottom-0 end-0 m-4 rounded-circle shadow"
        style={{ width: "50px", height: "50px", zIndex: 1000 }}
      >
        <ArrowUp size={24} />
      </button>
    )
  );
};

export default ScrollToTop;
