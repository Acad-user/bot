import React from 'react';
import { Droplet } from 'lucide-react';

const Header = () => {
  const navItems = [
    'Home', 'Techniques', 'Case Studies', 'Forum', 'Contact', 'Gallery',
    'Workshops', 'Challenges', 'Profile', 'Course', 'Articles', 'AI Bot'
  ];

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Droplet className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Jal Sanjeevni</h1>
          </div>
          <nav className="hidden lg:block">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="hover:text-blue-200 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;