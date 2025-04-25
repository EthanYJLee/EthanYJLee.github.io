// import React from "react";
// import { Code, Server, Database, Cloud, Users } from "lucide-react"; // 예쁜 아이콘 사용

// // const techStack = [
// //   {
// //     category: "Frontend",
// //     icon: <Code size={28} className="text-blue-500" />,
// //     tools: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
// //   },
// //   {
// //     category: "Backend",
// //     icon: <Server size={28} className="text-green-500" />,
// //     tools: ["Java (Spring Boot)", "Python (Flask)", "Node.js"],
// //   },
// //   {
// //     category: "Database",
// //     icon: <Database size={28} className="text-yellow-500" />,
// //     tools: ["MySQL", "MongoDB", "Firebase"],
// //   },
// //   {
// //     category: "Server / Deployment",
// //     icon: <Cloud size={28} className="text-purple-500" />,
// //     tools: ["AWS EC2", "Vercel", "Nginx"],
// //   },
// //   {
// //     category: "Collaboration",
// //     icon: <Users size={28} className="text-pink-500" />,
// //     tools: ["GitHub", "Notion", "Figma", "Slack"],
// //   },
// // ];
// const techStack = {
//   Backend: ["Java / Spring Boot", "Spring Data JPA"],
//   "DB / Cache": ["MySQL", "Redis"],
//   "Server / Deployment": [
//     "Apache Tomcat",
//     "AWS EC2 / AWS RDS",
//     "Load Balancer / Auto Scaling Group",
//   ],
//   OS: ["Linux (Ubuntu 20.04 LTS)"],
//   "Tools / Test Code / Performance Test": [
//     "IntelliJ IDEA / Eclipse / Visual Studio Code",
//     "Junit5 / Mockito",
//     "nGrinder",
//   ],
//   Collaborations: ["Git", "Slack / Notion / Discord"],
// };

// const Tech = () => {
//   return (
//     <section id="tech">
//       {/* <div className="tech__inner"> */}
//       <h2 className="tech__title">
//         <strong>Tech Stack</strong>
//       </h2>
//       {/* <div className="tech__wrap"> */}
//       {/* <div className="tech__item">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
//               {techStack.map(({ category, icon, tools }, index) => (
//                 <div
//                   key={index}
//                   className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-start space-y-3 transition-transform hover:scale-[1.02]"
//                 >
//                   <div className="flex items-center space-x-3 mb-2">
//                     {icon}
//                     <h3 className="text-xl font-semibold">{category}</h3>
//                   </div>
//                   <ul className="list-disc list-inside text-gray-700">
//                     {tools.map((tool, idx) => (
//                       <li key={idx}>{tool}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div> */}
//       <div className="grid md:grid-cols-2 gap-8">
//         {Object.entries(techStack).map(([category, items]) => (
//           <div key={category}>
//             <h3 className="text-xl font-semibold mb-2">{category}</h3>
//             <ul className="list-disc list-inside text-gray-800 space-y-1">
//               {items.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//         {/* </div> */}
//       </div>
//       {/* </div> */}
//     </section>
//   );
// };

// export default Tech;

import React from "react";
import {
  FaJava,
  FaAws,
  FaLinux,
  FaGitAlt,
  FaSlack,
  FaDatabase,
  FaServer,
  FaTools,
  FaJs,
} from "react-icons/fa";
import {
  SiSpring,
  SiMysql,
  SiRedis,
  SiJunit5,
  SiIntellijidea,
} from "react-icons/si";

const techStack = [
  {
    category: "Backend",
    icon: <FaJava className="text-orange-500 text-2xl" />,
    items: ["Java / Spring Boot", "Python / Flask, FastAPI"],
  },
  {
    category: "Frontend",
    icon: <FaJs className="text-red-500 text-2xl" />,
    items: ["HTML / CSS", "Javascript / React", "Dart / Flutter"],
  },
  {
    category: "DB",
    icon: <FaDatabase className="text-blue-500 text-2xl" />,
    items: ["MySQL / MariaDB", "MongoDB / Firebase", "PostgreSQL", "SQLite"],
  },
  {
    category: "Server / Deployment",
    icon: <FaServer className="text-green-500 text-2xl" />,
    items: ["Nginx", "Docker"],
  },
  {
    category: "OS",
    icon: <FaLinux className="text-gray-800 text-2xl" />,
    items: ["Linux (Ubuntu 20.04 LTS)", "Windows", "macOS"],
  },
  {
    category: "Tools",
    icon: <FaTools className="text-yellow-500 text-2xl" />,
    items: [
      "Eclipse / STS / VS Code / Xcode",
      "Git",
      "Postman",
      "Slack / Notion / Zoom / Figma",
    ],
  },
];

const Tech = () => {
  return (
    // <section className="px-4 py-10 bg-gray-50">
    <section id="tech">
      <div className="tech__inner">
        <h2 className="tech__title">
          <strong>Tech Stack</strong>
        </h2>
        <div className="max-w-8xl mx-auto">
          {/* <h2 className="text-4xl font-bold text-center mb-10 border-b pb-4">
            기술 스택
          </h2> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map(({ category, icon, items }) => (
              <div
                key={category}
                className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  {icon}
                  <h3 className="text-xl font-semibold text-indigo-700">
                    {category}
                  </h3>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-1 pl-1">
                  {items.map((item, index) => (
                    <li key={index} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tech;
