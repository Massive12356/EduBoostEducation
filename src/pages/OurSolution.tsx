import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Monitor,
  Users,
  BookOpen,
  Settings,
  ArrowRight,
  CheckCircle,
  BadgeCheck,
} from 'lucide-react';
import { Button } from '../components/Button';
import { ScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

const OurSolution: React.FC = () => {
  const solutions = [
    {
      icon: Monitor,
      title: "ICT Training Facilities",
      description: "State-of-the-art technology centers equipped with modern hardware and software for comprehensive digital literacy training.",
      features: ["Modern computer labs", "High-speed internet", "Latest software", "Technical support"],
      link: "/ecosystem/ict-training"
    },
    {
      icon: Users,
      title: "Teacher Capacity Building",
      description: "Professional development programs designed to enhance educators' digital teaching skills and pedagogical approaches.",
      features: ["Digital pedagogy training", "Curriculum development", "Assessment tools", "Ongoing support"],
      link: "/ecosystem/teacher-capacity"
    },
    {
      icon: BookOpen,
      title: "Student Digital Skills Training",
      description: "Engaging curriculum that prepares students for the digital economy with practical, real-world applications.",
      features: ["Coding & programming", "Digital literacy", "Creative tools", "Career preparation"],
      link: "/ecosystem/student-digital-skills"
    },
    {
      icon: Settings,
      title: "School Management System",
      description: "Comprehensive administrative platform that streamlines school operations and improves decision-making.",
      features: ["Student information system", "Grade management", "Communication tools", "Analytics dashboard"],
      link: "/ecosystem/school-management"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Solution - Comprehensive Educational Technology Ecosystem | EduBoost</title>
        <meta
          name="description"
          content="Discover EduBoost's integrated educational technology solutions: ICT training facilities, teacher capacity building, student digital skills training, and school management systems."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              The Complete Ecosystem for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                School Transformation
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Our four pillars work together to address the interconnected challenges of
              infrastructure, skills, and administration. This is what makes the Eduboost model
              effective and sustainable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Virtuous Cycle Section */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Headline */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                How Our Integrated Model Creates{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  Sustainable Impact
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Our approach creates a virtuous cycle: each step strengthens the next, leading to
                lasting improvements for schools, teachers, and students.
              </p>
            </div>

            {/* Graphic area */}
            <div className="flex flex-col items-center">
              {/* Example image placeholder */}
              <img
                src="/images/virtuous-cycle.png"
                alt="Virtuous Cycle Diagram"
                className="w-full max-w-4xl rounded-xl shadow-lg"
              />

              {/* Optional text description under graphic */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    ICT Center
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Modern facilities to anchor technology adoption.
                  </p>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    Teacher Training
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Empowering teachers with digital skills.
                  </p>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    Student Competency
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Building 21st-century skills for learners.
                  </p>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    System Efficiency (SMS)
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Streamlined school operations.
                  </p>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    Reinvested Leadership
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Continuous improvement and better outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Solutions Grid */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  Four-Pillar Approach
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Each component works synergistically to create lasting educational transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  {/* CheckBadge in upper right */}
                  <BadgeCheck className="absolute top-4 right-4 w-6 h-6 text-primary-600 dark:text-primary-400" />

                  <div className="flex items-center mb-6">
                    <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-xl mr-4">
                      <solution.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {solution.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-gray-600 dark:text-gray-300"
                        >
                          {/* Replace dot with icon */}
                          <CheckCircle className="w-5 h-5 text-secondary-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    variant="outline"
                    href={solution.link}
                    icon={ArrowRight}
                    iconPosition="right"
                    aria-label={`Learn more about ${solution.title}`}
                  >
                    Learn More
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Integration Benefits */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  The Power of{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                    Integration
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Unlike standalone solutions, our integrated ecosystem creates powerful synergies.
                  When all four pillars work together, the impact is exponentially greater than the
                  sum of their parts.
                </p>

                <div className="space-y-4">
                  {[
                    'Teachers trained in our facilities become better digital educators',
                    'Students learn from digitally competent teachers in modern environments',
                    'Schools manage everything efficiently through our integrated systems',
                    'Data-driven insights improve outcomes across all areas',
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-secondary-100 dark:bg-secondary-900 p-1 rounded-full mr-3 mt-1">
                        {/* glowing dot */}
                        <div className="w-2 h-2 bg-secondary-600 rounded-full shadow-[0_0_8px_theme(colors.secondary.600)] animate-pulse"></div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/8197497/pexels-photo-8197497.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Students and teachers collaborating with technology in a modern learning environment"
                  className="rounded-2xl shadow-xl w-full h-auto"
                  width="600"
                  height="400"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation>
        <section className="py-20 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Implement Our Complete Solution?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our integrated ecosystem can transform your educational institution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to='/contact-us'>
              <Button
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                aria-label="Schedule consultation"
                >
                Schedule Consultation
              </Button>
                </Link>
              <Button
                size="lg"
                aria-label="Download brochure"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </>
  );
};

export default OurSolution;