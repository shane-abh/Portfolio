import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToSection from "./components/ScrollToSection";
import { DarkModeProvider } from "./context/DarkModeContext";
import LoadingSpinner from "./components/ui/LoadingSpinner";

// Lazy load route components for better performance
const Home = lazy(() => import("./pages/Home"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const CourseContent = lazy(() => import("./components/page/CourseContent"));

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <DarkModeProvider>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route
              path="/courses/cognizant-java-full-stack"
              element={<CourseContent />}
            />
          </Routes>
        </Suspense>
      </DarkModeProvider>
    </AnimatePresence>
  );
};

const Root = () => (
  <BrowserRouter
    basename="/Portfolio"
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}
  >
    <ScrollToTop />
    <ScrollToSection />
    <App />
  </BrowserRouter>
);

export default Root;
