import React from 'react';
import { Briefcase, GraduationCap, MapPin, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about my journey, experience, and what drives me as a developer.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Who I Am</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              I'm a passionate front-end developer with a focus on creating clean, efficient, and user-friendly web experiences. My journey in web development started during my university years, and I've been honing my skills ever since.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              I love the process of transforming ideas and designs into fully functional websites and applications. My approach combines attention to detail, creative problem-solving, and a commitment to writing maintainable code.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              When I'm not coding, you might find me exploring new technologies, contributing to open-source projects, or enhancing my skills through online courses and tutorials.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <MapPin className="text-blue-600 dark:text-blue-400 mr-2" size={20} />
                <span className="text-gray-700 dark:text-gray-300">Cairo, Egypt</span>
              </div>
              <div className="flex items-center">
                <Briefcase className="text-blue-600 dark:text-blue-400 mr-2" size={20} />
                <span className="text-gray-700 dark:text-gray-300">Front-end Developer</span>
              </div>
              <div className="flex items-center">
                <GraduationCap className="text-blue-600 dark:text-blue-400 mr-2" size={20} />
                <span className="text-gray-700 dark:text-gray-300">Computer Science</span>
              </div>
              <div className="flex items-center">
                <Clock className="text-blue-600 dark:text-blue-400 mr-2" size={20} />
                <span className="text-gray-700 dark:text-gray-300">1+ Years Experience</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Experience & Education</h3>
              
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400">
                  <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-[9px] top-0"></div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Front-end Developer</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">Freelance</p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm mb-2">2024 - Present</p>
                  <p className="text-gray-600 dark:text-gray-400">Developing responsive, user-friendly web applications using modern frameworks and libraries.</p>
                </div>

                <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400">
                  <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-[9px] top-0"></div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Bachelor's Degree in Computer Science</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">Cairo University</p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm mb-2">2020 - 2024</p>
                  <p className="text-gray-600 dark:text-gray-400">Focused on software engineering, algorithms, and web development.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;