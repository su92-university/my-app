import React from 'react'
import Image from 'next/image'


export default function Herosection() {
  return (
    <div className="bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 h-150">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">

        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Powerful Subscription<br />
            <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Billing Platform
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-8">
            Easily manage your subscriptions, payments, and customers with our all-in-one platform
          </p>
          <button className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition-all hover:scale-105 shadow-lg shadow-blue-500/30">
            Get Started
          </button>
        </div>

        <div className="flex-1">
          <div className="relative">
            <div className="absolute -inset-4 bg-linear-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-20"></div>
            <Image 
              src="/dashboardpic.png" 
              alt="Hero Image" 
              width={700} 
              height={500} 
              className="relative rounded-xl shadow-2xl border border-slate-700"
            />
          </div>
        </div>

      </div>
    </div>
  )
}
