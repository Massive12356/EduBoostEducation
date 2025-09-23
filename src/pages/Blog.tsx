import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '../components/Button';
import { ScrollAnimation } from '../hooks/useScrollAnimation';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Digital Education in Ghana & Africa',
      excerpt:
        'How innovative technologies are transforming access to quality education in rural Ghanaian and African communities.',
      author: 'Dr. Ama Ofori',
      date: 'January 15, 2025',
      category: 'Digital Education',
      image:
        'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Building Sustainable Teacher Training Programs in West Africa',
      excerpt:
        'Strategies that help Ghana and neighboring countries create teacher development programs that last beyond initial funding.',
      author: 'Kwesi Mensah',
      date: 'January 10, 2025',
      category: 'Teacher Training',
      image:
        'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '7 min read',
    },
    {
      id: 3,
      title: 'Measuring Impact: Data-Driven Approaches to EdTech in Africa',
      excerpt:
        'How schools and NGOs in Africa are using data to demonstrate the impact of digital learning interventions.',
      author: 'Dr. Aisha Boateng',
      date: 'January 5, 2025',
      category: 'Research & Analytics',
      image:
        'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'Bridging the Digital Divide: Lessons from Rural Ghana',
      excerpt:
        'Insights from implementing digital literacy programs in remote Ghanaian schools and communities.',
      author: 'Dr. Ama Ofori',
      date: 'December 28, 2024',
      category: 'Case Study',
      image:
        'https://images.pexels.com/photos/8190804/pexels-photo-8190804.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '8 min read',
    },
    {
      id: 5,
      title: 'How School Management Systems Are Transforming Ghanaian Schools',
      excerpt:
        'Integrated admin platforms improving decision-making, transparency, and efficiency in Ghanaian education institutions.',
      author: 'Kwesi Mensah',
      date: 'December 20, 2024',
      category: 'Technology',
      image:
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '4 min read',
    },
    {
      id: 6,
      title: 'Empowering African Students with 21st Century Skills',
      excerpt:
        'Curriculum strategies preparing Ghanaian and African youth for the digital economy while preserving local culture.',
      author: 'Dr. Aisha Boateng',
      date: 'December 15, 2024',
      category: 'Student Development',
      image:
        'https://images.pexels.com/photos/5427656/pexels-photo-5427656.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '6 min read',
    },
  ];

  const categories = [
    'All',
    'Digital Education',
    'Teacher Training',
    'Technology',
    'Case Study',
    'Research & Analytics',
    'Student Development',
  ];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Blog & Insights - Educational Technology Thought Leadership | EduBoost</title>
        <meta
          name="description"
          content="Stay informed with the latest insights on educational technology, digital learning trends, and best practices from EduBoost's expert team."
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
              Insights &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                Thought Leadership
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stay informed with the latest insights on educational technology, digital learning
              trends, and best practices from our team in Ghana and across Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <ScrollAnimation>
        <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                  aria-label={`Filter by ${category}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Featured Post */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Article
              </h2>
            </div>

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-64 lg:h-full object-cover"
                    width="600"
                    height="400"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                      {blogPosts[0].category}
                    </span>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {blogPosts[0].date}
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {blogPosts[0].title}
                  </h3>

                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="w-5 h-5 text-gray-400 mr-2" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {blogPosts[0].author}
                      </span>
                    </div>
                    <Button
                      variant="primary"
                      icon={ArrowRight}
                      iconPosition="right"
                      aria-label={`Read ${blogPosts[0].title}`}
                    >
                      Read Article
                    </Button>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </section>
      </ScrollAnimation>

      {/* Blog Grid */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Latest Articles
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                {selectedCategory === 'All'
                  ? 'Explore all our latest insights and thought leadership'
                  : `Articles in ${selectedCategory}`}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                    width="400"
                    height="192"
                  />

                  <div className="p-6">
                    <div className="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs">
                        {post.category}
                      </span>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  No articles found in this category.
                </p>
              </div>
            )}
          </div>
        </section>
      </ScrollAnimation>

      {/* Newsletter Signup */}
      <ScrollAnimation>
        <section className="py-20 bg-gradient-to-r from-blue-800 to-indigo-900  text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Subscribe to our newsletter and never miss important updates on educational technology
              trends and best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
                aria-label="Email address for newsletter subscription"
              />
              <Button  size="lg" aria-label="Subscribe to newsletter">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </>
  );
};

export default Blog;
