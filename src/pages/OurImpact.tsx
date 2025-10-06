import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Globe, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { ScrollAnimation } from '../hooks/useScrollAnimation';
import pic3 from '../images/heroImage1.jpeg';

const OurImpact: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Impact - Transforming Education in Ghana | EduBoost</title>
        <meta
          name="description"
          content="Discover the measurable impact EduBoost has made across Ghana – from students empowered to teachers trained and schools transformed."
        />
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative py-20 lg:py-12 h-screen flex items-end"
        style={{
          backgroundImage: `url(${pic3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Measuring Our <span className="text-[#f503f5]">Ghana Impact</span>
            </h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto alanSas">
              Real results from Ghanaian schools and communities. See how EduBoost is transforming
              lives, creating opportunities, and building a more digitally literate nation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Users,
                  number: '25,000+',
                  label: 'Students Impacted',
                  description: 'Across all 16 regions of Ghana',
                  bg: 'bg-[#f2b705]',
                  text: 'text-black',
                },
                {
                  icon: Award,
                  number: '5,000+',
                  label: 'Teachers Trained',
                  description: 'In digital pedagogy and ICT skills',
                  bg: 'bg-[#f0052f]',
                  text: 'text-white',
                },
                {
                  icon: Globe,
                  number: '300+',
                  label: 'Schools Digitally Enabled',
                  description: 'From basic to modern ICT infrastructure',
                  bg: 'bg-[#049dd9]',
                  text: 'text-black',
                },
                {
                  icon: TrendingUp,
                  number: '78%',
                  label: 'Improvement Rate',
                  description: 'In student digital literacy scores nationwide',
                  bg: 'bg-[#f503f5]',
                  text: 'text-black',
                },
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 0.98 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`text-center rounded-sm p-8 shadow-lg ${metric.bg} ${metric.text} alanSas`}
                >
                  <div className="p-4 rounded-xl w-fit mx-auto mb-4">
                    <metric.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="text-4xl font-bold  mb-2">{metric.number}</div>
                  <div className="text-lg font-semibold  mb-2">{metric.label}</div>
                  <p className=" text-sm">{metric.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Success Stories */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 ubuntu">
                Stories of Transformation
              </h2>
              <p className=" text-[1rem] md:text-xl text-black alanSas">
                Real stories from the Ghanaian communities we've <br /> empowered through digital
                education.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {[
                {
                  title: 'Rural School Becomes ICT Champion',
                  location: 'Bongo District, Upper East Region',
                  story:
                    'Bongo Primary School transformed from having no computers to becoming a regional ICT learning hub. Student enrollment increased by 40% and BECE ICT scores improved by 55%.',
                  image:
                    'https://images.pexels.com/photos/8190804/pexels-photo-8190804.jpeg?auto=compress&cs=tinysrgb&w=800',
                  impact: [
                    '40% increase in enrollment',
                    '55% improvement in ICT test scores',
                    'Now mentoring 3 neighboring schools',
                  ],
                  bg: 'bg-[#f2b705]',
                  text: 'text-black',
                },
                {
                  title: 'Teachers Embrace Digital Teaching',
                  location: 'Accra Metropolitan, Greater Accra',
                  story:
                    '80 teachers from 10 public schools completed our capacity building program. They now integrate technology daily and report higher student engagement and improved learning outcomes.',
                  image:
                    'https://images.pexels.com/photos/8197497/pexels-photo-8197497.jpeg?auto=compress&cs=tinysrgb&w=800',
                  impact: [
                    'All teachers now use technology daily',
                    '85% report improved student engagement',
                    '25% increase in parent satisfaction',
                  ],
                  bg: 'bg-[#f0052f]',
                  text: 'text-white',
                },
              ].map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`rounded-sm shadow-lg overflow-hidden ${story.bg} ${story.text} alanSas `}
                >
                  <img
                    src={story.image}
                    alt={`${story.title} - students and teachers in ${story.location}`}
                    className="w-full h-64 object-cover"
                    width="600"
                    height="256"
                  />
                  <div className="p-8">
                    <div className="text-sm  font-medium mb-2">{story.location}</div>
                    <h3 className="text-2xl font-bold  mb-4">{story.title}</h3>
                    <p className=" mb-6 leading-relaxed">{story.story}</p>
                    <div className="space-y-2">
                      <div className="font-semibold  mb-2">Key Impact:</div>
                      {story.impact.map((item, impactIndex) => (
                        <div key={impactIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Recognition & Awards
              </h2>
              <p className="text-[1rem] md:text-xl text-black alanSas">
                Our work has been recognized by leading <br /> organizations across Ghana and
                beyond.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  award: 'GES ICT Innovation Award',
                  year: '2024',
                  description: 'Recognized for outstanding contribution to ICT in public schools',
                  bg: 'bg-[#f2b705]',
                  text: 'text-black',
                },
                {
                  award: 'MTN Ghana Foundation Digital Literacy Prize',
                  year: '2023',
                  description: 'Honored for innovative teacher training approach',
                  bg: 'bg-[#f0052f]',
                  text: 'text-white',
                },
                {
                  award: 'UN SDG Partnership Award – Ghana Chapter',
                  year: '2023',
                  description: 'Acknowledged for advancing SDG 4 - Quality Education',
                  bg: 'bg-[#049dd9]',
                  text: 'text-black',
                },
              ].map((recognition, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 0.98 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`text-center  rounded-sm p-6 shadow-lg ${recognition.bg} ${recognition.text} alanSas`}
                >
                  <div className="bg-yellow-100 dark:bg-yellow-900/20 p-3 rounded-xl w-fit mx-auto mb-4">
                    <Award className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <h3 className="text-lg font-semibold  mb-2">{recognition.award}</h3>
                  <div className="text-primary-600  font-medium mb-3">{recognition.year}</div>
                  <p className=" text-sm">{recognition.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Geographic Impact */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">National Reach</h2>
              <p className="text-xl text-black alanSas">
                EduBoost programs are active across Ghana’s regions, adapting <br /> to local needs
                while maintaining national standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  region: 'Northern Ghana',
                  countries: '5 Regions',
                  schools: '80+ Schools',
                  students: '6,000+ Students',
                  bg: 'bg-[#f2b705]',
                  text: 'text-black',
                },
                {
                  region: 'Middle Belt',
                  countries: '6 Regions',
                  schools: '120+ Schools',
                  students: '9,000+ Students',
                  bg: 'bg-[#f0052f]',
                  text: 'text-white',
                },
                {
                  region: 'Coastal Areas',
                  countries: '4 Regions',
                  schools: '70+ Schools',
                  students: '5,000+ Students',
                  bg: 'bg-[#049dd9]',
                  text: 'text-black',
                },
                {
                  region: 'Greater Accra & Eastern',
                  countries: '2 Regions',
                  schools: '30+ Schools',
                  students: '3,000+ Students',
                  bg: 'bg-[#f503f5]',
                  text: 'text-black',
                },
              ].map((region, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 0.98 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`rounded-sm p-6 shadow-md ${region.bg} ${region.text} alanSas`}
                >
                  <h3 className="text-lg font-semibold mb-4">{region.region}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Regions:</span>
                      <span className="font-medium">{region.countries}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Schools:</span>
                      <span className=" font-medium">{region.schools}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="">Students:</span>
                      <span className=" font-medium">{region.students}</span>
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
        <section className="py-20 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 ubuntu ">
              Be Part of Our Growing Impact
            </h2>
            <p className="text-xl mb-8 text-black alanSas">
              Join our mission to transform education and create <br /> opportunities for learners
              across Ghana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileTap={{ scale: 0.98 }}
                aria-label="Partner with us"
                className="bg-[#f503f5] flex gap-3 px-6 py-4 alanSas rounded-lg text-black font-semibold hover:bg-[#9e7701] hover:text-white"
              >
                Partner with Us
                <ArrowRight />
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.98 }}
                className="bg-[#f2b705] flex gap-3 px-6 py-4 alanSas rounded-lg text-black font-semibold hover:bg-[#f503f5] hover:text-black"
                aria-label="View impact report"
              >
                Download Impact Report
              </motion.button>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </>
  );
};

export default OurImpact;
