import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Shield, Smartphone, Globe } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Modern React',
      description: 'Built with the latest React 18 features, TypeScript, and modern development practices.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
    },
    {
      icon: Palette,
      title: 'Pixel Perfect',
      description: 'Precisely implemented from Figma designs with attention to every detail and spacing.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized for speed with lazy loading, code splitting, and efficient rendering.',
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'from-yellow-50 to-yellow-100',
    },
    {
      icon: Shield,
      title: 'Type Safety',
      description: 'Full TypeScript implementation ensuring robust code and excellent developer experience.',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Seamlessly adapts to all screen sizes from mobile phones to desktop monitors.',
      color: 'from-red-500 to-red-600',
      bgColor: 'from-red-50 to-red-100',
    },
    {
      icon: Globe,
      title: 'Production Ready',
      description: 'Deployment-ready with optimized builds, proper SEO, and accessibility standards.',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'from-indigo-50 to-indigo-100',
    },
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Feature-Rich Implementation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Every aspect of this assignment demonstrates modern React development 
            with industry best practices and attention to detail.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}></div>
              
              <div className="relative z-10">
                <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-800">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                  {feature.description}
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
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://www.figma.com/design/3nywpu5sz45RrCmwe68QZP/Intern-Design-Assigment?node-id=2-2535&t=DJGGMt8I4fiZjoIB-1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(14, 165, 233, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-200"
          >
            <Palette className="w-5 h-5" />
            <span>View Original Figma Design</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;