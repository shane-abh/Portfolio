import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import ScrollToTop from "./components/ScrollToTop";
import CourseContent from "./components/page/CourseContent";
import ScrollToSection from "./components/ScrollToSection";
import { DarkModeProvider } from "./context/DarkModeContext";

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <DarkModeProvider>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route
            path="/CognnizantJavaFullStackPathway"
            element={<CourseContent />}
          />
        </Routes>
      </DarkModeProvider>
    </AnimatePresence>
  );
};

const Root = () => (
  <HashRouter>
    <ScrollToTop />
    <ScrollToSection />
    <App />
  </HashRouter>
);

export default Root;
