import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Monitor, Wifi, HardDrive, Headphones, Users, BookOpen, ArrowRight } from 'lucide-react';
import { Button } from '../../components/Button';
import { ScrollAnimation } from '../../hooks/useScrollAnimation';
import pic1 from '../../images/classroom-with-tables-chairs-sign-that-says-green-it.jpg'
import pic2 from '../../images/modern-office-with-empty-workstations.jpg'
import { Link } from 'react-router-dom';

const ICTTrainingFacilities: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>ICT Training Facilities - Modern Technology Centers | EduBoost</title>
        <meta
          name="description"
          content="State-of-the-art ICT training facilities equipped with modern hardware, high-speed internet, and comprehensive technical support for digital literacy education."
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
              Modern ICT{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                Training Facilities
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              State-of-the-art technology centers designed to provide hands-on learning experiences
              with the latest hardware, software, and digital tools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Bridging the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  Digital Infrastructure Gap
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Many educational institutions lack the proper technology infrastructure needed for
                effective digital education. Our ICT training facilities provide the foundation for
                comprehensive digital literacy programs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* First image + text below */}
            <div className="flex flex-col items-center">
              <img
                src={pic1}
                alt="Modern classroom with tables and chairs"
                className="rounded-2xl shadow-xl w-full h-80 object-cover" // Increased height
              />
              <p className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-200 text-center">
                Modern Classrooms with Green IT Setup
              </p>
            </div>

            {/* Second image + text below */}
            <div className="flex flex-col items-center">
              <img
                src={pic2}
                alt="Modern office with empty workstations"
                className="rounded-2xl shadow-xl w-full h-80 object-cover" // Increased height
              />
              <p className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-200 text-center">
                State-of-the-Art ICT Workstations
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Features Section */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Comprehensive{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  Technology Infrastructure
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Everything needed for effective hands-on digital learning experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Monitor,
                  title: 'Modern Computer Labs',
                  description:
                    'High-performance desktops and laptops with the latest processors and sufficient RAM for all educational software.',
                },
                {
                  icon: Wifi,
                  title: 'High-Speed Internet',
                  description:
                    'Reliable, fast internet connectivity ensuring seamless access to online resources and cloud-based applications.',
                },
                {
                  icon: HardDrive,
                  title: 'Latest Software Suite',
                  description:
                    'Comprehensive software packages including productivity tools, programming environments, and creative applications.',
                },
                {
                  icon: Headphones,
                  title: 'Multimedia Equipment',
                  description:
                    'Interactive whiteboards, projectors, audio systems, and other multimedia tools for engaging presentations.',
                },
                {
                  icon: Users,
                  title: 'Collaborative Spaces',
                  description:
                    'Flexible learning environments designed to support both individual work and team collaboration.',
                },
                {
                  icon: BookOpen,
                  title: 'Digital Resources',
                  description:
                    'Access to online libraries, educational platforms, and digital textbooks for comprehensive learning.',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg"
                >
                  <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-xl w-fit mb-4">
                    <feature.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Benefits Section */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Transforming{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                    Learning Outcomes{' '}
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Our ICT training facilities create an environment where students can develop
                  essential digital skills through practical, hands-on experience with modern
                  technology.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      title: 'Enhanced Digital Literacy',
                      description:
                        'Students gain confidence using various software applications and digital tools',
                    },
                    {
                      title: 'Practical Experience',
                      description:
                        'Hands-on learning with real-world applications and industry-standard tools',
                    },
                    {
                      title: 'Future-Ready Skills',
                      description: 'Preparation for the demands of the modern digital workplace',
                    },
                    {
                      title: 'Collaborative Learning',
                      description:
                        'Opportunities for teamwork and peer-to-peer learning in a tech-enabled environment',
                    },
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-secondary-100 dark:bg-secondary-900 p-1 rounded-full mr-4 mt-2">
                        <div className="w-2 h-2 bg-secondary-600 rounded-full"></div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Students working in a modern computer lab with state-of-the-art equipment"
                  className="rounded-2xl shadow-xl w-full h-auto"
                  width="600"
                  height="400"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Implementation Process */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Implementation{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  {' '}
                  Process
                </span>{' '}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                From planning to full deployment, we handle every aspect of your ICT facility setup.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Assessment & Planning',
                  description:
                    'We evaluate your current infrastructure and design a customized solution.',
                },
                {
                  step: '02',
                  title: 'Equipment Procurement',
                  description:
                    'Sourcing and configuring all necessary hardware and software components.',
                },
                {
                  step: '03',
                  title: 'Installation & Setup',
                  description:
                    'Professional installation and configuration of all systems and networks.',
                },
                {
                  step: '04',
                  title: 'Training & Support',
                  description: 'Comprehensive training for staff and ongoing technical support.',
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-primary-600 text-white text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation>
        <section className="py-20 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Your ICT Training Facility?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create a modern learning environment that prepares your students for the digital
              future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us">
              <Button
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                aria-label="Get facility quote"
                >
                Get Facility Quote
              </Button>
                </Link>

                <Link to="/contact-us">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-zinc-900 dark:hover:text-white"
                aria-label="Schedule site visit"
                >
                Schedule Site Visit
              </Button>
                </Link>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </>
  );
};

export default ICTTrainingFacilities;