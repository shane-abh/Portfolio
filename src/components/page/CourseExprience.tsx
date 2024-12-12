import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";

const CourseExprience = () => {
  return (
    <section id="projects" className=" relative py-20">
      <div className="container mx-auto px-6 relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center font-title">
          Course Experience
        </h2>

        <div className="space-y-0 ">
          <Link
            to={`/CognnizantJavaFullStackPathway`}
            className="flex flex-col items-center gap-8 w-3/4 mx-auto"
          >
            <CourseCard />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CourseExprience;
