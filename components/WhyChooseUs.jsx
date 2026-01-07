import React from 'react'

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Lightning Fast Performance',
    description: 'Our platform is optimized for speed, ensuring your applications run at peak performance with 99.99% uptime.',
    color: 'from-yellow-400 to-orange-500',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/20',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Enterprise-Grade Security',
    description: 'Bank-level encryption, SOC 2 compliance, and advanced threat protection keep your data safe and secure.',
    color: 'from-green-400 to-emerald-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Built for Teams',
    description: 'Collaborate effortlessly with real-time updates, role-based permissions, and unlimited team members.',
    color: 'from-purple-400 to-pink-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Powerful Analytics',
    description: 'Get actionable insights with advanced dashboards, custom reports, and AI-powered recommendations.',
    color: 'from-rose-400 to-red-500',
    bgColor: 'bg-rose-500/10',
    borderColor: 'border-rose-500/20',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: '24/7 Premium Support',
    description: 'Get help when you need it with our dedicated support team, live chat, and comprehensive documentation.',
    color: 'from-indigo-400 to-violet-500',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/20',
  },
]

const stats = [
  { value: '10K+', label: 'Active Companies' },
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '50M+', label: 'API Requests/Day' },
  { value: '150+', label: 'Countries Served' },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 py-24 px-6 overflow-hidden relative">

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Why{' '}
            <span className="bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              SaaS Leaders
            </span>{' '}
            Trust Us
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Join thousands of forward-thinking companies who have transformed their business with our platform. Here's why they made the switch.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl ${feature.bgColor} border ${feature.borderColor} backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-${feature.color.split('-')[1]}-500/10 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]`}
            >
              <div className={`inline-flex p-3 rounded-xl bg-linear-to-br ${feature.color} text-white mb-5 shadow-lg`}>
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Ready to experience the difference?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border border-slate-600 text-gray-300 font-semibold rounded-full hover:border-white hover:text-white transition-all duration-300 hover:scale-105">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
