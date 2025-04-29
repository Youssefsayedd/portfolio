import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold">
              Youssef<span className="text-blue-500">.</span>
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
              Front-end developer specializing in creating beautiful, responsive web applications with modern technologies.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">About</a></li>
                <li><a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors">Skills</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://github.com/Youssefsayedd" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/youssef-sayed-a15123241/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:youssefsayed2352002@gmail.com" 
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Youssef Sayed. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center">
            Made with <Heart size={16} className="mx-1 text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;