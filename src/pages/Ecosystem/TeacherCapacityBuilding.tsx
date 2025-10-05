import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Users, BookOpen, Award, Target, Lightbulb, TrendingUp} from 'lucide-react';
import { ScrollAnimation } from '../../hooks/useScrollAnimation';
import pic from '../../images/heroImage1.jpeg'
import pic1 from '../../images/Methodology.jpeg'
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
      <section
        className="relative flex h-screen items-center justify-center"
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
            <h1 className="text-[1rem] md:text-2xl lg:text-5xl font-bold text-white leading-tight mb-6 ubuntu">
              Teacher Capacity <span className="text-[#f503f5]">Building Programs </span>
            </h1>
            <p className="text-xl text-white alanSas mb-8 max-w-3xl mx-auto">
              Empower educators with comprehensive professional <br /> development programs that
              enhance digital teaching skills and <br /> transform pedagogical approaches for the
              modern classroom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black ubuntu mb-6">
                Addressing the Digital Skills Gap in Education
              </h2>
              <p className="text-xl text-black alanSas max-w-4xl mx-auto">
                Many educators feel unprepared to integrate technology effectively into their <br />
                teaching. Our capacity building programs provide the knowledge, skills, and <br />
                confidence teachers need to thrive in digital learning environments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  stat: '70%',
                  label: 'of teachers need better digital skills training',
                  bg: 'bg-[#f2b705]',
                  text: 'text-black',
                },
                {
                  stat: '85%',
                  label: 'report lack of confidence with educational technology',
                  bg: 'bg-[#f0052f]',
                  text: 'text-white',
                },
                {
                  stat: '92%',
                  label: 'see improved outcomes after proper training',
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
                  className={`text-center p-6 ${item.bg} rounded-sm ${item.text}`}
                >
                  <div className="text-4xl font-bold   mb-2">{item.stat}</div>
                  <p className=" alanSas ">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Program Components */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black ubuntu mb-4">
                Comprehensive Training Programs
              </h2>
              <p className="text-xl text-black alanSas">
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
                  bg: 'bg-[#f2b705]',
                  text: 'text-black',
                },
                {
                  icon: Target,
                  title: 'Curriculum Integration',
                  description:
                    'Strategies for seamlessly incorporating digital tools into existing curricula across all subject areas.',
                  bg: 'bg-[#f0052f]',
                  text: 'text-white',
                },
                {
                  icon: Lightbulb,
                  title: 'Creative Teaching Tools',
                  description:
                    'Hands-on training with educational software, apps, and platforms that enhance student engagement.',
                  bg: 'bg-[#049dd9]',
                  text: 'text-black',
                },
                {
                  icon: TrendingUp,
                  title: 'Assessment & Analytics',
                  description:
                    'Using digital tools for formative and summative assessment, plus data-driven instruction strategies.',
                  bg: 'bg-[#049dd9]',
                  text: 'text-black',
                },
                {
                  icon: Users,
                  title: 'Collaborative Learning',
                  description:
                    'Facilitating student collaboration and peer learning through technology platforms and tools.',
                  bg: 'bg-[#f2b705]',
                  text: 'text-black',
                },
                {
                  icon: Award,
                  title: 'Certification Programs',
                  description:
                    'Accredited certification courses that recognize and validate digital teaching competencies.',
                  bg: 'bg-[#f0052f]',
                  text: 'text-white',
                },
              ].map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 0.98 }}
                  className={`${component.bg} rounded-sm p-6 shadow-lg ${component.text} alanSas`}
                >
                  <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-xl w-fit mb-4">
                    <component.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold t mb-3">{component.title}</h3>
                  <p className="">{component.description}</p>
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
              <div className="relative flex justify-center">
                <img
                  src={pic1}
                  alt="Teachers participating in a digital pedagogy training workshop"
                  className="rounded-sm shadow-xl w-[80%] h-auto"
                  width="600"
                  height="400"
                />
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                  Our Training Methodology
                </h2>
                <p className="text-xl text-black alanSas mb-8">
                  We believe in experiential learning that combines <br /> theoretical knowledge
                  with practical application, ensuring <br /> teachers feel confident and prepared
                  to implement new technologies in their classrooms.
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
                    <div key={index} className="flex items-start alanSas">
                      <div className="border-4 border-black p-1 rounded-full mr-4 mt-2"></div>
                      <div>
                        <h3 className="text-lg font-semibold text-black ">{approach.title}</h3>
                        <p className="text-black">{approach.description}</p>
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
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold ubuntu mb-4">Transformative Impact</h2>
              <p className="text-xl text-black alanSas">
                Real results from educators who've completed our <br /> capacity building programs.
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
                  bg: 'bg-[#f2b705]',
                  text: 'text-black',
                },
                {
                  quote:
                    'I went from being intimidated by technology to confidently using digital tools every day. The ongoing support made all the difference in my success.',
                  name: 'James Wilson',
                  role: 'Elementary School Teacher',
                  school: 'Riverside Elementary',
                  bg: 'bg-[#f0052f]',
                  text: 'text-white',
                },
              ].map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 0.98 }}
                  className={`${story.bg} rounded-sm p-8 shadow-lg ${story.text}`}
                >
                  <blockquote className="text-lg  mb-6 italic">"{story.quote}"</blockquote>
                  <div className="flex items-center">
                    <div className=" w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <div className="font-semibold ">{story.name}</div>
                      <div className="text-sm">{story.role}</div>
                      <div className="text-sm">{story.school}</div>
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
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 ubuntu text-black">
              Empower Your Teaching Team
            </h2>
            <p className=" text-[1rem] alanSas md:text-xl mb-8  text-black">
              Join thousands of educators who've transformed their <br /> teaching with our capacity
              building programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileTap={{ scale: 0.98 }}
                className="bg-[#f503f5] flex gap-3 px-6 py-4 alanSas rounded-lg text-black font-semibold hover:bg-[#9e7701] hover:text-white"
                aria-label="Enroll teachers now"
              >
                Enroll Teachers Now
              </motion.button>
              <motion.button
                aria-label="View course catalog"
                whileTap={{ scale: 0.98 }}
                className="bg-[#f2b705] flex gap-3 px-6 py-4 alanSas rounded-lg text-black font-semibold hover:bg-[#f503f5] hover:text-black"
              >
                View Course Catalog
              </motion.button>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </>
  );
};

export default TeacherCapacityBuilding;