import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll durumunu izleme
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Sayfanın en üstüne kaydırma
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };

  return (
    <div className="fixed bottom-16 right-5 md:right-10 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 bg-gray-600 text-white rounded-full shadow-lg hover:bg-gray-800 transition"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
