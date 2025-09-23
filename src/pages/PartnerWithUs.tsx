import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Handshake, Building, GraduationCap, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '../components/Button';
import { ScrollAnimation } from '../hooks/useScrollAnimation';

const PartnerWithUs: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Partner with Us - Empower Digital Education in Ghana & Africa | EduBoost</title>
        <meta
          name="description"
          content="Partner with EduBoost to expand digital education access across Ghana and Africa. Opportunities for governments, NGOs, educational institutions, and corporate sponsors to create lasting impact."
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
              Partner with Us to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                Transform Education in Africa
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join our growing network of partners bridging the digital divide in Ghana and across
              Africa, bringing 21st-century skills and opportunities to millions of learners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Partnership Opportunities
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Multiple ways to collaborate and create meaningful impact in Ghana & Africa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Building,
                  title: 'Government Partners',
                  description:
                    'Collaborate with Ghana’s Ministry of Education and other African governments to roll out national digital literacy programs.',
                  benefits: [
                    'Policy alignment',
                    'Nationwide reach',
                    'Sustainable funding',
                    'Measurable outcomes',
                  ],
                },
                {
                  icon: Globe,
                  title: 'NGO Collaborations',
                  description:
                    'Work with African and international NGOs to reach underserved rural and peri-urban communities.',
                  benefits: [
                    'Expanded reach',
                    'Local expertise',
                    'Community trust',
                    'Sustainable impact',
                  ],
                },
                {
                  icon: GraduationCap,
                  title: 'Educational Institutions',
                  description:
                    'Partner with universities and schools across Ghana to enhance ICT training and digital skills.',
                  benefits: [
                    'Resource sharing',
                    'Research partnerships',
                    'Student mentorships',
                    'Best practices',
                  ],
                },
                {
                  icon: Handshake,
                  title: 'Corporate Sponsors',
                  description:
                    'CSR partnerships with Ghanaian and African businesses to drive social impact and brand visibility.',
                  benefits: [
                    'Brand visibility',
                    'Employee engagement',
                    'Tax incentives',
                    'Social impact',
                  ],
                },
              ].map((opportunity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
                >
                  <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-xl w-fit mx-auto mb-4">
                    <opportunity.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center">
                    {opportunity.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
                    {opportunity.description}
                  </p>
                  <div className="space-y-2">
                    {opportunity.benefits.map((benefit, benefitIndex) => (
                      <div
                        key={benefitIndex}
                        className="flex items-center text-sm text-gray-500 dark:text-gray-400"
                      >
                        <CheckCircle className="w-4 h-4 text-secondary-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Why Partner with Us */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Why Choose EduBoost as Your Partner?
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  With a proven record in Ghana and across Africa, innovative solutions, and a
                  commitment to sustainable impact, we’re the ideal partner for organizations
                  serious about transforming education.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      title: 'Proven Track Record',
                      description:
                        'Over 60,000 students impacted in Ghana & 10 African countries with measurable results.',
                    },
                    {
                      title: 'Comprehensive Approach',
                      description:
                        'End-to-end solutions covering devices, connectivity, teacher training and management.',
                    },
                    {
                      title: 'Local Adaptation',
                      description:
                        'Programs customized to local languages, contexts, and cultural needs.',
                    },
                    {
                      title: 'Sustainable Impact',
                      description:
                        'Long-term partnerships creating lasting change beyond initial implementation.',
                    },
                  ].map((reason, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-secondary-100 dark:bg-secondary-900 p-1 rounded-full mr-4 mt-2">
                        <div className="w-2 h-2 bg-secondary-600 rounded-full"></div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {reason.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Partnership in Ghana"
                  className="rounded-2xl shadow-xl w-full h-auto"
                  width="600"
                  height="400"
                />
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Partnership Success Stories
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Real results from our collaborative partnerships in Ghana & Africa.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {[
                {
                  partner: 'Ministry of Education, Ghana',
                  project: 'Digital Classrooms Initiative',
                  results:
                    'Equipped 150 schools with ICT labs and trained 1,200 teachers within 12 months.',
                  quote:
                    'EduBoost’s hands-on approach helped us accelerate digital learning for thousands of Ghanaian students.',
                  author: 'Mrs. Ama Owusu, ICT Director',
                },
                {
                  partner: 'African Education Foundation',
                  project: 'Rural School Transformation',
                  results:
                    'Modernized 40 rural schools across 5 West African countries, impacting 20,000 students.',
                  quote:
                    'This partnership has changed the learning landscape in remote communities.',
                  author: 'Kwame Mensah, Program Lead',
                },
              ].map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
                >
                  <div className="text-primary-600 dark:text-primary-400 font-medium text-sm mb-2">
                    {story.partner}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {story.project}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{story.results}</p>
                  <blockquote className="text-lg text-gray-700 dark:text-gray-200 italic mb-4">
                    "{story.quote}"
                  </blockquote>
                  <div className="text-sm text-gray-500 dark:text-gray-400">— {story.author}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Partnership Process */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                How We Partner
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Our structured approach ensures successful partnerships delivering lasting impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Initial Consultation',
                  description:
                    'We discuss your goals, challenges, and vision for transforming education in your community.',
                },
                {
                  step: '02',
                  title: 'Needs Assessment',
                  description:
                    'Comprehensive evaluation of local infrastructure, skills gaps and opportunities.',
                },
                {
                  step: '03',
                  title: 'Custom Proposal',
                  description:
                    'Tailored partnership plan with timelines, budgets, and expected outcomes.',
                },
                {
                  step: '04',
                  title: 'Implementation',
                  description:
                    'Collaborative execution with regular monitoring and support on the ground.',
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-primary-600 text-white text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
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
              Ready to Create Impact Together?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let’s discuss how we can partner to transform education in Ghana, Africa and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                aria-label="Schedule partnership meeting"
              >
                Schedule Partnership Meeting
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-zinc-900 dark:hover:text-white"
                aria-label="Download partnership brochure"
              >
                Download Partnership Guide
              </Button>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </>
  );
};

export default PartnerWithUs;
