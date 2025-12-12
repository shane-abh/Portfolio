// ProjectDetail.tsx

import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import projects from "../data/projectsData";
import { motion } from "framer-motion";
import { Header } from "../components/page/Header";
import Footer from "../components/page/Footer";
import { Flowchart } from "../components/ui/Flowchart";
import TaxRAGPreview from "../components/ui/TaxRAGPreview";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = id ? projects.find((project) => project.id === parseInt(id, 10)) : undefined;

  if (!project) {
    return <div>Project not found!</div>; // Fallback if project isn't found
  }

  const handleBackClick = () => {
    navigate("/");
    // Scroll to projects section after navigation
    setTimeout(() => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="pt-16 bg-[#141416] text-white  "
    >
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{project.title} | Shane Abraham - Software Developer Portfolio</title>
        <meta name="description" content={`${project.description} Built with ${project.techStack.slice(0, 4).join(', ')}. View the full case study, architecture, and implementation details.`} />
        <meta name="keywords" content={`${project.techStack.join(', ')}, Shane Abraham, Software Developer, Portfolio Project, Case Study`} />
        <meta name="author" content="Shane Abraham" />
        
        {/* Open Graph / LinkedIn */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${project.title} | Shane Abraham Portfolio`} />
        <meta property="og:description" content={`${project.description} Built with ${project.techStack.slice(0, 3).join(', ')}.`} />
        <meta property="og:url" content={`https://shane-abh.github.io/Portfolio/projects/${project.id}`} />
        <meta property="og:site_name" content="Shane Abraham - Software Developer" />
        <meta property="og:image" content="https://shane-abh.github.io/Portfolio/og-image.png" />
        
        {/* Article-specific tags */}
        <meta property="article:author" content="Shane Abraham" />
        <meta property="article:section" content="Portfolio Projects" />
        {project.techStack.map((tech, index) => (
          <meta key={index} property="article:tag" content={tech} />
        ))}
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${project.title} | Shane Abraham`} />
        <meta name="twitter:description" content={project.description} />
        <meta name="twitter:image" content="https://shane-abh.github.io/Portfolio/og-image.png" />
        
        {/* JSON-LD Structured Data for Project */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": project.title,
            "description": project.description,
            "author": {
              "@type": "Person",
              "name": "Shane Abraham",
              "url": "https://shane-abh.github.io/Portfolio/"
            },
            "url": `https://shane-abh.github.io/Portfolio/projects/${project.id}`,
            "keywords": project.techStack.join(", "),
            "about": project.techStack.map(tech => ({
              "@type": "Thing",
              "name": tech
            }))
          })}
        </script>
      </Helmet>
      
      <Header/>
      <div className="min-h-screen bg-[#141416] text-white py-12 font-body">
        <div className="container mx-auto px-4 max-w-4xl">
          <button
            onClick={handleBackClick}
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Projects
          </button>

          <h1 className="text-4xl font-bold mb-8">{project.title}</h1>

          <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
            {project.title === "Budget 2025 Navigator" || project.title === "RAG Chat API" ? (
              <TaxRAGPreview compact={false} />
            ) : project.video != null ? (
              <video
                src={project.video}
                width={1000}
                height={500}
                className="w-full h-auto"
                controls
                preload="metadata"
              ></video>
            ) : (
              <img
                src={project.imageUrl || undefined}
                alt={project.title}
                width={1000}
                height={500}
                loading="lazy"
                decoding="async"
                className="w-full h-auto"
              />
            )}
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-300">{project.overview}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Problem Statement</h2>
            <div className="text-gray-300">{project.problemStatement}</div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
            <ul className="list-disc list-inside text-gray-300">
              {project.techStack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Architecture</h2>
            {project.architectureFlowchart ? (
              <Flowchart data={project.architectureFlowchart} />
            ) : project.architecture != null ? (
              <img 
                src={project.architecture} 
                alt={`${project.title} architecture diagram`}
                loading="lazy"
                decoding="async"
              />
            ) : null}
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <ul className="list-disc list-inside text-gray-300">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
      <Footer/>
    </motion.div>
  );
}
