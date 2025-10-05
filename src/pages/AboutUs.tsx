import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ScrollAnimation } from '../hooks/useScrollAnimation';
import pic1 from '../images/heroImage1.jpeg';
import vision from '../images/vision.png'
import mission from '../images/mission.png'
import pic from '../images/StoryImage.jpeg'
import corePic1 from '../images/coreValue.png'
import corePic2 from '../images/coreValue1.png'
import corePic3 from '../images/coreValue2.png'

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
      <section
        className="relative  py-20 lg:py-32 h-screen flex items-end"
        style={{
          backgroundImage: `url(${pic1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white leading-tight mb-6 ubuntu ">
              Passionate About{' '}
              <motion.span className="text-[#f503f5]">
                Educational <br />
                Transformation
              </motion.span>
            </h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto alanSas">
              We believe every student deserves access to quality <br /> digital education. Our
              mission is to bridge the digital <br /> divide and empower communities through
              innovative <br />
              technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <ScrollAnimation>
        <section className="py-12 md:py-16 bg-white alanSas text-justify">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileHover={{ scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-[#f2b705] rounded-sm p-4 md:p-6 shadow-lg flex flex-col items-start gap-2"
              >
                <img
                  src={mission}
                  alt="mission_pic"
                  className="w-20 md:w-28 h-auto object-contain"
                />
                <div>
                  <h2 className="text-2xl font-bold text-black mb-2">Our Mission</h2>
                  <p className="text-[0.95rem] md:text-base text-black leading-relaxed">
                    To bridge the digital divide in education by providing comprehensive technology
                    solutions that empower students, teachers, and educational institutions
                    worldwide. We create sustainable pathways to digital literacy that transform
                    communities and create lasting opportunities.
                  </p>
                </div>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileHover={{ scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay:  0.1 }}
                className="bg-[#049dd9] rounded-sm p-4 md:p-6 shadow-lg flex flex-col items-start gap-2"
              >
                <img src={vision} alt="vision_pic" className="w-20 md:w-28 h-auto object-contain" />
                <div>
                  <h2 className="text-2xl font-bold text-black mb-2">Our Vision</h2>
                  <p className="text-[0.95rem] md:text-base text-black leading-relaxed">
                    A world where every student, regardless of their geographic location or
                    socioeconomic background, has access to quality digital education. We envision
                    communities empowered by technology, where digital skills open doors to endless
                    opportunities and brighter futures.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Our Story */}
      <ScrollAnimation>
        <section className="py-20 bg-[#fffae6] alanSas">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              {/* Text */}
              <div className="flex flex-col justify-start items-start">
                <h2 className="text-3xl md:text-4xl font-bold text-black ubuntu mb-6">Our Story</h2>
                <div className="space-y-6 text-justify">
                  <p className="text-lg text-black leading-relaxed">
                    EduBoost was founded in 2018 when our founders witnessed firsthand the digital
                    divide affecting rural schools in Kenya. Despite having motivated teachers and
                    eager students, these schools lacked the technology infrastructure and digital
                    literacy training needed for modern education.
                  </p>
                  <p className="text-lg text-black leading-relaxed">
                    What started as a small pilot program in five schools has grown into a global
                    movement. Today, we've impacted over 50,000 students across 25 countries,
                    proving that with the right approach, technology can be a powerful equalizer in
                    education.
                  </p>
                  <p className="text-lg text-black leading-relaxed">
                    Our comprehensive approach—combining infrastructure, training, and management
                    systems— ensures sustainable impact that continues long after our initial
                    implementation.
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="relative flex justify-center">
                <img
                  src={pic}
                  alt="EduBoost team members working with students and teachers in a classroom setting"
                  className="rounded-sm shadow-xl w-full md:w-[80%] h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Values */}
      <ScrollAnimation>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 ubuntu ">
                Our Core Values
              </h2>
              <p className="text-xl text-black alanSas">
                The principles that guide everything we do at EduBoost.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: mission,
                  title: 'Impact-Focused',
                  description:
                    'Every decision is measured against its potential to create meaningful, lasting change in communities.',
                  bg: 'bg-[#f2b705]',
                },
                {
                  icon: corePic1,
                  title: 'Collaborative',
                  description:
                    'We believe in the power of partnerships and work closely with local communities and organizations.',
                  bg: 'bg-[#f0052f]',
                },
                {
                  icon: corePic2,
                  title: 'Innovation',
                  description:
                    'We continuously explore new technologies and methodologies to improve educational outcomes.',
                  bg: 'bg-[#049dd9]',
                },
                {
                  icon: corePic3,
                  title: 'Inclusive',
                  description:
                    'Our solutions are designed to be accessible and adaptable to diverse cultural and economic contexts.',
                  bg: 'bg-[#f503f5]',
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileHover={{ scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`text-center ${value.bg} rounded-sm p-6 shadow-lg flex flex-col items-center`}
                >
                  <img
                    src={value.icon}
                    alt={`${value.title} icon`}
                    className="w-20 md:w-28 h-auto object-contain mb-4"
                  />
                  <h3 className="text-xl font-semibold text-black ubuntu mb-3">{value.title}</h3>
                  <p className="text-black alanSas">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Team Section */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900  mb-4 ubuntu">
                Meet Our Leadership Team
              </h2>
              <p className="text-xl text-black alanSas">
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
                  bg: 'bg-[#f0052f]',
                },
                {
                  name: 'Michael Rodriguez',
                  role: 'CTO & Co-Founder',
                  bio: 'Technology leader with experience at major EdTech companies, specializing in scalable educational platforms.',
                  image:
                    'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400',
                  bg: 'bg-[#f2b705]',
                },
                {
                  name: 'Dr. Aisha Patel',
                  role: 'Head of Programs',
                  bio: 'Educational researcher and former school principal with expertise in curriculum development and teacher training.',
                  image:
                    'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
                  bg: 'bg-[#049dd9]',
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileHover={{ scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`${member.bg} rounded-sm p-6 shadow-lg text-center`}
                >
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role} at EduBoost`}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    width="96"
                    height="96"
                  />
                  <h3 className="text-xl font-semibold text-black mb-2 ubuntu">{member.name}</h3>
                  <div className="text-black font-medium mb-3 alanSas">{member.role}</div>
                  <p className="text-black text-sm alanSas">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Recognition & Awards */}
      {/* <ScrollAnimation>
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
      </ScrollAnimation> */}

      {/* CTA Section */}
      <ScrollAnimation>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black ubuntu ">
              Join Our Mission
            </h2>
            <p className="text-base mb-8 alanSas">
              Whether as a partner, supporter, or team member, there are many <br /> ways to be part
              of our educational transformation movement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileTap={{ scale: 0.98 }}
                aria-label="Explore careers "
                className="bg-[#f2b705] flex justify-center gap-3 px-6 py-3 alanSas rounded-lg text-black font-semibold hover:bg-[#9e7701] hover:text-white"
              >
                Explore Careers
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.98 }}
                aria-label="Partner with us"
                className="bg-[#049dd9] justify-center flex gap-3 alanSas px-6 py-3 alanSas rounded-lg text-black font-semibold hover:bg-[#016288] hover:text-white"
              >
                Partner with Us
              </motion.button>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </>
  );
};

export default AboutUs;
