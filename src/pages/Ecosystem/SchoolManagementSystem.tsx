import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Settings, BarChart3, Users, Calendar, FileText, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '../../components/Button';
import { ScrollAnimation } from '../../hooks/useScrollAnimation';
import pic from '../../images/heroImage1.jpeg';
import analysis from '../../images/analysis.jpeg'

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
      <section
        className="relative  flex h-screen items-center justify-center py-20 lg:py-32"
        style={{
          backgroundImage: `url(${pic})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              School Management <span className="text-[#f503f5]">System</span>
            </h1>
            <p className="text-[1rem] md:text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed alanSas">
              Streamline your educational institution's operations with our <br /> comprehensive
              management platform that simplifies <br /> administration and improves decision-making
              through <br />
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
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Solving Administrative Complexity
              </h2>
              <p className="text-xl text-black max-w-4xl mx-auto leading-relaxed alanSas">
                Schools often struggle with fragmented systems, manual processes, and poor <br />
                communication. Our integrated management system brings everything <br /> together in
                one user-friendly platform, saving time and improving efficiency <br /> across all
                administrative functions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  stat: '60%',
                  label: 'time saved on administrative tasks',
                  bg: 'bg-[#f2b705]',
                  text: 'text-black',
                },
                {
                  stat: '45%',
                  label: 'improvement in parent-teacher communication',
                  bg: 'bg-[#f0052f]',
                  text: 'text-white',
                },
                {
                  stat: '80%',
                  label: 'reduction in paperwork and manual processes',
                  bg: 'bg-[#049dd9]',
                  text: 'text-black',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 0.98 }}
                  className={`text-center p-6  rounded-sm ${item.bg} ${item.text} alanSas `}
                >
                  <div className="text-4xl font-bold mb-2">{item.stat}</div>
                  <p>{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* System Features */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Complete Administrative Solution
              </h2>
              <p className="text-xl text-black alanSas">
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
                  bg: 'bg-[#f2b705]',
                  text: 'text-black',
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
                  bg: 'bg-[#f0052f]',
                  text: 'text-white',
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
                  bg: 'bg-[#049dd9]',
                  text: 'text-black',
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
                  bg: 'bg-[#049dd9]',
                  text: 'text-black',
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
                  bg: 'bg-[#f2b705]',
                  text: 'text-black',
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
                  bg: 'bg-[#f0052f]',
                  text: 'text-white',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 0.98 }}
                  className={`rounded-sm p-6 shadow-lg ${feature.bg} alanSas ${feature.text}`}
                >
                  <div className="p-3 rounded-xl w-fit mb-4">
                    <feature.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold  mb-3">{feature.title}</h3>
                  <p className=" mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.features.map((item, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 border-2 border-black rounded-full mr-2"></div>
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
                <motion.img
                whileHover={{scale:0.99}}
                  src={analysis}
                  alt="Analytics dashboard showing school performance metrics and data visualizations"
                  className="rounded-sm shadow-sm w-full h-auto"
                  width="600"
                  height="400"
                />
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl alanSas font-bold text-black mb-6">
                  Data-Driven Decision Making
                </h2>
                <p className="text-xl text-black alanSas mb-8">
                  Transform raw data into actionable insights with our <br /> comprehensive
                  analytics dashboard. Track student <br /> performance, identify trends, and make
                  informed <br /> decisions to improve educational outcomes.
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
                    <div key={index} className="flex items-start alanSas">
                      <div className="border-4 border-black p-1 rounded-full mr-4 mt-2"></div>
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
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Security & Compliance First
              </h2>
              <p className="text-xl text-black alanSas">
                Your data security is our top priority. We maintain the <br /> highest standards of
                protection and compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Data Encryption',
                  description: 'End-to-end encryption for all data transmission and storage',
                  bg: 'bg-[#f2b705]',
                  text: 'text-black',
                },
                {
                  title: 'Regular Backups',
                  description: 'Automated daily backups with quick disaster recovery options',
                  bg: 'bg-[#f0052f]',
                  text: 'text-white',
                },
                {
                  title: 'Access Controls',
                  description: 'Role-based permissions and multi-factor authentication',
                  bg: 'bg-[#049dd9]',
                  text: 'text-black',
                },
                {
                  title: 'Privacy Compliance',
                  description: 'Full compliance with FERPA, COPPA, and international privacy laws',
                  bg: 'bg-[#f503f5]',
                  text: 'text-black',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 0.98 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`rounded-sm p-6 shadow-lg text-center ${feature.bg} ${feature.text} alanSas`}
                >
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center alanSas">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
              Streamline Your School Administration
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of schools already benefiting from our <br /> comprehensive management
              system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileTap={{ scale: 0.98 }}
                aria-label="Request demo"
                className="bg-[#f503f5] flex gap-3 flex-row justify-center px-6 py-4 alanSas rounded-lg text-black font-semibold hover:bg-[#9e7701] hover:text-white"
              >
                Request Demo
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.98 }}
                className="bg-[#f2b705] flex  flex-row justify-center gap-3 px-6 py-4 alanSas rounded-lg text-black font-semibold hover:bg-[#f503f5] hover:text-black"
                aria-label="View pricing plans"
              >
                View Pricing
              </motion.button>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </>
  );
};

export default SchoolManagementSystem;