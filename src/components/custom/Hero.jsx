import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { Plane, Sparkles, MapPin, Calendar, ShieldCheck } from 'lucide-react'

function Hero() {
  return (
    <div className='relative flex flex-col items-center px-4 md:px-8 lg:px-20 gap-8 md:gap-12 pt-12 md:pt-20 pb-8 md:pb-16 bg-white dark:bg-black transition-colors duration-500'>
      {/* UAE-inspired background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-emerald-100/10 dark:from-emerald-100/20 to-amber-100/10 dark:to-amber-100/20 rounded-full blur-3xl opacity-50 dark:opacity-100"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tr from-red-100/10 dark:from-red-100/15 to-yellow-100/10 dark:to-yellow-100/15 rounded-full blur-3xl opacity-50 dark:opacity-100"></div>
      </div>

      {/* UAE Flag Color Accent */}
      <div className="flex gap-2 mb-2">
        <div className="w-8 h-2 bg-red-500 rounded-full"></div>
        <div className="w-8 h-2 bg-green-600 rounded-full"></div>
        <div className="w-8 h-2 bg-neutral-200 dark:bg-white rounded-full border dark:border-none"></div>
        <div className="w-8 h-2 bg-neutral-800 dark:bg-black rounded-full"></div>
      </div>

      {/* Main Heading with UAE-inspired gradient */}
      <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl text-center leading-tight transition-colors duration-300">
        <span className="block text-neutral-900 dark:text-white">Discover Your Next</span>
        <span className="bg-gradient-to-r from-emerald-600 via-yellow-500 to-red-600 bg-clip-text text-transparent">
          Arabian Adventure
        </span>
        <span className="block text-neutral-900 dark:text-white mt-2">with AI Precision</span>
      </h1>

      {/* Subtitle with UAE cultural reference */}
      <p className="text-lg md:text-xl text-neutral-600 dark:text-gray-100 text-center max-w-3xl leading-relaxed transition-colors duration-300">
        From the dunes of Liwa to the shores of Fujairah, your personal AI travel curator
        crafts <span className="text-amber-600 font-semibold italic">مخصص</span> (custom) experiences
        tailored to your <span className="text-emerald-600 font-semibold">interests</span> and
        <span className="text-amber-600 font-semibold"> budget</span>.
      </p>

      {/* UAE-specific highlights */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-4">
        <div className="flex items-center gap-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-4 py-2 rounded-full shadow-sm dark:shadow-lg transition-all">
          <MapPin className="w-4 h-4 text-emerald-500" />
          <span className="text-sm md:text-base font-medium text-neutral-700 dark:text-neutral-200">UAE-Wide Coverage</span>
        </div>
        <div className="flex items-center gap-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-4 py-2 rounded-full shadow-sm dark:shadow-lg transition-all">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span className="text-sm md:text-base font-medium text-neutral-700 dark:text-neutral-200">AI-Curated Plans</span>
        </div>
        <div className="flex items-center gap-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-4 py-2 rounded-full shadow-sm dark:shadow-lg transition-all">
          <ShieldCheck className="w-4 h-4 text-red-500" />
          <span className="text-sm md:text-base font-medium text-neutral-700 dark:text-neutral-200">Premium Experiences</span>
        </div>
      </div>

      {/* Call to Action */}
      <Link to={'/create-trip'} className="mt-4">
        <Button className="group relative overflow-hidden bg-gradient-to-r from-emerald-600 to-amber-500 hover:from-emerald-700 hover:to-amber-600 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
          Begin Your Journey - It's Free
          <span className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
        </Button>
      </Link>

      {/* Arabic Welcome Text */}
      <div className="mt-4 text-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
          مرحبًا بك في الإمارات العربية المتحدة
        </p>
        <p className="text-gray-400 dark:text-gray-500 text-xs md:text-sm">
          Welcome to the United Arab Emirates
        </p>
      </div>

      {/* Hero Image with UAE-inspired border */}
      <div className="relative mt-8 md:mt-12 max-w-5xl w-full">
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-amber-400 to-red-500 rounded-2xl blur opacity-20 dark:opacity-30 group-hover:opacity-50 transition duration-1000"></div>
        <img
          src='/landing2.png'
          alt="UAE Adventure - Desert and Cityscape"
          className="relative rounded-xl shadow-2xl w-full h-auto border-4 border-white dark:border-neutral-900"
        />
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-amber-500 text-white px-6 py-2 rounded-full shadow-lg">
          <span className="font-semibold">Experience the UAE Like Never Before</span>
        </div>
      </div>
    </div>
  )
}

export default Hero