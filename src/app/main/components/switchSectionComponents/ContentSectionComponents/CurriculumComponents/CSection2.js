import React from "react";

const CSection2 = ({ data }) => {
  const courseData = data.courseData;

  return (
    <div className="space-y-10 px-4 md:px-12 py-12 text-black bg-white">
      <h2 className="text-3xl font-bold text-center">Term-wise Curriculum</h2>

      {courseData.map((term, index) => (
        <div key={index} className="space-y-6">
          <h3 className="text-2xl font-semibold text-indigo-700">Term {term.term}</h3>

          {/* In-Class Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">In-Class Learning</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {term.inClass?.categories?.map((category, catIdx) => (
                <div key={catIdx} className="border rounded-lg p-4 shadow-sm">
                  <h5 className="font-bold text-md mb-2">{category.title}</h5>
                  <ul className="list-disc pl-4 text-sm space-y-1">
                    {category.courses.map((course, courseIdx) => (
                      <li key={courseIdx}>{course}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Out-of-Class Section */}
          {term.outClass?.length > 0 && (
            <div>
              <h4 className="text-xl font-semibold mb-4">Out-of-Class Projects</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {term.outClass.map((project, projIdx) => (
                  <div
                    key={projIdx}
                    className="border rounded-lg p-4 shadow-md flex flex-col items-start"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <h5 className="text-lg font-bold mb-2">{project.title}</h5>
                    <p className="text-sm mb-2">{project.description}</p>
                    {project.additionalText && (
                      <a
                        href="#"
                        className="text-blue-600 text-sm underline hover:text-blue-800"
                      >
                        {project.additionalText}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CSection2;
