import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Users, TrendingUp, Star, Calendar, ArrowUp, ArrowDown, MoreHorizontal } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'reports', label: 'Reports' },
    { id: 'settings', label: 'Settings' },
  ];

  const stats = [
    {
      title: 'Total Revenue',
      value: '$45,231',
      change: '+12.5%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Active Users',
      value: '12,543',
      change: '+8.2%',
      trend: 'up',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Conversion Rate',
      value: '3.24%',
      change: '-2.1%',
      trend: 'down',
      icon: BarChart3,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      title: 'Average Rating',
      value: '4.8',
      change: '+0.3%',
      trend: 'up',
      icon: Star,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  const recentActivity = [
    { user: 'John Doe', action: 'Created new project', time: '2 min ago', avatar: '👨‍💻' },
    { user: 'Sarah Wilson', action: 'Updated dashboard settings', time: '5 min ago', avatar: '👩‍💼' },
    { user: 'Mike Johnson', action: 'Completed task review', time: '10 min ago', avatar: '👨‍🔧' },
    { user: 'Emily Davis', action: 'Added team member', time: '15 min ago', avatar: '👩‍🎨' },
  ];

  return (
    <section id="dashboard" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Interactive Dashboard
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the power of modern data visualization with our responsive dashboard components.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden"
        >
          {/* Dashboard Header */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Dashboard</h3>
                <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
              </div>
              <div className="flex items-center space-x-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Export Data
                </motion.button>
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex space-x-1 mt-6 bg-gray-200 p-1 rounded-xl">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-white text-primary-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6">
            {/* Stats Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div className={`flex items-center space-x-1 text-sm font-medium ${
                      stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.trend === 'up' ? (
                        <ArrowUp className="w-4 h-4" />
                      ) : (
                        <ArrowDown className="w-4 h-4" />
                      )}
                      <span>{stat.change}</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.title}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Charts and Activity */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Chart Area */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-100"
              >
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-semibold text-gray-900">Performance Overview</h4>
                  <select className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 3 months</option>
                  </select>
                </div>
                
                {/* Simulated Chart */}
                <div className="h-64 bg-gradient-to-t from-primary-50 to-transparent rounded-xl flex items-end justify-center space-x-2 p-4">
                  {[40, 65, 45, 80, 55, 70, 85].map((height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="bg-gradient-to-t from-primary-500 to-primary-400 rounded-t-lg flex-1 max-w-12"
                      style={{ minHeight: '8px' }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Recent Activity */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-100"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h4>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full flex items-center justify-center text-lg">
                        {activity.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                        <p className="text-sm text-gray-600 truncate">{activity.action}</p>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Dashboard;