import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Heart, Users, Target, Award, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { ScrollAnimation } from '../hooks/useScrollAnimation';

const AboutUs: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Passionate About Educational Transformation | EduBoost</title>
        <meta
          name="description"
          content="Learn about EduBoost's mission to bridge the digital divide in education. Meet our team and discover our vision for transforming learning worldwide."
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
              Passionate About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                Educational Transformation
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We believe every student deserves access to quality digital education. Our mission is
              to bridge the digital divide and empower communities through innovative technology
              solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
              >
                <div className="bg-primary-100 dark:bg-primary-900 p-4 rounded-xl w-fit mb-6">
                  <Target className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  To bridge the digital divide in education by providing comprehensive technology
                  solutions that empower students, teachers, and educational institutions worldwide.
                  We create sustainable pathways to digital literacy that transform communities and
                  create lasting opportunities.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
              >
                <div className="bg-secondary-100 dark:bg-secondary-900 p-4 rounded-xl w-fit mb-6">
                  <Heart className="w-8 h-8 text-secondary-600 dark:text-secondary-400" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  A world where every student, regardless of their geographic location or
                  socioeconomic background, has access to quality digital education. We envision
                  communities empowered by technology, where digital skills open doors to endless
                  opportunities and brighter futures.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Our Story */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Our Story
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    EduBoost was founded in 2018 when our founders witnessed firsthand the digital
                    divide affecting rural schools in Kenya. Despite having motivated teachers and
                    eager students, these schools lacked the technology infrastructure and digital
                    literacy training needed for modern education.
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    What started as a small pilot program in five schools has grown into a global
                    movement. Today, we've impacted over 50,000 students across 25 countries,
                    proving that with the right approach, technology can be a powerful equalizer in
                    education.
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Our comprehensive approach—combining infrastructure, training, and management
                    systems— ensures sustainable impact that continues long after our initial
                    implementation.
                  </p>
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/5428833/pexels-photo-5428833.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="EduBoost team members working with students and teachers in a classroom setting"
                  className="rounded-2xl shadow-xl w-full h-auto"
                  width="600"
                  height="400"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Values */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                The principles that guide everything we do at EduBoost.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: '🎯',
                  title: 'Impact-Focused',
                  description:
                    'Every decision is measured against its potential to create meaningful, lasting change in communities.',
                },
                {
                  icon: '🤝',
                  title: 'Collaborative',
                  description:
                    'We believe in the power of partnerships and work closely with local communities and organizations.',
                },
                {
                  icon: '💡',
                  title: 'Innovation',
                  description:
                    'We continuously explore new technologies and methodologies to improve educational outcomes.',
                },
                {
                  icon: '🌍',
                  title: 'Inclusive',
                  description:
                    'Our solutions are designed to be accessible and adaptable to diverse cultural and economic contexts.',
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Team Section */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Meet Our Leadership Team
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Experienced leaders passionate about transforming education through technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Dr. Sarah Ochieng',
                  role: 'CEO & Co-Founder',
                  bio: 'Former UNESCO education specialist with 15+ years in international development and educational technology.',
                  image:
                    'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
                },
                {
                  name: 'Michael Rodriguez',
                  role: 'CTO & Co-Founder',
                  bio: 'Technology leader with experience at major EdTech companies, specializing in scalable educational platforms.',
                  image:
                    'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400',
                },
                {
                  name: 'Dr. Aisha Patel',
                  role: 'Head of Programs',
                  bio: 'Educational researcher and former school principal with expertise in curriculum development and teacher training.',
                  image:
                    'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg text-center"
                >
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role} at EduBoost`}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    width="96"
                    height="96"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <div className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                    {member.role}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Recognition & Awards */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Recognition & Awards
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Our work has been recognized by leading organizations across Ghana and beyond.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  award: 'GES ICT Innovation Award',
                  year: '2024',
                  description: 'Recognized for outstanding contribution to ICT in public schools',
                },
                {
                  award: 'MTN Ghana Foundation Digital Literacy Prize',
                  year: '2023',
                  description: 'Honored for innovative teacher training approach',
                },
                {
                  award: 'UN SDG Partnership Award – Ghana Chapter',
                  year: '2023',
                  description: 'Acknowledged for advancing SDG 4 - Quality Education',
                },
              ].map((recognition, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
                >
                  <div className="bg-yellow-100 dark:bg-yellow-900/20 p-3 rounded-xl w-fit mx-auto mb-4">
                    <Award className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {recognition.award}
                  </h3>
                  <div className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                    {recognition.year}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {recognition.description}
                  </p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-xl mb-8 opacity-90">
              Whether as a partner, supporter, or team member, there are many ways to be part of our
              educational transformation movement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" icon={ArrowRight} iconPosition="right" aria-label="Explore careers">
                Explore Careers
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-zinc-900 dark:hover:text-white"
                aria-label="Partner with us"
              >
                Partner with Us
              </Button>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </>
  );
};

export default AboutUs;