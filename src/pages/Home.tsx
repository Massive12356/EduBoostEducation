import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Circle, Star } from 'lucide-react';
import { ScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Users from '../images/user-icon.png';
import BookOpen from '../images/book.png';
import TrendingUp from '../images/power-percentage-your-hand.png';
import teacher from '../images/teacher.png';
import coporate from '../images/NGO.png';
import Leader from '../images/SchoolLeader.png';
import modern from '../images/modern.png';

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
      <Hero />
      {/* Problem Statement Section */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">
                Ghana Has a Vision for Digital Education. <br />
                We Make it a Reality
              </h2>
              <p className=" text-[1rem] md:text-xl text-black alanSas max-w-3xl mx-auto">
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
                  bg: 'bg-[#f2b705]',
                  text: 'text-black',
                },
                {
                  icon: BookOpen,
                  stat: '3 in 4',
                  description:
                    'Teachers report they have not received sufficient digital literacy training.',
                  bg: 'bg-[#f0052f] ',
                  text: 'text-white',
                },
                {
                  icon: TrendingUp,
                  stat: '80%+',
                  description:
                    'Of future jobs in Ghana will require digital skills, yet most students graduate without them.',
                  bg: 'bg-[#049dd9]',
                  text: 'text-black',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileHover={{ scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`text-center p-6 ${item.bg} rounded-sm shadow-md `}
                >
                  <img src={item.icon} alt="" className="w-40 h-40 mx-auto mb-4 object-contain" />
                  <div className={`text-4xl alanSas font-bold ${item.text}`}>{item.stat}</div>
                  <p className={`alanSas ${item.text}`}>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Virtuous Cycle Section */}
      <ScrollAnimation>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900  mb-4">
                Creating a Virtuous Cycle of <br />
                Digital Transformation
              </h2>
              <p className=" text-[1rem] md:text-xl text-black max-w-3xl mx-auto alanSas">
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
                    <Circle className="w-6 h-6  mt-1 text-black " />
                    <div>
                      <h3 className="text-xl font-semibold text-black alanSas mb-2">
                        {item.title}
                      </h3>
                      <p className=" text-black alanSas">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="relative">
                <img
                  src={modern}
                  alt="Teacher helping students with digital learning in a classroom"
                  className=" w-full h-auto"
                  width="600"
                  height="400"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex items-center justify-center mt-4 group">
            <Link to="/our-solution">
              <motion.button
                whileTap={{ scale: 0.95 }}
                aria-label="Explore our solutions"
                className="bg-[#f2b705] flex gap-3 px-6 py-4 alanSas rounded-lg text-black font-semibold hover:bg-[#9e7701] group-hover:text-white"
              >
                Explore Our Solution <ArrowRight />
              </motion.button>
            </Link>
          </div>
        </section>
      </ScrollAnimation>

      {/* Social Proof Section */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-black  mb-4">
                Trusted by Schools Across Ghana.
              </h2>
              <p className=" text-[1rem] md:text-xl text-black alanSas">
                Join thousands of schools and organizations already <br /> transforming education
                with EduBoost.
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
                  <div className="text-5xl font-bold text-[#049dd9] dark:text-primary-400 mb-2">
                    {item.stat}
                  </div>
                  <div className="text-lg text-black font-medium alanSas">{item.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Partner Logos */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 items-center justify-items-center">
              {[
                { src: '/logos/AtuLogo.png', alt: 'School 1' },
                { src: '/logos/logo1.png', alt: 'School 2' },
                { src: '/logos/logo2.png', alt: 'School 3' },
              ].map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="rounded-lg"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-40 w-40 object-contain rounded-lg"
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
                className="bg-[#f2b705] rounded-sm p-8 shadow-lg"
              >
                <div className="flex items-center justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-[#f503f5] fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-black alanSas text-center mb-6 italic">
                  "EduBoost has transformed our school's approach to technology education. Our
                  teachers are more confident, our students are more engaged, and our administrative
                  processes have never been more efficient."
                </blockquote>
                <div className="text-center">
                  <div className="font-semibold text-black ubuntu">Dr. Sarah Johnson</div>
                  <div className="text-black alanSas italic ">Principal, Lincoln High School</div>
                </div>
              </motion.div>

              {/* New testimonial */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-[#f0052f] rounded-sm p-8 shadow-lg"
              >
                <div className="flex items-center justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-[#f503f5] fill-current" />
                  ))}
                </div>
                <blockquote className=" text-xl text-white text-center mb-6 italic">
                  "Thanks to EduBoost, our teachers are better trained and our students are
                  excelling in STEM subjects. We’ve seen a noticeable rise in student engagement and
                  performance."
                </blockquote>
                <div className="text-center">
                  <div className="font-semibold text-white ubuntu">Mr. Kwame Mensah</div>
                  <div className="text-white alanSas italic">Head Teacher, Accra Academy</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Audience-Specific Gateway Section */}
      <ScrollAnimation>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Headline */}
            <h2 className="text-2xl md:text-4xl text-black font-bold mb-4 ubuntu">
              Let&apos;s Get Started.
            </h2>
            <p className=" text-[1rem] text-black md:text-xl mb-12 alanSas ">
              Choose the path that best describes you and see how <br />
              EduBoost can support your goals.
            </p>

            {/* Three cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {/* School Leader */}
              <motion.div
                whileHover={{ scale: 0.97 }}
                className="bg-[#f2b705] backdrop-blur-sm rounded-sm p-5 flex flex-col transition"
              >
                <div className="mb-3 flex items-center justify-center">
                  <img src={Leader} alt="" className="w-32 h-32 mx-auto mb-3 object-contain" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center alanSas">School Leader?</h3>
                <p className="mb-4 text-center alanSas">
                  Enhance efficiency and improve learning outcomes.
                </p>

                <div className="group w-full flex justify-center">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    aria-label="For Schools"
                    className="bg-white flex justify-center gap-3 px-6 py-2 alanSas rounded-sm text-black font-semibold hover:bg-black group-hover:text-white"
                  >
                    For Schools <ArrowRight />
                  </motion.button>
                </div>
              </motion.div>

              {/* Corporate / NGO Partner */}
              <motion.div
                whileHover={{ scale: 0.97 }}
                className="bg-[#f0052f] backdrop-blur-sm rounded-sm p-6 flex flex-col transition"
              >
                <div className="mb-3 flex items-center justify-center">
                  <img src={coporate} alt="" className="w-32 h-32 mx-auto mb-3 object-contain" />
                </div>
                <h3 className="text-xl font-semibold mb-2 alanSas text-center text-white">
                  Corporate or NGO Partner?
                </h3>
                <p className="mb-4 alanSas text-center text-white">
                  Invest in sustainable social impact.
                </p>

                <div className="group flex justify-center">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    aria-label="For Partners"
                    className="bg-white flex justify-center gap-3 px-6 py-2 alanSas rounded-sm text-black font-semibold hover:bg-black group-hover:text-white"
                  >
                    For Partners <ArrowRight />
                  </motion.button>
                </div>
              </motion.div>

              {/* Teacher or Parent */}
              <motion.div
                whileHover={{ scale: 0.97 }}
                className="bg-[#049dd9] backdrop-blur-sm rounded-sm p-6 flex flex-col transition"
              >
                <div className="mb-3 flex items-center justify-center">
                  <img src={teacher} alt="" className="w-32 h-32 mx-auto mb-3 object-contain" />
                </div>
                <h3 className="text-xl font-semibold mb-2 alanSas text-center">
                  Teacher or Parent?
                </h3>
                <p className="mb-4 alanSas text-center">
                  See how we&apos;re preparing students for success.
                </p>
                <div className="group flex justify-center">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    aria-label="For Parents or Teachers"
                    className="bg-white flex justify-center gap-3 px-6 py-2 alanSas rounded-sm text-black font-semibold hover:bg-black group-hover:text-white"
                  >
                    Our Impact <ArrowRight />
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </>
  );
};

export default Home;
