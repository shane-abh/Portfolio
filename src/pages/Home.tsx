import { ChevronDown, Github, Linkedin, Mail, Moon, Sun } from "lucide-react";
import { About } from "../components/About";
import { Projects } from "../components/page/Projects";
import "../App.css";
import "../index.css";
import { Header } from "../components/page/Header";
// import Hero2 from './components/Hero2';
import { motion } from "framer-motion";
import CourseExprience from "../components/page/CourseExprience";
import Footer from "../components/page/Footer";
import { TypeAnimation } from "react-type-animation";
import { useDarkMode } from "../context/DarkModeContext";

export function Home() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const particles = Array.from({ length: 350 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 10 + 5,
    speed: Math.random() * 3 + 2,
  }));

  const skillIcons = [
    { name: "React", icon: "⚛️" },
    { name: "JavaScript", icon: "𝗝𝗦" },
    { name: "TypeScript", icon: "𝗧𝗦" },
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
  ];

  return (
    <div
      className={` ${
        isDarkMode ? "bg-[#000063] text-white" : "bg-[#e6e6ff] text-[#000063]"
      } transition-colors duration-500  `}
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
      >
        <section id="home" className="min-h-screen relative overflow-hidden">
          <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[80%] h-[200px] gradient-reflection" />

          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className={`absolute rounded-full ${
                isDarkMode
                  ? "bg-gradient-to-r from-blue-300 to-purple-400"
                  : "bg-gradient-to-r from-blue-900 to-purple-300"
              } opacity-20`}
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
                scale: [1, Math.random() + 0.5, 1],
                opacity: [0.2, 0.1, 0.2],
              }}
              transition={{
                duration: Math.random() + 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              custom={particle.id}
            />
          ))}
          <Header />

          <main className="min-h-screen flex flex-col items-center justify-center px-4 relative ">
            <div className="hidden xl:flex justify-between">
              {skillIcons.map((skill, index) => {
                const angle = (index / skillIcons.length) * 2 * Math.PI; // Angle for each icon
                const radius = 500; // Radius of the circular path (adjust as needed)

                // Calculate the initial x and y positions on the circle
                const initialX = radius * Math.cos(angle);
                const initialY = radius * Math.sin(angle);
                return (
                  <motion.div
                    key={index}
                    className={`absolute w-12 h-12 rounded-full ${
                      isDarkMode ? "bg-gray-800" : "bg-gray-200"
                    } flex items-center justify-center cursor-pointer`}
                    initial={{
                      // Icons start around the text section
                      x: initialX, // Horizontal margin around the text section
                      y: initialY, // Vertical margin around the text section
                    }}
                    animate={{
                      // Icons float slightly in their position
                      x: radius * Math.cos(angle + Math.random() * 0.1), // Slight change in angle for movement
                      y: radius * Math.sin(angle + Math.random() * 0.5), // Slight change in angle for movement
                      transition: {
                        duration: Math.random() * 1 + 20, // Smooth transitions
                        repeat: Infinity,
                        repeatType: "mirror",
                      },
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="text-2xl " title={skill.name}>
                      {skill.icon}
                    </span>
                  </motion.div>
                );
              })}
            </div>
            <div className="text-center space-y-6 relative " id="text-section">
              <span className="text-gray-500 tracking-widest font-bold text-md">
                <TypeAnimation
                  sequence={[
                    "SOFTWARE DEVELOPER",
                    2000,
                    "WEB DEVELOPER",
                    2500,
                    "UI DESIGNER",
                    2500,
                  ]}
                  wrapper="span"
                  speed={10}
                  repeat={Infinity}
                />
              </span>
              <h1
                className={`text-6xl md:text-8xl font-title font-bold ${
                  isDarkMode ? "text-gradient-dark" : "text-gradient-light"
                }`}
              >
                SHANE ABRAHAM
              </h1>
              <p
                className={`text-xl font-body md:text-2xl ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } max-w-2xl mx-auto`}
              >
                Crafting digital experiences through elegant code and creative
                solutions
              </p>
              <div className="pt-8">
                <motion.button
                  className={`px-8 py-3 ${
                    isDarkMode
                      ? "bg-[#2323D9] text-white"
                      : "bg-[#4747ff] text-white"
                  } font-medium rounded-md font-title border-1 hover:drop-shadow-xl transition-colors`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="#projects">View My Work</a>
                </motion.button>
              </div>
            </div>

            <button
              onClick={toggleDarkMode}
              className={`fixed bottom-20 right-4 p-2 rounded-full ${
                isDarkMode ? "bg-yellow-400" : "bg-gray-800"
              } transition-colors duration-300 z-10`}
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? (
                <Sun className="w-6 h-6 text-gray-800" />
              ) : (
                <Moon className="w-6 h-6 text-white" />
              )}
            </button>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center w-full">
              <div
                className={`absolute w-screen h-[300px] ${
                  isDarkMode ? "gradient-oval-dark" : "gradient-oval-light"
                } -z-10 -bottom-32`}
              />

              <div
                className={`${
                  isDarkMode ? "text-white" : "text-gray-600"
                } flex flex-col items-center gap-2 scroll-prompt pb-12`}
              >
                <span className="text-sm font-body">Scroll to explore</span>
                <ChevronDown className="w-6 h-6" />
              </div>
            </div>
          </main>
          <About />
          <Projects />
          <CourseExprience />
          <div className="text-center max-w-screen-sm mx-auto p-4 mb-16">
            <h3 className="text-2xl p-4 font-semibold font-title">
              Interested in collaborating with me?
            </h3>
            <p className=" font-xl font-body">
              I'm always open to new opportunities, collaborations, and
              projects. Whether you have a project in mind or just want to say
              hello, feel free to reach out via email or connect with me on any
              of my socials.
            </p>
            <div className="flex place-items-center ">
              <div className=" flex gap-6 mx-auto p-4 text-gray-200  ">
                <a
                  href="https://github.com/shane-abh"
                  className="hover:text-blue-400 transition-colors"
                >
                  <Github className="w-8 h-8" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shane-abh/"
                  className="hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-8 h-8" />
                </a>
                <a
                  href="mailto:mailto:shaneabh777@gmail.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </motion.div>
    </div>
  );
}

export default Home;
