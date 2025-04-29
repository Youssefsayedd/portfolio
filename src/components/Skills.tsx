import React from 'react';

interface SkillProps {
  name: string;
  level: number;
  color: string;
}

const SkillBar: React.FC<SkillProps> = ({ name, level, color }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
        <span className="text-gray-600 dark:text-gray-400 text-sm">{level}%</span>
      </div>
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full ${color}`} 
          style={{ width: `${level}%`, transition: 'width 1s ease-in-out' }}
        ></div>
      </div>
    </div>
  );
};

interface TechSkillProps {
  name: string;
  icon: string;
}

const TechSkill: React.FC<TechSkillProps> = ({ name, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transition-transform hover:scale-105">
      <img src={icon} alt={name} className="w-16 h-16 mb-3" />
      <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
    </div>
  );
};

const Skills: React.FC = () => {
  const skillsData = [
    { name: 'HTML & CSS', level: 90, color: 'bg-blue-600 dark:bg-blue-500' },
    { name: 'JavaScript', level: 95, color: 'bg-yellow-500 dark:bg-yellow-600' },
    { name: 'React', level: 85, color: 'bg-cyan-500 dark:bg-cyan-600' },
    { name: 'TypeScript', level: 60, color: 'bg-blue-500 dark:bg-blue-600' },
    { name: 'Node.js', level: 70, color: 'bg-green-600 dark:bg-green-700' },
    { name: 'UI/UX Design', level: 75, color: 'bg-purple-500 dark:bg-purple-600' },
  ];

  const techStack = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the technologies and tools I work with on a regular basis.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/2 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Technical Skills</h3>
            {skillsData.map((skill, index) => (
              <SkillBar 
                key={index} 
                name={skill.name} 
                level={skill.level} 
                color={skill.color} 
              />
            ))}
          </div>

          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Tech Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {techStack.map((tech, index) => (
                <TechSkill 
                  key={index} 
                  name={tech.name} 
                  icon={tech.icon} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;