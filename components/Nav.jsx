'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 px-6 py-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <span className="text-white font-semibold text-lg leading-tight">B & S<br />Platform</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Docs</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/auth/login" className="px-4 py-1.5 text-gray-300 border border-gray-500 rounded-full hover:text-white hover:border-white transition-colors">
            Log In
          </Link>

          <Link href="/auth/register" className="px-4 py-1.5 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
            Get Started
          </Link>
        </div>

        <button 
          className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      <div className={`md:hidden absolute left-0 right-0 top-full bg-slate-900 border-t border-slate-700 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col px-6 py-4 gap-4">
          <a href="#" className="text-gray-300 hover:text-white transition-colors py-2">Features</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors py-2">Pricing</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors py-2">Docs</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors py-2">About Us</a>
          <div className="flex flex-col gap-3 pt-4 border-t border-slate-700">
            <Link href="/auth/login" className="px-4 py-2 text-gray-300 border border-gray-500 rounded-full hover:text-white hover:border-white transition-colors">
              Log In
            </Link>
            <Link href="/auth/register" className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </div>

    </nav>
  )
}
