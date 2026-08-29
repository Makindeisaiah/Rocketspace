import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Sparkles, 
  Send, 
  Cloud, 
  Briefcase, 
  Menu, 
  ChevronRight,
  Clock
} from 'lucide-react';

export default function Hero() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F3F4F5] flex flex-col antialiased text-neutral-900">
      {/* 1. Announcement Bar */}
      <AnimatePresence>
        {showAnnouncement && (
          <motion.div 
            id="announcement-bar"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full bg-[#1F6363] text-white text-xs sm:text-sm font-medium py-2.5 px-4 relative flex items-center justify-center z-50 shadow-sm"
          >
            <div className="flex items-center gap-2 text-center">
              <span>🎉 Save 35% on launch. Join the waitlist!</span>
            </div>
            <button
              id="close-announcement-btn"
              onClick={() => setShowAnnouncement(false)}
              aria-label="Close announcement"
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-1 text-white/80 hover:text-white rounded-md hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Navbar */}
      <nav id="navbar" className="w-full bg-white border-b border-neutral-100/80 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 flex items-center justify-center">
              <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Left faceted triangle */}
                <path d="M16 4L4 26H16L16 4Z" fill="#0D7355" />
                {/* Right faceted triangle with slight diagonal notch */}
                <path d="M16 4L28 26H18L16 4Z" fill="#10B981" />
                {/* Base facet highlight */}
                <path d="M16 12L24 26H12L16 12Z" fill="#34D399" opacity="0.4" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-neutral-900">
              Rocketspace
            </span>
          </div>

          {/* Center Nav Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            <a 
              href="#home" 
              className="text-sm font-medium text-neutral-800 hover:text-neutral-950 transition-colors"
            >
              Home
            </a>
            <a 
              href="#benefits" 
              className="text-sm font-medium text-neutral-700 hover:text-neutral-950 transition-colors"
            >
              Benefits
            </a>
            <a 
              href="#features" 
              className="text-sm font-medium text-neutral-700 hover:text-neutral-950 transition-colors"
            >
              Features
            </a>
            <a 
              href="#about" 
              className="text-sm font-medium text-neutral-700 hover:text-neutral-950 transition-colors"
            >
              About
            </a>
          </div>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center">
            <motion.button 
              id="nav-benefits-btn"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#1F6363] hover:bg-[#184F4F] text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-colors shadow-sm hover:shadow cursor-pointer"
            >
              Benefits
            </motion.button>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-700 hover:text-neutral-900 rounded-lg hover:bg-neutral-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-neutral-100 px-6 py-5 space-y-4 shadow-lg">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="text-base font-medium text-neutral-900 py-1">Home</a>
              <a href="#benefits" className="text-base font-medium text-neutral-700 py-1">Benefits</a>
              <a href="#features" className="text-base font-medium text-neutral-700 py-1">Features</a>
              <a href="#about" className="text-base font-medium text-neutral-700 py-1">About</a>
            </div>
            <div className="pt-2">
              <button className="w-full bg-[#1F6363] hover:bg-[#184F4F] text-white py-3 rounded-xl text-sm font-medium transition-all">
                Benefits
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* 3. Hero Section */}
      <main className="flex-1 flex items-center py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left">
              {/* Badge */}
              <motion.div 
                id="hero-badge"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#d6eeeb] text-[#1F6363] text-xs sm:text-sm font-semibold mb-6 shadow-xs border border-teal-200/50"
              >
                <Sparkles className="w-3.5 h-3.5 fill-[#1F6363]" />
                <span>For businesses ready to scale faster</span>
              </motion.div>

              {/* Headline */}
              <motion.h1 
                id="hero-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="text-4xl sm:text-5xl lg:text-[58px] xl:text-[62px] font-extrabold text-neutral-900 tracking-tight leading-[1.12] mb-6"
              >
                Reliable Marketing Tool for Conversion
              </motion.h1>

              {/* Subtext */}
              <motion.p 
                id="hero-subtext"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="text-base sm:text-lg text-neutral-600 max-w-lg leading-relaxed mb-8"
              >
                Automated marketing solutions to capture leads and drive growth.
              </motion.p>

              {/* CTA Button */}
              <motion.button 
                id="hero-cta-btn"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#1F6363] hover:bg-[#184F4F] text-white px-8 py-3.5 rounded-xl font-semibold text-base shadow-sm hover:shadow-md transition-colors cursor-pointer mb-10 inline-flex items-center justify-center"
              >
                Join the waitlist
              </motion.button>

              {/* Social Proof / Avatars Row */}
              <motion.div 
                id="waitlist-social-proof"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                className="flex items-center gap-3.5 pt-2"
              >
                <div className="flex -space-x-2.5 overflow-hidden p-0.5">
                  {/* Avatar 1 */}
                  <div className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white bg-amber-200 overflow-hidden flex items-center justify-center text-amber-900 text-xs font-bold shadow-xs">
                    <img 
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" 
                      alt="User avatar" 
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <span>JD</span>
                  </div>
                  {/* Avatar 2 */}
                  <div className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white bg-teal-200 overflow-hidden flex items-center justify-center text-teal-900 text-xs font-bold shadow-xs">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" 
                      alt="User avatar" 
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <span>AK</span>
                  </div>
                  {/* Avatar 3 */}
                  <div className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white bg-indigo-200 overflow-hidden flex items-center justify-center text-indigo-900 text-xs font-bold shadow-xs">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" 
                      alt="User avatar" 
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <span>MR</span>
                  </div>
                  {/* Avatar 4 */}
                  <div className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white bg-rose-200 overflow-hidden flex items-center justify-center text-rose-900 text-xs font-bold shadow-xs">
                    <img 
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" 
                      alt="User avatar" 
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <span>TS</span>
                  </div>
                </div>

                <span className="text-xs sm:text-sm text-neutral-700 font-medium tracking-tight">
                  Join <span className="font-semibold text-neutral-900">7,500+ team</span> on the waitlist
                </span>
              </motion.div>
            </div>

            {/* Right Column: Interactive Graphic Card */}
            <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end">
              <motion.div 
                id="hero-illustration-frame"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="w-full max-w-lg bg-[#E7ECF0] rounded-[36px] sm:rounded-[44px] p-6 sm:p-10 relative overflow-hidden flex flex-col items-center shadow-xs"
              >
                {/* Layered Back Card Accent */}
                <div className="w-[90%] h-14 bg-[#DCE4E9] rounded-t-3xl absolute top-5 -z-0 opacity-70" />

                {/* Main Inner White Card */}
                <div className="w-full bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-neutral-100/90 relative z-10 flex flex-col">
                  
                  {/* Gauge Arc Donut Chart */}
                  <div className="relative w-full flex flex-col items-center pt-2 pb-1">
                    <div className="relative w-56 h-32 flex items-end justify-center">
                      <svg viewBox="0 0 200 115" className="w-full h-full overflow-visible">
                        <defs>
                          {/* Shadow for pointer/center badge */}
                          <filter id="badge-shadow" x="-20%" y="-20%" width="140%" height="140%">
                            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.08" />
                          </filter>
                        </defs>

                        {/* Semicircle Gauge Segments */}
                        {/* Blue Segment (Sale ~ 58%) */}
                        <path
                          d="M 25 95 A 75 75 0 0 1 120 22.5"
                          fill="none"
                          stroke="#0084FF"
                          strokeWidth="24"
                          strokeLinecap="round"
                        />

                        {/* Green Segment (Return ~ 24%) */}
                        <path
                          d="M 125 24 A 75 75 0 0 1 168 53"
                          fill="none"
                          stroke="#10B981"
                          strokeWidth="24"
                          strokeLinecap="round"
                        />

                        {/* Yellow Segment (Distribute ~ 18%) */}
                        <path
                          d="M 171 58 A 75 75 0 0 1 175 95"
                          fill="none"
                          stroke="#FBBF24"
                          strokeWidth="24"
                          strokeLinecap="round"
                        />
                      </svg>

                      {/* Center Floating Icon Badge */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#EDF4FE] border-2 border-white shadow-md flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-[#0084FF]/10 flex items-center justify-center">
                          <Send className="w-5 h-5 text-[#0084FF] transform rotate-12 translate-x-0.5 -translate-y-0.5" />
                        </div>
                      </div>
                    </div>

                    {/* Percentage Labels */}
                    <div className="w-full flex justify-between px-6 pt-3">
                      <span className="text-base sm:text-lg font-bold text-neutral-800 tracking-tight">60%</span>
                      <span className="text-base sm:text-lg font-bold text-neutral-800 tracking-tight">40%</span>
                    </div>

                    {/* Legend Row */}
                    <div className="flex items-center justify-center gap-5 sm:gap-6 pt-4 pb-2 text-xs sm:text-sm font-medium text-neutral-700">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#0084FF]"></span>
                        <span>Sale</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FBBF24]"></span>
                        <span>Distribute</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></span>
                        <span>Return</span>
                      </div>
                    </div>
                  </div>

                  {/* Two Stacked Mini Cards */}
                  <div className="mt-4 space-y-3.5">
                    {/* Mini Card 1: Cloud */}
                    <div className="bg-white border border-neutral-200/75 rounded-2xl p-3.5 sm:p-4 flex items-center gap-4 shadow-2xs hover:border-neutral-300 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-[#0084FF] text-white flex items-center justify-center shrink-0 shadow-xs">
                        <Cloud className="w-6 h-6 fill-white text-white" />
                      </div>
                      <div className="flex-1 space-y-2.5">
                        {/* Top Thick Gray Bar */}
                        <div className="h-3.5 w-3/4 max-w-[170px] bg-neutral-400 rounded-full" />
                        {/* Bottom Track / Accent Bar */}
                        <div className="h-2 w-1/2 max-w-[120px] bg-[#10B981] rounded-full" />
                      </div>
                    </div>

                    {/* Mini Card 2: Briefcase */}
                    <div className="bg-white border border-neutral-200/75 rounded-2xl p-3.5 sm:p-4 flex items-center gap-4 shadow-2xs hover:border-neutral-300 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-[#10B981] text-white flex items-center justify-center shrink-0 shadow-xs relative">
                        <Briefcase className="w-6 h-6" />
                        <Clock className="w-3 h-3 absolute bottom-2.5 right-2.5 text-white stroke-[3]" />
                      </div>
                      <div className="flex-1 space-y-2.5">
                        {/* Top Thick Gray Bar */}
                        <div className="h-3.5 w-3/4 max-w-[170px] bg-neutral-400 rounded-full" />
                        {/* Bottom Track / Accent Bar */}
                        <div className="h-2 w-1/2 max-w-[120px] bg-[#10B981] rounded-full" />
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
