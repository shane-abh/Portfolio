import expense_categorizer_demo from "../assets/video/Java Expense Categorizer Project - 720p.mp4";
import expense_categorizer_img from "../assets/projects/ExpenseCategorizer.png";
import expense_categorizer_architecture from "../assets/projects/Expense_categorization_arch.png";
import greatHomes from "../assets/projects/great-homes.png";
import employeeManagementSystem from "../assets/projects/EMS.png";
import EMSArch from "../assets/projects/EMS_arch.png";
import greatHomes_Arch from "../assets/projects/GreatHomes-Arch.png";

const projects = [
  {
    id: 1,
    title: "Expense Categorization API",
    description:
      "An AI-driven tool that automatically categorizes expenses with precision, saving time and eliminating manual errors.",

    imageUrl: expense_categorizer_img,
    video: expense_categorizer_demo,
    overview: (
      <p className="max-w-screen-md">
        Smart Finance is an AI-driven expense categorization tool designed to
        streamline the process of classifying expenses based on descriptions and
        amounts. Built with a <strong>Java Spring backend</strong> and a React
        frontend, Smart Finance harnesses the power of{" "}
        <strong>Llama 3.2b</strong>, a large language model, to deliver accurate
        and context-sensitive categorization without relying on manually defined
        rules or keywords. This tool is suited for individuals and businesses
        seeking a smarter, more efficient approach to managing expenses.",
      </p>
    ),
    problemStatement: (
      <div className="max-w-screen-md">
        <p className="mb-4 ">
          Categorizing expenses manually can be tedious and prone to error,
          particularly when descriptions are vague or inconsistent. Traditional
          methods often require hardcoded keywords or rigid rules, which can be
          limiting and inaccurate.
        </p>
        <p className="mb-4">
          Smart Finance addresses this issue by providing a
          machine-learning-based solution that understands context and
          categorizes expenses accordingly.
        </p>
        <p>Smart Finance solves the following issues:</p>
        <ul className="list-disc mx-4 my-4">
          <li>
            The need for manually defining keywords and rules, which can be
            inflexible and inaccurate.
          </li>
          <li>
            Difficulty in categorizing expenses with inconsistent or vague
            descriptions.
          </li>
          <li>
            The time-consuming nature of categorizing expenses individually,
            especially for bulk transactions.
          </li>
          <li>
            Potential errors in manual categorization, which can affect
            financial reporting accuracy.
          </li>
        </ul>
      </div>
    ),
    techStack: ["Java Spring boot", "llama 3.2b", "Typescript", "React"],
    architecture: expense_categorizer_architecture,
    features: [
      "Users can enter individual expense descriptions and amounts for immediate categorization.",
      "Supports CSV file uploads for batch categorization, enabling users to process multiple expenses at once.",
      "Utilizes the Llama 3.2b model to interpret the context behind descriptions, eliminating the need for static keywords",
      "Adapts to various expense types, enhancing categorization accuracy with natural language processing (NLP)",
    ],
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Great Homes",
    description:
      "An all-in-one real estate platform to find properties, calculate mortgages, and manage listings effortlessly. ",

    imageUrl: greatHomes,
    video: null,

    overview: (
      <div>
        <p>
          We've designed <strong>Great Homes</strong> to tackle these challenges
          head-on. It's a platform that brings everything you need to find,
          finance, and finalize your home purchase, all in one place.
        </p>

        <p>
          With <strong>Great Homes</strong>, you can search for properties,
          calculate your mortgage, contact landlords, and manage your Wishlist
          all within a single, user-friendly platform. No more jumping between
          different websites or apps. Everything you need is right here, making
          your home-buying journey smoother and more enjoyable.
        </p>

        <p>
          Our goal is to make this process as stress-free as possible. By
          combining property listings with powerful financial tools and a
          streamlined contact process, <strong>Great Homes</strong> gives you
          confidence in every decision you make.
        </p>

        <p>
          Whether you're a first-time buyer or a seasoned investor,{" "}
          <strong>Great Homes</strong> is designed to meet your needs. We've
          integrated cutting-edge technology with a user-friendly design to save
          you time and empower you to make informed, confident choices in the
          real estate market.
        </p>
      </div>
    ),
    problemStatement: (
      <div>
        <h3>Let's Talk About the Current Home-Buying Experience</h3>

        <h4 className=" font-semibold text-lg my-2">A Fragmented Journey:</h4>
        <p>
          As a homebuyer, you've probably felt the frustration of navigating
          through multiple websites and tools just to find the right property.
          You search for homes on one platform, then jump to another to
          calculate mortgage payments, and perhaps even a third service to keep
          track of your favorites. This disconnected process not only takes up
          your time but also adds unnecessary stress to what should be an
          exciting journey.
        </p>

        <h4 className=" font-semibold text-lg my-2">
          Lack of Seamless Integration:
        </h4>
        <p>
          Now, imagine trying to figure out how much house you can afford, but
          having to leave the property listing site to do so. And when you
          finally find a property you like, you need yet another tool to contact
          the landlord or manage your wishlist. This lack of integration is not
          only frustrating but also increases the risk of errors and missed
          opportunities.
        </p>

        <h4 className=" font-semibold text-lg my-2">
          The Challenges You Face:
        </h4>
        <p>
          The real estate market is full of options, and it's easy to feel
          overwhelmed without the right tools to filter and analyze your
          choices. You need a solution that not only helps you find the perfect
          property but also guides you through the financial aspects of buying a
          home.
        </p>
      </div>
    ),
    techStack: [
      "React.js",
      "MongoDB",
      "Firebase",
      "Redux",
      "Express",
      "Node.js",
    ],
    architecture: greatHomes_Arch,
    features: [
      "Search and filter properties",
      "Mortgage calculator for properties on sale",
      "Contact landlord via email",
      "Social sign in",
      "Create, update, and delete your listings",
    ],
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Employee Management System",
    description : "A centralized solution for managing employee data, tracking performance, and streamlining HR processes with ease.",
    imageUrl: employeeManagementSystem,
    video: null,
    overview: (
      <div className="">
        <p>
          We've built the <strong>Employee Management System (EMS)</strong> to
          tackle the common challenges of managing employee data head-on. It's a
          comprehensive platform that centralizes everything you need to track,
          manage, and update employee information—all in one place.
        </p>

        <p>
          With the EMS, you can easily add and manage employee records, update
          their details, track performance, and securely store all relevant
          information in real-time. No more juggling between multiple tools or
          dealing with scattered data. Everything you need is right here, in a
          single, user-friendly interface that makes managing your workforce
          simpler and more efficient.
        </p>

        <p>
          Our goal is to make employee management as seamless as possible. By
          integrating a powerful backend with a user-friendly frontend, the EMS
          gives you the confidence to make informed decisions about your
          workforce. Whether you're handling hiring, performance tracking, or
          data updates, this system empowers you to stay organized and in
          control.
        </p>

        <p>
          Whether you're a small business owner or managing a large team, the{" "}
          <strong>Employee Management System</strong> is designed to meet your
          needs. We've combined cutting-edge technology with an intuitive design
          to help you save time, eliminate errors, and maintain up-to-date
          employee information effortlessly.
        </p>
      </div>
    ),
    problemStatement: (
      <div>
        <h3 className="font-bold text-xl py-4">Problem:</h3>
        <p>
          Managing employee data manually or through spreadsheets can lead to
          inefficiencies, errors, and a lack of centralization. This makes it
          difficult for organizations to track employee information, such as
          contact details, roles, performance, and other relevant data, in a
          streamlined and secure manner. Without a robust system, there is also
          a lack of real-time updates, easy access to data, and a risk of data
          inconsistency across different departments.
        </p>

        <h3 className="font-bold text-xl py-4">Solution:</h3>
        <p>
          The <strong>Employee Management System</strong> solves this problem by
          providing a centralized platform where:
        </p>
        <ul className="list-disc m-4">
          <li>
            Employee data can be stored, accessed, and updated in real-time.
          </li>
          <li>
            The system uses <strong>MongoDB</strong> to store employee
            information, ensuring scalability and efficient data management.
          </li>
          <li>
            The backend, built with <strong>Node.js</strong> and{" "}
            <strong>Express</strong>, handles data management and business
            logic, allowing for secure access and manipulation of employee data.
          </li>
          <li>
            The frontend, built using <strong>React.js</strong>, provides a
            user-friendly interface for interacting with employee records.
          </li>
          <li>
            <strong>GraphQL</strong> is used for communication between the front
            and back ends, allowing efficient querying and real-time updates.
          </li>
        </ul>

        <p>
          This solution enhances data accuracy, provides easy access to employee
          information, and streamlines management tasks within an organization.
          It addresses common challenges such as data redundancy, slow updates,
          and difficulty in retrieving employee details.
        </p>
      </div>
    ),
    techStack: ["React", "MongoDB", "Bootstrap", "Node.js", "GraphQL"],
    architecture: EMSArch,
    features: [
      "Search and filter employees",
      "Create, update, and delete employees",
      "Check employees close to the retirement dates",
    ],
    githubUrl: "https://github.com",
  },
  // {
  //   id: 4,
  //   title: "Job Portal",
  //   imageUrl: "https://example.com/images/job-portal.jpg",
  //   overview:
  //     "A job portal connecting employers with potential job seekers, including resume parsing and job recommendation features.",
  //   problemStatement:
  //     "Job seekers often find it difficult to discover suitable jobs, and employers want to screen candidates effectively. A centralized job portal with intelligent filtering can address these issues.",
  //   techStack: ["Angular", "Spring Boot", "MySQL", "Elasticsearch"],
  //   architecture:
  //     "This project employs a layered architecture with Spring Boot for backend services, MySQL for data storage, and Elasticsearch for fast job searches.",
  //   features: [
  //     "Job search with advanced filters",
  //     "Resume upload and parsing",
  //     "Automated job recommendations",
  //     "Employer dashboard for posting jobs",
  //   ],
  //   githubUrl: "https://github.com",
  // },
  // {
  //   id: 5,
  //   title: "Travel Booking System",
  //   imageUrl: "https://example.com/images/travel-booking.jpg",
  //   overview:
  //     "A platform to book flights, hotels, and rental cars, with an integrated itinerary planner.",
  //   problemStatement:
  //     "Travelers need a unified platform to plan their trips, book accommodations, and manage itineraries. An all-in-one platform simplifies the booking process.",
  //   techStack: ["React", "Ruby on Rails", "PostgreSQL", "AWS"],
  //   architecture:
  //     "The system follows an MVC architecture with a Rails backend and a React frontend, hosted on AWS for scalability.",
  //   features: [
  //     "Flight, hotel, and car rental booking",
  //     "Dynamic pricing and availability updates",
  //     "Itinerary planner and reminders",
  //     "User reviews and recommendations",
  //   ],
  // },
];

export default projects;
