import { ArrowLeft } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import hotelManagementSystemArch from "../../assets/projects/hotelManagementArch.png";
import { Header } from "./Header";
import Footer from "./Footer";

interface SkillSection {
  title: string;
  skills: string[];
}

interface Project {
  title: string;
  description: string;
  architectureImage: string | null;

  learnings?: {
    title: string;
    items: string[];
  };
}

export const CourseContent: React.FC = () => {
  const skillSections: SkillSection[] = [
    {
      title: "Java Fundamentals",
      skills: [
        "Java collections",
        "Java data types",
        "Java inheritance",
        "Java syntax",
        "Java generics",
        "Java exception handling",
        "Date and time in Java",
        "Java standard library",
        "Java enums",
        "Java documentation",
        "Java data structures",
        "Regular expressions",
        "Java package management",
        "Java string methods",
        "JRE",
        "Computer memory architecture",
        "Java methods",
        "Control flow in Java",
        "Java arrays",
        "Java type casting",
        "IntelliJ",
      ],
    },
    {
      title: "Advanced Java Programming",
      skills: [
        "Techniques Java reflection",
        "Design pattern fundamentals",
        "Java stream API",
        "Dependency injection",
        "Computer memory familiarity",
        "Java files API",
        "Data encoding",
        "Aspect-oriented programming",
        "Resource leaks",
        "Java best practices",
        "Concurrent computing",
        "Programming paradigms",
        "JRE",
        "Data serialization",
        "Behavioral design patterns",
        "Threading",
        "Creational design patterns",
        "Data deserialization",
        "Structural design patterns",
        "Parallel computing",
        "Functional programming",
      ],
    },
    {
      title: "Web Services and APIs",
      skills: [
        "GraphQL",
        "Swagger",
        "REST APIs",
        "Web services",
        "Spring security",
        "Microservices",
        "Software testing",
        "Application security basics",
        "Spring boot",
        "SOAP",
        "Microservices architecture basics",
        "Front-end development basics",
        "Data format fundamentals",
        "JSON",
        "API documentation",
        "HTTP",
        "XML",
        "API security",
        "API development",
        "Integration testing",
        "Unit testing",
        "Errors and exceptions",
      ],
    },
  ];

  const projects: Project[] = [
    {
      title: "Hotel Reservation Management",
      description:
        "In this project, I designed and implementing a Java hotel reservation application. The hotel reservation application allows customers to find and book a hotel room based on room availability. This project will demonstrates my abilities to design classes using OOP, organize and process data with collections, and use common Java types.",
      architectureImage: hotelManagementSystemArch,
    },
    {
      title: "UdaciSearch Web Crawler",
      description:
        "The project focuses on improving a legacy web crawler used by UdaciSearch to identify popular search terms on the internet and enhance SEO for clients. The original web crawler is single-threaded and slow, limiting its efficiency. The goal of this project is to upgrade the web crawler to a multi-threaded implementation, allowing it to take advantage of multi-core architectures and increase throughput. By enhancing its performance, the new version will be able to visit more web pages in the same amount of time compared to the legacy version. Additionally, performance measurements will be conducted to validate the improvement.",
      architectureImage: null,
      learnings: {
        title: "Skills gained and learnings",
        items: [
          "HTML Parsing: Used jsoup for efficient web data extraction",
          "JSON Handling: Worked with Jackson for processing JSON data",
          "Dependency Injection: Implemented Guice to manage dependencies and improve code structure",
          "Project Management: Managed builds and dependencies using Maven",
          "Unit Testing: Wrote and executed tests with JUnit 5 for reliable code",
          "Assertions: Utilized Truth for clear and expressive test validations",
        ],
      },
    },
    {
      title: "Backend System for a Car Website",
      description:
        "In this project, I leveraged my expertise in Spring Boot, APIs, documentation, and testing to develop a Vehicles API for managing vehicle inventory. The Vehicles API performs CRUD operations (Create, Read, Update, Delete) for vehicle details like make, model, and color, while also integrating with external APIs to fetch location and pricing data. I implemented a RESTful API for the Vehicles system and converted the Pricing Service API into a microservice. By the end of the project, the application is capable of interacting with other services and can be accessed through Swagger-based API documentation.",
      architectureImage: null,
      learnings: {
        title: "Skills gained and learnings",
        items: [
          "Microservices: Converted the Pricing Service into a microservice using Spring Data REST",
          "Service Discovery: Set up a Eureka server for service registration and communication",
          "CRUD Operations: Built a Vehicles API that supports Create, Read, Update, and Delete functions",
          "API Integration: Integrated external APIs (Boogle Maps and Pricing Service) for location and pricing data",
          "Unit Testing: Implemented comprehensive tests for CRUD operations and Pricing Service",
          "API Documentation: Used Swagger to document and interact with the Vehicles API",
          "Dependency Management: Managed project dependencies with Maven for smooth builds",
        ],
      },
    },
  ];

  return (
    <div className="text-white bg-[#141416] pt-16">
      <Header />
      <div className="  text-white py-12 font-body">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Homepage
          </Link>
          <h1 className="text-4xl font-bold mb-12 font-title">
            Cognizant Java Full Stack Developer
          </h1>

          <section>
            <h2 className="text-2xl font-bold mb-8 font-title">
              Skills Applied on Practical Projects
            </h2>
            <div className="space-y-12">
              {projects.map((project, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-xl font-semibold font-title">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed max-w-screen-md">
                    {project.description}
                  </p>
                  {project.architectureImage && (
                    <img src={project.architectureImage} />
                  )}
                  {project.learnings && (
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold mb-4 font-title">
                        {project.learnings.title}
                      </h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-300">
                        {project.learnings.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
          <section >
            <h2 className="text-2xl font-bold mb-8 font-title mt-8">
              Skills Gained
            </h2>
            <div className="space-y-8">
              {skillSections.map((section, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-xl font-semibold font-title">
                    {section.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {section.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-500 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseContent;
