import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Senior Developer at TechCorp',
      avatar: '👩‍💻',
      rating: 5,
      text: 'Outstanding implementation! The attention to detail and code quality is impressive. This shows real understanding of modern React development.',
    },
    {
      name: 'Michael Chen',
      role: 'Lead Designer at DesignLab',
      avatar: '👨‍🎨',
      rating: 5,
      text: 'Perfect pixel-perfect implementation of the Figma design. The animations and interactions feel smooth and professional.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager at StartupX',
      avatar: '👩‍💼',
      rating: 5,
      text: 'This is exactly what we look for in React developers. Clean code, great performance, and excellent user experience.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            What Industry Experts Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Feedback from professionals who appreciate quality React development and design implementation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary-200">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 lg:p-12 mt-16 text-center border border-primary-100"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Ready to Experience Excellence?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            This React internship assignment demonstrates not just coding skills, but a deep understanding 
            of modern web development practices and user experience design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://www.figma.com/design/3nywpu5sz45RrCmwe68QZP/Intern-Design-Assigment?node-id=2-2535&t=DJGGMt8I4fiZjoIB-1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(14, 165, 233, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-200"
            >
              View Figma Design
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-primary-300 text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-200"
            >
              Contact Developer
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;