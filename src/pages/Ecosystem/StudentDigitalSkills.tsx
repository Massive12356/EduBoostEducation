import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Code, Cpu, Globe, Database, Smartphone, Zap, ArrowRight, SaveIcon } from 'lucide-react';
import { Button } from '../../components/Button';
import { ScrollAnimation } from '../../hooks/useScrollAnimation';
import pic1 from '../../images/pexels-vanessa-loring-7868889.jpg';
import pic2 from '../../images/father-sons-making-robot.jpg';
import pic3 from '../../images/StockCake-Students Using Computers_1758530689.jpg';
import picInClass from '../../images/StockCake-Teaching Code Class_1758532379.jpg';
import picLabTime from '../../images/StockCake-Digital Learning Hub_1758532290.jpg';
import pic from '../../images/heroImage.jpeg';
import { Link } from 'react-router-dom';
import analysis from '../../images/analysis.jpeg'
import analysis1 from '../../images/analysis2.jpeg'
import projectBased from '../../images/projectBased.jpeg'
import support from '../../images/support.jpeg'
import support1 from '../../images/support1.jpeg'


const analysisImages = [
  {
    src: analysis,
    alt: 'Student digital skills analysis overview',
  },
  {
    src: analysis1,
    alt: 'Advanced digital learning analytics',
  },
];


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
            <h1 className="text-3xl md:text45xl lg:text-5xl font-bold text-white leading-relaxed ubuntu mb-6">
              Building Ghana's Next <br /> Generation of{' '}
              <span className="text-[#f503f5]">Innovators.</span>
            </h1>
            <p className=" text-[1rem]  md:text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed alanSas ">
              Our hands-on curriculum takes students from basic digital <br /> literacy to advanced
              skills in AI, coding, and robotics, preparing <br /> them for top universities and the
              global workforce.
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
                From Skills Gap to Career Launchpad.
              </h2>
              <p className="text-xl text-black max-w-4xl mx-auto alanSas leading-relaxed">
                National statistics show that only 22% of students possess basic <br /> ICT skills.
                Eduboost directly addresses this challenge… We don't <br /> just teach computer
                basics; we build real-world competency in the <br /> most in-demand technology
                fields.
              </p>
            </div>

            {/* Images instead of stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {analysisImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 0.98 }}
                  className="overflow-hidden rounded-sm shadow-lg w-full h-[300px]"
                >
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>

            <div className="w-full flex items-center justify-center mt-8 group-hover">
              <Link to="/contact-us">
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  aria-label="Explore our solutions"
                  className="flex bg-[#f2b705] gap-3 px-6 py-4 alanSas rounded-lg text-black font-semibold hover:bg-[#9e7701] hover:text-white"
                >
                  Get In Touch With Us
                  <ArrowRight />
                </motion.button>
              </Link>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Skills Curriculum */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                A Journey from Foundational Skills <br /> to Advanced Specialization.
              </h2>
              <p className="text-xl text-black alanSas">
                Our curriculum is fully aligned with the NaCCA and GES frameworks, <br /> ensuring
                it supports and enhances official school subjects.
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
                  bg: 'bg-[#f2b705]',
                  text: 'text-black',
                },
                {
                  icon: Cpu,
                  level: 'Level 2: Core Competencies (J.H.S 1 - 2)',
                  subtitle: 'Developing Thinkers',
                  description:
                    'Students strengthen problem-solving and logical thinking, laying the groundwork for deeper STEM learning.',
                  skills: ['Algorithmic Thinking', 'Intro to Robotics', 'AI Concepts'],
                  bg: 'bg-[#f0052f]',
                  text: 'text-white',
                },
                {
                  icon: Globe,
                  level: 'Level 3: Pre-Vocational Track (J.H.S 3 Leavers)',
                  subtitle: 'Bridging to the Future',
                  description:
                    'This stage bridges academic knowledge with practical digital skills that prepare students for vocational or tech pathways.',
                  skills: ['Intro to Web Dev', 'Data Analytics', 'Graphic Design'],
                  bg: 'bg-[#049dd9]',
                  text: 'text-black',
                },
                {
                  icon: Database,
                  level: 'Level 4: Intermediate Skills (S.H.S 1 - 2)',
                  subtitle: 'Applying Knowledge',
                  description:
                    'Learners begin applying digital skills to real projects, fostering critical thinking and teamwork.',
                  skills: ['Advanced Spreadsheets', 'App Dev Concepts', 'Network Systems'],
                  bg: 'bg-[#049dd9]',
                  text: 'text-black',
                },
                {
                  icon: Smartphone,
                  level: 'Level 5: Advanced Skills (S.H.S. Leavers)',
                  subtitle: 'Building a Portfolio',
                  description:
                    'Students create professional-level projects and portfolios that demonstrate readiness for internships or tertiary studies.',
                  bg: 'bg-[#f2b705]',
                  skills: ['UI/UX Product Design', 'Mobile App Dev', 'Advanced Web Design'],
                  text: 'text-black',
                },
                {
                  icon: Zap,
                  level: 'Level 6: Specialized Tracks (Advanced)',
                  subtitle: 'Becoming an Innovator',
                  description:
                    'Graduates explore specialized fields, developing entrepreneurial and innovation skills to lead in the digital economy.',
                  bg: 'bg-[#f0052f]',
                  skills: ['Agentic AI', 'Tech Entrepreneurship', 'Advanced Robotics'],
                  text: 'text-white',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 0.98 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`rounded-2xl p-[2px]   shadow-lg ${item.text}`}
                >
                  <div className={`rounded-sm p-6 h-full min-h-[360px] flex flex-col ${item.bg}`}>
                    {/* icon with gradient circle */}
                    <div className={`bg-gradient-to-r  p-[2px] rounded-xl w-fit mb-4`}>
                      <div className="bg-white p-3 rounded-xl">
                        <item.icon className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold  ubuntu mb-1">{item.level}</h3>
                    <p className="text-sm  font-medium mb-2 alanSas">{item.subtitle}</p>
                    <p className=" mb-4 alanSas">{item.description}</p>

                    <ul className="space-y-2 mt-auto">
                      {item.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-center text-sm alanSas ">
                          <div
                            className={`w-1.5 h-1.5 border-2 border-black rounded-full mr-2 `}
                          ></div>
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
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  aria-label="Explore our solutions"
                  className="flex bg-[#f2b705] gap-3 px-6 py-4 alanSas rounded-lg text-black font-semibold hover:bg-[#9e7701] hover:text-white"
                >
                  Download our Curriculum
                  <SaveIcon />
                </motion.button>
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
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                  Project-Based Learning
                </h2>
                <p className="text-xl text-black mb-8 leading-tight alanSas">
                  Students don't just learn concepts—they apply <br /> them through engaging
                  projects that mirror <br /> real-world challenges and build portfolios that <br />{' '}
                  showcase their skills.
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
                      <div className=" border-4 border-black w-3 h-3 p-1 rounded-full mr-4 mt-2"></div>
                      <div>
                        <h3 className="text-lg font-semibold text-black alanSas mb-2">
                          {approach.title}
                        </h3>
                        <p className="text-black alanSas">{approach.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <motion.img
                  whileHover={{ scale: 0.99 }}
                  src={projectBased}
                  alt="Students collaborating on a coding project using laptops"
                  className="rounded-sm shadow-sm w-full h-[500px] object-cover"
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
                More Than a Class. It's a Community of Learning.
              </h2>
            </div>

            {/* Two-Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Column 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 0.99 }}
                transition={{ duration: 0.6 }}
                className="bg-[#f2b705] rounded-sm p-6 shadow-lg"
              >
                <img
                  src={support}
                  alt="In-class support"
                  className="rounded-sm mb-4 w-full h-64 object-cover"
                />
                <h3 className="text-xl font-semibold text-black mb-2 alanSas">In-Class Support</h3>
                <p className="text-black alanSas">
                  Our on-site Technology Integration Specialist acts as a <br /> co-teacher and
                  mentor, guiding students during lessons <br /> and ensuring concepts are applied
                  effectively.
                </p>
              </motion.div>

              {/* Column 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 0.99 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-[#f0052f] rounded-sm p-6 shadow-lg alanSas text-white"
              >
                <img
                  src={support1}
                  alt="Supervised lab time"
                  className="rounded-sm mb-4 w-full h-64 object-cover"
                />
                <h3 className="text-xl font-semibold  mb-2">
                  Supervised Lab Time
                </h3>
                <p className="">
                  The learning doesn't stop when the bell rings. Our ICT <br /> centers remain open
                  after class for students to explore, <br /> create and build new projects with
                  expert support.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation>
        <section className="py-20  text-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 ubuntu">
              Ready to Equip Your Students for the Future?
            </h2>
            <p className=" text-[1rem] md:text-xl mb-8 text-black alanSas">
              Prepare your students for the digital future with our comprehensive <br /> skills
              training programs.
            </p>
            <div className="flex flex-col m sm:flex-row gap-4 justify-center">
              <Link to="/contact-us">
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#f503f5] w-full flex flex-row justify-center gap-3 px-6 py-4 alanSas rounded-lg text-black font-semibold hover:bg-[#9e7701] hover:text-white"
                  aria-label="Enroll students"
                >
                  Partner With Our School
                  <ArrowRight />
                </motion.button>
              </Link>

              <Link to="/ecosystem/teacher-capacity">
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#f2b705] flex gap-3 px-6 py-4 alanSas rounded-lg text-black font-semibold hover:bg-[#f503f5] hover:text-black"
                  aria-label="View curriculum details"
                >
                  Learn About Our Teacher Training Program
                </motion.button>
              </Link>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </>
  );
};

export default StudentDigitalSkills;
