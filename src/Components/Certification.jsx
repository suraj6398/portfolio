import React from "react";

const certifications = [
  {
    title: "Introduction to ReactJS",
    platform: "Great Learning Academy",
    platformLogo:
      "https://d1fdloi71mui9q.cloudfront.net/wpmuQ3EaRHeEFgOMOaJQ_convert.png",
    description:
      "Completed the Introduction to ReactJS certification, covering the fundamentals of React including components, state management, event handling, hooks, and routing.",
    link: "https://www.mygreatlearning.com/certificate/QKLTTHKK",
    outcomes: [
      "Understood ReactJS fundamentals and JSX",
      "Worked with Components & Props",
      "Managed State & Lifecycle methods",
      "Handled Events and Conditional Rendering",
      "Built and validated Forms",
      "Lifted state up to manage shared data",
      "Implemented basic navigation with React Router",
    ],
    skills: [
      "ReactJS",
      "JSX",
      "Components & Props",
      "State & Lifecycle",
      "Event Handling",
      "Conditional Rendering",
      "Forms in React",
      "React Hooks",
      "React Router",
    ],
  },
];

const CertCard = ({ cert }) => {
  return (
    <div className="relative bg-[#111] rounded-xl p-6 md:p-8 shadow-lg border border-gray-800 hover:scale-105 hover:shadow-2xl transform transition duration-300 animate-fadeInUp">
      <div className="flex justify-between items-center mb-4">
        {cert.platformLogo && (
          <img
            src={cert.platformLogo}
            alt={cert.platform}
            className="h-10 object-contain"
          />
        )}
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-sm font-medium bg-green-600 text-white rounded-lg shadow hover:bg-green-500 transition"
          aria-label={`View ${cert.title} Certificate`}
        >
        View Certificate
        </a>
      </div>

      <h2 className="text-2xl font-bold text-white">{cert.title}</h2>
      <p className="text-green-500 mt-1">{cert.platform}</p>

      <p className="text-gray-300 mt-4">{cert.description}</p>

      <h3 className="text-white font-semibold mt-6 mb-3">
        Key Learning Outcomes:
      </h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300 text-sm">
        {cert.outcomes.map((item, idx) => (
          <li key={idx}>✅ {item}</li>
        ))}
      </ul>

      {/* Skills */}
      <h3 className="text-white font-semibold mt-6 mb-3">Skills Acquired:</h3>
      <div className="flex flex-wrap gap-2">
        {cert.skills.map((skill, idx) => (
          <span
            key={idx}
            className="bg-green-700 text-white px-3 py-1 rounded-full text-xs"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

// Main Certifications Component
const Certifications = () => {
  return (
    <div id="certification" className="min-h-screen w-full bg-black px-4 py-12">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        Professional Certifications
        <span className="block w-40 h-1 bg-cyan-400 mx-auto mt-3 rounded"></span>
      </h1>

      {/* Certifications Grid */}
      <div className="flex flex-col space-y-10 max-w-5xl mx-auto">
        {certifications.map((cert, index) => (
          <CertCard key={index} cert={cert} />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
