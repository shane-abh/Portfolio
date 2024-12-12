import { useState } from "react";
import { Building2, Calendar, Github, Linkedin, Mail } from "lucide-react";
import web_dev from "../assets/web_dev_avatar.png";
import { useDarkMode } from "../context/DarkModeContext";
interface Experience {
  id: number;
  position: string;
  duration: string;
  company: string;
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    position: "Web & App Assistant",
    duration: "Jan 2024 - Aug 2024",
    company: "Conestoga Students Inc.",
    responsibilities: [
      "Developed and optimized front-end features using HTML, CSS, and JavaScript, enhancing user experience by 12% and addressing UX/UI issues through data-driven research and analysis from Google Analytics.",
      "Increased sales and customer engagement by 20+ in the first month by developing websites on Wix for foodtruckconestoga.com, leveraging Figma for design and collaborating with the hospitality team to meet their specific requirements.",
      "Improved team efficiency and website management by creating comprehensive training guides for the CSI website backend, resulting in smoother operations and better resource utilization.",
      "Implemented accessibility features on the CSI website to ensure compliance with WCAG and AODA standards, enhancing the user experience for individuals with disabilities.",
    ],
  },
  {
    id: 2,
    position: "Frontend Developer",
    duration: "March 2024 - Aug 2024",
    company: "Empowered Futures (Volunteer)",
    responsibilities: [
      "Enhanced the task management app and mentorship platform by translating UI wireframes into highly readable code, resulting in a 14% increase in usability.",
      "Leveraged React (Typescript) to develop frontend functionalities, incorporating GraphQL for efficient data fetching, and utilized Prisma ORM for seamless database integration, resulting in a 30% improvement in data retrieval and application performance.",
      "Engaged in code reviews and implemented unit tests to ensure code reliability and functionality",
    ],
  },
  {
    id: 3,
    position: "Software Developer",
    duration: "Nov 2022 - Feb 2023",
    company: "Flydubai",
    responsibilities: [
      "Gained experience in API security using Java Spring boot, reducing potential vulnerabilities by 12%. Utilizing MongoDB as a cache resulted in a 15% increase in overall application performance and responsiveness.",
      "Utilized RESTful APIs using Spring Boot to transition legacy code into APIs, ensuring the retention of our established workflows while seamlessly interfacing with modern services, leading to a 5% improvement in efficiency.",
      "Enhanced a big data dashboard for cloud data migration to AWS with Flutter, optimizing design and integrating additional metrics for improved process visibility. This initiative led to a 10% reduction in information retrieval time and increased productivity.",
    ],
  },
  {
    id: 4,
    position: "Software Tester",
    duration: "Aug 2022 - Oct 2022",
    company: "Epromis Solutions LLC",
    responsibilities: [
      "Created dynamic business reports using Stimulsoft, resulting in improved data visualization for business decision-making.",
      "Collaborated with the senior development team to gather data from SQL databases, ensuring the accuracy of the reports.",
      "Validated software usability by writing Selenium scripts to automate testing processes, enhancing the reliability and consistency of user acceptance testing (UAT) results.",
    ],
  },
];

export function About() {
  const [openId, setOpenId] = useState<number | null>(null);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className="">
      <div className="absolute  left-1/2 -translate-x-1/4 flex flex-col items-center w-full">
              <div
                className={`absolute w-screen h-[400px] ${
                  isDarkMode ? "gradient-oval-dark" : "gradient-oval-light"
                } -z-10 -top-32`}
              />

            
            </div>
      <section
        className="container mx-auto max-w-screen-md  py-20  lg:max-w-screen-lg px-4"
        id="about"
      >
        <h1 className="text-4xl font-title font-bold  py-8 ">About Me</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div
            className={`font-body max-w-screen-md ${
              isDarkMode ? "text-gray-300" : "text-gray-800"
            }`}
          >
            <p className="mb-4">Hey everyone, welcome to my world!</p>

            <p className="mb-4">
              Growing up, I always loved building things, but my true passion
              sparked when I discovered computer programming. I was instantly
              drawn to UI design and the idea of creating software that could
              simplify and automate the everyday tasks we all do.
            </p>

            <p className="mb-4">
              Today, I'm a web developer focused on building JavaScript-based
              applications that solve real-world problems. My main interest is
              in fintech, where I'm driven to create tools that make financial
              management more accessible and understandable.
            </p>

            <p className="mb-4">
              My interest in fintech began with the book{" "}
              <em>Rich Dad Poor Dad</em>, which taught me practical, impactful
              lessons about finance. But as a university student, I noticed that
              many financial tools were either too complex or behind a paywall,
              making them hard to use. Inspired to make a difference, I started
              building fintech projects that are not only functional but also
              educational.
            </p>

            <p className="mb-4">
              When I'm not coding, I enjoy watching Formula 1, playing sports,
              and listening to music.
            </p>

            <p className="mb-8">
              <strong className="mb-4">Let's Connect!</strong>
              <br />
              Feel free to explore my projects or reach out if you'd like to
              connect or collaborate. I'd love to hear from you!
            </p>
            <div className="flex  ">
              <div className=" flex gap-6  text-gray-500 ">
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
          <div>
            <img src={web_dev} />
          </div>
        </div>
      </section>
      <section className="  py-20 px-4">
        <div className="container mx-auto max-w-screen-md lg:max-w-screen-lg">
          <h2 className="text-4xl font-title font-bold  mb-16">
            My Journey So Far...
          </h2>

          <div className="space-y-6">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenId(openId === exp.id ? null : exp.id)}
                  className="w-full p-6 flex justify-between items-center hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-blue-400" />
                    <span className="text-lg font-semibold font-body text-white">
                      {exp.position} 
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 ">
                    <Calendar className="w-4 h-4" />
                    <span className="font-body">{exp.duration}</span>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openId === exp.id ? "max-h-full" : "max-h-0"
                  }`}
                >
                  <div className="p-6 pt-0 ">
                    <h3 className="text-xl font-title font-semibold text-blue-400 mb-4 mt-4">
                      {exp.company}
                    </h3>
                    <ul className="space-y-3 font-body">
                      {exp.responsibilities.map((resp, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1.5">•</span>
                          <span className="text-gray-300">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
