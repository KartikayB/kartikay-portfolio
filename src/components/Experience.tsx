import React from 'react';

const experiences = [
  {
    title: "Data Scientist / Software Engineer - II",
    company: "Here Technologies",
    location: "Mumbai, India",
    period: "Aug 2023 - Present",
    techStack: [
    { name: "Python (Async, FastAPI)", color: "blue" },
    { name: "AWS (Lambda, S3, Sagemaker)", color: "orange" },
    { name: "SQL & NoSQL (MySQL, MongoDB)", color: "green" },
    { name: "Git (GitHub, GitLab)", color: "black" },
    { name: "CI/CD", color: "red" },
    { name: "Docker", color: "skyblue" },
    { name: "Data Engineering", color: "teal" },
    { name: "Data Science", color: "darkgray" },
    { name: "Machine Learning", color: "gold" },
    { name: "Here Maps SDK", color: "purple" },
    { name: "Adaptability", color: "lightgreen" },
    { name: "Problem Solving", color: "lightcoral" },
    { name: "Leadership", color: "steelblue" },
    ],
    description: [
        "Delivered 3 concurrent projects by building Python libraries and FastAPI tools to automate feature engineering, data validation, and experiment tracking",
        "Enhanced geospatial and EV data pipelines with custom filters and transformations to boost performance and reliability",
        "Analyzed router-level data to identify travel behavior patterns, segment trips, and detect anomalies for feature generation",
        "Designed cost-efficient AWS architectures and optimized GitLab CI/CD workflows, reducing costs by 30% and improving deployment speed",
        "Built interactive geospatial visualizations using Here Maps SDK to improve data exploration and interpretability",
        "Led end-to-end project delivery, mentored interns, and actively contributed to team development"
      ]
  },
  {
    title: "Software Engineer",
    company: "Postman",
    location: "Bangalore, India",
    period: "Jun 2022 - Aug 2023",
    techStack: [
        { name: "JavaScript (Node.js, React)", color: "yellow" },
        { name: "API Monitoring", color: "blue" },
        { name: "Performance Testing", color: "red" },
        { name: "Observability", color: "purple" },
        { name: "API Development", color: "blue" },
        { name: "Python", color: "blue" },
        { name: "AWS ", color: "orange" },
        { name: "CI/CD", color: "gray" },
        { name: "Communication", color: "steelblue" },
        { name: "Collaboration", color: "lightgreen" }
    ],
    description: [
      "Designed and optimized a high-scale observability solution for monitoring and analyzing API performance",
      "Built a GUI-based API monitoring tool achieving 90% internal adoption, improving API health tracking across teams",
      "Strengthened system resilience through Performance Testing & Compatibility Matrix analysis, ensuring 5000+ RPM handling capacity"
    ]
  },
  {
    title: "Data Engineer, Intern",
    company: "Postman",
    location: "Bangalore, India",
    period: "Sept 2021 - Jun 2022",
    techStack: [
        { name: "Python", color: "blue" },
        { name: "SQL (MySQL)", color: "green" },
        { name: "Looker", color: "orange" },
        { name: "Data Pipelines", color: "teal" },
        { name: "Slack Integration", color: "purple" },
        { name: "Automation", color: "gray" },
        { name: "Problem Solving", color: "lightcoral" },
        { name: "Proactive Communication", color: "steelblue" }
    ],
    description: [
      "Streamlined analytics workflows by transitioning from manual MySQL analysis to automated Looker pipelines",
      "Developed data transformation jobs aggregating data from multiple sources for analysis and reporting",
      "Built a data validation tool for automated Looker dashboard query analysis with Slack notifications"
    ]
  }
];

const getTagColor = (color: string) => {
  const colors = {
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    green: "bg-green-500/10 text-green-400 border-green-500/20",
    red: "bg-red-500/10 text-red-400 border-red-500/20",
    yellow: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    orange: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    teal: "bg-teal-500/10 text-teal-400 border-teal-500/20"
  };
  return colors[color as keyof typeof colors] || colors.blue;
};

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-geist">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">&lt;</span>
          Skills & Experience
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">/&gt;</span>
        </h2>

        {/* Tech stack description */}
        <p className="text-gray-400 text-center mb-12 font-geist text-sm">
          A combination of technical expertise and professional experience
        </p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="group bg-[#1a1a1a]/80 rounded-xl p-6 backdrop-blur-sm border border-blue-500/20 transition-all duration-300 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-blue-400 font-geist group-hover:text-blue-300 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-gray-300 mt-1 font-geist flex items-center gap-2">
                    {exp.company} 
                    <span className="text-gray-500">•</span> 
                    <span className="text-gray-400">{exp.location}</span>
                  </p>
                </div>
                <p className="text-sm text-gray-400 mt-2 md:mt-0 font-geist-mono bg-blue-500/5 px-3 py-1 rounded-full">
                  {exp.period}
                </p>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 rounded-full text-xs font-geist-mono border ${getTagColor(tech.color)} transition-all duration-300 hover:scale-105`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>

              <ul className="space-y-3">
                {exp.description.map((item, idx) => (
                  <li 
                    key={idx} 
                    className="text-gray-300 flex items-start text-sm leading-relaxed group/item hover:text-gray-200 transition-colors"
                  >
                    <span className="text-blue-400 mr-2 mt-1.5 group-hover/item:text-blue-300">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 