import { Github, Linkedin, Mail } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#000077]/0 backdrop-blur-sm p-4">
      <nav className="container mx-auto  py-4 flex justify-between items-center max-w-screen-lg">
        <div className="text-xl font-bold">
          <a href="/">SA</a>
        </div>

        <div className="hidden md:flex items-center gap-12">
          <a href="#home" className=" transition-colors">
            Home
          </a>
          <a href="#about" className=" transition-colors">
            About
          </a>
          <a href="#projects" className=" transition-colors">
            Projects
          </a>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-6">
            <a
              href="https://github.com/shane-abh"
              className="hover:text-blue-400 transition-colors"
              target="_blank"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/shane-abh/"
              className="hover:text-blue-400 transition-colors"
              target="_blank"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:shaneabh777@gmail.com"
              className="hover:text-blue-400 transition-colors"
              target="_blank"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <a
            href="../../../public/resume/Shane Abraham CV.pdf"
            className="px-4 py-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-full transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
};
