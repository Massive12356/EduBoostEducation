import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Users, BookOpen, Award, Target, Lightbulb, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '../../components/Button';
import { ScrollAnimation } from '../../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

const TeacherCapacityBuilding: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Teacher Capacity Building - Digital Pedagogy Training | EduBoost</title>
        <meta
          name="description"
          content="Professional development programs for educators to enhance digital teaching skills, integrate technology effectively, and transform their pedagogical approaches."
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
              Teacher Capacity{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                Building Programs
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Empower educators with comprehensive professional development programs that enhance
              digital teaching skills and transform pedagogical approaches for the modern classroom.
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
                Addressing the Digital Skills Gap in Education
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Many educators feel unprepared to integrate technology effectively into their
                teaching. Our capacity building programs provide the knowledge, skills, and
                confidence teachers need to thrive in digital learning environments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  stat: '70%',
                  label: 'of teachers need better digital skills training',
                },
                {
                  stat: '85%',
                  label: 'report lack of confidence with educational technology',
                },
                {
                  stat: '92%',
                  label: 'see improved outcomes after proper training',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
                >
                  <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {item.stat}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Program Components */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Comprehensive Training Programs
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Multi-faceted approach to building digital teaching competencies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: BookOpen,
                  title: 'Digital Pedagogy',
                  description:
                    'Modern teaching methodologies that effectively integrate technology into curriculum delivery and assessment.',
                },
                {
                  icon: Target,
                  title: 'Curriculum Integration',
                  description:
                    'Strategies for seamlessly incorporating digital tools into existing curricula across all subject areas.',
                },
                {
                  icon: Lightbulb,
                  title: 'Creative Teaching Tools',
                  description:
                    'Hands-on training with educational software, apps, and platforms that enhance student engagement.',
                },
                {
                  icon: TrendingUp,
                  title: 'Assessment & Analytics',
                  description:
                    'Using digital tools for formative and summative assessment, plus data-driven instruction strategies.',
                },
                {
                  icon: Users,
                  title: 'Collaborative Learning',
                  description:
                    'Facilitating student collaboration and peer learning through technology platforms and tools.',
                },
                {
                  icon: Award,
                  title: 'Certification Programs',
                  description:
                    'Accredited certification courses that recognize and validate digital teaching competencies.',
                },
              ].map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg"
                >
                  <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-xl w-fit mb-4">
                    <component.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {component.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{component.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Training Approach */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Teachers participating in a digital pedagogy training workshop"
                  className="rounded-2xl shadow-xl w-full h-auto"
                  width="600"
                  height="400"
                />
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Our Training Methodology
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  We believe in experiential learning that combines theoretical knowledge with
                  practical application, ensuring teachers feel confident and prepared to implement
                  new technologies in their classrooms.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      title: 'Hands-on Workshops',
                      description:
                        'Interactive sessions where teachers learn by doing, not just observing',
                    },
                    {
                      title: 'Peer Collaboration',
                      description:
                        'Learning communities where educators share experiences and best practices',
                    },
                    {
                      title: 'Ongoing Mentorship',
                      description:
                        'Continuous support and guidance during the implementation phase',
                    },
                    {
                      title: 'Flexible Scheduling',
                      description:
                        "Programs designed to fit teachers' busy schedules and professional commitments",
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
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Success Stories */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Transformative Impact
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Real results from educators who've completed our capacity building programs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    'The teacher training program completely transformed how I approach my mathematics classes. My students are now more engaged and their test scores have improved significantly.',
                  name: 'Maria Santos',
                  role: 'High School Mathematics Teacher',
                  school: 'Lincoln Academy',
                },
                {
                  quote:
                    'I went from being intimidated by technology to confidently using digital tools every day. The ongoing support made all the difference in my success.',
                  name: 'James Wilson',
                  role: 'Elementary School Teacher',
                  school: 'Riverside Elementary',
                },
              ].map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg"
                >
                  <blockquote className="text-lg text-gray-600 dark:text-gray-300 mb-6 italic">
                    "{story.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="bg-primary-100 dark:bg-primary-900 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {story.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{story.role}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{story.school}</div>
                    </div>
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Empower Your Teaching Team</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of educators who've transformed their teaching with our capacity
              building programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                aria-label="Enroll teachers now"
              >
                Enroll Teachers Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-zinc-900 dark:hover:text-white"
                aria-label="View course catalog"
              >
                View Course Catalog
              </Button>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </>
  );
};

export default TeacherCapacityBuilding;