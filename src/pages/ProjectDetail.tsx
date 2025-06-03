// ProjectDetail.tsx

import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import projects from "../data/projectsData";
import { motion } from "framer-motion";
import { Header } from "../components/page/Header";
import Footer from "../components/page/Footer";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = id ? projects.find((project) => project.id === parseInt(id, 10)) : undefined;

  if (!project) {
    return <div>Project not found!</div>; // Fallback if project isn't found
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="pt-16 bg-[#141416] text-white  "
    >
        <Header/>
      <div className="min-h-screen bg-[#141416] text-white py-12 font-body">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            to="/#projects"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Projects
          </Link>

          <h1 className="text-4xl font-bold mb-8">{project.title}</h1>

          <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
            {project.video != null ? (
              <video
                src={project.video}
                width={1000}
                height={500}
                className="w-full h-auto"
                controls
              ></video>
            ) : (
              <img
                src={project.imageUrl}
                alt={project.title}
                width={1000}
                height={500}
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
            {project.architecture != null ? <img src={project.architecture} /> : null}
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
