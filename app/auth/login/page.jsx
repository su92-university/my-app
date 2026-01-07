'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login:', formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex">
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">


          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Welcome back
            </h1>
            <p className="text-gray-400">
              Enter your credentials to access your account
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <button className="flex items-center justify-center gap-3 px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl hover:bg-slate-700 hover:border-slate-600 transition-all duration-300">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="text-gray-300 font-medium">Google</span>
            </button>
            <button className="flex items-center justify-center gap-3 px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl hover:bg-slate-700 hover:border-slate-600 transition-all duration-300">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span className="text-gray-300 font-medium">GitHub</span>
            </button>
          </div>

          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-slate-900 text-gray-500">or continue with email</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3.5 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                  placeholder="name@company.com"
                  required
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-3.5 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.remember}
                  onChange={(e) => setFormData({ ...formData, remember: e.target.checked })}
                  className="w-4 h-4 bg-slate-800 border-slate-600 rounded text-blue-500 focus:ring-blue-500 focus:ring-offset-0"
                />
                <span className="text-sm text-gray-400">Remember me</span>
              </label>
              <Link href="#" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02]"
            >
              Sign In
            </button>
          </form>

          <p className="mt-8 text-center text-gray-400">
            Don't have an account?{' '}
            <Link href="/auth/register" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
              Create account
            </Link>
          </p>
        </div>
      </div>

      <div className="hidden lg:flex flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-800 to-emerald-900"></div>
        
        {/* Logo - Fixed positioning */}
          <Link href="/">
        <div className="absolute top-8 left-8 z-20 flex items-center gap-3">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <span className="text-white font-semibold text-lg leading-tight">
            B & S<br />Platform
          </span>
        </div>
          </Link>

        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 left-16 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>

        <div className="relative z-10 flex flex-col items-center justify-center p-12 text-center w-full">
          <div className="max-w-md">
            <div className="mb-8">
              <svg className="w-20 h-20 text-white/90 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Power Your Workflow
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Join thousands of professionals who trust our platform to streamline their work and boost productivity every day.
            </p>
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-white">10K+</p>
                <p className="text-white/60 text-sm">Active Users</p>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white">99.9%</p>
                <p className="text-white/60 text-sm">Uptime</p>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white">24/7</p>
                <p className="text-white/60 text-sm">Support</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-12 left-0 right-0 flex items-center justify-center gap-8 text-white/60 text-sm">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Secure Login
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              256-bit Encryption
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
