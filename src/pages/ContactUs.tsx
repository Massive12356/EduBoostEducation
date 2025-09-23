import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '../components/Button';
import { ScrollAnimation } from '../hooks/useScrollAnimation';

const ContactUs: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Get in Touch with EduBoost | EduBoost</title>
        <meta 
          name="description" 
          content="Contact EduBoost to discuss your educational technology needs. Get in touch with our team for partnerships, consultations, and support." 
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
              Get in Touch{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                with Us
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to transform education in your community? Have questions about our solutions? 
              We're here to help and would love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
                  Let's Start a Conversation
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Whether you're interested in our solutions, looking to partner with us, 
                  or simply want to learn more about our work, we'd love to connect with you.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      title: "Email Us",
                      details: "info@eduboost.com",
                      description: "General inquiries and support"
                    },
                    {
                      icon: Phone,
                      title: "Call Us",
                      details: "+1 (555) 123-4567",
                      description: "Monday to Friday, 9AM - 6PM EST"
                    },
                    {
                      icon: MapPin,
                      title: "Visit Us",
                      details: "123 Education Street\nInnovation District\nTech City, TC 12345",
                      description: "Our headquarters and main office"
                    },
                    {
                      icon: Clock,
                      title: "Office Hours",
                      details: "Monday - Friday: 9:00 AM - 6:00 PM EST\nSaturday: 10:00 AM - 2:00 PM EST",
                      description: "We're here to help during business hours"
                    }
                  ].map((contact, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-xl">
                        <contact.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {contact.title}
                        </h3>
                        <div className="text-gray-800 dark:text-gray-200 font-medium mb-1 whitespace-pre-line">
                          {contact.details}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {contact.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Send Us a Message
                </h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                      placeholder="Your organization name"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="solution">Solution Information</option>
                      <option value="demo">Request a Demo</option>
                      <option value="support">Technical Support</option>
                      <option value="media">Media Inquiry</option>
                      <option value="visit">Schedule a Visit</option>
                      <option value="facility">Get A Facility Quote</option>
                      <option value="teachers">Enroll Teachers</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors resize-y"
                      placeholder="Tell us about your needs, questions, or how we can help..."
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    icon={Send}
                    iconPosition="right"
                    className="w-full"
                    aria-label="Send message"
                  >
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Quick Contact Options */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Need Immediate Assistance?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Choose the fastest way to connect with our team based on your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: MessageCircle,
                  title: "Live Chat",
                  description: "Get instant answers to your questions",
                  action: "Start Chat",
                  available: "Available 24/7"
                },
                {
                  icon: Phone,
                  title: "Schedule a Call",
                  description: "Speak directly with our experts",
                  action: "Book Call",
                  available: "Response within 4 hours"
                },
                {
                  icon: Mail,
                  title: "Email Support",
                  description: "Detailed responses to complex inquiries",
                  action: "Send Email",
                  available: "Response within 24 hours"
                }
              ].map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg text-center"
                >
                  <div className="bg-primary-100 dark:bg-primary-900 p-4 rounded-xl w-fit mx-auto mb-4">
                    <option.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {option.description}
                  </p>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                    {option.available}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full"
                    aria-label={option.action}
                  >
                    {option.action}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* FAQ Section */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Quick answers to common questions about our services and partnership opportunities.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How long does it take to implement your solutions?",
                  answer: "Implementation timelines vary depending on the scope and scale of the project. Typically, a complete ICT facility setup takes 4-8 weeks, while teacher training programs can be completed in 2-6 months. We provide detailed timelines during our initial consultation."
                },
                {
                  question: "Do you provide ongoing support after implementation?",
                  answer: "Yes, we provide comprehensive ongoing support including technical assistance, maintenance, additional training, and program updates. Our support packages are customized based on your specific needs and can include 24/7 technical support."
                },
                {
                  question: "Can your solutions be customized for our specific context?",
                  answer: "Absolutely. All our solutions are designed to be adaptable to local contexts, languages, cultural needs, and educational systems. We work closely with each partner to ensure our programs align with local requirements and objectives."
                },
                {
                  question: "What are the funding options for your programs?",
                  answer: "We offer various funding models including direct payment, phased implementation, grant assistance, and partnership arrangements. We also help organizations identify and apply for relevant grants and funding opportunities."
                },
                {
                  question: "How do you measure the success of your programs?",
                  answer: "We use comprehensive metrics including student performance improvements, teacher confidence assessments, technology usage rates, and long-term community impact indicators. Regular monitoring and evaluation reports are provided to all partners."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </>
  );
};

export default ContactUs;