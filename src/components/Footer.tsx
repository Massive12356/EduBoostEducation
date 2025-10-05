import React from 'react';
import { Link } from 'react-router-dom';
import {Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import logo from '../images/altLogo.png'

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white alanSas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="flex items-center space-x-2 text-xl font-bold text-primary-400 mb-4"
              aria-label="EduBoost Home"
            >
              <img
                src={logo}
                alt=""
                className="h-12 w-30 md:w-40 object-contain transition-transform duration-300"
              />
            </Link>
            <p className="text-gray-300 mb-4">
              Transforming education through innovative technology solutions that bridge the digital
              divide and empower students, teachers, and schools.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <Link
                to="/our-solution"
                className="block text-gray-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
                aria-label="Learn about our solutions"
              >
                Our Solution
              </Link>
              <Link
                to="/our-impact"
                className="block text-gray-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
                aria-label="See our impact"
              >
                Our Impact
              </Link>
              <Link
                to="/partner-with-us"
                className="block text-gray-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
                aria-label="Partner with us"
              >
                Partner with Us
              </Link>
              <Link
                to="/about-us"
                className="block text-gray-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
                aria-label="About us"
              >
                About Us
              </Link>
            </nav>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <nav className="space-y-2">
              <Link
                to="/ecosystem/ict-training"
                className="block text-gray-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
                aria-label="ICT Training Facilities"
              >
                ICT Training Facilities
              </Link>
              <Link
                to="/ecosystem/teacher-capacity"
                className="block text-gray-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
                aria-label="Teacher Capacity Building"
              >
                Teacher Capacity Building
              </Link>
              <Link
                to="/ecosystem/student-digital-skills"
                className="block text-gray-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
                aria-label="Student Digital Skills Training"
              >
                Student Digital Skills
              </Link>
              <Link
                to="/ecosystem/school-management"
                className="block text-gray-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
                aria-label="School Management System"
              >
                School Management System
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href="mailto:info@eduboost.com"
                  className="text-gray-300 hover:text-primary-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
                  aria-label="Email us"
                >
                  info@eduboost.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-300 hover:text-primary-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
                  aria-label="Call us"
                >
                  +1 (234) 567-8900
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <address className="text-gray-300 not-italic">
                  123 Kwame Nkrumah Street
                  <br />
                  Innovation District
                  <br />
                  Airport City, Accra Ghana
                </address>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 EduBoost. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-primary-400 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary-400 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
              aria-label="Terms of Service"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;