import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash; // Extract the hash from the URL (e.g., #about)
    if (hash) {
      const element = document.querySelector(hash); // Find the element by id
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly to the element
      }
    }
  }, [location]);

  return null;
};

export default ScrollToSection;
