import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Users,
  BookOpen,
  TrendingUp,
  Star,
  School,
  Building2,
} from 'lucide-react';
import { Button } from '../components/Button';
import { ScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>EduBoost - Transforming Education Through Technology</title>
        <meta
          name="description"
          content="Bridge the digital divide in education with our comprehensive ICT training facilities, teacher capacity building, and innovative school management solutions."
        />
      </Helmet>

      {/* Hero Section */}
      <Hero/>
      {/* Problem Statement Section */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Ghana Has a Vision for Digital Education.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  We Make it a Reality{' '}
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Although Ghana’s education policy embraces technology, most public schools still
                lack reliable internet, functioning computer labs, and trained teachers to deliver
                digital skills effectively.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  stat: '15%',
                  description:
                    'Only 15% of public primary schools have a functioning computer lab.',
                },
                {
                  icon: BookOpen,
                  stat: '3 in 4',
                  description:
                    'Teachers report they have not received sufficient digital literacy training.',
                },
                {
                  icon: TrendingUp,
                  stat: '80%+',
                  description:
                    'Of future jobs in Ghana will require digital skills, yet most students graduate without them.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md"
                >
                  <item.icon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.stat}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Virtuous Cycle Section */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Creating a Virtuous Cycle of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  Digital Transformation
                </span>{' '}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our integrated approach creates lasting impact through interconnected solutions that
                reinforce each other and drive sustainable change.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                {[
                  {
                    title: 'ICT Training Facilities',
                    description:
                      'Modern technology centers equipped with the latest hardware and software for hands-on learning experiences.',
                  },
                  {
                    title: 'Teacher Capacity Building',
                    description:
                      'Comprehensive professional development programs that empower educators with digital teaching skills.',
                  },
                  {
                    title: 'Student Digital Skills',
                    description:
                      'Engaging curriculum that prepares students for the digital economy with practical, real-world applications.',
                  },
                  {
                    title: 'School Management System',
                    description:
                      'Streamlined administration tools that improve efficiency and enable data-driven decision making.',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <CheckCircle className="w-6 h-6 text-secondary-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Teacher helping students with digital learning in a classroom"
                  className="rounded-2xl shadow-xl w-full h-auto"
                  width="600"
                  height="400"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex items-center justify-center mt-4">
            <Link to="/our-solution">
              <Button
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                aria-label="Explore our solutions"
              >
                Explore Our Solution
              </Button>
            </Link>
          </div>
        </section>
      </ScrollAnimation>

      {/* Social Proof Section */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Trusted by Schools{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  Across Ghana.
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Join thousands of schools and organizations already transforming education with
                EduBoost.
              </p>
            </div>

            {/* Impact Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { stat: '50+', label: 'Partner Schools' },
                { stat: '25K+', label: 'Students Empowered' },
                { stat: '1K+', label: 'Teachers Trained' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {item.stat}
                  </div>
                  <div className="text-lg text-gray-600 dark:text-gray-300">{item.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Partner Logos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-16 items-center justify-items-center">
              {[
                { src: '/logos/school6.png', alt: 'School 1' },
                { src: '/logos/school2.png', alt: 'School 2' },
                { src: '/logos/school2.png', alt: 'School 3' },
                { src: '/logos/school4.png', alt: 'School 4' },
                { src: '/logos/school5.png', alt: 'School 5' },
              ].map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }} // smooth hover scale
                  className="rounded-lg" // keeps the radius on the wrapper
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-24 w-24 object-contain rounded-lg"
                  />
                </motion.div>
              ))}
            </div>

            {/* Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Existing testimonial */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-gray-600 dark:text-gray-300 text-center mb-6 italic">
                  "EduBoost has transformed our school's approach to technology education. Our
                  teachers are more confident, our students are more engaged, and our administrative
                  processes have never been more efficient."
                </blockquote>
                <div className="text-center">
                  <div className="font-semibold text-gray-900 dark:text-white">
                    Dr. Sarah Johnson
                  </div>
                  <div className="text-gray-500 dark:text-gray-400">
                    Principal, Lincoln High School
                  </div>
                </div>
              </motion.div>

              {/* New testimonial */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-gray-600 dark:text-gray-300 text-center mb-6 italic">
                  "Thanks to EduBoost, our teachers are better trained and our students are
                  excelling in STEM subjects. We’ve seen a noticeable rise in student engagement and
                  performance."
                </blockquote>
                <div className="text-center">
                  <div className="font-semibold text-gray-900 dark:text-white">
                    Mr. Kwame Mensah
                  </div>
                  <div className="text-gray-500 dark:text-gray-400">
                    Head Teacher, Accra Academy
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Audience-Specific Gateway Section */}
      <ScrollAnimation>
        <section className="py-20 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Headline */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Get Started.</h2>
            <p className="text-xl mb-12 opacity-90">
              Choose the path that best describes you and see how EduBoost can support your goals.
            </p>

            {/* Three cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {/* School Leader */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 flex flex-col hover:bg-white/20 transition">
                <div className="mb-4 flex items-center justify-center">
                  <School className="h-12 w-12 text-white opacity-90" /> {/* Lucide icon */}
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-center">School Leader?</h3>
                <p className="mb-6 opacity-90 text-center">
                  Enhance efficiency and improve learning outcomes.
                </p>
                <Button
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                  aria-label="For Schools"
                  className="mx-auto"
                >
                  For Schools
                </Button>
              </div>

              {/* Corporate / NGO Partner */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 flex flex-col hover:bg-white/20 transition">
                <div className="mb-4 flex items-center justify-center">
                  <Building2 className="h-12 w-12 text-white opacity-90" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-center">
                  Corporate or NGO Partner?
                </h3>
                <p className="mb-6 opacity-90 text-center">Invest in sustainable social impact.</p>
                <Button
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                  aria-label="For Partners"
                  className="mx-auto"
                >
                  For Partners
                </Button>
              </div>

              {/* Teacher or Parent */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 flex flex-col hover:bg-white/20 transition">
                <div className="mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white opacity-90" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-center">Teacher or Parent?</h3>
                <p className="mb-6 opacity-90 text-center">
                  See how we&apos;re preparing students for success.
                </p>
                <Button
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                  aria-label="For Teachers and Parents"
                  className="mx-auto"
                >
                  Our Impact
                </Button>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </>
  );
};

export default Home;