import { lazy, Suspense, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RightScrollBar from "./components/RightScrollBar";
import ScrollToTop from "./components/ScrollToTop";

const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Blogs = lazy(() => import("./components/Blog"));
const Contact = lazy(() => import("./components/Contact"));

function SectionFallback() {
  return <div className="flex items-center justify-center py-24 text-gray-500">Loading…</div>;
}

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app-shell">
      <Header />
      <main id="main-content">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Blogs />
          <Contact />
        </Suspense>
      </main>
      <RightScrollBar />
      <ScrollToTop />
    </div>
  );
}
