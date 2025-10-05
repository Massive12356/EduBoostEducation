import  { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sun, Moon, GraduationCap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import logo from '../images/mainLogo.png'


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    {
      name: 'Our Solution',
      path: '/our-solution',
      dropdown: [
        { name: 'ICT Training Facilities', path: '/ecosystem/ict-training' },
        { name: 'Teacher Capacity Building', path: '/ecosystem/teacher-capacity' },
        { name: 'Student Digital Skills Training', path: '/ecosystem/student-digital-skills' },
        { name: 'School Management System', path: '/ecosystem/school-management' },
      ],
    },
    { name: 'Our Impact', path: '/our-impact' },
    // { name: 'Partner with Us', path: '/partner-with-us' },
    { name: 'Blog / Insights', path: '/blog' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-[#fffae6eb] shadow-sm border-b border-gray-200  sticky top-0 z-50 alanSas"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="EduBoost Logo"
              className="h-10 w-30 md:h-12 md:w-40  md:object-contain object-center transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center  space-x-4 ">
            {navigationItems.map(item => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <button
                      className={`flex items-center space-x-1 px-3 py-2 text-base font-medium rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
                        isActive(item.path)
                          ? 'text-[#f503f5]'
                          : 'text-black hover:text-primary-600 dark:hover:text-primary-400'
                      }`}
                      aria-label={`${item.name} menu`}
                      aria-expanded={isDropdownOpen}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 w-64 bg-[#fffae6eb]  rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-1"
                        >
                          {item.dropdown.map(dropdownItem => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.path}
                              className={`block px-4 py-2 text-sm transition-colors focus:outline-none focus-visible:bg-gray-100 dark:focus-visible:bg-gray-700 ${
                                isActive(dropdownItem.path)
                                  ? 'text-[#f503f5] bg-primary-50 dark:bg-primary-900/20'
                                  : 'text-black hover:text-[#f503f5]'
                              }`}
                              aria-label={`Navigate to ${dropdownItem.name}`}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 text-base font-medium rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
                      isActive(item.path)
                        ? 'text-[#f503f5] font-semibold'
                        : 'text-black hover:text-[#f503f5]'
                    }`}
                    aria-label={`Navigate to ${item.name}`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className=" hidden md:hidden p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              aria-label={`${isMenuOpen ? 'Close' : 'Open'} main menu`}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden  absolute bg-white w-[70%] p-3 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigationItems.map(item => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className={`flex justify-between items-center w-full px-3 py-2 text-base font-medium rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
                            isActive(item.path)
                              ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                              : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                          }`}
                          aria-label={`${item.name} menu`}
                          aria-expanded={isDropdownOpen}
                        >
                          {item.name}
                          <ChevronDown
                            className={`w-4 h-4 transform transition-transform ${
                              isDropdownOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {isDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.2 }}
                              className="absolute left-0 top-35 mt-1 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-1 z-50"
                            >
                              {item.dropdown.map(dropdownItem => (
                                <Link
                                  key={dropdownItem.name}
                                  to={dropdownItem.path}
                                  className={`block px-4 py-2 text-sm transition-colors focus:outline-none focus-visible:bg-gray-100 dark:focus-visible:bg-gray-700 ${
                                    isActive(dropdownItem.path)
                                      ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                                      : 'text-black dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                                  }`}
                                  aria-label={`Navigate to ${dropdownItem.name}`}
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-3 py-2 text-base font-medium rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
                          isActive(item.path)
                            ? 'text- dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                            : 'text-black hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                        aria-label={`Navigate to ${item.name}`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;