import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Monitor, Wifi, HardDrive, Headphones, Users, BookOpen, Circle } from 'lucide-react';
import { ScrollAnimation } from '../../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import pic3 from '../../images/heroImage.jpeg';

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
      <section
        className="relative py-20 lg:py-12 h-screen flex items-end"
        style={{
          backgroundImage: `url(${pic3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 z-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white leading-tight mb-6 ubuntu ">
              Modern ICT{' '}
              <span
                className="text-[#f503f5] inline-block"

              >
                Training Facilities
              </span>
            </h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              State-of-the-art technology centers designed to provide <br /> hands-on learning
              experiences with the latest hardware, <br /> software, and digital tools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold  mb-6 ubuntu">
                Bridging the Digital Infrastructure Gap
              </h2>
              <p className="text-xl text-black max-w-4xl mx-auto alanSas">
                Many educational institutions lack the proper technology <br /> infrastructure
                needed for effective digital education. Our ICT <br /> training facilities provide
                the foundation for comprehensive digital <br /> literacy programs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* First image + text below */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileHover={{ scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col items-center bg-[#f2b705] h-[300px] rounded-sm"
            >
              <p className="mt-4 text-lg font-semibold text-black text-center">
                Modern Classrooms with Green IT Setup
              </p>
            </motion.div>

            {/* Second image + text below */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileHover={{ scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col items-center bg-[#f0052f] rounded-sm"
            >
              <p className="mt-4 text-lg font-semibold text-black text-center">
                State-of-the-Art ICT Workstations
              </p>
            </motion.div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Features Section */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black ubuntu mb-4">
                Comprehensive Technology Infrastructure
              </h2>
              <p className="text-xl text-black  alanSas">
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
                  bg: 'bg-[#f2b705]',
                },
                {
                  icon: Wifi,
                  title: 'High-Speed Internet',
                  description:
                    'Reliable, fast internet connectivity ensuring seamless access to online resources and cloud-based applications.',
                  bg: 'bg-[#f0052f]',
                },
                {
                  icon: HardDrive,
                  title: 'Latest Software Suite',
                  description:
                    'Comprehensive software packages including productivity tools, programming environments, and creative applications.',
                  bg: 'bg-[#049dd9]',
                },
                {
                  icon: Headphones,
                  title: 'Multimedia Equipment',
                  description:
                    'Interactive whiteboards, projectors, audio systems, and other multimedia tools for engaging presentations.',
                  bg: 'bg-[#049dd9]',
                },
                {
                  icon: Users,
                  title: 'Collaborative Spaces',
                  description:
                    'Flexible learning environments designed to support both individual work and team collaboration.',
                  bg: 'bg-[#f2b705]',
                },
                {
                  icon: BookOpen,
                  title: 'Digital Resources',
                  description:
                    'Access to online libraries, educational platforms, and digital textbooks for comprehensive learning.',
                  bg: 'bg-[#f0052f]',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileHover={{ scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`${feature.bg} rounded-sm p-6 shadow-lg`}
                >
                  <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-xl w-fit mb-4">
                    <feature.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-black ubuntu mb-3">{feature.title}</h3>
                  <p className="text-black alanSas">{feature.description}</p>
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
                  Transforming Learning <br /> Outcomes
                </h2>
                <p className="text-xl text-black mb-8 alanSas">
                  Our ICT training facilities create an environment where <br /> students can
                  develop essential digital skills through <br /> practical, hands-on experience
                  with modern technology.
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
                    <div key={index} className="flex items-start space-x-4">
                      <Circle className="w-3 h-4 rounded-full mt-1" />

                      <div>
                        <h3 className="text-lg font-semibold text-black alanSas mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-black alanSas">{benefit.description}</p>
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
              <h2 className="text-3xl ubuntu md:text-4xl font-bold text-black mb-4">
                Implementation Process
              </h2>
              <p className="text-xl text-black alanSas">
                From planning to full deployment, we handle every <br /> aspect of your ICT facility
                setup.
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
                  <div className="bg-[#f503f5] text-white text-lg ubuntu font-bold rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 alanSas">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 alanSas">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 alanSas">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation>
        <section className="py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black ubuntu">
              Ready to Build Your ICT Training Facility?
            </h2>
            <p className="text-xl mb-8 text-black alanSas ">
              Let's create a modern learning environment that prepares your <br /> students for the
              digital future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us">
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  aria-label="Get facility quote"
                  className="bg-[#f503f5] flex gap-3 px-6 py-4 alanSas rounded-lg text-black font-semibold hover:bg-[#9e7701] hover:text-white"
                >
                  Get Facility Quote
                </motion.button>
              </Link>

              <Link to="/contact-us">
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#f2b705] flex gap-3 px-6 py-4 alanSas rounded-lg text-black font-semibold hover:bg-[#f503f5] hover:text-black"
                  aria-label="Schedule site visit"
                >
                  Schedule Site Visit
                </motion.button>
              </Link>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </>
  );
};

export default ICTTrainingFacilities;