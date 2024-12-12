import  { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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
    position: "Senior Full Stack Developer",
    duration: "2021 - Present",
    company: "TechCorp Solutions",
    responsibilities: [
      "Led a team of 5 developers in building a cloud-based enterprise solution",
      "Implemented microservices architecture using Node.js and Docker",
      "Reduced system latency by 40% through performance optimization",
      "Mentored junior developers and conducted code reviews"
    ]
  },
  {
    id: 2,
    position: "Full Stack Developer",
    duration: "2019 - 2021",
    company: "Digital Innovations Inc",
    responsibilities: [
      "Developed and maintained multiple client-facing web applications",
      "Implemented CI/CD pipelines using GitHub Actions",
      "Integrated third-party APIs and payment gateways",
      "Collaborated with UX team to improve user experience"
    ]
  },
  {
    id: 3,
    position: "Frontend Developer",
    duration: "2018 - 2019",
    company: "WebTech Studios",
    responsibilities: [
      "Built responsive web interfaces using React and TypeScript",
      "Implemented state management using Redux and Context API",
      "Created reusable component libraries",
      "Optimized web performance and accessibility"
    ]
  }
];

export default function Journey() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="space-y-8">
      <h3 className="text-3xl font-bold mb-8">Professional Journey</h3>
      <div className="space-y-4">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="border border-gray-700 rounded-lg overflow-hidden bg-[#1A1A1C] transition-all duration-300"
          >
            <button
              onClick={() => setOpenId(openId === exp.id ? null : exp.id)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-800/50 transition-colors"
            >
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-blue-400">{exp.position}</h4>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-400">{exp.duration}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openId === exp.id ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openId === exp.id ? 'max-h-[400px]' : 'max-h-0'
              }`}
            >
              <div className="px-6 py-4 bg-gray-800/20">
                <h5 className="text-lg font-medium text-purple-400 mb-3">{exp.company}</h5>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}