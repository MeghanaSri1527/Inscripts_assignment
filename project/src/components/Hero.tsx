import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Users, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  const stats = [
    { label: 'Active Users', value: '10K+', icon: Users },
    { label: 'Success Rate', value: '98%', icon: TrendingUp },
    { label: 'Rating', value: '4.9', icon: Star },
  ];

  return (
    <section id="home" className="relative pt-20 lg:pt-28 pb-16 lg:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30"></div>
      <div className="absolute top-40 left-10 w-72 h-72 bg-gradient-to-r from-primary-400/20 to-secondary-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-gradient-to-r from-accent-400/20 to-primary-400/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 fill-current" />
                <span>React Intern Assignment</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Build Amazing
                <span className="block bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
                  React Applications
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Master modern React development with pixel-perfect designs, seamless user experiences, 
                and production-ready code that showcases your skills.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(14, 165, 233, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>View Figma Design</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-primary-300 hover:text-primary-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="text-center space-y-2"
                >
                  <stat.icon className="w-8 h-8 text-primary-600 mx-auto" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-white rounded-3xl shadow-2xl p-6 lg:p-8 border border-gray-200">
              {/* Browser Bar */}
              <div className="flex items-center space-x-2 mb-6 pb-4 border-b border-gray-200">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 bg-gray-100 rounded-lg px-4 py-2 text-sm text-gray-600">
                  https://inscripts-assignment.com
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-primary-600" />
                    </div>
                    <div className="w-8 h-8 bg-secondary-100 rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 text-secondary-600" />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-primary-900">2.5K</div>
                    <div className="text-sm text-primary-700">Total Views</div>
                  </div>
                  <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-secondary-900">1.2K</div>
                    <div className="text-sm text-secondary-700">Conversions</div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">React Skills</span>
                    <span className="text-gray-900 font-medium">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '95%' }}
                      transition={{ duration: 1.5, delay: 1 }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-accent-400 to-accent-500 rounded-xl shadow-lg flex items-center justify-center"
            >
              <Star className="w-6 h-6 text-white fill-current" />
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-secondary-400 to-secondary-500 rounded-2xl shadow-lg flex items-center justify-center"
            >
              <TrendingUp className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;