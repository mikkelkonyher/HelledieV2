import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to top of the page whenever the pathname changes
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use 'auto' for instant jump; change to 'smooth' if smooth scrolling is desired
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
