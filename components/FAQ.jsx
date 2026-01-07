'use client'
import React, { useState } from 'react'

const faqs = [
  {
    question: "What is B & S Platform and how does it work?",
    answer: "B & S Platform is a comprehensive solution designed to streamline your workflow and boost productivity. It integrates seamlessly with your existing tools and provides powerful features for team collaboration, project management, and data analytics."
  },
  {
    question: "How do I get started with the platform?",
    answer: "Getting started is easy! Simply sign up for a free account, complete the onboarding process, and you'll have access to all our core features. Our intuitive dashboard will guide you through setting up your first project."
  },
  {
    question: "What pricing plans are available?",
    answer: "We offer flexible pricing plans to suit businesses of all sizes. Our Free tier is perfect for individuals, the Pro plan offers advanced features for growing teams, and our Enterprise plan provides custom solutions for large organizations. All plans come with a 14-day free trial."
  },
  {
    question: "Is my data secure on the platform?",
    answer: "Absolutely! Security is our top priority. We use industry-standard AES-256 encryption, regular security audits, and comply with GDPR, SOC 2, and HIPAA regulations. Your data is stored in secure, redundant data centers with 99.99% uptime."
  },
  {
    question: "Can I integrate with other tools and services?",
    answer: "Yes! We offer native integrations with 100+ popular tools including Slack, GitHub, Jira, Notion, Google Workspace, and Microsoft 365. We also provide a robust API for custom integrations."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide 24/7 customer support through live chat, email, and phone. Pro and Enterprise users get access to dedicated account managers and priority support. We also have an extensive knowledge base and community forum."
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-0 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about our platform. Can't find the answer you're looking for? Feel free to contact our support team.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 ${
                openIndex === index
                  ? 'bg-slate-800/80 border-blue-500/50 shadow-lg shadow-blue-500/10'
                  : 'bg-slate-800/40 border-slate-700 hover:border-slate-600'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className={`font-medium text-lg transition-colors duration-300 ${
                  openIndex === index ? 'text-white' : 'text-gray-300'
                }`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-blue-500 rotate-180'
                    : 'bg-slate-700'
                }`}>
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent mb-4"></div>
                  <p className="text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
