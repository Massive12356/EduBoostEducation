import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Code, Cpu, Globe, Database, Smartphone, Zap , ArrowRight, SaveIcon } from 'lucide-react';
import { Button } from '../../components/Button';
import { ScrollAnimation } from '../../hooks/useScrollAnimation';
import pic1 from '../../images/pexels-vanessa-loring-7868889.jpg'
import pic2 from '../../images/father-sons-making-robot.jpg'
import pic3 from '../../images/StockCake-Students Using Computers_1758530689.jpg'
import picInClass from '../../images/StockCake-Teaching Code Class_1758532379.jpg'
import picLabTime from '../../images/StockCake-Digital Learning Hub_1758532290.jpg'
import { Link } from 'react-router-dom';

const StudentDigitalSkills: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Student Digital Skills Training - Future-Ready Education | EduBoost</title>
        <meta
          name="description"
          content="Comprehensive digital skills training programs that prepare students for the digital economy with coding, design, digital literacy, and career preparation."
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
              Building Ghana's Next Generation of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                Innovators.
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Our hands-on curriculum takes students from basic digital literacy to advanced skills
              in AI, coding, and robotics, preparing them for top universities and the global
              workforce.
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
                From Skills Gap to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  Career Launchpad.
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                National statistics show that only 22% of students possess basic ICT skills.
                Eduboost directly addresses this challenge… We don't just teach computer basics; we
                build real-world competency in the most in-demand technology fields.
              </p>
            </div>

            {/* Images instead of stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[pic1, pic2].map((imgSrc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="overflow-hidden rounded-2xl shadow-lg"
                >
                  <motion.img
                    src={imgSrc}
                    alt={`Digital skills illustration ${index + 1}`}
                    className="w-full h-auto object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>

            <div className="w-full flex items-center justify-center mt-8">
              <Link to="/contact-us">
                <Button
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                  aria-label="Explore our solutions"
                >
                  Get In Touch With Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Skills Curriculum */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                A Journey from Foundational Skills to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  Advanced Specialization.{' '}
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Our curriculum is fully aligned with the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 font-semibold">
                  NaCCA
                </span>{' '}
                and{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 font-semibold">
                  GES
                </span>{' '}
                frameworks, ensuring it supports and enhances official school subjects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Code,
                  level: 'Level 1: Foundational Skills (Basic 4 - 6)',
                  subtitle: 'Sparking Curiosity',
                  description:
                    'This level introduces younger students to digital basics in a fun and interactive way, building confidence in technology use.',
                  skills: ['Typing', 'Internet Safety', 'Block Coding'],
                  gradient: 'from-pink-500 to-orange-500',
                },
                {
                  icon: Cpu,
                  level: 'Level 2: Core Competencies (J.H.S 1 - 2)',
                  subtitle: 'Developing Thinkers',
                  description:
                    'Students strengthen problem-solving and logical thinking, laying the groundwork for deeper STEM learning.',
                  skills: ['Algorithmic Thinking', 'Intro to Robotics', 'AI Concepts'],
                  gradient: 'from-green-500 to-teal-500',
                },
                {
                  icon: Globe,
                  level: 'Level 3: Pre-Vocational Track (J.H.S 3 Leavers)',
                  subtitle: 'Bridging to the Future',
                  description:
                    'This stage bridges academic knowledge with practical digital skills that prepare students for vocational or tech pathways.',
                  skills: ['Intro to Web Dev', 'Data Analytics', 'Graphic Design'],
                  gradient: 'from-blue-500 to-indigo-500',
                },
                {
                  icon: Database,
                  level: 'Level 4: Intermediate Skills (S.H.S 1 - 2)',
                  subtitle: 'Applying Knowledge',
                  description:
                    'Learners begin applying digital skills to real projects, fostering critical thinking and teamwork.',
                  skills: ['Advanced Spreadsheets', 'App Dev Concepts', 'Network Systems'],
                  gradient: 'from-purple-500 to-pink-500',
                },
                {
                  icon: Smartphone,
                  level: 'Level 5: Advanced Skills (S.H.S. Leavers)',
                  subtitle: 'Building a Portfolio',
                  description:
                    'Students create professional-level projects and portfolios that demonstrate readiness for internships or tertiary studies.',
                  skills: ['UI/UX Product Design', 'Mobile App Dev', 'Advanced Web Design'],
                  gradient: 'from-yellow-500 to-orange-500',
                },
                {
                  icon: Zap,
                  level: 'Level 6: Specialized Tracks (Advanced)',
                  subtitle: 'Becoming an Innovator',
                  description:
                    'Graduates explore specialized fields, developing entrepreneurial and innovation skills to lead in the digital economy.',
                  skills: ['Agentic AI', 'Tech Entrepreneurship', 'Advanced Robotics'],
                  gradient: 'from-red-500 to-pink-500',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`rounded-2xl p-[2px] bg-gradient-to-r ${item.gradient} shadow-lg`}
                >
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 h-full min-h-[360px] flex flex-col">
                    {/* icon with gradient circle */}
                    <div
                      className={`bg-gradient-to-r ${item.gradient} p-[2px] rounded-xl w-fit mb-4`}
                    >
                      <div className="bg-white dark:bg-gray-900 p-3 rounded-xl">
                        <item.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {item.level}
                    </h3>
                    <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2">
                      {item.subtitle}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>

                    <ul className="space-y-2 mt-auto">
                      {item.skills.map((skill, skillIndex) => (
                        <li
                          key={skillIndex}
                          className="flex items-center text-sm text-gray-500 dark:text-gray-400"
                        >
                          <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2"></div>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="w-full flex items-center justify-center mt-8">
              <Link to="">
                <Button
                  size="lg"
                  icon={SaveIcon}
                  iconPosition="right"
                  aria-label="Explore our solutions"
                >
                  Download our Curriculum
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Learning Approach */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Project-Based Learning
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Students don't just learn concepts—they apply them through engaging projects that
                  mirror real-world challenges and build portfolios that showcase their skills.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      title: 'Real-World Projects',
                      description:
                        'Students work on actual challenges faced by local businesses and organizations',
                    },
                    {
                      title: 'Portfolio Development',
                      description:
                        'Build a digital portfolio showcasing completed projects and acquired skills',
                    },
                    {
                      title: 'Collaborative Learning',
                      description: 'Team projects that develop communication and teamwork skills',
                    },
                    {
                      title: 'Industry Mentorship',
                      description:
                        'Guidance from professionals working in technology and digital industries',
                    },
                  ].map((approach, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-secondary-100 dark:bg-secondary-900 p-1 rounded-full mr-4 mt-2">
                        <div className="w-2 h-2 bg-secondary-600 rounded-full"></div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {approach.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">{approach.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src={pic3}
                  alt="Students collaborating on a coding project using laptops"
                  className="rounded-2xl shadow-xl w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Our Unique Delivery Model */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Headline */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                More Than a Class. It's a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  Community of Learning.
                </span>
              </h2>
            </div>

            {/* Two-Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Column 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg"
              >
                <img
                  src={picInClass}
                  alt="In-class support"
                  className="rounded-xl mb-4 w-full h-64 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  In-Class Support
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our on-site Technology Integration Specialist acts as a co-teacher and mentor,
                  guiding students during lessons and ensuring concepts are applied effectively.
                </p>
              </motion.div>

              {/* Column 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg"
              >
                <img
                  src={picLabTime}
                  alt="Supervised lab time"
                  className="rounded-xl mb-4 w-full h-64 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Supervised Lab Time
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  The learning doesn't stop when the bell rings. Our ICT centers remain open after
                  class for students to explore, create and build new projects with expert support.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation>
        <section className="py-20 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Equip Your Students for the Future?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Prepare your students for the digital future with our comprehensive skills training
              programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us">
                <Button
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                  aria-label="Enroll students"
                >
                  Partner With Our School
                </Button>
              </Link>

              <Link to="/ecosystem/teacher-capacity">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-zinc-900 dark:hover:text-white"
                  aria-label="View curriculum details"
                >
                  Learn About Our Teacher Training Program
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </>
  );
};

export default StudentDigitalSkills;