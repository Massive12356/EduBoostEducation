import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Settings, BarChart3, Users, Calendar, FileText, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '../../components/Button';
import { ScrollAnimation } from '../../hooks/useScrollAnimation';

const SchoolManagementSystem: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>School Management System - Streamlined Educational Administration | EduBoost</title>
        <meta
          name="description"
          content="Comprehensive school management system with student information management, grade tracking, communication tools, and analytics dashboard for efficient school operations."
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
              School Management{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                System
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Streamline your educational institution's operations with our comprehensive management
              platform that simplifies administration and improves decision-making through
              data-driven insights.
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
                Solving Administrative Complexity
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Schools often struggle with fragmented systems, manual processes, and poor
                communication. Our integrated management system brings everything together in one
                user-friendly platform, saving time and improving efficiency across all
                administrative functions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  stat: '60%',
                  label: 'time saved on administrative tasks',
                },
                {
                  stat: '45%',
                  label: 'improvement in parent-teacher communication',
                },
                {
                  stat: '80%',
                  label: 'reduction in paperwork and manual processes',
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

      {/* System Features */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Complete Administrative Solution
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Everything you need to run a modern educational institution efficiently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: 'Student Information System',
                  description:
                    'Comprehensive student profiles with academic records, attendance tracking, and enrollment management.',
                  features: [
                    'Student Profiles',
                    'Enrollment Management',
                    'Academic Records',
                    'Attendance Tracking',
                  ],
                },
                {
                  icon: BarChart3,
                  title: 'Grade Management',
                  description:
                    'Streamlined grading system with gradebook, report cards, and progress tracking for all subjects.',
                  features: [
                    'Digital Gradebook',
                    'Report Cards',
                    'Progress Reports',
                    'Grade Analytics',
                  ],
                },
                {
                  icon: MessageCircle,
                  title: 'Communication Platform',
                  description:
                    'Integrated messaging system connecting teachers, students, parents, and administrators.',
                  features: [
                    'Messaging System',
                    'Announcements',
                    'Parent Notifications',
                    'Group Communications',
                  ],
                },
                {
                  icon: Calendar,
                  title: 'Schedule & Events',
                  description:
                    'Complete calendar management for classes, events, exams, and school activities.',
                  features: [
                    'Class Scheduling',
                    'Event Management',
                    'Exam Timetables',
                    'Activity Calendar',
                  ],
                },
                {
                  icon: FileText,
                  title: 'Document Management',
                  description:
                    'Secure storage and management of all school documents, forms, and administrative files.',
                  features: [
                    'File Storage',
                    'Form Management',
                    'Document Sharing',
                    'Archive System',
                  ],
                },
                {
                  icon: Settings,
                  title: 'System Administration',
                  description:
                    'Comprehensive admin tools for user management, system settings, and security controls.',
                  features: [
                    'User Management',
                    'Role Permissions',
                    'System Settings',
                    'Security Controls',
                  ],
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
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.features.map((item, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-500 dark:text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2"></div>
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Analytics Dashboard */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Analytics dashboard showing school performance metrics and data visualizations"
                  className="rounded-2xl shadow-xl w-full h-auto"
                  width="600"
                  height="400"
                />
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Data-Driven Decision Making
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Transform raw data into actionable insights with our comprehensive analytics
                  dashboard. Track student performance, identify trends, and make informed decisions
                  to improve educational outcomes.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      title: 'Performance Analytics',
                      description:
                        'Track student and teacher performance with detailed metrics and trends',
                    },
                    {
                      title: 'Attendance Insights',
                      description:
                        'Monitor attendance patterns and identify students at risk of truancy',
                    },
                    {
                      title: 'Financial Reports',
                      description: 'Comprehensive financial tracking and budget management tools',
                    },
                    {
                      title: 'Custom Dashboards',
                      description:
                        'Personalized dashboards for different user roles and responsibilities',
                    },
                  ].map((insight, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-secondary-100 dark:bg-secondary-900 p-1 rounded-full mr-4 mt-2">
                        <div className="w-2 h-2 bg-secondary-600 rounded-full"></div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {insight.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">{insight.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Security & Compliance */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Security & Compliance First
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Your data security is our top priority. We maintain the highest standards of
                protection and compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Data Encryption',
                  description: 'End-to-end encryption for all data transmission and storage',
                },
                {
                  title: 'Regular Backups',
                  description: 'Automated daily backups with quick disaster recovery options',
                },
                {
                  title: 'Access Controls',
                  description: 'Role-based permissions and multi-factor authentication',
                },
                {
                  title: 'Privacy Compliance',
                  description: 'Full compliance with FERPA, COPPA, and international privacy laws',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg text-center"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
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
              Streamline Your School Administration
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of schools already benefiting from our comprehensive management system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" icon={ArrowRight} iconPosition="right" aria-label="Request demo">
                Request Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-zinc-900 dark:hover:text-white"
                aria-label="View pricing plans"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </>
  );
};

export default SchoolManagementSystem;