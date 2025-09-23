import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Globe, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { ScrollAnimation } from '../hooks/useScrollAnimation';

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
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Measuring Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                Ghana Impact
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
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
                },
                {
                  icon: Award,
                  number: '5,000+',
                  label: 'Teachers Trained',
                  description: 'In digital pedagogy and ICT skills',
                },
                {
                  icon: Globe,
                  number: '300+',
                  label: 'Schools Digitally Enabled',
                  description: 'From basic to modern ICT infrastructure',
                },
                {
                  icon: TrendingUp,
                  number: '78%',
                  label: 'Improvement Rate',
                  description: 'In student digital literacy scores nationwide',
                },
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
                >
                  <div className="bg-primary-100 dark:bg-primary-900 p-4 rounded-xl w-fit mx-auto mb-4">
                    <metric.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {metric.number}
                  </div>
                  <div className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                    {metric.label}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{metric.description}</p>
                </motion.div>
              ))}
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
                Stories of Transformation
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Real stories from the Ghanaian communities we've empowered through digital
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
                },
              ].map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden"
                >
                  <img
                    src={story.image}
                    alt={`${story.title} - students and teachers in ${story.location}`}
                    className="w-full h-64 object-cover"
                    width="600"
                    height="256"
                  />
                  <div className="p-8">
                    <div className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2">
                      {story.location}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {story.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {story.story}
                    </p>
                    <div className="space-y-2">
                      <div className="font-semibold text-gray-900 dark:text-white mb-2">
                        Key Impact:
                      </div>
                      {story.impact.map((item, impactIndex) => (
                        <div
                          key={impactIndex}
                          className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                        >
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

      {/* Geographic Impact */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                National Reach
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                EduBoost programs are active across Ghana’s regions, adapting to local needs while
                maintaining national standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  region: 'Northern Ghana',
                  countries: '5 Regions',
                  schools: '80+ Schools',
                  students: '6,000+ Students',
                },
                {
                  region: 'Middle Belt',
                  countries: '6 Regions',
                  schools: '120+ Schools',
                  students: '9,000+ Students',
                },
                {
                  region: 'Coastal Areas',
                  countries: '4 Regions',
                  schools: '70+ Schools',
                  students: '5,000+ Students',
                },
                {
                  region: 'Greater Accra & Eastern',
                  countries: '2 Regions',
                  schools: '30+ Schools',
                  students: '3,000+ Students',
                },
              ].map((region, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    {region.region}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Regions:</span>
                      <span className="text-gray-900 dark:text-white font-medium">
                        {region.countries}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Schools:</span>
                      <span className="text-gray-900 dark:text-white font-medium">
                        {region.schools}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Students:</span>
                      <span className="text-gray-900 dark:text-white font-medium">
                        {region.students}
                      </span>
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
        <section className="py-20 bg-gradient-to-r from-blue-800 to-indigo-900  text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Be Part of Our Growing Impact</h2>
            <p className="text-xl mb-8 opacity-90">
              Join our mission to transform education and create opportunities for learners across
              Ghana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" icon={ArrowRight} iconPosition="right" aria-label="Partner with us">
                Partner with Us
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-zinc-900 dark:hover:text-white"
                aria-label="View impact report"
              >
                Download Impact Report
              </Button>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </>
  );
};

export default OurImpact;
