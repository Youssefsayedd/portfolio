import React from 'react';
import { Github as GitHub, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-28 lg:pt-36 pb-20 lg:pb-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 opacity-60 dark:opacity-100 z-0"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] dark:opacity-[0.05] z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 lg:pr-10">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400">Youssef Sayed</span>
                <span className="animate-wave inline-block ml-2">👋</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6">
                Front-end Developer & UI Designer
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
                I create engaging web experiences with clean, efficient code and thoughtful design. 
                Passionate about crafting interfaces that are both beautiful and functional.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <a href="#contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg">
                  Contact Me
                </a>
                <a href="#projects" className="px-6 py-3 bg-transparent border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 font-medium rounded-lg transition-colors">
                  View My Work
                </a>
              </div>
              
              <div className="flex items-center space-x-4">
                <a href="https://github.com/Youssefsayedd" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full transition-colors">
                  <GitHub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/youssef-sayed-a15123241/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:youssefsayed2352002@gmail.com" className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 lg:pl-10 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
              <div className="absolute inset-0 bg-blue-600 dark:bg-blue-500 rounded-full opacity-20 blur-3xl scale-95 animate-pulse"></div>
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <img 
                  src="/Youssef.jpeg" 
                  alt="Youssef Sayed"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;