import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Clock, Zap } from 'lucide-react';

const Statistics: React.FC = () => {
  const stats = [
    {
      icon: Award,
      value: '99%',
      label: 'Code Quality Score',
      description: 'Maintained through rigorous testing and code reviews',
    },
    {
      icon: Target,
      value: '100%',
      label: 'Design Accuracy',
      description: 'Pixel-perfect implementation of Figma designs',
    },
    {
      icon: Clock,
      value: '2.3s',
      label: 'Load Time',
      description: 'Optimized performance for lightning-fast user experience',
    },
    {
      icon: Zap,
      value: '98%',
      label: 'Performance Score',
      description: 'Google PageSpeed Insights optimization rating',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/90 to-secondary-600/90"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Impressive Performance Metrics
          </h2>
          <p className="text-lg text-primary-100 max-w-3xl mx-auto">
            Every aspect of this project is optimized for excellence, delivering results that exceed expectations.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group text-center"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors duration-300"
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  className="text-4xl lg:text-5xl font-bold text-white mb-2"
                >
                  {stat.value}
                </motion.div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {stat.label}
                </h3>
                
                <p className="text-primary-100 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 255, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-200"
          >
            View Technical Implementation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;